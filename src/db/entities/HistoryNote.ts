import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Note } from "./Note";

@Index("notedId_idx", ["idnoted"], {})
@Entity("history_note", { schema: "note_easy" })
export class HistoryNote {
  @Column("int", { primary: true, name: "idHistoryNote" })
  idHistoryNote: number;

  @Column("varchar", { name: "action", length: 45 })
  action: string;

  @Column("int", { name: "Idnoted" })
  idnoted: number;

  @ManyToOne(() => Note, (note) => note.historyNotes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Idnoted", referencedColumnName: "idNote" }])
  idnoted2: Note;
}
