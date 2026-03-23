import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import { queryCollection } from '@nuxt/content/server'

export default defineSitemapEventHandler(async (e) => {
  const docs = await queryCollection(e, 'docs').all()
  return docs.filter(doc => !doc.path.endsWith('.navigation')).map(doc => asSitemapUrl({
    loc: doc.path,
    lastmod: doc.updatedAt
  }))
})
