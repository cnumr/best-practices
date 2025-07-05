import { client } from '../../../tina/__generated__/databaseClient';
import preval from 'next-plugin-preval';

async function getData() {
  return await client.queries.fichesConnection({ first: 1000 });
}

export default preval(getData());
