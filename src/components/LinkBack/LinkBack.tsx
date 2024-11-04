'use client'

import styles from './LinkBack.module.scss'
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const LinkBack:React.FC = () => {
  const router = useRouter()

  return (
    <div className={styles.linkBack}>
      <span onClick={() => router.back()}><ChevronLeft /> Назад</span>
    </div>
  )
}

export default LinkBack