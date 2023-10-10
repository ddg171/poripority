import { useHeadSafe } from '#app'
import { PageType, Robots, makeDynamicMeta } from '~~/utils/useHead'
export const setPageMetaData = (title:string, subtitle:string, robots:Robots = 'all', type:PageType = 'website', image:string|undefined = undefined) => {
  const dynamicMeta = makeDynamicMeta(title, subtitle, robots, type, image)
  useHeadSafe(dynamicMeta)
}
