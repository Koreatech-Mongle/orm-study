import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Container } from "./Container";
import { User } from "./User";
import { Category } from "./Category";

@Index("author_id", ["authorId"], {})
@Index("category_id", ["categoryId"], {})
@Entity("model", { schema: "chameleon" })
export class Model {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("text", { name: "name" })
  name!: string;

  @Column("text", { name: "description" })
  description!: string;

  @Column("text", { name: "input_type" })
  inputType!: string;

  @Column("text", { name: "output_type" })
  outputType!: string;

  @Column("int", { name: "author_id" })
  authorId!: number;

  @Column("int", { name: "usage_price" })
  usagePrice!: number;

  @Column("int", { name: "selling_price" })
  sellingPrice!: number;

  @Column("int", { name: "category_id" })
  categoryId!: number;

  @OneToMany(() => Container, (container) => container.model)
  containers!: Container[];

  @ManyToOne(() => User, (user) => user.models, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "author_id", referencedColumnName: "id" }])
  author!: User;

  @ManyToOne(() => Category, (category) => category.models, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category!: Category;
}
