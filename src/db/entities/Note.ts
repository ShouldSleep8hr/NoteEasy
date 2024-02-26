import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { HistoryNote } from "./HistoryNote";
import { CategoryNote } from "./CategoryNote";
import { Customer } from "./Customer";

@Index("customerId_idx", ["idcustomer"], {})
@Index("categoryId_idx", ["idcategory"], {})
@Entity("note", { schema: "note_easy" })
export class Note {
  @PrimaryGeneratedColumn({ type: "int", name: "idNote" })
  idNote: number;

  @Column("varchar", { name: "title", length: 45 })
  title: string;

  @Column("varchar", { name: "content", nullable: true, length: 200 })
  content: string | null;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "Idcustomer" })
  idcustomer: number;

  @Column("int", { name: "Idcategory", nullable: true })
  idcategory: number | null;

  @OneToMany(() => HistoryNote, (historyNote) => historyNote.idnoted2)
  historyNotes: HistoryNote[];

  @ManyToOne(() => CategoryNote, (categoryNote) => categoryNote.notes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Idcategory", referencedColumnName: "idcategoryNote" }])
  idcategory2: CategoryNote;

  @ManyToOne(() => Customer, (customer) => customer.notes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Idcustomer", referencedColumnName: "idCustomer" }])
  idcustomer2: Customer;
}
