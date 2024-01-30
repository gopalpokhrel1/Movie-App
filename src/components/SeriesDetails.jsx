'use client'

import styles from '@/styles/ItemDetails.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function SeriesDetails({data}) {
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
       {data.name}
    </h1>

    <button className={styles.btn}  onClick={()=> router.push(`/tvseries/[id]/${data.id}`)}>
        play
    </button>
</section>


</section>
     </section>
    </>
  )
}
