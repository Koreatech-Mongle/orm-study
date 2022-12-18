import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card.mjs";
import { Container } from "./Container";
import { Model } from "./Model";

@Entity("user", { schema: "chameleon" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("text", { name: "username" })
  username!: string;

  @Column("text", { name: "password" })
  password!: string;

  @Column("int", { name: "credit" })
  credit!: number;

  @OneToMany(() => Card, (card) => card.owner)
  cards!: Card[];

  @OneToMany(() => Container, (container) => container.executor)
  containers!: Container[];

  @OneToMany(() => Model, (model) => model.author)
  models!: Model[];
}
