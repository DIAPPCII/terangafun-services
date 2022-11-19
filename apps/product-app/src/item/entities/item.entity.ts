import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Item {
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

  @Column({ nullable: false })
  owner: string;

  @ManyToMany(() => Category)
  @JoinTable({ name: 'item_category' })
  categories: Category[];
}
