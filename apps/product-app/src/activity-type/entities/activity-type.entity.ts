import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Activity } from "../../activity/entities/activity.entity";

@Entity()
export class ActivityType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @ManyToMany(() => Activity, (activity) => activity.activityTypes)
  activities: Activity[];

  @Column({ type: "timestamp" })
  createAt: Date;

  @Column({ type: "timestamp" })
  lastUpdate: Date;

  @Column({ nullable: false })
  createBy: string;
}
