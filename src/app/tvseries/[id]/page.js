import SeriesDetails from "@/components/SeriesDetails"

export default async function page({params}) {

    
    const id = params.id

    const key = process.env.Api_Key;
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${key}`;

    const fetcheddata = await fetch(url);

    const response = await fetcheddata.json();
    const data = response.results;

    const original_data = data.find(p=> p.id==id);

  return (
    <div>
           <SeriesDetails data = {original_data}/>   
    </div>
  )
}
