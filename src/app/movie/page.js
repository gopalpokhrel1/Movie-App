'use client'

import Box from '@/components/Box';
import styles from '@/styles/Movie.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function page() {

  const key = process.env.Api_Key;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`;

  const [value, setValue] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {

    const getdata = async () => {
      const fetcheddata = await fetch(url);
      const response = await fetcheddata.json();
      const data = response.results;
      setFilter(data);
      setValue(data);
    }


    getdata();


  }, [])

  const handleinput = (e) => {
    const search = e.target.value;

    if (search === null) {
      setFilter(value);
    }

    const select = value?.filter((val) => val.title.toLowerCase().includes(search.toLowerCase()));

    setFilter(select);

  }




  return (
    <>
      <section className={styles.main}>


        <section className={styles.container} >
          <input type="text" placeholder="Choose your movie" className={styles.input} onChange={(e) => handleinput(e)} />
        </section>



        <section className={styles.header}>
          <h1>Movies</h1>
        </section>

        <section className={styles.grid}>
          <section className={styles.data}>
            {
              filter.map((item) => {
                return (
                  <>
                    <Link href={`/movie/${item.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                      <Box image={item.poster_path} title={item.title} date={item.release_date} />
                    </Link>
                  </>
                )
              })
            }
          </section>
        </section>
      </section>


    </>
  )
}
