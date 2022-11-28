export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=gMmsTL7boqkQOPy81nSDmD2yKy9x90Pv&q=${category}&limit=9`;
    const resp = await fetch(url);
    // data = [] --> nos aseguramos que la variable data será un array.
    const {data = []} = await resp.json();
    // Es lo mismo literalmente que tenemos en el archivo GifExpertApp.jsx, en category.map(...)
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    //console.log(gifs);
    return gifs;
};