import type { InstrumentName, Player } from "soundfont-player";
import { MidiValue } from "./note";
import { Optional } from "./types";

export const DEFAULT_INSTRUMENT: InstrumentName = "accordion";
export type AudioNodesRegistry = Record<MidiValue, Optional<Player>>;
