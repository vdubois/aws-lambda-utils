"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.badRequest = exports.notFound = exports.unauthorized = exports.unauthenticated = exports.noContent = exports.accepted = exports.created = exports.ok = void 0;
const status_codes_1 = require("./status-codes");
const cors_headers_1 = require("./cors-headers");
const ok = (body, cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.OK,
        body: JSON.stringify(body)
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.ok = ok;
const created = (body, cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.CREATED,
        body: JSON.stringify(body)
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.created = created;
const accepted = (cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.ACCEPTED,
        body: ''
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.accepted = accepted;
const noContent = (cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.NO_CONTENT,
        body: ''
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.noContent = noContent;
const unauthenticated = (message, cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.UNAUTHENTICATED,
        body: message
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.unauthenticated = unauthenticated;
const unauthorized = (message, cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.UNAUTHORIZED,
        body: message
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.unauthorized = unauthorized;
const notFound = (message, cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.NOT_FOUND,
        body: message
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.notFound = notFound;
const badRequest = (message, cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.BAD_REQUEST,
        body: message
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.badRequest = badRequest;
const serverError = (message, cors = true) => {
    const lambdaResult = {
        statusCode: status_codes_1.StatusCodes.SERVER_ERROR,
        body: message
    };
    return cors ? Object.assign({ headers: cors_headers_1.CORS_HEADERS }, lambdaResult) : lambdaResult;
};
exports.serverError = serverError;
