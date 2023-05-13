import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShopType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column()
  avatar: string;

  @Column({ type: "timestamp" })
  createdAt: Date;

  @Column({ type: "timestamp" })
  lastUpdate: Date;
}
