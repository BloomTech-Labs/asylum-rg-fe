# HRF Asylum Report Generator

You can find the deployed project at [https://asylum-rg-fe.vercel.app/](https://asylum-rg-fe.vercel.app/).

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
<br />
<br />

#### Front end deployed to `Vercel`

#### [Back end](https://github.com/BloomTech-Labs/hrf-asylum-rg-be-b) built using:

- Express.js
- Node.js
- PostgreSQL
- Knex.js
<br />
<br />


# Installation Instructions

## Front-end

- Fork and clone the repo to install it as your own remote.
- run: `npm install` to download all dependencies.
- Create a new `.env` file (Refer to environment variables given to you by codebase owner.)
- run: `npm start` to start your local development server.
<br />
<br />

## Back-end

- Fork and clone the repo to install it as your own remote.
- run: `npm install` to download all dependencies.
- Create a new `.env` file (Refer to environment variables given to you by codebase owner.)
  - Be sure to update the API URI to connect to your database
- Add your CSV to the `data/seeds/assets` directory
- Using an API tool, hit the `GET:/cases/readCsv` endpoint
  - This pulls the data from your CSV and adds it to the database
- Using an API tool, hit the `PUT:/cases/calculateFiscalYears` endpoint
  - This batch-updates cases in the database by year to fill the `fiscal_year` field
  - Be sure to include a `years` array in the body of your request. This also allows you to update only for given years, if needed. (ex: `{years: [2015, 2016, 2017, 2018, 2019, 2020, 2021]}`)
- Using an API tool, hit the `PUT:/cases/translateOfficeCodes` endpoint
  - This batch-updates cases by office to update the `asylum_office` field with the more readable office location, rather than the non-readable office code
  - Be sure to include an `offices` array in the body of your request. This also allows you to update only for given offices, if needed. (ex: `{offices: [ "ZLA", "ZSF", "ZNY", "ZHN",
    "ZCH", "ZNK", "ZAR", "ZBO", "ZMI", "ZOL"]}`)
- run: `npm start` to start your local development server.
- To check that the data is being returned properly, you can check the `GET:/cases/fiscalSummary` and `GET:/cases/citizenshipSummary` endpoints and compare to the test data located in this repo, in the `src/data/test_data.json` file.

<br />
<br />

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them
    
<br />
<br />

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
<br />
<br />

## Documentation

See [Backend Documentation](🚫*link to your backend API SWAGGER DOCS here*) for details on the backend of our project.
