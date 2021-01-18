# AWS Lambda utilities

![Build status](https://travis-ci.org/vdubois/aws-lambda-utils.svg?branch=master)

## Goal

The goal of this package is to provide some of the always needed utility code to AWS Lambdas

## Lambda results utility functions

The goal is to provide shortcuts to AWS Lambda return objects.

The following functions are available :

* **ok** (status code 200)
* **created** (status code 201)
* **accepted** (status code 202)
* **noContent** (status code 204)
* **badRequest** (status code 400)
* **unauthenticated** (status code 401)
* **unauthorized** (status code 403)
* **notFound** (status code 404)
* **serverError** (status code 500)

### Example

```js
const lambdaResult = ok({ test: 'value' });
// Generates this object, recognizable by AWS API Gateway
// {
//   statusCode: 200,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Credentials": true
//   },
//   body: "{\"test\":\"value\"}"
// }
```

### Disable CORS Headers

```js
const lambdaResult = ok({ test: 'value' }, false);
```

