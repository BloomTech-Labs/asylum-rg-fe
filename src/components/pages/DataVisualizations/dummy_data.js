const dummy_data = [
  {
    year: '2018',
    yearData: [
      {
        citizenship: null,
        office: 'ZLA',
        granted: 0.0,
        adminClosed: 75.0,
        denied: 25.0,
        totalCases: 4,
      },
    ],
    granted: 0.0,
    adminClosed: 75.0,
    denied: 25.0,
    totalCases: 4,
  },
  {
    year: '2017',
    yearData: [
      {
        citizenship: null,
        office: 'ZLA',
        granted: 100.0,
        adminClosed: 0.0,
        denied: 0.0,
        totalCases: 2,
      },
    ],
    granted: 100.0,
    adminClosed: 0.0,
    denied: 0.0,
    totalCases: 2,
  },
  {
    year: 'citizenshipData',
    CHINA: {
      totalCases: 4,
      granted: 50.0,
      adminClosed: 25.0,
      denied: 25.0,
    },
    NEPAL: {
      totalCases: 4,
      granted: 25.0,
      adminClosed: 50.0,
      denied: 25.0,
    },
  },
];

module.exports = { dummy_data };
