// Data for the Molecule Builder lab. Atoms have CPK-style colours and the
// molecule lookup is keyed by Hill-notation formula so any combination of
// atoms can be identified.

export interface AtomInfo {
  symbol: string;
  name: string;
  color: string;
  textDark?: boolean;
}

export const ATOMS: AtomInfo[] = [
  { symbol: "H", name: "Hydrogen", color: "#e2e8f0", textDark: true },
  { symbol: "C", name: "Carbon", color: "#475569" },
  { symbol: "N", name: "Nitrogen", color: "#3b82f6" },
  { symbol: "O", name: "Oxygen", color: "#ef4444" },
  { symbol: "S", name: "Sulfur", color: "#eab308", textDark: true },
  { symbol: "Cl", name: "Chlorine", color: "#22c55e", textDark: true },
  { symbol: "Na", name: "Sodium", color: "#a855f7" },
  { symbol: "Ca", name: "Calcium", color: "#f97316" },
];

export const ATOM_COLORS: Record<string, AtomInfo> = Object.fromEntries(
  ATOMS.map((a) => [a.symbol, a])
);

export interface MoleculeInfo {
  formula: string;
  name: string;
  description: string;
  kind: "element" | "compound" | "ionic";
}

// Keyed by Hill-notation formula (see toHillFormula).
export const MOLECULES: Record<string, MoleculeInfo> = {
  H2O: { formula: "H₂O", name: "Water", description: "Essential for all life. Makes up ~60% of the human body.", kind: "compound" },
  CO2: { formula: "CO₂", name: "Carbon dioxide", description: "Waste gas from respiration; exhaled by the lungs.", kind: "compound" },
  CO: { formula: "CO", name: "Carbon monoxide", description: "A toxic gas that binds haemoglobin more strongly than oxygen.", kind: "compound" },
  O2: { formula: "O₂", name: "Oxygen gas", description: "Carried by haemoglobin in red blood cells; vital for cells.", kind: "element" },
  H2: { formula: "H₂", name: "Hydrogen gas", description: "The lightest and most abundant element in the universe.", kind: "element" },
  N2: { formula: "N₂", name: "Nitrogen gas", description: "Makes up ~78% of the air we breathe.", kind: "element" },
  O3: { formula: "O₃", name: "Ozone", description: "Protects Earth from UV radiation in the upper atmosphere.", kind: "element" },
  CH4: { formula: "CH₄", name: "Methane", description: "The simplest hydrocarbon and a potent greenhouse gas.", kind: "compound" },
  NH3: { formula: "NH₃", name: "Ammonia", description: "Used in fertilisers; a waste product the liver converts to urea.", kind: "compound" },
  HCl: { formula: "HCl", name: "Hydrogen chloride", description: "Dissolves to form hydrochloric acid — found in your stomach.", kind: "compound" },
  H2O2: { formula: "H₂O₂", name: "Hydrogen peroxide", description: "An antiseptic that breaks down into water and oxygen.", kind: "compound" },
  H2S: { formula: "H₂S", name: "Hydrogen sulfide", description: "A toxic gas with a rotten-egg smell.", kind: "compound" },
  SO2: { formula: "SO₂", name: "Sulfur dioxide", description: "A pollutant gas that contributes to acid rain.", kind: "compound" },
  NaCl: { formula: "NaCl", name: "Sodium chloride", description: "Table salt — an ionic compound vital for nerve signals.", kind: "ionic" },
  NaOH: { formula: "NaOH", name: "Sodium hydroxide", description: "A strong base, also called caustic soda.", kind: "ionic" },
  CaCO3: { formula: "CaCO₃", name: "Calcium carbonate", description: "Found in bones, shells, limestone and antacids.", kind: "ionic" },
  CaO: { formula: "CaO", name: "Calcium oxide", description: "Quicklime — used in cement and steel making.", kind: "ionic" },
  C2H6O: { formula: "C₂H₆O", name: "Ethanol", description: "The alcohol in drinks; also a medical disinfectant.", kind: "compound" },
  C2H4: { formula: "C₂H₄", name: "Ethene", description: "A plant hormone and the building block of polyethylene plastic.", kind: "compound" },
  C2H6: { formula: "C₂H₆", name: "Ethane", description: "A hydrocarbon found in natural gas.", kind: "compound" },
  C3H8: { formula: "C₃H₈", name: "Propane", description: "A fuel used in BBQs and heating.", kind: "compound" },
  C6H12O6: { formula: "C₆H₁₂O₆", name: "Glucose", description: "Blood sugar — the body's primary energy source.", kind: "compound" },
  CH4O: { formula: "CH₄O", name: "Methanol", description: "Wood alcohol — toxic if ingested.", kind: "compound" },
  H2SO4: { formula: "H₂SO₄", name: "Sulfuric acid", description: "A strong acid used widely in industry and car batteries.", kind: "compound" },
  HNO3: { formula: "HNO3", name: "Nitric acid", description: "A strong, corrosive acid used in fertiliser manufacture.", kind: "compound" },
};

const SUBSCRIPTS: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
};

export function toSubscript(formula: string): string {
  return formula.replace(/\d/g, (d) => SUBSCRIPTS[d] ?? d);
}

// Convert a count map into a canonical Hill-notation key (Carbon, then
// Hydrogen, then everything else alphabetical). Counts of 1 are omitted.
export function toHillFormula(counts: Record<string, number>): string {
  const entries = Object.entries(counts).filter(([, n]) => n > 0);
  if (entries.length === 0) return "";
  const map = new Map(entries);
  const ordered: string[] = [];
  const hasCarbon = map.has("C");

  if (hasCarbon) {
    ordered.push("C");
    if (map.has("H")) ordered.push("H");
  }
  const rest = [...map.keys()]
    .filter((s) => !(hasCarbon && (s === "C" || s === "H")))
    .sort();
  ordered.push(...rest);

  return ordered
    .map((sym) => {
      const n = map.get(sym)!;
      return n === 1 ? sym : `${sym}${n}`;
    })
    .join("");
}

export interface MoleculeChallenge {
  formula: string;
  name: string;
  hint: string;
}

export const MOLECULE_CHALLENGES: MoleculeChallenge[] = [
  { formula: "H2O", name: "Water", hint: "2 hydrogen + 1 oxygen" },
  { formula: "CO2", name: "Carbon dioxide", hint: "1 carbon + 2 oxygen" },
  { formula: "O2", name: "Oxygen gas", hint: "2 oxygen atoms" },
  { formula: "CH4", name: "Methane", hint: "1 carbon + 4 hydrogen" },
  { formula: "NH3", name: "Ammonia", hint: "1 nitrogen + 3 hydrogen" },
  { formula: "NaCl", name: "Table salt", hint: "1 sodium + 1 chlorine" },
  { formula: "C2H6O", name: "Ethanol", hint: "2 carbon + 6 hydrogen + 1 oxygen" },
  { formula: "C6H12O6", name: "Glucose", hint: "6 carbon + 12 hydrogen + 6 oxygen" },
];
