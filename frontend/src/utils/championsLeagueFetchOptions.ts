export const options = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/championsleague/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};