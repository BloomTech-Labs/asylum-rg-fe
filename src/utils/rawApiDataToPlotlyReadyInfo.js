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
  let rowItem;
  let rowsForTable;
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

  const yearByOfficeByGrant = {}; //Object that contacts year by Office by grant rate information
  for (let office of data[0]['yearResults']) {
    if (!yearByOfficeByGrant[office['year']])
      yearByOfficeByGrant[office['year']] = {}; //if year not existing set to empty object
    for (let yearData of office['yearData']) {
      yearByOfficeByGrant[office['year']][yearData['office']] = {
        //assign rates to year:{office:{}}
        granted: yearData['granted'],
        adminClosed: yearData['adminClosed'],
        denied: yearData['denied'],
      };
    }
  }

  if (!office || office === 'all') {
    switch (view) {
      case 'time-series':
        const rowsForAllDisplay = [];
        data[0].yearResults.sort((a, b) => a.year - b.year);
        for (let i = 0; i < data[0].yearResults.length; i++) {
          rowItem = {
            Year: data[0].yearResults[i].year,
            'Total Cases': data[0].yearResults[i].totalCases,
            '% Granted': Number(data[0].yearResults[i].granted).toFixed(2),
            '% Admin Close / Dismissal': Number(
              data[0].yearResults[i].adminClosed
            ).toFixed(2),
            '% Denied': Number(data[0].yearResults[i].denied).toFixed(2),
          };
          rowsForAllDisplay.push(rowItem);
        }

        const officeData = {}; //object that holds each % as a key of array value
        for (let officeName of officeCodes) {
          officeData[officeName] = {
            xYears: [],
            totals: [],
            yTotalPercentGranteds: [],
            totalPercentAdminCloseds: [],
            totalPercentDenieds: [],
          };
        }

        for (let yearResults of data[0]['yearResults']) {
          for (let yearData of yearResults['yearData']) {
            officeData[yearData['office']]['xYears'].push(yearResults['year']);
            officeData[yearData['office']]['totals'].push(
              yearData['totalCases']
            );
            officeData[yearData['office']]['yTotalPercentGranteds'].push(
              yearData['granted']
            );
            officeData[yearData['office']]['totalPercentAdminCloseds'].push(
              yearData['adminClosed']
            );
            officeData[yearData['office']]['totalPercentDenieds'].push(
              yearData['denied']
            );
          }
        }

        const finalData = {
          xYears: [],
          totals: [],
          yTotalPercentGranteds: [],
          totalPercentAdminCloseds: [],
          totalPercentDenieds: [],
        };
        for (let officeName of data[0]['yearResults']) {
          finalData['xYears'].push(officeName['year']);
          finalData['totals'].push(officeName['totalCases']);
          finalData['yTotalPercentGranteds'].push(officeName['granted']);
          finalData['totalPercentAdminCloseds'].push(officeName['adminClosed']);
          finalData['totalPercentDenieds'].push(officeName['denied']);
        }

        return { ...finalData, rowsForAllDisplay, officeData };

      case 'office-heat-map':
        data[0].yearResults.sort((a, b) => a.year - b.year);
        rowsForTable = [];
        for (let i = 0; i < data[0].yearResults.length; i++) {
          for (let officeKey of officeCodes) {
            if (
              data[0].yearResults[i].yearData.filter(
                yearItem => yearItem.office === officeKey
              ).length > 0
            ) {
              rowItem = {
                'Year [Office]':
                  String(data[0].yearResults[i].year) +
                  ' [' +
                  String(officeKey) +
                  ']',
                'Total Cases': data[0].yearResults[i].yearData.filter(
                  yearItem => yearItem.office === officeKey
                )[0].totalCases,
                '% Granted': Number(
                  data[0].yearResults[i].yearData.filter(
                    yearItem => yearItem.office === officeKey
                  )[0].granted
                ).toFixed(2),
                '% Admin Close / Dismissal': Number(
                  data[0].yearResults[i].yearData.filter(
                    yearItem => yearItem.office === officeKey
                  )[0].adminClosed
                ).toFixed(2),
                '% Denied': Number(
                  data[0].yearResults[i].yearData.filter(
                    yearItem => yearItem.office === officeKey
                  )[0].denied
                ).toFixed(2),
              };
              rowsForTable.push(rowItem);
            }
          }
        }
        const totalsByOffice = {};
        const zPercentGrantedsByOffice = {};
        const percentAdminClosedsByOffice = {};
        const percentDeniedsByOffice = {};
        for (let officeKey of officeCodes) {
          totalsByOffice[officeKey] = [
            ...data[0].yearResults
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
            ...data[0].yearResults
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
            ...data[0].yearResults
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
            ...data[0].yearResults
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
          rowsForTable,
          yYearsStart: data[0].yearResults.reduce(
            (acc, yearItem) => (yearItem.year < acc ? yearItem.year : acc),
            data[0].yearResults[0].year
          ), // min year
          yYearsEnd: data[0].yearResults.reduce(
            (acc, yearItem) => (yearItem.year > acc ? yearItem.year : acc),
            data[0].yearResults[0].year
          ), // max year
          yYears: [
            ...data[0].yearResults
              .sort((a, b) => a.year - b.year)
              .map(yearItem => yearItem.year),
          ],
          totalsByOffice,
          zPercentGrantedsByOffice,
          percentAdminClosedsByOffice,
          percentDeniedsByOffice,
        };
      case 'citizenship':
        rowsForTable = [];
        for (let item of data[0].citizenshipResults) {
          rowItem = {
            Citizenship: item.citizenship,
            'Total Cases': item.totalCases,
            '% Granted': Number(item.granted).toFixed(2),
            '% Admin Close / Dismissal': Number(item.adminClosed).toFixed(2),
            '% Denied': Number(item.denied).toFixed(2),
          };
          rowsForTable.push(rowItem);
        }
        return {
          rowsForTable,
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
        rowsForTable = [];
        data[0].yearResults.sort((a, b) => a.year - b.year);
        for (let i = 0; i < data[0].yearResults.length; i++) {
          if (
            data[0].yearResults[i].yearData.filter(
              dataItem => dataItem.office === office
            )[0]
          ) {
            const officeObj = data[0].yearResults[i].yearData.filter(
              dataItem => dataItem.office === office
            )[0];
            rowItem = {
              Year: data[0].yearResults[i].year,
              'Total Cases': officeObj.totalCases,
              '% Granted': Number(officeObj.granted).toFixed(2),
              '% Admin Close / Dismissal': Number(
                officeObj.adminClosed
              ).toFixed(2),
              '% Denied': Number(officeObj.denied).toFixed(2),
            };
            rowsForTable.push(rowItem);
          }
        }
        return {
          rowsForTable,
          xYearsStart: data[0].yearResults.reduce(
            (acc, yearItem) => (yearItem.year > acc ? yearItem.year : acc),
            data[0].yearResults[0].year
          ),
          xYearsEnd: data[0].yearResults.reduce(
            (acc, yearItem) => (yearItem.year < acc ? yearItem.year : acc),
            data[0].yearResults[0].year
          ),
          xYears: [
            ...data[0].yearResults
              .sort((a, b) => a.year - b.year)
              .map(yearItem => yearItem.year),
          ],
          yPercentGranteds: [
            ...data[0].yearResults
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
            ...data[0].yearResults
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
            ...data[0].yearResults
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
        rowsForTable = [];
        for (let item of data[0].citizenshipResults) {
          rowItem = {
            Citizenship: item.citizenship,
            'Total Cases': item.totalCases,
            '% Granted': Number(item.granted).toFixed(2),
            '% Admin Close / Dismissal': Number(item.adminClosed).toFixed(2),
            '% Denied': Number(item.denied).toFixed(2),
          };
          rowsForTable.push(rowItem);
        }
        return {
          rowsForTable,
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

export { rawApiDataToPlotlyReadyInfo };
