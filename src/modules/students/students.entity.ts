import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  idx: number

  @Column({ type: 'varchar', length: 100 })
  name: string

  @Column({ type: 'varchar', length: 20, unique: true })
  studentNumber: string
}
