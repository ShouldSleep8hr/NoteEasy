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
exports.Note = void 0;
var typeorm_1 = require("typeorm");
var HistoryNote_1 = require("./HistoryNote");
var CategoryNote_1 = require("./CategoryNote");
var Customer_1 = require("./Customer");
var Note = /** @class */ (function () {
    function Note() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idNote" }),
        __metadata("design:type", Number)
    ], Note.prototype, "idNote", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "title", length: 45 }),
        __metadata("design:type", String)
    ], Note.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "content", nullable: true, length: 200 }),
        __metadata("design:type", String)
    ], Note.prototype, "content", void 0);
    __decorate([
        (0, typeorm_1.Column)("datetime", { name: "createdAt", nullable: true }),
        __metadata("design:type", Date)
    ], Note.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)("datetime", { name: "updatedAt", nullable: true }),
        __metadata("design:type", Date)
    ], Note.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Idcustomer" }),
        __metadata("design:type", Number)
    ], Note.prototype, "idcustomer", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Idcategory", nullable: true }),
        __metadata("design:type", Number)
    ], Note.prototype, "idcategory", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return HistoryNote_1.HistoryNote; }, function (historyNote) { return historyNote.idnoted2; }),
        __metadata("design:type", Array)
    ], Note.prototype, "historyNotes", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return CategoryNote_1.CategoryNote; }, function (categoryNote) { return categoryNote.notes; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "Idcategory", referencedColumnName: "idcategoryNote" }]),
        __metadata("design:type", CategoryNote_1.CategoryNote)
    ], Note.prototype, "idcategory2", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Customer_1.Customer; }, function (customer) { return customer.notes; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        (0, typeorm_1.JoinColumn)([{ name: "Idcustomer", referencedColumnName: "idCustomer" }]),
        __metadata("design:type", Customer_1.Customer)
    ], Note.prototype, "idcustomer2", void 0);
    Note = __decorate([
        (0, typeorm_1.Index)("customerId_idx", ["idcustomer"], {}),
        (0, typeorm_1.Index)("categoryId_idx", ["idcategory"], {}),
        (0, typeorm_1.Entity)("note", { schema: "note_easy" })
    ], Note);
    return Note;
}());
exports.Note = Note;
