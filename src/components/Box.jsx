import Image from 'next/image'
import styles from '../styles/Box.module.css'

export default function Box({image,title,date}) {
  return (
    <>
        <section className={styles.box}>
            <Image src={`https://image.tmdb.org/t/p/w500${image}`}  width={250} height={300} />
            <h1>{title}</h1>
            <p>{date}</p>
        </section>
      
    </>
  )
}
