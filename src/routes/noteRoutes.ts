import { ServerRoute } from '@hapi/hapi';
import NoteController from '../controllers/noteController';

const noteRoutes: ServerRoute[] = [
  {
    method: 'POST',
    path: '/notes',
    handler: NoteController.createNote,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: NoteController.getAllNotes,
  },
  {
    method: 'GET',
    path: '/notes/{noteId}',
    handler: NoteController.getNoteById,
  },
  {
    method: 'PUT',
    path: '/notes/{noteId}',
    handler: NoteController.updateNote,
  },
  {
    method: 'DELETE',
    path: '/notes/{noteId}',
    handler: NoteController.deleteNote,
  },
];

export default noteRoutes;
