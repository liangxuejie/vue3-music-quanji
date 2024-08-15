import { get } from './base'

export function getRecommend() {
  return get('/use/api/getRecommend')
}