"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryNote = void 0;
var typeorm_1 = require("typeorm");
var Note_1 = require("./Note");
var HistoryNote = /** @class */ (function () {
    function HistoryNote() {
    }
    __decorate([
        (0, typeorm_1.Column)("int", { primary: true, name: "idHistoryNote" }),
        __metadata("design:type", Number)
    ], HistoryNote.prototype, "idHistoryNote", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "action", length: 45 }),
        __metadata("design:type", String)
    ], HistoryNote.prototype, "action", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Idnoted" }),
        __metadata("design:type", Number)
    ], HistoryNote.prototype, "idnoted", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Note_1.Note; }, function (note) { return note.historyNotes; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "Idnoted", referencedColumnName: "idNote" }]),
        __metadata("design:type", Note_1.Note)
    ], HistoryNote.prototype, "idnoted2", void 0);
    HistoryNote = __decorate([
        (0, typeorm_1.Index)("notedId_idx", ["idnoted"], {}),
        (0, typeorm_1.Entity)("history_note", { schema: "note_easy" })
    ], HistoryNote);
    return HistoryNote;
}());
exports.HistoryNote = HistoryNote;
