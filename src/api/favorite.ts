import { IPost } from '@/types/Posts'

const URL = 'http://localhost:3001'

export async function addFavorite<T extends IPost>(post: T) {
  return fetch(`${URL}/favorites`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function deleteFavorite<T extends number>(id: T) {
  return fetch(`${URL}/favorites/${id}`, {
    method: 'DELETE',
  })
}

export async function toggleFavorite<T extends IPost, K extends number>(
  favorite: Partial<T>,
  id: K
) {
  return fetch(`${URL}/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(favorite),
    headers: {
      'Content-type': 'application/json',
    },
  })
}
