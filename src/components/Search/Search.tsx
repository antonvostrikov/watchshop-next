'use client'

import styles from './Search.module.scss'
import { Search as SearchLogo }  from 'lucide-react'
import React from 'react'
import ModalSearch from './ModalSearch'

interface ISerachProps {
  searchWidth?: string
  inputPadding?: string
}

const Search:React.FC<ISerachProps> = ({ searchWidth }) => {
  const [isSearch, setIsSearch] = React.useState(false)

  return (
    <div className={styles.search} style={{ width: `${searchWidth}` }}>
      <form>
        <input type="text" placeholder="Поиск" onClick={() => setIsSearch(true)} readOnly />
        <SearchLogo />
      </form>
      { isSearch && <ModalSearch closeModalSearch={() => setIsSearch(!isSearch)} /> }
    </div>
  )
}

export default Search