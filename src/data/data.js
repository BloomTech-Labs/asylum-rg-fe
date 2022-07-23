import { regions, officeRegions } from './filterConstants';

const officeList = officeRegions.map(office => office.code);
const regionList = regions.map(region => region.territory);

const asylumOffice = () =>
  officeList[Math.floor(Math.random() * officeList.length)];
const citizenship = () =>
  regionList[Math.floor(Math.random() * regionList.length)];
const caseOutcome = () =>
  ['Deny/Referral', 'Grant', 'Admin Close/Dismissal'][
    Math.floor(Math.random() * 3)
  ];
const completion = () =>
  new Date(
    Date.now() - Math.random() * 36 * 1000 * 60 * 60 * 24 * 30
  ).toISOString();
const currentDate = () => new Date(Date.now()).toISOString();

export const generateData = (numberOfEntries = 200) =>
  Array.from({ length: numberOfEntries }, (v, i) => {
    return {
      asylumOffice: asylumOffice(),
      citizenship: citizenship(),
      caseOutcome: caseOutcome(),
      completion: completion(),
      currentDate: currentDate(),
    };
  });
