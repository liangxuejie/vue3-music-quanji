import { get } from './base'

export function getRecommend() {
  return get('/use/api/getRecommend')
}

export function getAlbum(album) {
  return get('/use/api/getAlbum', {
    id: album.id
  })
}
