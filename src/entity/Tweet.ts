import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tweets" })
export class Tweet {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 80 })
  title: string;

  @Column({ type: "varchar", length: 300 })
  content: string;
}
