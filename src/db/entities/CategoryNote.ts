import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Note } from "./Note";

@Entity("category_note", { schema: "note_easy" })
export class CategoryNote {
  @PrimaryGeneratedColumn({ type: "int", name: "idcategory_note" })
  idcategoryNote: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @OneToMany(() => Note, (note) => note.idcategory2)
  notes: Note[];
}
