import { Country } from "./index";

const BASE_URL = 'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,languages,currencies,subregion,borders,timezones';

const ALPHA_URL = 'https://restcountries.com/v3.1/alpha'


export const fetchCountries = async() : Promise<Array<Country> | undefined> => {
    try {
        const response = await fetch(BASE_URL);

        if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data : Country[] = await response.json();
        return data;

    } catch (error) {
        console.log(`Error in fetching countries :: ${error}`);
    }
}

export const fetchCountryByCode = async(code : string) : Promise<Country | undefined> => {
    try {
        const response = await fetch(ALPHA_URL+"/"+code);

        if(!response.ok) throw new Error(`HTTP error~ staus : ${response?.status}`);

        const data : Country[] = await response.json();
        console.log(data)
        return data[0];
    } catch (error) {
        console.log(`Error in fetching country by code :: ${error}`)
    }
}