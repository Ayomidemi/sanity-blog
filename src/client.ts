import client from '@sanity/client';

export default client({
  projectId: 'otddh5oh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-11-07',
});

// Deployed sanity link
// https://peasesanityblog.sanity.studio
