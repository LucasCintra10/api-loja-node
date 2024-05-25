export interface HttpReponse<T> {
    statusCode: number;
    body: T | string;
}

export interface HttpRequest<B> {
    params?: any;
    headers?: any;
    body?: B;
}