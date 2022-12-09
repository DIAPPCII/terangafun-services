import { ChildEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Site } from "../../site/entities/site.entity";
import { Item } from "../../item/entities/item.entity";

@ChildEntity()
export class Destination extends Item{
  @ManyToMany(() => Site)
  @JoinTable({name : 'destination_site'})
  sites: Site[]


}
