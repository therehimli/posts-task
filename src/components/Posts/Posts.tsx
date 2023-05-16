import { FC } from 'react'

import { IPost } from '@/types/Posts'
import styles from './Posts.module.css'
import Post from '../Post/Post'

interface PostsProps {
  posts: IPost[]
  error: string
  loading: boolean
  activeFavorite: boolean
  setActiveFavorite: (activeFavorite: boolean) => void
}

const Posts: FC<PostsProps> = ({
  posts,
  loading,
  error,
  activeFavorite,
  setActiveFavorite,
}) => {
  return loading ? (
    <div className={styles.loading}>loading...</div>
  ) : error ? (
    <div className={styles.error}>Опс, что-то пошло не так</div>
  ) : (
    <div className={styles.wrapper}>
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          activeFavorite={activeFavorite}
          setActiveFavorite={setActiveFavorite}
        />
      ))}
    </div>
  )
}

export default Posts
