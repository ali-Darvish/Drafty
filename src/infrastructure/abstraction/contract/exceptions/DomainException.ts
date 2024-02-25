import { BaseException } from './BaseException';

export abstract class DomainException extends BaseException {
  constructor(message: string) {
    super('DomainError_', message);
  }
}
