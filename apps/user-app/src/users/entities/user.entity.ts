import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from './gender.enum';

//import { Group } from '../../groups/entities/group.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: true })
  alias: string;

  @Column({ nullable: true })
  cognitoId: string;

  @Column({ unique: true, length: 500, nullable: true })
  email: string;

  @Column({ length: 500, nullable: true })
  safetyEmail: string;

  @Column({ unique: true, length: 500, nullable: true })
  phone: string;

  @Column({ length: 500, nullable: true })
  firstName: string;

  @Column({ length: 500, nullable: true })
  lastName: string;

  @Column({ type: 'enum', enum: Gender, nullable: true })
  gender: Gender;

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column('boolean')
  isPublic: boolean;

  @Column('boolean')
  isVerified: boolean;

  @Column({ length: 500, nullable: true })
  profileUrl: string;

  @Column({ length: 500, nullable: true })
  coverUrl: string;

  @Column({ type: 'text', nullable: true })
  biography: string;

  @Column({ type: 'datetime' })
  createAt: Date;

  @Column('datetime')
  lastUpdateDate: Date;

  @Column({ type: 'datetime', nullable: true })
  lastConnectionDate: Date;

  // @ManyToMany(() => Group)
  // groups: Group[];
}
