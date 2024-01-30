'use client'

import YouTube from "react-youtube"
import styles from '@/styles/Youtube.module.css'

export default function Youtube({file}) {
    const opts = {
        width: '100%',  
        height: '50%'  
      };
  return (
    <>
      <section className={styles.container}>
        <YouTube videoId={file.key} opts={opts}/>
      </section>
    </>
  )
}
