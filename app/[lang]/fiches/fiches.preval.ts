import preval from 'next-plugin-preval';
import { client } from '../../../tina/__generated__/databaseClient';

async function getData() {
  return await client.queries.fichesConnection(
    {first: 1000},
  );
}

export default preval(getData());
