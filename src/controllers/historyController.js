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
var HistoryNote_1 = require("../db/entities/HistoryNote");
var HistoryController = /** @class */ (function () {
    function HistoryController() {
    }
    HistoryController.createHistory = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var action, historyRepository, newHistory, savedHistory, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        action = request.payload.action;
                        historyRepository = (0, typeorm_1.getRepository)(HistoryNote_1.HistoryNote);
                        newHistory = historyRepository.create({
                            action: action,
                            // createdAt: new Date(),
                        });
                        return [4 /*yield*/, historyRepository.save(newHistory)];
                    case 1:
                        savedHistory = _a.sent();
                        return [2 /*return*/, h.response(savedHistory).code(201)];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error creating history:', error_1);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HistoryController.getAllHistory = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var historyRepository, allHistory, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        historyRepository = (0, typeorm_1.getRepository)(HistoryNote_1.HistoryNote);
                        return [4 /*yield*/, historyRepository.find()];
                    case 1:
                        allHistory = _a.sent();
                        return [2 /*return*/, h.response(allHistory)];
                    case 2:
                        error_2 = _a.sent();
                        console.error('Error getting all history:', error_2);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HistoryController.getHistoryById = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var historyRepository, historyId, history_1, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        historyRepository = (0, typeorm_1.getRepository)(HistoryNote_1.HistoryNote);
                        historyId = request.params.historyId;
                        return [4 /*yield*/, historyRepository.findOne({ where: { idHistoryNote: historyId } })];
                    case 1:
                        history_1 = _a.sent();
                        if (!history_1) {
                            return [2 /*return*/, h.response('History not found').code(404)];
                        }
                        return [2 /*return*/, h.response(history_1)];
                    case 2:
                        error_3 = _a.sent();
                        console.error('Error getting history by ID:', error_3);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HistoryController.deleteHistory = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var historyRepository, historyId, existingHistory, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        historyRepository = (0, typeorm_1.getRepository)(HistoryNote_1.HistoryNote);
                        historyId = request.params.historyId;
                        return [4 /*yield*/, historyRepository.findOne({ where: { idHistoryNote: historyId } })];
                    case 1:
                        existingHistory = _a.sent();
                        if (!existingHistory) {
                            return [2 /*return*/, h.response('History not found').code(404)];
                        }
                        return [4 /*yield*/, historyRepository.remove(existingHistory)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, h.response('history deleted successfully')];
                    case 3:
                        error_4 = _a.sent();
                        console.error('Error deleting history:', error_4);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return HistoryController;
}());
exports.default = HistoryController;
