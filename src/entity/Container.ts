import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./Model";
import { User } from "./User";

@Index("model_id", ["modelId"], {})
@Index("executor_id", ["executorId"], {})
@Entity("container", { schema: "chameleon" })
export class Container {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("int", { name: "model_id" })
  modelId!: number;

  @Column("int", { name: "executor_id" })
  executorId!: number;

  @Column("timestamp", { name: "start_time", nullable: true })
  startTime!: Date | null;

  @Column("timestamp", { name: "end_time", nullable: true })
  endTime!: Date | null;

  @Column("tinyint", { name: "paid", width: 1 })
  paid!: boolean;

  @ManyToOne(() => Model, (model) => model.containers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "model_id", referencedColumnName: "id" }])
  model!: Model;

  @ManyToOne(() => User, (user) => user.containers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "executor_id", referencedColumnName: "id" }])
  executor!: User;
}
