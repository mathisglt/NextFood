import Link from "next/link"
import Image from "next/image"
import logoImg from "assets/logo.png"
import classes from "./navbar.module.css"
export default function Navbar() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="logo" priority/>
                NextFood
            </Link>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Link href="/meals">Repas</Link>
                    </li>
                    <li>
                        <Link href="/community">Communauté</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}