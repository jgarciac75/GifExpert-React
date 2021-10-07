export const getGifs = async (categoria) =>{
    // La Url con Datos Concetenados
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=ZW4uBIAco4YSZtqDK4Dm3QrnLEQRrzZx`;
    console.log(url)
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(gifs)
   // setImages(gifs);
   return gifs
}
