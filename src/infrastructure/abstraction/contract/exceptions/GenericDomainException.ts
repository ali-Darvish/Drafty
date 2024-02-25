import { DomainException } from './DomainException';

export abstract class GenericDomainException<T> extends DomainException {
  constructor(sequence: number, message: string, type: new () => T = null) {
    super(message);
    this.code += `${type.name}_${sequence}`;
  }
}
