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
  population: number;
};

export type CountryStore = {
  isDark : boolean;
  isLoading: boolean;
  error: string;
  countries: Country[];
  loadCountries: () => Promise<void>;
  toggleTheme : () => void;
};

// these are the type we need to use in the set fucntion of zustand store. (these are the arguments which we can pass and return types)
export type StoreSet = (
  partial:
    | CountryStore
    | Partial<CountryStore>
    | ((state: CountryStore) => CountryStore | Partial<CountryStore>),
  replace?: boolean | undefined
) => void;
