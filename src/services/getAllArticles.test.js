import getAllArticles from './getAllArticles';
import { mockResponse } from './mockData';

global.fetch = require('jest-fetch-mock');

describe("getAllArticles",()=>{
    beforeEach(()=>{
        fetch.resetMocks();
    })

    it('should fetch data from from API',async()=>{
        fetch.mockResponseOnce(JSON.stringify(mockResponse));
        const apiData = await getAllArticles();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`);
        expect(apiData).toEqual(mockResponse);
    })
    it('should handle fetch errors', async () => {
        fetch.mockReject(new Error('API failure'));
    
        await expect(getAllArticles()).rejects.toThrow('API failure');
    
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`);
      });
})