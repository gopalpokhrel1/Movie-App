

'use client'

import SeriesBox from '../../components/SeriesBox'
import styles from '@/styles/Movie.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function page() {

  const key = process.env.Api_Key;
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${key}`;

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
          <h1>Series</h1>
        </section>

        <section className={styles.grid}>
          <section className={styles.data}>
            {
              filter.map((item) => {
                return (
                  <>
                    <Link href={`/tvseries/${item.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                      <SeriesBox image={item.poster_path} name={item.name}  />
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
