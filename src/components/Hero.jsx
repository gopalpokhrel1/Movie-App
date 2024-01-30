'use client'

import styles from '../styles/Hero.module.css'
import { useRouter } from 'next/navigation'


export default function Hero() {

  const router = useRouter();
  return (
    <>

      <section className={styles.home}>
        <p className={styles.paragraph} >Embark on a Cinematic Odyssey <br /> with Our Movie Wonderland! Immerse yourself <br /> in the reel world of entertainment as we bring you <br /> the latest blockbusters, timeless <br /> classics, and hidden gems. <br />Elevate your movie experience with reviews, <br /> trailers, and exclusive content. <br /> Your ticket to unforgettable stories awaits at cineghar!</p>

        <button
              onClick={() => router.push('/movie') }
              className={styles.button}
            >
              Watch Now
            </button>


      </section>
      
    </>
  )
}
