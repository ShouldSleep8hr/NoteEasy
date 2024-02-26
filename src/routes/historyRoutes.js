"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var historyController_1 = require("../controllers/historyController");
var historyRoutes = [
    {
        method: 'POST',
        path: '/history',
        handler: historyController_1.default.createHistory,
    },
    {
        method: 'GET',
        path: '/history',
        handler: historyController_1.default.getAllHistory,
    },
    {
        method: 'GET',
        path: '/history/{historyId}',
        handler: historyController_1.default.getHistoryById,
    },
    // {
    //   method: 'PUT',
    //   path: '/history/{historyId}',
    //   handler: HistoryController.updateHistory,
    // },
    {
        method: 'DELETE',
        path: '/history/{historyId}',
        handler: historyController_1.default.deleteHistory,
    },
];
exports.default = historyRoutes;
