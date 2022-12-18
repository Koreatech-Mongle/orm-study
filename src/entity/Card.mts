import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("owner_id", ["ownerId"], {})
@Entity("card", { schema: "chameleon" })
export class Card {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("int", { name: "owner_id" })
  ownerId!: number;

  @Column("text", { name: "numbers" })
  numbers!: string;

  @Column("int", { name: "year" })
  year!: number;

  @Column("int", { name: "month" })
  month!: number;

  @Column("int", { name: "cvc" })
  cvc!: number;

  @ManyToOne(() => User, (user) => user.cards, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "owner_id", referencedColumnName: "id" }])
  owner!: User;
}
