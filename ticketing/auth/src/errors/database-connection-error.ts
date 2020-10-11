import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  readonly statusCode = 500;
  readonly reason = 'Error connection to database';

  constructor() {
    super('Error connection to databse');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
