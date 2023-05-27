import { createContext } from "react";

const StdContext = createContext('Junaid Ahmed');
const StdProvider = StdContext.Provider;
const StdConsumer = StdContext.Consumer;
export {StdContext, StdProvider, StdConsumer}