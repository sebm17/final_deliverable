import { createContext, useContext } from "react";

const B1FileInputContext = createContext();
export const B1FileInputProvider = B1FileInputContext.Provider;
export const useB1FileInput = () => useContext(B1FileInputContext);
