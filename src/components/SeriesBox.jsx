import Image from 'next/image'
import styles from '../styles/Box.module.css'

export default function Box({image,name}) {
  return (
    <>
        <section className={styles.box}>
            <Image src={`https://image.tmdb.org/t/p/w500${image}`}  width={250} height={300} />
            <h1>{name}</h1>
        </section>
      
    </>
  )
}
