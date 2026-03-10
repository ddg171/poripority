import { useHead } from '#app'
import type { PageType, Robots} from '~~/utils/useHead';
import { makeDynamicMeta } from '~~/utils/useHead'
export const setPageMetaData = (title:string, subtitle:string, robots:Robots = 'all', type:PageType = 'website', image:string|undefined = undefined) => {
  const dynamicMeta = makeDynamicMeta(title, subtitle, robots, type, image)
  useHead(dynamicMeta)
}
