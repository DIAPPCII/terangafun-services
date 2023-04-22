import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ActivityType } from "../../activity-type/entities/activity-type.entity";

@Entity()
export class Activity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  // TODO : relation with media
  @Column({ nullable: true })
  medias: string[];

  @ManyToMany(() => ActivityType, (activityType) => activityType.activities)
  activityTypes: ActivityType[];

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  tips: string;

  @Column({ nullable: true })
  priceMin: number;

  @Column({ nullable: true })
  priceMax: number;

  @Column({ type: "timestamp" })
  createAt: Date;

  @Column({ type: "timestamp" })
  lastUpdate: Date;

  @Column({ nullable: false })
  createBy: string;
}
