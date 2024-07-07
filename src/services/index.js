const API_KEY = 'YOUR API key';

const getAllArticles = async () => {
  const apiRes = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`);
  return apiRes.json();
};

export default getAllArticles;
