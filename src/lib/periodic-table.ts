export type ElementCategory =
  | "alkali"
  | "alkaline"
  | "transition"
  | "post-transition"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble"
  | "lanthanide"
  | "actinide"
  | "unknown";

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  mass: number;
  category: ElementCategory;
  period: number;
  group: number;
  state: "solid" | "liquid" | "gas";
  electronegativity?: number;
  synthetic?: boolean;
}

// Full periodic table (1-118). `group` for lanthanides/actinides is set to 3
// (their formal block); they are rendered in the dedicated f-block strip.
// `synthetic` marks elements that do not occur naturally (man-made).
export const ELEMENTS: Element[] = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", mass: 1.008, category: "nonmetal", period: 1, group: 1, state: "gas", electronegativity: 2.2 },
  { atomicNumber: 2, symbol: "He", name: "Helium", mass: 4.003, category: "noble", period: 1, group: 18, state: "gas" },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", mass: 6.941, category: "alkali", period: 2, group: 1, state: "solid", electronegativity: 0.98 },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", mass: 9.012, category: "alkaline", period: 2, group: 2, state: "solid", electronegativity: 1.57 },
  { atomicNumber: 5, symbol: "B", name: "Boron", mass: 10.81, category: "metalloid", period: 2, group: 13, state: "solid", electronegativity: 2.04 },
  { atomicNumber: 6, symbol: "C", name: "Carbon", mass: 12.011, category: "nonmetal", period: 2, group: 14, state: "solid", electronegativity: 2.55 },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", mass: 14.007, category: "nonmetal", period: 2, group: 15, state: "gas", electronegativity: 3.04 },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", mass: 15.999, category: "nonmetal", period: 2, group: 16, state: "gas", electronegativity: 3.44 },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", mass: 18.998, category: "halogen", period: 2, group: 17, state: "gas", electronegativity: 3.98 },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", mass: 20.18, category: "noble", period: 2, group: 18, state: "gas" },
  { atomicNumber: 11, symbol: "Na", name: "Sodium", mass: 22.99, category: "alkali", period: 3, group: 1, state: "solid", electronegativity: 0.93 },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", mass: 24.305, category: "alkaline", period: 3, group: 2, state: "solid", electronegativity: 1.31 },
  { atomicNumber: 13, symbol: "Al", name: "Aluminium", mass: 26.982, category: "post-transition", period: 3, group: 13, state: "solid", electronegativity: 1.61 },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", mass: 28.086, category: "metalloid", period: 3, group: 14, state: "solid", electronegativity: 1.9 },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", mass: 30.974, category: "nonmetal", period: 3, group: 15, state: "solid", electronegativity: 2.19 },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", mass: 32.06, category: "nonmetal", period: 3, group: 16, state: "solid", electronegativity: 2.58 },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", mass: 35.45, category: "halogen", period: 3, group: 17, state: "gas", electronegativity: 3.16 },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", mass: 39.948, category: "noble", period: 3, group: 18, state: "gas" },
  { atomicNumber: 19, symbol: "K", name: "Potassium", mass: 39.098, category: "alkali", period: 4, group: 1, state: "solid", electronegativity: 0.82 },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", mass: 40.078, category: "alkaline", period: 4, group: 2, state: "solid", electronegativity: 1 },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", mass: 44.956, category: "transition", period: 4, group: 3, state: "solid", electronegativity: 1.36 },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", mass: 47.867, category: "transition", period: 4, group: 4, state: "solid", electronegativity: 1.54 },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", mass: 50.942, category: "transition", period: 4, group: 5, state: "solid", electronegativity: 1.63 },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", mass: 51.996, category: "transition", period: 4, group: 6, state: "solid", electronegativity: 1.66 },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", mass: 54.938, category: "transition", period: 4, group: 7, state: "solid", electronegativity: 1.55 },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", mass: 55.845, category: "transition", period: 4, group: 8, state: "solid", electronegativity: 1.83 },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", mass: 58.933, category: "transition", period: 4, group: 9, state: "solid", electronegativity: 1.88 },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", mass: 58.693, category: "transition", period: 4, group: 10, state: "solid", electronegativity: 1.91 },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", mass: 63.546, category: "transition", period: 4, group: 11, state: "solid", electronegativity: 1.9 },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", mass: 65.38, category: "transition", period: 4, group: 12, state: "solid", electronegativity: 1.65 },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", mass: 69.723, category: "post-transition", period: 4, group: 13, state: "solid", electronegativity: 1.81 },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", mass: 72.63, category: "metalloid", period: 4, group: 14, state: "solid", electronegativity: 2.01 },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", mass: 74.922, category: "metalloid", period: 4, group: 15, state: "solid", electronegativity: 2.18 },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", mass: 78.971, category: "nonmetal", period: 4, group: 16, state: "solid", electronegativity: 2.55 },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", mass: 79.904, category: "halogen", period: 4, group: 17, state: "liquid", electronegativity: 2.96 },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", mass: 83.798, category: "noble", period: 4, group: 18, state: "gas", electronegativity: 3 },
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", mass: 85.468, category: "alkali", period: 5, group: 1, state: "solid", electronegativity: 0.82 },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", mass: 87.62, category: "alkaline", period: 5, group: 2, state: "solid", electronegativity: 0.95 },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", mass: 88.906, category: "transition", period: 5, group: 3, state: "solid", electronegativity: 1.22 },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", mass: 91.224, category: "transition", period: 5, group: 4, state: "solid", electronegativity: 1.33 },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", mass: 92.906, category: "transition", period: 5, group: 5, state: "solid", electronegativity: 1.6 },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", mass: 95.95, category: "transition", period: 5, group: 6, state: "solid", electronegativity: 2.16 },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", mass: 98, category: "transition", period: 5, group: 7, state: "solid", electronegativity: 1.9, synthetic: true },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", mass: 101.07, category: "transition", period: 5, group: 8, state: "solid", electronegativity: 2.2 },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", mass: 102.91, category: "transition", period: 5, group: 9, state: "solid", electronegativity: 2.28 },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", mass: 106.42, category: "transition", period: 5, group: 10, state: "solid", electronegativity: 2.2 },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", mass: 107.87, category: "transition", period: 5, group: 11, state: "solid", electronegativity: 1.93 },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", mass: 112.41, category: "transition", period: 5, group: 12, state: "solid", electronegativity: 1.69 },
  { atomicNumber: 49, symbol: "In", name: "Indium", mass: 114.82, category: "post-transition", period: 5, group: 13, state: "solid", electronegativity: 1.78 },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", mass: 118.71, category: "post-transition", period: 5, group: 14, state: "solid", electronegativity: 1.96 },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", mass: 121.76, category: "metalloid", period: 5, group: 15, state: "solid", electronegativity: 2.05 },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", mass: 127.6, category: "metalloid", period: 5, group: 16, state: "solid", electronegativity: 2.1 },
  { atomicNumber: 53, symbol: "I", name: "Iodine", mass: 126.9, category: "halogen", period: 5, group: 17, state: "solid", electronegativity: 2.66 },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", mass: 131.29, category: "noble", period: 5, group: 18, state: "gas", electronegativity: 2.6 },
  { atomicNumber: 55, symbol: "Cs", name: "Caesium", mass: 132.91, category: "alkali", period: 6, group: 1, state: "solid", electronegativity: 0.79 },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", mass: 137.33, category: "alkaline", period: 6, group: 2, state: "solid", electronegativity: 0.89 },
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", mass: 138.91, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.1 },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", mass: 140.12, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.12 },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", mass: 140.91, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.13 },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", mass: 144.24, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.14 },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", mass: 145, category: "lanthanide", period: 6, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", mass: 150.36, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.17 },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", mass: 151.96, category: "lanthanide", period: 6, group: 3, state: "solid" },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", mass: 157.25, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.2 },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", mass: 158.93, category: "lanthanide", period: 6, group: 3, state: "solid" },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", mass: 162.5, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.22 },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", mass: 164.93, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.23 },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", mass: 167.26, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.24 },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", mass: 168.93, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.25 },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", mass: 173.05, category: "lanthanide", period: 6, group: 3, state: "solid" },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", mass: 174.97, category: "lanthanide", period: 6, group: 3, state: "solid", electronegativity: 1.27 },
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", mass: 178.49, category: "transition", period: 6, group: 4, state: "solid", electronegativity: 1.3 },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", mass: 180.95, category: "transition", period: 6, group: 5, state: "solid", electronegativity: 1.5 },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", mass: 183.84, category: "transition", period: 6, group: 6, state: "solid", electronegativity: 2.36 },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", mass: 186.21, category: "transition", period: 6, group: 7, state: "solid", electronegativity: 1.9 },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", mass: 190.23, category: "transition", period: 6, group: 8, state: "solid", electronegativity: 2.2 },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", mass: 192.22, category: "transition", period: 6, group: 9, state: "solid", electronegativity: 2.2 },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", mass: 195.08, category: "transition", period: 6, group: 10, state: "solid", electronegativity: 2.28 },
  { atomicNumber: 79, symbol: "Au", name: "Gold", mass: 196.97, category: "transition", period: 6, group: 11, state: "solid", electronegativity: 2.54 },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", mass: 200.59, category: "transition", period: 6, group: 12, state: "liquid", electronegativity: 2 },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", mass: 204.38, category: "post-transition", period: 6, group: 13, state: "solid", electronegativity: 1.62 },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", mass: 207.2, category: "post-transition", period: 6, group: 14, state: "solid", electronegativity: 2.33 },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", mass: 208.98, category: "post-transition", period: 6, group: 15, state: "solid", electronegativity: 2.02 },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", mass: 209, category: "post-transition", period: 6, group: 16, state: "solid", electronegativity: 2 },
  { atomicNumber: 85, symbol: "At", name: "Astatine", mass: 210, category: "halogen", period: 6, group: 17, state: "solid", electronegativity: 2.2 },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", mass: 222, category: "noble", period: 6, group: 18, state: "gas" },
  { atomicNumber: 87, symbol: "Fr", name: "Francium", mass: 223, category: "alkali", period: 7, group: 1, state: "solid", electronegativity: 0.7 },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", mass: 226, category: "alkaline", period: 7, group: 2, state: "solid", electronegativity: 0.9 },
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", mass: 227, category: "actinide", period: 7, group: 3, state: "solid", electronegativity: 1.1 },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", mass: 232.04, category: "actinide", period: 7, group: 3, state: "solid", electronegativity: 1.3 },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", mass: 231.04, category: "actinide", period: 7, group: 3, state: "solid", electronegativity: 1.5 },
  { atomicNumber: 92, symbol: "U", name: "Uranium", mass: 238.03, category: "actinide", period: 7, group: 3, state: "solid", electronegativity: 1.38 },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", mass: 237, category: "actinide", period: 7, group: 3, state: "solid", electronegativity: 1.36, synthetic: true },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", mass: 244, category: "actinide", period: 7, group: 3, state: "solid", electronegativity: 1.28, synthetic: true },
  { atomicNumber: 95, symbol: "Am", name: "Americium", mass: 243, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", mass: 247, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", mass: 247, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", mass: 251, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", mass: 252, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", mass: 257, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", mass: 258, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", mass: 259, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", mass: 262, category: "actinide", period: 7, group: 3, state: "solid", synthetic: true },
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", mass: 267, category: "transition", period: 7, group: 4, state: "solid", synthetic: true },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", mass: 268, category: "transition", period: 7, group: 5, state: "solid", synthetic: true },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", mass: 269, category: "transition", period: 7, group: 6, state: "solid", synthetic: true },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", mass: 270, category: "transition", period: 7, group: 7, state: "solid", synthetic: true },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", mass: 269, category: "transition", period: 7, group: 8, state: "solid", synthetic: true },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", mass: 278, category: "transition", period: 7, group: 9, state: "solid", synthetic: true },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", mass: 281, category: "transition", period: 7, group: 10, state: "solid", synthetic: true },
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", mass: 282, category: "transition", period: 7, group: 11, state: "solid", synthetic: true },
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", mass: 285, category: "transition", period: 7, group: 12, state: "solid", synthetic: true },
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", mass: 286, category: "post-transition", period: 7, group: 13, state: "solid", synthetic: true },
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", mass: 289, category: "post-transition", period: 7, group: 14, state: "solid", synthetic: true },
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", mass: 290, category: "post-transition", period: 7, group: 15, state: "solid", synthetic: true },
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", mass: 293, category: "post-transition", period: 7, group: 16, state: "solid", synthetic: true },
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", mass: 294, category: "halogen", period: 7, group: 17, state: "solid", synthetic: true },
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", mass: 294, category: "noble", period: 7, group: 18, state: "gas", synthetic: true },
];

