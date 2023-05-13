import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
//import { Product } from "../../product/entities/product.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  //@ManyToMany(() => Product, (product) => product.categories)
  //products: Product[];

  @Column({ type: "timestamp" })
  createAt: Date;

  @Column({ type: "timestamp" })
  lastUpdate: Date;

  @Column({ nullable: false })
  createBy: string;
}
