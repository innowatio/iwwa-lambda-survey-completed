[![Build Status](https://travis-ci.org/innowatio/iwwa-lambda-survey-completed.svg?branch=master)](https://travis-ci.org/innowatio/iwwa-lambda-survey-completed)
[![Dependency Status](https://david-dm.org/innowatio/iwwa-lambda-survey-completed.svg)](https://david-dm.org/innowatio/iwwa-lambda-survey-completed)
[![devDependency Status](https://david-dm.org/innowatio/iwwa-lambda-survey-completed/dev-status.svg)](https://david-dm.org/innowatio/iwwa-lambda-survey-completed#info=devDependencies)
[![codecov.io](https://codecov.io/github/innowatio/iwwa-lambda-survey-completed/coverage.svg?branch=master)](https://codecov.io/github/innowatio/iwwa-lambda-survey-completed?branch=master)

# iwwa-lambda-survey-completed

Lambda function for set a survey completed

## Deployment

This project deployment is automated with Lambdafile. For more info [`lambda-boilerplate`](https://github.com/lk-architecture/lambda-boilerplate/).

### Configuration

The following environment variables are needed to configure the function:

- `MONGODB_URL` __string__ *required*: URL of the MongoDB endpoint
- `DEBUG` __boolean__ *optional*: set to `true` if you want more log from [`kinesis-router`](https://github.com/lk-architecture/kinesis-router/).

### Run test

In order to run tests locally a MongoDB instance and a `MONGODB_URL` environment
param are needed.
Then, just run `npm run test` command.
