import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

import { IPost } from '@/types/Posts'
import styles from './Post.module.css'
import * as api from '@/api/favorite'

interface PostProps {
  post: IPost
  activeFavorite: boolean
  setActiveFavorite: (activeFavorite: boolean) => void
}

const Post: FC<PostProps> = ({ post, activeFavorite, setActiveFavorite }) => {
  const addFavoriteHandler = async () => {
    await api.addFavorite<IPost>(post)
    await api.toggleFavorite<IPost, number>({ favorite: true }, post.id)

    setActiveFavorite(!activeFavorite)
  }

  const deleteFavoriteHandler = async () => {
    await api.deleteFavorite<number>(post.id)
    await api.toggleFavorite<IPost, number>({ favorite: false }, post.id)

    setActiveFavorite(!activeFavorite)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{post.title}</h3>
        {post.favorite ? (
          <AiFillHeart
            onClick={deleteFavoriteHandler}
            size={20}
            className={styles.favorite}
          />
        ) : (
          <AiOutlineHeart
            onClick={addFavoriteHandler}
            size={20}
            className={styles.favorite}
          />
        )}
      </div>
      <p className={styles.body}>{post.body}</p>
    </div>
  )
}

export default Post
