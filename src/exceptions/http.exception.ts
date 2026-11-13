export class HttpException extends Error {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly errors?: any[];

    constructor(statusCode: number, message: string, errors?: any[]) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class BadRequestException extends HttpException {
    constructor(message: string = 'Bad Request', errors?: any[]) {
        super(400, message, errors);
    }
}

export class NotFoundException extends HttpException {
    constructor(message: string = 'Not Found', errors?: any[]) {
        super(404, message, errors);
    }
}

export class ConflictException extends HttpException {
    constructor(message: string = 'Conflict', errors?: any[]) {
        super(409, message, errors);
    }
}

export class InternalServerErrorException extends HttpException {
    constructor(message: string = 'Internal Server Error', errors?: any[]) {
        super(500, message, errors);
    }
}