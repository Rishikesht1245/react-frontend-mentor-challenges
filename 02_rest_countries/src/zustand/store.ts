import { create } from "zustand";
import { Country, CountryStore, fetchCountries, fetchCountryByCode } from "./index";

// create() initializes the store
export const useCountryStore = create<CountryStore>((set) => ({
  isDark: localStorage.getItem("theme") === "dark" ? true : false,
  isLoading: false,
  error: "",
  countries: [],
  activeCountry : null,
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
      localStorage.setItem("theme", newTheme)
      return { isDark: !state.isDark };
    }),

  // handleFilter : (by : string) => {},

  handleSearchFilter: (searchBy: string, filterBy: string) =>
    set((state) => {
      const { countries } = state;

      state.isLoading = true;

      let filteredCountries: Country[] = [];

      if (filterBy) {
        filteredCountries = countries?.filter(country => (
          country?.region === filterBy
        ));
      }else {
        filteredCountries = filteredCountries?.length ? filteredCountries : countries;
      }

      if (searchBy){
        filteredCountries = filteredCountries?.filter(country => (
          country?.name?.common?.toLowerCase()?.includes(searchBy?.toLowerCase())
        ));

      }

      // show full list incase both searchBy and filter is empty
      if(!searchBy && !filterBy){
        filteredCountries = state.countries;
      }

      return { ...state, filteredCountries, isLoading : false };
    }),

    setActiveCountry : (country : Country) => set({activeCountry : country}),

    setActiveCountryByCode: async (code : string) => {
      set({ isLoading: true, error: "" });
      try {
        const country = await fetchCountryByCode(code);
        set({ activeCountry: country, isLoading: false });
      } catch (error: any) {
        set({
          error: error.message || "Failed to fetch countries",
          isLoading: false,
        });
      }
    },
}));
