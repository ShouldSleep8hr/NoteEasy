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
exports.Customer = void 0;
var typeorm_1 = require("typeorm");
var Note_1 = require("./Note");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "idCustomer" }),
        __metadata("design:type", Number)
    ], Customer.prototype, "idCustomer", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "username", length: 45 }),
        __metadata("design:type", String)
    ], Customer.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "password", length: 45 }),
        __metadata("design:type", String)
    ], Customer.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)("datetime", { name: "createdAt", nullable: true }),
        __metadata("design:type", Date)
    ], Customer.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Note_1.Note; }, function (note) { return note.idcustomer2; }),
        __metadata("design:type", Array)
    ], Customer.prototype, "notes", void 0);
    Customer = __decorate([
        (0, typeorm_1.Entity)("customer", { schema: "note_easy" })
    ], Customer);
    return Customer;
}());
exports.Customer = Customer;
