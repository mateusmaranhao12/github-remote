import Image from "next/image"
import Logo from '../../assets/logo.svg'
import styles from './styles.module.scss'

export default function Header() {
   return (
    <header className={styles.header}>
        <Image src={Logo} height={48} width={58} alt="Logo" />
        <h2>GitHub Profile</h2>
    </header>
   ) 
}