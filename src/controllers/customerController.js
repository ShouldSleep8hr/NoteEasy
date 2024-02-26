"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Customer_1 = require("../db/entities/Customer");
var CustomerController = /** @class */ (function () {
    function CustomerController() {
    }
    CustomerController.createCustomer = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, password, customerRepository, newCustomer, savedCustomer, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.payload, username = _a.username, password = _a.password;
                        customerRepository = (0, typeorm_1.getRepository)(Customer_1.Customer);
                        newCustomer = customerRepository.create({
                            username: username,
                            password: password,
                            createdAt: new Date(),
                        });
                        return [4 /*yield*/, customerRepository.save(newCustomer)];
                    case 1:
                        savedCustomer = _b.sent();
                        return [2 /*return*/, h.response(savedCustomer).code(201)];
                    case 2:
                        error_1 = _b.sent();
                        console.error('Error creating customer:', error_1);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerController.getAllCustomer = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var customerRepository, allCustomers, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        customerRepository = (0, typeorm_1.getRepository)(Customer_1.Customer);
                        return [4 /*yield*/, customerRepository.find()];
                    case 1:
                        allCustomers = _a.sent();
                        return [2 /*return*/, h.response(allCustomers)];
                    case 2:
                        error_2 = _a.sent();
                        console.error('Error getting all customers:', error_2);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerController.getCustomerById = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var customerRepository, customerId, customer, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        customerRepository = (0, typeorm_1.getRepository)(Customer_1.Customer);
                        customerId = request.params.customerId;
                        return [4 /*yield*/, customerRepository.findOne({ where: { idCustomer: customerId } })];
                    case 1:
                        customer = _a.sent();
                        if (!customer) {
                            return [2 /*return*/, h.response('Customer not found').code(404)];
                        }
                        return [2 /*return*/, h.response(customer)];
                    case 2:
                        error_3 = _a.sent();
                        console.error('Error getting customer by ID:', error_3);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerController.updateCustomer = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var customerRepository, customerId, existingCustomer, _a, username, password, updatedCustomer, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        customerRepository = (0, typeorm_1.getRepository)(Customer_1.Customer);
                        customerId = request.params.customerId;
                        return [4 /*yield*/, customerRepository.findOne({ where: { idCustomer: customerId } })];
                    case 1:
                        existingCustomer = _b.sent();
                        if (!existingCustomer) {
                            return [2 /*return*/, h.response('Customer not found').code(404)];
                        }
                        _a = request.payload, username = _a.username, password = _a.password;
                        existingCustomer.username = username;
                        existingCustomer.password = password;
                        return [4 /*yield*/, customerRepository.save(existingCustomer)];
                    case 2:
                        updatedCustomer = _b.sent();
                        return [2 /*return*/, h.response(updatedCustomer)];
                    case 3:
                        error_4 = _b.sent();
                        console.error('Error updating customer:', error_4);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerController.deleteCustomer = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var customerRepository, customerId, existingCustomer, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        customerRepository = (0, typeorm_1.getRepository)(Customer_1.Customer);
                        customerId = request.params.customerId;
                        return [4 /*yield*/, customerRepository.findOne({ where: { idCustomer: customerId } })];
                    case 1:
                        existingCustomer = _a.sent();
                        if (!existingCustomer) {
                            return [2 /*return*/, h.response('Customer not found').code(404)];
                        }
                        return [4 /*yield*/, customerRepository.remove(existingCustomer)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, h.response('Customer deleted successfully')];
                    case 3:
                        error_5 = _a.sent();
                        console.error('Error deleting customer:', error_5);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CustomerController;
}());
exports.default = CustomerController;
