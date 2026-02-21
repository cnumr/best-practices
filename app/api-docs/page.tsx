'use client';

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic<{ url: string }>(() => import('swagger-ui-react'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-lg">Chargement de la documentation API...</p>
    </div>
  ),
});

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen">
      <SwaggerUI url="/api-docs/swagger" />
    </div>
  );
}