export const CATEGORY_COLORS: Record<ElementCategory, string> = {
  alkali: "#ef4444",
  alkaline: "#f97316",
  transition: "#eab308",
  "post-transition": "#84cc16",
  metalloid: "#22c55e",
  nonmetal: "#06b6d4",
  halogen: "#3b82f6",
  noble: "#8b5cf6",
  lanthanide: "#ec4899",
  actinide: "#f43f5e",
  unknown: "#64748b",
};

export const CATEGORY_LABELS: Record<ElementCategory, string> = {
  alkali: "Alkali metals",
  alkaline: "Alkaline earth metals",
  transition: "Transition metals",
  "post-transition": "Post-transition metals",
  metalloid: "Metalloids",
  nonmetal: "Non-metals",
  halogen: "Halogens",
  noble: "Noble (inert) gases",
  lanthanide: "Lanthanides",
  actinide: "Actinides",
  unknown: "Unknown",
};

/**
 * Grid placement for the standard 18-column periodic table.
 * Lanthanides (57-71) and actinides (89-103) are placed in the
 * detached f-block strip below the main table (rows 9 and 10).
 */
export function getGridPosition(el: Element): { row: number; col: number } {
  if (el.category === "lanthanide") {
    return { row: 9, col: 3 + (el.atomicNumber - 57) };
  }
  if (el.category === "actinide") {
    return { row: 10, col: 3 + (el.atomicNumber - 89) };
  }
  return { row: el.period, col: el.group };
}

export function getElementByProtons(protons: number): Element | undefined {
  return ELEMENTS.find((e) => e.atomicNumber === protons);
}

export function getElectronShells(electrons: number): number[] {
  const shells = [2, 8, 8, 18, 18, 32, 32];
  const result: number[] = [];
  let remaining = electrons;
  for (const cap of shells) {
    if (remaining <= 0) break;
    const fill = Math.min(remaining, cap);
    result.push(fill);
    remaining -= fill;
  }
  if (remaining > 0) result.push(remaining);
  return result;
}

export function getIonCharge(protons: number, electrons: number): string {
  const diff = protons - electrons;
  if (diff === 0) return "Neutral";
  if (diff > 0) return `${diff}+`;
  return `${Math.abs(diff)}-`;
}
