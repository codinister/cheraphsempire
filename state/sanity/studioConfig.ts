'use client'


import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './schemaTypes';
import { visionTool } from '@sanity/vision';


const studioConfig = defineConfig({
  title: 'Cheraphs Empire',
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_KEY || '',
  dataset: 'production',
  basePath: '/admindashboard',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool(), visionTool()],
});

export default studioConfig;
