export const officeRegions = [
  {
    code: 'zar',
    location: { city: 'Arlington', state: 'VA' },
    regions: [
      'Alabama',
      'Georgia',
      'Maryland',
      'North Carolina',
      'Pennsylvania (26 western counties)',
      'South Carolina',
      'Virginia',
      'West Virginia',
    ],
  },
  {
    code: 'zbo',
    location: { city: 'Boston', state: 'MA' },
    regions: ['Maine', 'Massachusetts', 'New Hampshire', 'Rhode Island'],
  },
  {
    code: 'zch',
    location: { city: 'Chicago', state: 'IL' },
    regions: [
      'Illinois',
      'Indiana',
      'Ohio',
      'Michigan',
      'Wisconsin',
      'Minnesota',
      'North Dakota',
      'South Dakota',
      'Montana',
      'Idaho',
      'Nebraska',
      'Kansas',
      'Iowa',
      'Missouri',
      'Kentucky',
    ],
  },
  {
    code: 'zhn',
    location: { city: 'Houston', state: 'TX' },
    regions: ['Colorado', 'Oklahoma', 'New Mexico', 'Texas', 'Utah', 'Wyoming'],
  },
  {
    code: 'zla',
    location: { city: 'Los Angeles', state: 'CA' },
    regions: [
      'Arizona',
      'California (9 southern counties)',
      'Guam',
      'Hawaii',
      'Nevada (4 southern counties)',
    ],
  },
  {
    code: 'zmi',
    location: { city: 'Miami', state: 'FL' },
    regions: ['Florida', 'Puerto Rico', 'US Virgin Islands'],
  },
  {
    code: 'znk',
    location: { city: 'Newark', state: 'NJ' },
    regions: [
      'Connecticut',
      'Delaware',
      'New Jersey',
      'New York (Manhattan + 50 northern counties)',
      'Pennsylvania(41 eastern counties)',
      'Vermont',
    ],
  },
  {
    code: 'zny',
    location: { city: 'Bethpage', state: 'NY' },
    regions: ['New York (12 southern counties, excluding Manhattan)'],
  },
  {
    code: 'zol',
    location: { city: 'New Orleans', state: 'LA' },
    regions: ['Louisiana', 'Arkansas', 'Mississippi', 'Tennessee'],
  },
  {
    code: 'zsf',
    location: { city: 'San Francisco', state: 'CA' },
    regions: [
      'Alaska',
      'California (49 northern counties)',
      'Nevada (13 northern counties)',
      'Oregon',
      'Washington',
    ],
  },
];

export const continentEnum = Object.freeze({
  africa: 'Africa',
  asia: 'Asia',
  europe: 'Europe',
  northAmerica: 'North America',
  oceania: 'Oceania',
  southAmerica: 'South America',
  unknown: 'Unknown',
});

export const geopoliticalEnum = Object.freeze({
  middleEastNorthAfrica: 'Middle East/North Africa',
  subSaharanAfrica: 'Sub-Saharan Africa',
  europe: 'Europe',
  centralAsia: 'Central Asia',
  caribbean: 'Caribbean',
  eastAsiaPacific: 'East Asia/Pacific',
  southAsia: 'South Asia',
  centralSouthAmerica: 'Central/South America',
  northAmerica: 'North America',
  stateless: 'Stateless', // These two last enum options are rare and somewhat similar, how should they be handled?
  unknown: 'Unknown',
});

