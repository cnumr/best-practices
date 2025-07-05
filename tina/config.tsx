import { LocalAuthProvider, defineConfig } from 'tinacms';
import {
  TinaUserCollection,
  UsernamePasswordAuthJSProvider,
} from 'tinacms-authjs/dist/tinacms';

import fiches from './collections/fiches';
import home from './collections/home';
import lexique from './collections/lexique';
import mentionsLegales from './collections/mentionsLegales';
import personas from './collections/personas';

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
