import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  // TODO : relation with media
  @Column({ nullable: true })
  medias: string[];

  @ManyToMany(() => Category, (category) => category.products)
  categories: Category[];
  

  @Column({ nullable: true })
  size: string;

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
