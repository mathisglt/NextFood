"use client"
import Link from "next/link"
import Image from "next/image"
import logoImg from "/assets/logo.png"
import classes from "./navbar.module.css"
import { usePathname } from "next/navigation"
export default function Navbar() {
    const path = usePathname();
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="logo" priority/>
                NextFood
            </Link>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Link href="/meals" className={path.startsWith('/meals') ? classes.active:undefined}>Repas</Link>
                    </li>
                    <li>
                        <Link href="/community" className={path.startsWith('/community') ? classes.active:undefined}>Communauté</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}