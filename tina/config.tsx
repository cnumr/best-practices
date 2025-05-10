import {
  UsernamePasswordAuthJSProvider,
  TinaUserCollection,
} from 'tinacms-authjs/dist/tinacms';
import { defineConfig, LocalAuthProvider } from 'tinacms';

import fiches from './collections/fiches';
import lexique from './collections/lexique';
import personas from './collections/personas';
import home from './collections/home';
import mentionsLegales from './collections/mentionsLegales';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

export default defineConfig({
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  contentApiUrlOverride: '/api/tina/gql',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
      static: true,
    },
  },
  schema: {
    collections: [
      TinaUserCollection,
      fiches,
      lexique,
      personas,
      home,
      mentionsLegales,
    ],
  },
});
