export const championsLeagueOptions = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/championsleague/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};

export const englishPremierLeagueOptions = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/premierleague/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};