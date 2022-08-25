import React from 'react';
import YearLimitsSlider from './YearLimitsSlider';
import { Form, Button, Input, getFieldValue } from 'antd';
import {
  setVisualizationData,
  resetVisualizationQuery,
  setHeatMapYears,
} from '../../../state/actionCreators';

import Redux from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const { view, office } = ownProps;
  if (office === 'all' || !office) {
    switch (view) {
      case 'time-series':
        return {
          years: state.vizReducer.timeSeriesAllYears,
        };
      case 'office-heat-map':
        return {
          years: state.vizReducer.officeHeatMapYears,
        };
      case 'citizenship':
        return {
          years: state.vizReducer.citizenshipMapAllYears,
        };
      default:
        return {
          years: ['', ''],
        };
    }
  } else {
    switch (view) {
      case 'time-series':
        return {
          years: state.vizReducer.offices[office].timeSeriesYears,
        };
      case 'citizenship':
        return {
          years: state.vizReducer.offices[office].citizenshipMapYears,
        };
      default:
        return {
          years: ['', ''],
        };
    }
  }
};

function YearLimitsSelect(props) {
  const { view, office, dispatch, clearQuery, updateStateWithNewData, years } =
    props;
  const yearInputsOnChange = (view, office, e) =>
    dispatch(
      setHeatMapYears(
        view,
        office,
        e.target.id.includes('year_start') ? 0 : 1,
        e.target.value
      )
    );
  const rawApiDataToPlotlyReadyInfo = (view, office, data) => {
    const officeCodes = [
      'ZLA',
      'ZSF',
      'ZNY',
      'ZHN',
      'ZCH',
      'ZNK',
      'ZAR',
      'ZBO',
      'ZMI',
      'ZOL',
    ];
    /*
        The data from our API will have this shape:
          [
            {
              "granted": <%>,
              "adminClosed": <%>,
              "denied": <%>,
              "totalCases": <%>,
              "results": [
                {
                  "year": <year>,
                  "granted": <%>, 
                  "adminClosed": <%>,
                  "denied": <%>,
                  "totalCases": <#>,
                  "yearData": [
                    {
                      "office": <office>,
                      "granted": <%>,
                      "adminClosed": <%>,
                      "denied": <%>,
                      "totalCases": <#>,
                    },
                    {
  
                      <same as above>
  
                    },
    
                    .
                    .
                    .

                  ]
                },
                {

                  <same as above>

                },
              
                .
                .
                .

              ],
              "citizenshipResults": [             // these [ citizenshipResults ] will be specific to an office IF AND ONLY IF we queried by one
                {
                  "citizenship": <country>,
                  "granted": <%>,
                  "adminClosed": <%>,
                  "denied": <%>,
                  "totalCases": <#>
                },
                {

                  <same as above>

                },

                . 
                .
                .
  
              ],
            }
          ]

      ------------------------------------------------------

      NOTE ON ALL THE SWITCH STATEMENTS:

          Technically, for queries that don't have
        to do with citizenship, we COULD set the data
        in state for ALL the non-citizenship views between 
        those years, since we get all the necessary data 
        anyway, but I think it's more intuitive and 
        convenient for the UI to be able to remember a 
        DIFFERENT user query for each individual view. 
        That way if, say, a researcher wants to see all
        the data by office just from 2017, and then they
        tab over to view all the data as a time series from
        2015-2022, and then they go back to the Office tab,
        their previous query won't be overwritten by the
        one they made in the different tab, and they'll
        be able to seamlessly resume.

            -- Mack

      ------------------------------------------------------

    */

    if (!office || office === 'all') {
      switch (view) {
        case 'time-series':
          const officeData = {};
          for (let officeKey of officeCodes) {
            officeData[officeKey] = {
              xYears: [
                ...data[0].results
                  .sort((a, b) => a.year - b.year)
                  .map(yearItem => yearItem.year),
              ],
              totals: [
                ...data[0].results
                  .sort((a, b) => a.year - b.year)
                  .reduce((acc, yearItem) => {
                    return yearItem.yearData.filter(
                      yearItem => yearItem.office === officeKey
                    )[0]
                      ? acc.concat(
                          yearItem.yearData.filter(
                            yearItem => yearItem.office === officeKey
                          )[0].totalCases
                        )
                      : acc;
                  }, []),
              ],
              yPercentGranteds: [
                ...data[0].results
                  .sort((a, b) => a.year - b.year)
                  .reduce((acc, yearItem) => {
                    return yearItem.yearData.filter(
                      yearItem => yearItem.office === officeKey
                    )[0]
                      ? acc.concat(
                          yearItem.yearData.filter(
                            yearItem => yearItem.office === officeKey
                          )[0].granted
                        )
                      : acc;
                  }, []),
              ],
              percentAdminCloseds: [
                ...data[0].results
                  .sort((a, b) => a.year - b.year)
                  .reduce((acc, yearItem) => {
                    return yearItem.yearData.filter(
                      yearItem => yearItem.office === officeKey
                    )[0]
                      ? acc.concat(
                          yearItem.yearData.filter(
                            yearItem => yearItem.office === officeKey
                          )[0].adminClosed
                        )
                      : acc;
                  }, []),
              ],
              percentDenieds: [
                ...data[0].results
                  .sort((a, b) => a.year - b.year)
                  .reduce((acc, yearItem) => {
                    return yearItem.yearData.filter(
                      yearItem => yearItem.office === officeKey
                    )[0]
                      ? acc.concat(
                          yearItem.yearData.filter(
                            yearItem => yearItem.office === officeKey
                          )[0].denied
                        )
                      : acc;
                  }, []),
              ],
            };
          }
          return {
            xYearsStart: data[0].results.reduce(
              (acc, yearItem) => (yearItem.year < acc ? yearItem.year : acc),
              data[0].results[0].year
            ), // min year
            xYearsEnd: data[0].results.reduce(
              (acc, yearItem) => (yearItem.year > acc ? yearItem.year : acc),
              data[0].results[0].year
            ), // max year
            xYears: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .map(yearItem => yearItem.year),
            ],
            yTotalPercentGranteds: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .map(yearItem => yearItem.granted),
            ],
            totalPercentAdminCloseds: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .map(yearItem => yearItem.adminClosed),
            ],
            totalPercentDenieds: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .map(yearItem => yearItem.denied),
            ],

            officeData,
          };
        case 'office-heat-map':
          const totalsByOffice = {};
          const zPercentGrantedsByOffice = {};
          const percentAdminClosedsByOffice = {};
          const percentDeniedsByOffice = {};
          for (let officeKey of officeCodes) {
            totalsByOffice[officeKey] = [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .reduce((acc, yearItem) => {
                  return yearItem.yearData.filter(
                    yearItem => yearItem.office === officeKey
                  )[0]
                    ? acc.concat(
                        yearItem.yearData.filter(
                          yearItem => yearItem.office === officeKey
                        )[0].totalCases
                      )
                    : acc;
                }, []),
            ];
            zPercentGrantedsByOffice[officeKey] = [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .reduce((acc, yearItem) => {
                  return yearItem.yearData.filter(
                    yearItem => yearItem.office === officeKey
                  )[0]
                    ? acc.concat(
                        yearItem.yearData.filter(
                          yearItem => yearItem.office === officeKey
                        )[0].granted
                      )
                    : acc;
                }, []),
            ];
            percentAdminClosedsByOffice[officeKey] = [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .reduce((acc, yearItem) => {
                  return yearItem.yearData.filter(
                    yearItem => yearItem.office === officeKey
                  )[0]
                    ? acc.concat(
                        yearItem.yearData.filter(
                          yearItem => yearItem.office === officeKey
                        )[0].adminClosed
                      )
                    : acc;
                }, []),
            ];
            percentDeniedsByOffice[officeKey] = [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .reduce((acc, yearItem) => {
                  return yearItem.yearData.filter(
                    yearItem => yearItem.office === officeKey
                  )[0]
                    ? acc.concat(
                        yearItem.yearData.filter(
                          yearItem => yearItem.office === officeKey
                        )[0].denied
                      )
                    : acc;
                }, []),
            ];
          }
          return {
            yYearsStart: data[0].results.reduce(
              (acc, yearItem) => (yearItem.year < acc ? yearItem.year : acc),
              data[0].results[0].year
            ), // min year
            yYearsEnd: data[0].results.reduce(
              (acc, yearItem) => (yearItem.year > acc ? yearItem.year : acc),
              data[0].results[0].year
            ), // max year
            yYears: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .map(yearItem => yearItem.year),
            ],
            totalsByOffice,
            zPercentGrantedsByOffice,
            percentAdminClosedsByOffice,
            percentDeniedsByOffice,
          };
        case 'citizenship':
          return {
            countries: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.citizenship
              ),
            ],
            countriesTotals: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.totalCases
              ),
            ],
            countriesPercentGranteds: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.granted
              ),
            ],
            countriesPercentAdminCloseds: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.adminClosed
              ),
            ],
            countriesPercentDenieds: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.denied
              ),
            ],
          };
        default:
          return {};
      }
    } else {
      switch (view) {
        case 'time-series':
          return {
            xYearsStart: data[0].results.reduce(
              (acc, yearItem) => (yearItem.year > acc ? yearItem.year : acc),
              data[0].results[0].year
            ),
            xYearsEnd: data[0].results.reduce(
              (acc, yearItem) => (yearItem.year < acc ? yearItem.year : acc),
              data[0].results[0].year
            ),
            xYears: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .map(yearItem => yearItem.year),
            ],
            yPercentGranteds: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .reduce((acc, yearItem) => {
                  return yearItem.yearData.filter(
                    yearItem => yearItem.office === office
                  )[0]
                    ? acc.concat(
                        yearItem.yearData.filter(
                          yearItem => yearItem.office === office
                        )[0].granted
                      )
                    : acc;
                }, []),
            ],
            percentAdminCloseds: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .reduce((acc, yearItem) => {
                  return yearItem.yearData.filter(
                    yearItem => yearItem.office === office
                  )[0]
                    ? acc.concat(
                        yearItem.yearData.filter(
                          yearItem => yearItem.office === office
                        )[0].adminClosed
                      )
                    : acc;
                }, []),
            ],
            percentDenieds: [
              ...data[0].results
                .sort((a, b) => a.year - b.year)
                .reduce((acc, yearItem) => {
                  return yearItem.yearData.filter(
                    yearItem => yearItem.office === office
                  )[0]
                    ? acc.concat(
                        yearItem.yearData.filter(
                          yearItem => yearItem.office === office
                        )[0].denied
                      )
                    : acc;
                }, []),
            ],
          };
        case 'citizenship':
          return {
            countries: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.citizenship
              ),
            ],
            countriesTotals: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.totalCases
              ),
            ],
            countriesPercentGranteds: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.granted
              ),
            ],
            countriesPercentAdminCloseds: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.adminClosed
              ),
            ],
            countriesPercentDenieds: [
              ...data[0].citizenshipResults.map(
                countryItem => countryItem.denied
              ),
            ],
          };
        default:
          return {};
      }
    }
  };
  const stateSettingFn = (view, office, data) => {
    const plotlyReadyData = rawApiDataToPlotlyReadyInfo(view, office, data);
    dispatch(setVisualizationData(view, office, plotlyReadyData));
  };
  const [form] = Form.useForm();
  return (
    <div
      className="year-limits-select-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50px',
      }}
    >
      <YearLimitsSlider />
      <Form
        form={form}
        name="yearLimitsSelect"
        initialValues={{ year_start: years[0], year_end: years[1] }}
        onFinish={() => updateStateWithNewData(view, office, stateSettingFn)}
        autoComplete="off"
        layout="inline"
        wrapperCol={{ span: 45 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'start',
        }}
      >
        <Form.Item
          label="From:"
          name="year_start"
          rules={[
            { required: true },
            {
              validator: (_, value) => {
                return value &&
                  parseInt(value) == value &&
                  value >= 2015 &&
                  value <= 2022
                  ? Promise.resolve()
                  : Promise.reject(
                      'Please enter a year between 2015 and 2022.'
                    );
              },
            },
          ]}
          onChange={e => yearInputsOnChange(view, office, e)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="To:"
          name="year_end"
          rules={[
            { required: true },
            {
              validator: (_, value) => {
                return value &&
                  parseInt(value) == value &&
                  value >= 2015 &&
                  value <= 2022 &&
                  value > form.getFieldValue('year_start')
                  ? Promise.resolve()
                  : Promise.reject(
                      "Please enter a year between 2015 and 2022, and after the 'From:' year."
                    );
              },
            },
          ]}
          onChange={e => yearInputsOnChange(view, office, e)}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" data-testid="filter">
            Update Query
          </Button>
        </Form.Item>
      </Form>
      <Button
        type="primary"
        style={{
          width: '122px', // this is to match the width of the Form.Item button
        }}
        onClick={() => clearQuery(view, office)}
      >
        Clear Query
      </Button>
    </div>
  );
}

export default connect(mapStateToProps)(YearLimitsSelect);
