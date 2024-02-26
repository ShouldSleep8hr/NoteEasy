"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categoryNoteController_1 = require("../controllers/categoryNoteController");
var categoryNoteRoutes = [
    {
        method: 'POST',
        path: '/categories',
        handler: categoryNoteController_1.default.createCategoryNote,
    },
    {
        method: 'GET',
        path: '/categories',
        handler: categoryNoteController_1.default.getAllCategoryNote,
    },
    {
        method: 'GET',
        path: '/categories/{categoryId}',
        handler: categoryNoteController_1.default.getCategoryNoteById,
    },
    {
        method: 'PUT',
        path: '/categories/{categoryId}',
        handler: categoryNoteController_1.default.updateCategoryNote,
    },
    {
        method: 'DELETE',
        path: '/categories/{categoryId}',
        handler: categoryNoteController_1.default.deleteCategoryNote,
    },
];
exports.default = categoryNoteRoutes;
