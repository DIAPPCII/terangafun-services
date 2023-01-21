import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Followship {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @ManyToOne(() => User)
  follower: User;
  @ManyToOne(() => User)
  followed: User;
  @Column({ type: "timestamp", nullable: true })
  lastUpdateDate: Date;
}
