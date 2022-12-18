import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Model } from "./Model";

@Entity("category", { schema: "chameleon" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("text", { name: "name" })
  name!: string;

  @OneToMany(() => Model, (model) => model.category)
  models!: Model[];
}