export const regions = [
  {
    territory: 'AFGHANISTAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.southAsia,
  },
  {
    territory: 'ALBANIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'ALGERIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'ANGOLA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'ANTIGUA-BARBUDA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'ARGENTINA',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'ARMENIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.centralAsia,
  },
  {
    territory: 'AUSTRALIA',
    continent: continentEnum.oceania,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'AUSTRIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'AZERBAIJAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.centralAsia,
  },
  {
    territory: 'BAHAMAS',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'BAHRAIN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'BANGLADESH',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.southAsia,
  },
  {
    territory: 'BARBADOS',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'BELARUS',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'BELGIUM',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'BELIZE',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'BENIN',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'BHUTAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.southAsia,
  },
  {
    territory: 'BOLIVIA',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'BOSNIA-HERZEGOVINA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'BOTSWANA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'BRAZIL',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'BRUNEI',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'BULGARIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'BURKINA FASO',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'BURMA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  }, //Now Myanmar
  {
    territory: 'BURUNDI',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'CAMBODIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'CAMEROON',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'CANADA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.northAmerica,
  },
  {
    territory: 'CAPE VERDE',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'CENTRAL AFRICAN REPUBLIC',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'CHAD',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'CHILE',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: "CHINA, PEOPLE'S REPUBLIC OF",
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'COLOMBIA',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'COMOROS',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'CONGO',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'COSTA RICA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'CROATIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'CUBA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'CYPRUS',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'CZECH REPUBLIC',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  }, // Czechia is the official name since 1993
  {
    territory: 'CZECHOSLOVAKIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  }, // Deprecated since 1993 (see Czechia/Czech Republic)
  {
    territory: "CÃ”TE D'IVOIRE",
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  }, //sic -- the name is Côte d'Ivoire, alternately Ivory Coast
  {
    territory: 'DEM REP OF THE CONGO',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'DENMARK',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'DJIBOUTI',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'DOMINICA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'DOMINICAN REPUBLIC',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'ECUADOR',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'EGYPT',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  }, //Can be considered part of Asia
  {
    territory: 'EL SALVADOR',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'EQUATORIAL GUINEA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'ERITREA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'ESTONIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  // {
  //   territory: 'ESWATINI',
  //   continent: continentEnum.africa,
  //   geopolitical: geopoliticalEnum.subSaharanAfrica,
  // }, //Not yet included, formerly Swaziland
  {
    territory: 'ETHIOPIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'FIJI',
    continent: continentEnum.oceania,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  // {
  //   territory: 'FINLAND',
  //   continent: continentEnum.europe,
  //   geopolitical: geopoliticalEnum.europe,
  // }, //Not included in the data
  {
    territory: 'FRANCE',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'GABON',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'GEORGIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.centralAsia,
  },
  {
    territory: 'GERMANY',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'GHANA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'GREECE',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'GRENADA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'GUATEMALA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'GUINEA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'GUINEA-BISSAU',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'GUYANA',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'HAITI',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'HONDURAS',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'HONG KONG',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'HUNGARY',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'ICELAND',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'INDIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.southAsia,
  },
  {
    territory: 'INDONESIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'IRAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'IRAQ',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'IRELAND',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'ISRAEL',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'ITALY',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'JAMAICA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'JAPAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'JORDAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'KAZAKHSTAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.centralAsia,
  },
  {
    territory: 'KENYA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'KOREA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'KOSOVO',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'KUWAIT',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'KYRGYZSTAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.centralAsia,
  },
  {
    territory: 'LAOS',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'LATVIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'LEBANON',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'LESOTHO',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'LIBERIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'LIBYA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'LITHUANIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  // {
  //   territory: 'MACAO',
  //   continent: continentEnum.asia,
  //   geopolitical: geopoliticalEnum.eastAsiaPacific,
  // }, //Not included in current data but is similar to Hong Kong in its political standing
  {
    territory: 'MADAGASCAR',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'MALAWI',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'MALAYSIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'MALDIVES',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.southAsia,
  },
  {
    territory: 'MALI',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'MALTA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'MAURITANIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'MAURITIUS',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'MEXICO',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'MOLDOVA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'MONGOLIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'MONTENEGRO',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  }, // See Serbia
  {
    territory: 'MOROCCO',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'MOZAMBIQUE',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  // {
  //   territory: 'MYANMAR',
  //   continent: continentEnum.asia,
  //   geopolitical: geopoliticalEnum.eastAsiaPacific,
  // }, //Not yet in the data -- formerly Burma
  {
    territory: 'NAMIBIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'NEPAL',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.southAsia,
  },
  {
    territory: 'NETHERLANDS',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'NEW ZEALAND',
    continent: continentEnum.oceania,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'NICARAGUA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'NIGER',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'NIGERIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'NORTH KOREA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'NORTH MACEDONIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'NORWAY',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'OMAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'PAKISTAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.southAsia,
  },
  {
    territory: 'PALAU',
    continent: continentEnum.oceania,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'PANAMA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'PARAGUAY',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'PERU',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'PHILIPPINES',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'POLAND',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'PORTUGAL',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'QATAR',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'ROMANIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'RUSSIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  }, //By population, 2/3 in Europe. Partially Asia.
  {
    territory: 'RWANDA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SAO TOME AND PRINCIPE',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SAUDI ARABIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'SENEGAL',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SERBIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  }, // 2006+, formerly Yugoslavia/Serbia and Montenegro
  {
    territory: 'SERBIA AND MONTENEGRO',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  }, //2003-2006, formerly YugoSlavia
  {
    territory: 'SEYCHELLES',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SIERRA LEONE',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SINGAPORE',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'SLOVAKIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'SLOVENIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'SOMALIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SOUTH AFRICA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SOUTH KOREA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'SOUTH SUDAN',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SPAIN',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'SRI LANKA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.southAsia,
  },
  {
    territory: 'ST. KITTS-NEVIS',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'ST. LUCIA',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'ST. VINCENT-GRENADINES',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'STATELESS',
    continent: continentEnum.unknown,
    geopolitical: geopoliticalEnum.stateless,
  },
  {
    territory: 'SUDAN',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'SURINAME',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'SWAZILAND',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  }, //Now called Eswatini
  {
    territory: 'SWEDEN',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'SWITZERLAND',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'SYRIA',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'TAIWAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  }, //Compare with Macao and Hong Kong for geopolitical standing
  {
    territory: 'TAJIKISTAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.centralAsia,
  },
  {
    territory: 'TANZANIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'THAILAND',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'THE GAMBIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  }, //Check with new data dumps for GAMBIA, THE
  {
    territory: 'TOGO',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'TONGA',
    continent: continentEnum.oceania,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'TRINIDAD AND TOBAGO',
    continent: continentEnum.northAmerica,
    geopolitical: geopoliticalEnum.caribbean,
  },
  {
    territory: 'TUNISIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'TURKEY',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'TURKMENISTAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.centralAsia,
  },
  {
    territory: 'UGANDA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'UKRAINE',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'UNITED ARAB EMIRATES',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'UNITED KINGDOM',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  },
  {
    territory: 'UNKNOWN',
    continent: continentEnum.unknown,
    geopolitical: geopoliticalEnum.unknown,
  },
  {
    territory: 'URUGUAY',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'USSR',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  }, //Partly in Asia, see Russia
  {
    territory: 'UZBEKISTAN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.centralAsia,
  },
  {
    territory: 'VENEZUELA',
    continent: continentEnum.southAmerica,
    geopolitical: geopoliticalEnum.centralSouthAmerica,
  },
  {
    territory: 'VIETNAM',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.eastAsiaPacific,
  },
  {
    territory: 'YEMEN',
    continent: continentEnum.asia,
    geopolitical: geopoliticalEnum.middleEastNorthAfrica,
  },
  {
    territory: 'YUGOSLAVIA',
    continent: continentEnum.europe,
    geopolitical: geopoliticalEnum.europe,
  }, //Deprecated, now Serbia
  {
    territory: 'ZAMBIA',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
  {
    territory: 'ZIMBABWE',
    continent: continentEnum.africa,
    geopolitical: geopoliticalEnum.subSaharanAfrica,
  },
];
