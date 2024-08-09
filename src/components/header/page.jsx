import styles from "./header.module.css"
import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/logo.png"

export default function Header() {
    return(
        <header className={styles.header}>
                <Image className={styles.logo} src={Logo}/>
                <nav>
                    <Link href="/" className={styles.header_link}>Home</Link>
                    <Link href="/sabores" className={styles.header_link}>Sabores</Link>
                    <Link href="/sobre" className={styles.header_link}>Contato</Link>
                </nav>
        </header>
    )
}