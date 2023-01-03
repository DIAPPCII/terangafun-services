import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Interest {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 500, nullable: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ length: 500, nullable: true })
  logo: string;

  @Column({ type: "timestamp" })
  createAt: Date;

  @Column("timestamp")
  lastUpdateDate: Date;

  /*@ManyToMany(() => User)
  @JoinTable({ name: "user_interests" })
  users: [User];*/
}
