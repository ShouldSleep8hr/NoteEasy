"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noteController_1 = require("../controllers/noteController");
var noteRoutes = [
    {
        method: 'POST',
        path: '/notes',
        handler: noteController_1.default.createNote,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: noteController_1.default.getAllNotes,
    },
    {
        method: 'GET',
        path: '/notes/{noteId}',
        handler: noteController_1.default.getNoteById,
    },
    {
        method: 'PUT',
        path: '/notes/{noteId}',
        handler: noteController_1.default.updateNote,
    },
    {
        method: 'DELETE',
        path: '/notes/{noteId}',
        handler: noteController_1.default.deleteNote,
    },
];
exports.default = noteRoutes;
