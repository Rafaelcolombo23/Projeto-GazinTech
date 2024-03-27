import styles from './styles.module.scss'
import Link from 'next/link'
import logoImg from '../../../public/logoImg.png'
import Image from 'next/image'

export function Header(){
return(
    <header className={styles.headerContainer}>

        <div className={styles.headerContent}>
        <Image src={logoImg} alt='Logo Devs' width={200}></Image>

            <nav className={styles.menuNav}>
                <Link href="/niveis">
                    <p> Cadastro Niveis</p>
                </Link>
                <Link href="/devs">
                    <p> Cadastro Devs</p>
                </Link>
                <Link href="/devLista">
                    <p>Lista de Devs</p>
                </Link>
                <Link href="/nivelLista">
                    <p>Lista de Niveis</p>
                </Link>
            </nav>
        </div>
    </header>
)
}