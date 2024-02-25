import { HttpException, HttpStatus } from '@nestjs/common';

export abstract class BaseException extends HttpException {
  constructor(code: string, message: string) {
    super(message, HttpStatus.BAD_REQUEST);
    this.code = code;
  }

  protected code: string;
}
