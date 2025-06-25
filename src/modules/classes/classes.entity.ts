import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
