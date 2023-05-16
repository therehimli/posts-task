import { FC } from 'react'

import styles from './Search.module.css'

interface SearchProps {
  setInputText: (searchText: string) => void
  inputText: string
}

const Search: FC<SearchProps> = ({ setInputText, inputText }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="search..."
      value={inputText}
      onChange={(event) => setInputText(event.target.value)}
    />
  )
}

export default Search
