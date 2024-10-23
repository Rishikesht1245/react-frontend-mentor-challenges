import { Country } from "./index";

const BASE_URL = 'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital';


export const fetchCountries = async() : Promise<Array<Country> | undefined> => {
    try {
        const response = await fetch(BASE_URL);

        if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data : Country[] = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log(`Error in fetching countries :: ${error}`);
    }
}