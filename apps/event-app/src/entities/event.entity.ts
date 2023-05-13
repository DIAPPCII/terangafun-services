import { User } from "apps/user-app/src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EventType } from "../event-type/entities/event-type.entity";

@Entity()
export class Event {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 500, unique: true })
  label: string;
  @ManyToOne(() => EventType, eventType => eventType.id)
  @JoinTable({ name: "event_type" })
  type: string;
  @ManyToOne(() => User, user => user.id)
  @JoinTable({ name: "organisator_id" })
  organisator: string;
  /*@ManyToMany(() => Media)
    @JoinTable({ name: 'event_media' })
    medias: string[];
    @ManyToMany(() => Tag)
    @JoinTable({ name: 'event_tag' })
    tags: string[];*/
  @Column("text")
  accessRequirements: "public" | "private" | "on-registration";
  @Column("timestamp")
  startDate: Date;
  @Column("timestamp")
  endDate: Date;
  @Column("text")
  address: string;
  @Column("boolean")
  isOnline: boolean;
  @Column("numeric")
  numberOfParticipants: number;
  @Column("text")
  cover: string;
  @Column({ length: 500 })
  logo: string;
  @Column("text")
  description: string;
  @Column("timestamp")
  createdAt: Date;
  @Column("timestamp")
  updatedAt: Date;
}
