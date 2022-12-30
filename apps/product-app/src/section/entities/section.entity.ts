import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Heading } from "../../heading/entities/heading.entity";
import { SectionType } from "./SectionType.enum";

@Entity()
export class Section {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "enum", enum: SectionType, nullable: false })
  type: SectionType;

  @Column({ type: "int", nullable: false })
  priority: number;

  @Column({ type: "timestamp" })
  createAt: Date;

  @Column({ type: "timestamp" })
  lastUpdate: Date;

  @ManyToMany(() => Heading)
  @JoinTable({ name: "heading_section" })
  headings: Heading;
}
