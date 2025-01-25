export const fetchData = async (url) =>{
    const baseUrl = "https://foodieland-beryl.vercel.app/api";
    const res = await fetch(`${baseUrl}${url}`);
    const data = await res.json();
    return data
}