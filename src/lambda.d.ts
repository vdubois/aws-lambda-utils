export interface LambdaResult {
    statusCode: number;
    headers?: any;
    body: string;
}
export declare const ok: (body: any, cors?: boolean) => LambdaResult;
export declare const created: (body: any, cors?: boolean) => LambdaResult;
export declare const accepted: (cors?: boolean) => LambdaResult;
export declare const noContent: (cors?: boolean) => LambdaResult;
export declare const unauthenticated: (message: any, cors?: boolean) => LambdaResult;
export declare const unauthorized: (message: any, cors?: boolean) => LambdaResult;
export declare const notFound: (message: any, cors?: boolean) => LambdaResult;
export declare const badRequest: (message: any, cors?: boolean) => LambdaResult;
export declare const serverError: (message: any, cors?: boolean) => LambdaResult;
