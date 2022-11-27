import { Event } from 'apps/event-app/src/entities/event.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 500, unique: true })
    label: string;

    @Column('text')
    description: string;

    @Column('timestamp')
    createdAt: Date;

    @Column('timestamp')
    updatedAt: Date;

    @ManyToMany(() => Event)
    @JoinTable({ name: 'event_tag' })
    events: Event[];
}