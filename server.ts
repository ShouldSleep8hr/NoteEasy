import * as Hapi from '@hapi/hapi';
import { initDb } from '../NoteEasy/src/db';
import noteRoutes from '../NoteEasy/src/routes/noteRoutes';
import customerRoutes from '../NoteEasy/src/routes/customerRoutes';
import categoryNoteRoutess from '../NoteEasy/src/routes/categoryNoteRoutes';

const HapiCors = require('hapi-cors');

const init = async () => {
  const server: Hapi.Server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register({
    plugin: HapiCors,
    options: {
      origins: ['*'],  // Adjust this to your needs, '*' allows any origin
    },
  });
  await initDb();
  server.route(noteRoutes);
  server.route(customerRoutes);
  server.route(categoryNoteRoutess);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
