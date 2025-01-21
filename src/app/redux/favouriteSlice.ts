import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Favourite item interface
interface FavouriteItem {
  id: string;
  name: string;
  imageURL: string;
  price: number;
}

// Favourites state interface
interface FavouritesState {
  items: FavouriteItem[];
}

// Function to load favourites from localStorage
const loadFavouritesFromLocalStorage = (): FavouriteItem[] => {
  if (typeof window === 'undefined') {
    return []; // Return empty array for SSR
  }
  try {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  } catch (error) {
    console.error('Error loading favourites from localStorage:', error);
    return [];
  }
};

// Function to save favourites to localStorage
const saveFavouritesToLocalStorage = (items: FavouriteItem[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('favourites', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving favourites to localStorage:', error);
  }
};

// Initial state for favourites
const initialState: FavouritesState = {
  items: loadFavouritesFromLocalStorage(), // Load favourites from localStorage
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    // Add item to favourites
    addToFavourites: (state, action: PayloadAction<FavouriteItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
        saveFavouritesToLocalStorage(state.items); // Save updated favourites to localStorage
      }
    },

    // Remove item from favourites
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveFavouritesToLocalStorage(state.items); // Save updated favourites to localStorage
    },
  },
});

// Export actions and reducer
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
