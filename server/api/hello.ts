import { hoge } from '../../components/server/common'

export default defineEventHandler(() => {
  return {
    api: hoge()
  }
})
