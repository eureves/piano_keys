import { FunctionComponent, ReactNode, useState } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { InstrumentContext } from "./Context";

type Props = {
  children: ReactNode;
};

export const InstrumentContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);
  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  );
};
