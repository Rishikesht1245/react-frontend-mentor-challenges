export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  subregion : string;
  population: number;
  currencies :{
    [currencyCode : string] : {
      name : string;
      symbol : string;
    }
  };
  languages : {
    [language : string] : string;
  };
  borders : string[];
  timezones : string[];
};

export type CountryStore = {
  isDark : boolean;
  isLoading: boolean;
  error: string;
  countries: Country[];
  activeCountry : Country | null,
  filteredCountries : Country[],
  loadCountries: () => Promise<void>;
  setActiveCountryByCode: (code : string) => Promise<void>;
  toggleTheme : () => void;
  setActiveCountry : (country : Country) => void;
  handleSearchFilter : (searchBy : string, filterBy: string) => void;
  // handleFilter : (by : string) => void;
};

// these are the type we need to use in the set fucntion of zustand store. (these are the arguments which we can pass and return types)
export type StoreSet = (
  partial:
    | CountryStore
    | Partial<CountryStore>
    | ((state: CountryStore) => CountryStore | Partial<CountryStore>),
  replace?: boolean | undefined
) => void;
