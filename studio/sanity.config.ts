/**
 * This config is used to configure your Sanity Studio.
 * Learn more: https://www.sanity.io/docs/configuration
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// Main Sanity configuration
export default defineConfig({
  name: 'default',
  title: 'Badlands Tour',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure, // Custom studio structure configuration, imported from ./src/structure.ts
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
