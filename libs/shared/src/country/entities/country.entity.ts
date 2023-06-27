import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Country {
  @PrimaryColumn()
  name: string;
  @Column()
  code: string;
  @Column({ nullable: false })
  capital: string;
  @Column()
  currency: string;
  @Column({ nullable: false })
  dialCode: string;
}
