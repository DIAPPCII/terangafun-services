import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Event } from 'apps/event-app/src/entities/event.entity';

@Entity()
export class Media {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 500, unique: true })
    label: string;

    @Column('text')
    description: string;

    @Column('text')
    url: string;

    @Column('timestamp')
    createdAt: Date;

    @Column('timestamp')
    updatedAt: Date;

    @ManyToMany(() => Event)
    @JoinTable({ name: 'event_media' })
    events: Event[];
}