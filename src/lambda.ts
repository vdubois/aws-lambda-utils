import { StatusCodes } from './status-codes';
import { CORS_HEADERS } from './cors-headers';

export interface LambdaResult {
    statusCode: number;
    headers?: any;
    body: string;
}

export const ok = (body: any, cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.OK,
        body: JSON.stringify(body)
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};

export const created = (body: any, cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.CREATED,
        body: JSON.stringify(body)
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};

export const accepted = (cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.ACCEPTED,
        body: ''
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};

export const noContent = (cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.NO_CONTENT,
        body: ''
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};

export const unauthenticated = (message: any, cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.UNAUTHENTICATED,
        body: message
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};

export const unauthorized = (message: any, cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.UNAUTHORIZED,
        body: message
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};

export const notFound = (message: any, cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.NOT_FOUND,
        body: message
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};

export const badRequest = (message: any, cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.BAD_REQUEST,
        body: message
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};

export const serverError = (message: any, cors: boolean = true): LambdaResult => {
    const lambdaResult = {
        statusCode: StatusCodes.SERVER_ERROR,
        body: message
    };
    return cors ? {
        headers: CORS_HEADERS,
        ...lambdaResult
    } : lambdaResult;
};
