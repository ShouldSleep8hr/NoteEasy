import { ServerRoute } from '@hapi/hapi';
import CategoryNoteController from '../controllers/categoryNoteController';

const categoryNoteRoutes: ServerRoute[] = [
  {
    method: 'POST',
    path: '/categories',
    handler:CategoryNoteController.createCategoryNote,
  },
  {
    method: 'GET',
    path: '/categories',
    handler: CategoryNoteController.getAllCategoryNote,
  },
  {
    method: 'GET',
    path: '/categories/{categoryId}',
    handler: CategoryNoteController.getCategoryNoteById,
  },
  {
    method: 'PUT',
    path: '/categories/{categoryId}',
    handler: CategoryNoteController.updateCategoryNote,
  },
  {
    method: 'DELETE',
    path: '/categories/{categoryId}',
    handler: CategoryNoteController.deleteCategoryNote,
  },
];

export default categoryNoteRoutes;
