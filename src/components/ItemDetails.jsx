'use client'

import styles from '@/styles/ItemDetails.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function ItemDetails({data}) {
    const router = useRouter();
  return (
    <>
     <section className={styles.container}>
     <section className={styles.main}>

<section className={styles.image}>
    <Image  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} width={300} height={400}/>
</section>
<section className={styles.content}>
    <p className={styles.paragraph}>
       {data.overview}
    </p>
    <h1>
       {data.title}
    </h1>

    <button className={styles.btn}  onClick={()=> router.push(`/movie/[id]/${data.id}`)}>
        play
    </button>

    <i>{data.release_date}</i>
</section>


</section>
     </section>
    </>
  )
}
