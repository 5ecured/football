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

export const spanishLeagueOptions = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/laliga/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};

export const italianLeagueOptions = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/seriea/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};
