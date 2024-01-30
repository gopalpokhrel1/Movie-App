import Youtube from "@/components/Youtube";


export default async function page({params}) {
    const id = params.video_id;

    const key = process.env.Api_Key;

    const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}`;

    let data = await fetch(url);
    data = await data.json();

    data = data.results[0];


    
    
  return (
    <>
    <Youtube file={data}/>

    </>
  )
}
