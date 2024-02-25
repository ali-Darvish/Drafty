import { BaseEntity } from 'src/infrastructure/abstraction/contract/domainModel/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Note extends BaseEntity {
  constructor(title: string, content: string) {
    super();
    this.content = content;
    this.title = title;
  }
  @Column()
  public content: string;

  @Column()
  public title: string;

  protected validate(): void {}
}
