import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillingDetails {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
  additionalInfo: string;
  image: string;
}

interface CheckoutState {
  billingDetails: BillingDetails | null;
}

const initialState: CheckoutState = {
  billingDetails: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setBillingDetails: (state, action: PayloadAction<BillingDetails>) => {
      state.billingDetails = action.payload;
    },
    clearBillingDetails: (state) => {
      state.billingDetails = null;
    },
  },
});

export const { setBillingDetails, clearBillingDetails } = checkoutSlice.actions;
export default checkoutSlice.reducer;
