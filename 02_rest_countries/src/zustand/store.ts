import { create } from "zustand";
import { CountryStore, fetchCountries } from "./index";

// create() initializes the store
export const useCountryStore = create<CountryStore>((set) => ({
  isDark: false,
  isLoading: false,
  error: "",
  countries: [],
  loadCountries: async () => {
    set({ isLoading: true, error: "" });
    try {
      const countries = await fetchCountries();
      set({ countries, isLoading: false });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch countries",
        isLoading: false,
      });
    }
  },
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
