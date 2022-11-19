import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from '../../item/entities/item.entity';

@Entity()
export class Category {
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

  @ManyToMany(() => Item)
  @JoinTable({ name: 'item_category' })
  items: Item[];
}
