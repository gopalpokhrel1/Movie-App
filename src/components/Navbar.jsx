"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/Navbar.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const [display, setDisplay]= useState(true);
  return (
    <>
      
        <nav className={`${styles.nav}  ${display ?  "" : styles.shownav}`}>
          <section className="image" onClick={()=> setDisplay(true)}>
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                className={styles.logo}
                alt="Logo Photo"
              />
            </Link>
          </section>

          <section>
            <ul className={styles.list}>
              <li>
                <Link href="/" className={styles.link} onClick={()=> setDisplay(true)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/movie" className={styles.link} onClick={()=> setDisplay(true)}>
                  Movie
                </Link>
              </li>
              <li>
                <Link href="/tvseries" className={styles.link} onClick={()=> setDisplay(true)}>
                  TV Series
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <button
              onClick={() =>{
                router.push("/login");
                setDisplay(true);
              }}
              className={styles.button}
            >
              Login
            </button>
          </section>
        </nav>

        <section className={styles.right} onClick={() => setDisplay(false)}>
          <IoIosArrowForward size={30} className={styles.arrow}/>

        </section>

        
      
    </>
  );
}
