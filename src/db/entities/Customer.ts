import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Note } from "./Note";

@Entity("customer", { schema: "note_easy" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "int", name: "idCustomer" })
  idCustomer: number;

  @Column("varchar", { name: "username", length: 45 })
  username: string;

  @Column("varchar", { name: "password", length: 45 })
  password: string;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @OneToMany(() => Note, (note) => note.idcustomer2)
  notes: Note[];
}
