import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  deletedAt: Date;
}
