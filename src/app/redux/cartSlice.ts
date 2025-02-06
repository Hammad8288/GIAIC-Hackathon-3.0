import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the cart item and state interfaces
interface CartItem {
  id: string;
  name: string;
  price: number;
  imageURL: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}


// Function to load cart items from localStorage (client-side only)
const loadFromLocalStorage = (): CartItem[] => {
  if (typeof window === "undefined") {
    return []; // Return an empty array during SSR
  }
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

// Function to save cart items to localStorage (client-side only)
const saveToLocalStorage = (items: CartItem[]) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

// Lazy initialization for initial state
const getInitialState = (): CartState => ({
  items: loadFromLocalStorage(),
  totalAmount: 0,
});

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage(state.items); // Save updated cart to localStorage
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveToLocalStorage(state.items); // Save updated cart to localStorage
    },
    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage(state.items); // Save updated cart to localStorage
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (type === "increase") {
          item.quantity += 1;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      saveToLocalStorage(state.items); // Save updated cart to localStorage
    },
  },
});

// Export the actions and reducer
export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
