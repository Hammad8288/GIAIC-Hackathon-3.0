"use client";
import type { Metadata } from "next";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./Components/Navbar";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
const pop = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
import "./globals.css";
import Footer from "./Components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          
          {/* Wrap the entire app in Redux Provider */}
          <Provider store={store}>
            <div className="relative">
              <Navbar />
              <div className="flex">
                {/* Main content */}
                <div className="flex-grow">{children}</div>
                <Toaster />
              </div>
              <Footer />
            </div>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default AppLayout;
