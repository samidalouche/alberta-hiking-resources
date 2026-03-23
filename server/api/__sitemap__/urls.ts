import { queryCollection } from '@nuxt/content/server'
import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
  const docs = await queryCollection(event, 'docs').all()
  return docs
    .filter(doc => !doc.path.endsWith('.navigation'))
    .map(doc => ({ loc: doc.path }))
})
