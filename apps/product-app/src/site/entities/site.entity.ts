import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";
import { SiteType } from "../../site-type/entities/site-type.entity";

@Entity()
export class Site {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'timestamp' })
  createAt: Date;

  @Column({ type: 'timestamp' })
  lastUpdate: Date;

  @Column({ nullable: false })
  owner: string;

  @Column({ type: "boolean"})
  published: boolean

  @ManyToMany(() => SiteType)
  @JoinTable({ name: 'site_site_type' })
  types: SiteType[];
}
