"use client";

import { ReactNode } from "react";
import { AuthProvider } from "@/lib/hooks/auth/AuthContext";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
