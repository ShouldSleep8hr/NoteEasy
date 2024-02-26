import { ServerRoute } from '@hapi/hapi';
import HistoryController from '../controllers/historyController';

const historyRoutes: ServerRoute[] = [
  {
    method: 'POST',
    path: '/history',
    handler: HistoryController.createHistory,
  },
  {
    method: 'GET',
    path: '/history',
    handler: HistoryController.getAllHistory,
  },
  {
    method: 'GET',
    path: '/history/{historyId}',
    handler: HistoryController.getHistoryById,
  },
  // {
  //   method: 'PUT',
  //   path: '/history/{historyId}',
  //   handler: HistoryController.updateHistory,
  // },
  {
    method: 'DELETE',
    path: '/history/{historyId}',
    handler: HistoryController.deleteHistory,
  },
];

export default historyRoutes;
