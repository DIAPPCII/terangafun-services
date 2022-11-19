import { type } from 'os';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BusinessType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'timestamp' })
  createAt: Date;

  @Column({ type: 'timestamp' })
  lastUpdate: Date;
}
