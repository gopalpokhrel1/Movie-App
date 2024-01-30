import ItemDetails from "@/components/ItemDetails";


export default async function page({params}) {

    const id = params.id

    const key = process.env.Api_Key;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`;

    const fetcheddata = await fetch(url);

    const response = await fetcheddata.json();
    const data = response.results;

    const original_data = data.find(p=> p.id==id);



  return (
    <>
    <ItemDetails data = {original_data}/>
    </>
  )
}
