import preval from 'next-plugin-preval';
import { client } from '../../../tina/__generated__/databaseClient';

async function getData() {
  return await client.queries.personasConnection(
    {first: 1000},
  );
}

export default preval(getData());
