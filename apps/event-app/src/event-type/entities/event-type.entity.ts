import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventType {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 500, unique: true })
    label: string;

    @Column({ length: 500 })
    logo: string;

    @Column('text')
    description: string;

    @Column('timestamp')
    createdAt: Date;

    @Column('timestamp')
    updatedAt: Date;
}