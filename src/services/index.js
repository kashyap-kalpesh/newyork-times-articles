const API_KEY = 'LB4CqstSLryzxVakDC80o3LGoqqBZ3jE'

export const getAllArticles = async ()=>{
    const apiRes = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`);
    return await apiRes.json()
}