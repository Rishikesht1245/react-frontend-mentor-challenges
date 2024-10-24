import { create } from "zustand";
import { Country, CountryStore, fetchCountries } from "./index";

// create() initializes the store
export const useCountryStore = create<CountryStore>((set) => ({
  isDark: false,
  isLoading: false,
  error: "",
  countries: [],
  filteredCountries: [],

  loadCountries: async () => {
    set({ isLoading: true, error: "" });
    try {
      const countries = await fetchCountries();
      set({ countries, filteredCountries: countries, isLoading: false });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch countries",
        isLoading: false,
      });
    }
  },

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      return { isDark: !state.isDark };
    }),

  // handleFilter : (by : string) => {},

  handleSearchFilter: (searchBy: string, filterBy: string) =>
    set((state) => {
      const { countries } = state;

      let filteredCountries: Country[] = [];

      if (searchBy)
        filteredCountries = countries?.filter((country) =>
          country?.name?.common?.includes(searchBy)
        );

      if (filterBy) {
        const dataToFilter: Country[] =
          filteredCountries?.length > 0 ? filteredCountries : countries;
        filteredCountries = dataToFilter?.filter(country => (
          country?.region === filterBy
        ));
      }

      return { ...state, filteredCountries };
    }),
}));
