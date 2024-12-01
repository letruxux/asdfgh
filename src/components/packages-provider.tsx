"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Package } from "@/lib/winget";

const STORAGE_KEY = "selected-packages";

type PackagesContextType = {
  packages: Package[];
  addPackage: (pkg: Package) => void;
  removePackage: (packageId: string) => void;
  clearPackages: () => void;
  setPackages: (packages: Package[]) => void;
};

const PackagesContext = createContext<PackagesContextType | undefined>(undefined);

export function PackagesProvider({ children }: { children: React.ReactNode }) {
  const [packages, setPackages] = useState<Package[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(packages));
    }
  }, [packages]);

  const addPackage = (pkg: Package) => {
    setPackages((current) => {
      if (current.some((p) => p.Id === pkg.Id)) return current;
      return [...current, pkg];
    });
  };

  const removePackage = (packageId: string) => {
    setPackages((current) => current.filter((p) => p.Id !== packageId));
  };

  const clearPackages = () => {
    setPackages([]);
  };

  return (
    <PackagesContext.Provider
      value={{ packages, addPackage, removePackage, clearPackages, setPackages }}
    >
      {children}
    </PackagesContext.Provider>
  );
}

export function usePackages() {
  const context = useContext(PackagesContext);
  if (!context) {
    throw new Error("usePackages must be used within a PackagesProvider");
  }
  return context;
}
