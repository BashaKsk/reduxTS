import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Data, HairColor } from "./components/Data/Data";
import { createContext, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
interface AppContextInterface {
  name: string;
  age: number;
  country: string;
  updateContext: (newValues: Partial<AppContextInterface>) => void;
}

export const AppContext = createContext<AppContextInterface | null>(null);

export function App() {
  const conextValue: AppContextInterface = {
    name: "Ksk",
    age: 20,
    country: "Inida",
    updateContext: (newValues) => {
      setcontextValues((prev: AppContextInterface) => ({
        ...prev,
        ...newValues,
      }));
    },
  };

  const [contextValues, setcontextValues] =
    useState<AppContextInterface>(conextValue);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppContext.Provider value={contextValues}>
                <>
                  <Data
                    name={"ksk"}
                    age={22}
                    emial={"ksk@gmail.com"}
                    hairColor={HairColor.Brown}
                  />
                </>
              </AppContext.Provider>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
