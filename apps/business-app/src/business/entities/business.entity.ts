import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../../../user-app/src/users/entities/user.entity';
import { BusinessType } from '../../business-type/entities/business-type.entity';

@Entity({})
export class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: false, unique: true })
  name: string;
  @Column('boolean')
  isPublic: boolean;

  @Column('boolean')
  isVerified: boolean;

  @Column({ length: 500, nullable: true })
  profileUrl: string;

  @Column({ length: 500, nullable: true })
  coverUrl: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'timestamp' })
  createAt: Date;

  @Column('timestamp')
  lastUpdate: Date;

  @ManyToMany(() => User)
  @JoinTable({ name: 'business_admins' })
  admins: User[];

  @ManyToMany(() => BusinessType)
  @JoinTable({ name: 'business_business_type' })
  types: BusinessType[];
}
