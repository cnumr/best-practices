import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'app/api', // define api folder under app folder
    definition: {
      openapi: '3.0.0',
      info: {
        title:
          (process.env.NEXT_PUBLIC_REF_NAME || 'RWEB') + ' Best Pratices API',
        version: '1.0',
      },
      contact: {
        name: 'Association Green IT',
        url: 'https://greenit.eco',
      },
    },
  });
  return spec;
};
