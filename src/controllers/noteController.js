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
var Note_1 = require("../db/entities/Note"); // Replace with the actual path to your Note entity
var HistoryNote_1 = require("../db/entities/HistoryNote");
var NoteController = /** @class */ (function () {
    function NoteController() {
    }
    NoteController.createNote = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, content, idcustomer, idcategory, noteRepository, newNote, savedNote, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.payload, title = _a.title, content = _a.content, idcustomer = _a.idcustomer, idcategory = _a.idcategory;
                        noteRepository = (0, typeorm_1.getRepository)(Note_1.Note);
                        newNote = noteRepository.create({
                            title: title,
                            content: content,
                            idcustomer: idcustomer,
                            idcategory: idcategory,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        });
                        return [4 /*yield*/, noteRepository.save(newNote)];
                    case 1:
                        savedNote = _b.sent();
                        return [2 /*return*/, h.response(savedNote).code(201)];
                    case 2:
                        error_1 = _b.sent();
                        console.error('Error creating note:', error_1);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NoteController.getAllNotes = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var noteRepository, allNotes, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        noteRepository = (0, typeorm_1.getRepository)(Note_1.Note);
                        return [4 /*yield*/, noteRepository.find()];
                    case 1:
                        allNotes = _a.sent();
                        return [2 /*return*/, h.response(allNotes)];
                    case 2:
                        error_2 = _a.sent();
                        console.error('Error getting all notes:', error_2);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NoteController.getNoteById = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var noteRepository, noteId, note, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        noteRepository = (0, typeorm_1.getRepository)(Note_1.Note);
                        noteId = request.params.noteId;
                        return [4 /*yield*/, noteRepository.findOne({ where: { idNote: noteId } })];
                    case 1:
                        note = _a.sent();
                        if (!note) {
                            return [2 /*return*/, h.response('Note not found').code(404)];
                        }
                        return [2 /*return*/, h.response(note)];
                    case 2:
                        error_3 = _a.sent();
                        console.error('Error getting note by ID:', error_3);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NoteController.updateNote = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var noteRepository, historyRepository, noteId, existingNote, _a, title, content, idcustomer, idcategory, historyEntry, updatedNote, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        noteRepository = (0, typeorm_1.getRepository)(Note_1.Note);
                        historyRepository = (0, typeorm_1.getRepository)(HistoryNote_1.HistoryNote);
                        noteId = request.params.noteId;
                        return [4 /*yield*/, noteRepository.findOne({ where: { idNote: noteId } })];
                    case 1:
                        existingNote = _b.sent();
                        if (!existingNote) {
                            return [2 /*return*/, h.response('Note not found').code(404)];
                        }
                        _a = request.payload, title = _a.title, content = _a.content, idcustomer = _a.idcustomer, idcategory = _a.idcategory;
                        historyEntry = historyRepository.create({
                            noteId: noteId,
                            oldTitle: existingNote.title,
                            oldContent: existingNote.content,
                            updatedAt: new Date(),
                        });
                        // Save the history entry
                        return [4 /*yield*/, historyRepository.save(historyEntry)];
                    case 2:
                        // Save the history entry
                        _b.sent();
                        existingNote.title = title;
                        existingNote.content = content;
                        existingNote.idcustomer = idcustomer;
                        existingNote.idcategory = idcategory;
                        existingNote.updatedAt = new Date();
                        return [4 /*yield*/, noteRepository.save(existingNote)];
                    case 3:
                        updatedNote = _b.sent();
                        return [2 /*return*/, h.response(updatedNote)];
                    case 4:
                        error_4 = _b.sent();
                        console.error('Error updating note:', error_4);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    NoteController.deleteNote = function (request, h) {
        return __awaiter(this, void 0, void 0, function () {
            var noteRepository, noteId, note, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        noteRepository = (0, typeorm_1.getRepository)(Note_1.Note);
                        noteId = request.params.noteId;
                        return [4 /*yield*/, noteRepository.findOne({ where: { idNote: noteId } })];
                    case 1:
                        note = _a.sent();
                        if (!note) {
                            return [2 /*return*/, h.response('Note not found').code(404)];
                        }
                        return [4 /*yield*/, noteRepository.remove(note)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, h.response('Note deleted successfully')];
                    case 3:
                        error_5 = _a.sent();
                        console.error('Error deleting note:', error_5);
                        return [2 /*return*/, h.response('Internal Server Error').code(500)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return NoteController;
}());
exports.default = NoteController;
