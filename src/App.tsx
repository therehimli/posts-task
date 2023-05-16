import { useState } from 'react'

import { useFetch } from '@/hooks/useFetch'
import Posts from './components/Posts/Posts'
import Search from './components/Search/Search'
import { IPost } from './types/Posts'
import { useDebounce } from './hooks/useDebounce'
import './App.css'

function App() {
  const [inputText, setInputText] = useState<string>('')
  const [activeFavorite, setActiveFavorite] = useState(true)

  const debouncedValue = useDebounce(inputText, 500)

  const { posts, error, loading } = useFetch<IPost>(
    'http://localhost:3001/posts',
    debouncedValue,
    activeFavorite
  )

  return (
    <div className="App">
      <Search inputText={inputText} setInputText={setInputText} />
      <Posts
        activeFavorite={activeFavorite}
        setActiveFavorite={setActiveFavorite}
        posts={posts}
        error={error}
        loading={loading}
      />
    </div>
  )
}

export default App
