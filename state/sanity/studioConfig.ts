'use client'


import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './schemaTypes';
import { visionTool } from '@sanity/vision';

const conf = process.env.NEXT_APP_SANITY_STUDIO_API_KEY || '';
const studioConfig = defineConfig({
  title: 'Cheraphs Empire',
  projectId: conf,
  dataset: 'production',
  basePath: '/admindashboard',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool(), visionTool()],
});

export default studioConfig;
