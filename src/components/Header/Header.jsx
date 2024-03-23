import { Link } from "react-router-dom"
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.main}>
        <Link to={'/'}>Главная</Link>
        <Link to={'/create'}>Создать пост</Link>
      </div>
    </nav>
  )
}

export default Header