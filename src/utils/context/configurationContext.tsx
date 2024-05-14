import React, { useContext } from "react";
import { useFetchConfiguration } from "../api/useConfig";
import { ConfigResponse } from "../fetcher/config";

type ContextType = {
  config: ConfigResponse;
  baseUrl: string | null;
};

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const Context = React.createContext();

function Provider({ children }: { children: React.ReactNode }) {
  const { data: dataConfig } = useFetchConfiguration();

  const config = dataConfig?.data;
  const baseUrl = config?.images?.secure_base_url + "original" || null;

  const contextValue = { config, baseUrl };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

function useConfigurationContext() {
  return (useContext(Context) || {}) as ContextType;
}

export { Provider, useConfigurationContext };
