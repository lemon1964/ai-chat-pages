// src/components/features/providers/AppProviders.tsx
"use client";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}