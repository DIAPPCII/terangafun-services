import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Media {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 500, unique: true })
  label: string;

  @Column("text")
  description: string;

  @Column("text")
  url: string;

  @Column("timestamp")
  createdAt: Date;

  @Column("timestamp")
  updatedAt: Date;
}
