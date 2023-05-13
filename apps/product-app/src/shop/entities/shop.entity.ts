import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Media } from "@terangafun/shared/media/entities/media.entity";
import { ShopType } from "../../shop-type/entities/shop-type.entity";

@Entity()
export class Shop {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column("text")
  description: string;

  @Column({})
  phoneNumber: string;

  @Column({})
  email: string;

  @Column({})
  logo: string;

  @Column({})
  cover: string;

  @ManyToMany(() => ShopType)
  @JoinTable({ name: "shop_shop_type" })
  types: ShopType[];

  /*@Column()
  @ManyToOne(() => Address, address => address.address)
  address: Address;*/

  @ManyToMany(() => Media)
  @JoinTable({ name: "event_media" })
  medias: Media[];

  @Column("timestamp")
  createdAt: Date;

  @Column("timestamp")
  lastUpdate: Date;
}
