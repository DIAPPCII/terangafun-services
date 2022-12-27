import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Section } from "../../section/entities/section.entity";

@Entity()
export class Heading {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "int", nullable: false })
  priority: number;

  @Column({ type: "timestamp" })
  createAt: Date;

  @Column({ type: "timestamp" })
  lastUpdate: Date;
  @ManyToMany(() => Section)
  @JoinTable({ name: "heading_section" })
  sections: Section;
}
