import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({
  api: { projectId, dataset },
  deployment: {
    appId: 'riapn7jdef9vv2ltl9ghj6as', // the ID from your last deploy
  },
})
