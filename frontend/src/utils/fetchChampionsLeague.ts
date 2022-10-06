import axios from "axios";

export const options = {
    method: 'GET',
    url: 'https://football98.p.rapidapi.com/championsleague/results',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID,
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};

export const fetchChampionsLeague = async () => {
    const { data } = await axios.request(options)
    const dataInObject = data[0] //based on the API, data[0] seems to return the latest matchday

    /**
     * Now inside dataInObject, we have:
     *          KEY                     VALUE
     * Group stage: Matchday 3: [{..}, {..}, {..}, etc.] //this VALUE is what latestMatchday contains
     * Group stage: Matchday 2: [{..}, {..}, {..}, etc.]
     * Group stage: Matchday 1: [{..}, {..}, {..}, etc.]
     * 
     * Below, Object.values() returns just the values of an object, in an array. Then we use [0] to get first element
     * [0] used below basically is the same as       dataInObject["Group stage: Matchday 3"]. Its just easier to use [0]
     * 
     * 
     */

    const latestMatchday = Object.values(dataInObject)[0]

    //Now, latestMatchday is an array of objects (see diagram above). each object represents a match
    console.log(latestMatchday)
}