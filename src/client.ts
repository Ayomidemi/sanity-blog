import React from 'react';
import client from '@sanity/client';

export default client({
  projectId: 'otddh5oh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-11-07',
});
