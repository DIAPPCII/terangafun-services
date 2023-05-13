import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Address {
  @PrimaryColumn()
  address: string;
  @Column()
  postalCode: string;
  @Column({ nullable: false })
  city: string;
  @Column()
  state: string;
  @Column({ nullable: false })
  country: string;
  @Column()
  latitude: string;
  @Column()
  longitude: string;
}
