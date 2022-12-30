import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LocationType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "timestamp" })
  createAt: Date;

  @Column({ type: "timestamp" })
  lastUpdate: Date;
}