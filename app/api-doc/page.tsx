import ReactSwagger from './react-swagger';
import { getApiDocs } from '../../lib/swagger';

export default async function ApiDoc() {
  const spec = await getApiDocs();
  return <ReactSwagger spec={spec} />;
}
