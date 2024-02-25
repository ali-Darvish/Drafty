import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public createdAt: Date = new Date();

  @Column()
  public modifiedAt?: Date = null;

  @Column()
  public deletedAt?: Date = null;

  @Column()
  public isDeleted: boolean = false;

  protected abstract validate(): void;
}
