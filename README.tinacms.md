# Tina Self Hosted Demo 🦙

This is a A Next.js + TinaCMS starter site designed to be hosted on entirely on Vercel (with Markdown in GitHub). Please check out [the docs](https://tina.io/docs/self-hosted/overview/) for more information on self-hosting TinaCMS.

Watch a 1-min demo [https://www.youtube.com/watch?v=h6LoJS3FFOA](https://www.youtube.com/watch?v=h6LoJS3FFOA)

[![Youtube video](https://github.com/tinacms/tina-self-hosted-demo/assets/776019/de4eac8f-b5da-4e6f-bc96-bbeaee7492e5)](https://www.youtube.com/watch?v=h6LoJS3FFOA)

# Vercel Quick Start

Use the following link to directly deploy this demo to Vercel. You will need a Vercel account and a GitHub personal access token (PAT) with access to the repository (once it has been created).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftinacms%2Ftina-self-hosted-demo&env=GITHUB_PERSONAL_ACCESS_TOKEN,NEXTAUTH_SECRET&envDescription=Create%20a%20new%20GitHub%20PAT%20at%20https%3A%2F%2Fgithub.com%2Fsettings%2Fpersonal-access-tokens%2Fnew%20with%20content-access.%20See%20the%20self-hosted%20demo%20README%20for%20more%20information&envLink=https%3A%2F%2Fgithub.com%2Ftinacms%2Ftina-self-hosted-demo%2Fblob%2Fmain%2FREADME.md&project-name=tina-self-hosted-demo&repository-name=tina-self-hosted-demo&stores=%5B%7B%22type%22%3A%22kv%22%7D%5D&)

### Environment Variable Setup

After the repository is created, you will need to do the following steps to get the environment variables setup:

1. Create a new [GitHub personal access token (PAT)](https://github.com/settings/personal-access-tokens/new) with content access to the new repository and copy the token as the value for the `GITHUB_PERSONAL_ACCESS_TOKEN` environment variable.
2. Fill out the `NEXTAUTH_SECRET` environment variable with a random string.

# Local Development

## Requirements

- Git, [Node.js Active LTS](https://nodejs.org/en/about/releases/), Yarn installed for local development.

Set up the .env file:

```
cp .env.example .env
```

Fill in the .env file with your own values.

> Hint: NEXTAUTH_SECRET can be generated with `openssl rand -base64 32`

```env
GITHUB_OWNER=***
GITHUB_REPO=***
GITHUB_BRANCH=***
GITHUB_PERSONAL_ACCESS_TOKEN=***

NEXTAUTH_SECRET=***
```

Install the project's dependencies:

```
yarn install
```

Run the project locally:

> This will start TinaCMS in "Local Mode", meaning all changes will be made to the local file system and no auth is required.

```
yarn dev
```

Run the project locally with Vercel KV:

> This will start TinaCMS in "Production Mode", meaning all changes will be made to the Vercel KV, and GitHub. Database and auth are required.

First add the following environment variables to your `.env` file:

```env
# Get these from vercel if you want to run yarn dev:prod
KV_REST_API_URL=***
KV_REST_API_TOKEN=***
```

Then run the following command:

```
yarn dev:prod
```

## Environment Variables

| Variable                       | Description                                                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `GITHUB_OWNER`                 | The owner of the repository you want to use for your content. Required in local development. Defaults to VERCEL_GIT_REPO_OWNER in Vercel.  |
| `GITHUB_REPO`                  | The name of the repository you want to use for your content. Required in local development. Defaults to VERCEL_GIT_REPO_SLUG in Vercel.    |
| `GITHUB_BRANCH`                | The branch of the repository you want to use for your content. Defaults to `VERCEL_GIT_COMMIT_REF` or `main` if not specified.             |
| `GITHUB_PERSONAL_ACCESS_TOKEN` | A [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with `repo` access. |
| `NEXTAUTH_SECRET`              | A secret used by NextAuth.js to encrypt the NextAuth.js JWT.                                                                               |
| `KV_REST_API_URL`              | The URL of the Vercel KV database.                                                                                                         |
| `KV_REST_API_TOKEN`            | The token for authenticating to the Vercel KV database.                                                                                    |
| `NEXT_PUBLIC_TINA_CLIENT_ID`   | The client id for your Tina Cloud application. Only required for Tina Cloud authorization.                                                 |

## Deploying to Vercel

This demo is configured with default username / password authentication backed by [Vercel KV](https://vercel.com/docs/storage/vercel-kv). Other
NextAuth providers can be used, as well other auth solutions such as [Clerk](https://clerk.com).

### Setting up Vercel KV

1. Create a Vercel account and visit the Storage [tab](https://vercel.com/dashboard/stores) in the dashboard.
2. Click Create and select the KV (Durable Redis) option.
3. Give the KV database a name, select the nearest region and click Create.
4. In Quickstart, click `.env.local` and Copy Snippet to get the connection details (save these for later).

![Animation showing how to setup Vercel KV](public/setup-kv-store.gif?raw=true 'Setting up Vercel KV')

### Create a GitHub personal access token

1. Create a [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with `repo` access. (Note the expiration date of the token.)
2. Add the token to the `.env` file (`GITHUB_PERSONAL_ACCESS_TOKEN`)

![Animation showing how to create a personal access token](public/create-token.gif?raw=true 'Creating a personal access token')

### Deploying the project in Vercel

1. Create a new project in Vercel and select this Git repository.
2. In the Environment Variables section, you can copy and paste your entire `.env` file into the first input.
3. Click Deploy and wait for the project to build.
4. Visit the project URL and navigate to `/admin/index.html` to log in. The default username and password can be found in [content/users/index.json](content/users/index.json). After your first login, be sure to update your password.

![Animation showing deployment to Vercel](public/deploy-vercel.gif?raw=true 'Deploying to Vercel')

# Using Tina Cloud for Authorization

Tina Cloud can be used to manage users and authorization for your TinaCMS application. To use Tina Cloud for auth, you will need to create a new project in the Tina Cloud [dashboard](https://app.tina.io/projects). You will be required to specify a repository, but since the data layer is managed by Vercel KV, you can use any repository.

## Configuration

Once you have created an application, you will need to add the following environment variable to your project:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=***
```

The value for `NEXT_PUBLIC_TINA_CLIENT_ID` can be found in the Tina Cloud dashboard on the "Overview" page for your project.

In your Tina configuration, first remove or comment out the `authProvider` property.

Then, confirm that the following property is set in the Tina config:

    ```js
    {
    ...
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    }
    ```

Lastly, remove or comment out the TinaUserCollection from `schema.collections`.

## Updating the Backend

The backend is configured with the `AuthJsBackendAuthProvider` by default. To use Tina Cloud, you will need to update the backend to use the `TinaCloudBackendAuthProvider`.
The GraphQL endpoint is configured to use Auth.js by default. To use Tina Cloud, you will need to update the endpoint in `pages/api/tina/[...routes].ts` to use Tina Cloud's auth.
The updated file should look like this after the change:

```js
import { TinaNodeBackend, LocalBackendAuthProvider } from '@cms/datalayer';
import { TinaCloudBackendAuthProvider } from '@tinacms/auth';

import databaseClient from '../../../tina/__generated__/databaseClient';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : TinaCloudBackendAuthProvider(),
  databaseClient,
});

export default (req, res) => {
  // Modify the request here if you need to
  return handler(req, res);
};
```

# Using MongoDB for the datalayer

> **MongoDB + Vercel for authorize the connection to the database.**
>
> - https://www.mongodb.com/docs/atlas/reference/partner-integrations/vercel/
> - https://vercel.com/integrations/mongodbatlas

> A local MongoDB is available in the .local_mogodb folder.
> You can use the docker-compose.yml file to start the MongoDB container.
> You can use the docker:up command to start the MongoDB container.
> You can use the docker:down command to stop the MongoDB container.
> The database is available at `mongodb://root:password@localhost:27017/?authSource=admin`
> source : https://medium.com/norsys-octogone/a-local-environment-for-mongodb-with-docker-compose-ba52445b93ed

It's possible to use MongoDB with the data layer for your TinaCMS application instead of Vercel KV. To do this, you will need to add the following environment variables to your project:

```env
`MONGODB_URI` is the connection string to your MongoDB database. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to get a free database.
```

> More information about the MongoDB Atlas https://www.mongodb.com/resources/products/fundamentals/create-database

Next you will need to update the `tina/database.ts` to use the MongoDB level implementation instead of the Redis level implementation.

```ts
import { MongodbLevel } from "mongodb-level"
...
const mongodbLevelStore = new MongodbLevel<string, Record<string, any>>({
  collectionName: "tinacms",
  dbName: "tinacms",
  mongoUri: process.env.MONGODB_URI as string,
})

export default isLocal
  ? createLocalDatabase()
  : createDatabase({
    gitProvider: new GitHubProvider({
      branch,
      owner,
      repo,
      token,
    }),
    databaseAdapter: mongodbLevelStore,
    namespace: branch,
  })
```

# Connect to TinaCms admin interface

> You can connect to the TinaCms admin interface by going to the following URL:
> `http://localhost:3000/admin/index.html`
> The default username and password can be found in [content/users/index.json](content/users/index.json). After your first login, be sure to update your password.
