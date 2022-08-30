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

  //extra variable to set minYear and MaxYear
  let yearMinMax = [];
  for (let yearResults of data[0]['yearResults']) {
    yearMinMax.push(yearResults['year']);
  }
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
      officeData[yearData['office']]['totals'].push(yearData['totalCases']);
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
        const officeHeatMapDataObject = {
          //declare helper object to construct data for heatmap plotly
          x: officeCodes, //office
          y: [], //year
          z: [], //rate
        };
        for (let year in yearByOfficeByGrant) {
          //loop through
          officeHeatMapDataObject['y'].push(year); //include year into y axis
          let zAxisArray = []; //Array to hold each row for z axis
          for (let officeName of officeCodes) {
            //loop using unique office names
            zAxisArray.push(
              yearByOfficeByGrant[year][officeName]
                ? yearByOfficeByGrant[year][officeName]['granted']
                : 0
            );
          }
          officeHeatMapDataObject['z'].push(zAxisArray); //push to zaxis array
        }
        return { officeHeatMapDataObject, rowsForTable };

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
