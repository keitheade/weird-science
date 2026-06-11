import type { SubjectSeed } from "./types";

export const chemistry: SubjectSeed = {
  slug: "chemistry",
  name: "Chemistry",
  description: "Atoms, bonding, reactions & biochemistry for VCE",
  icon: "⚗️",
  color: "#8b5cf6",
  order: 1,
  topics: [
    {
      slug: "atomic-structure",
      yearBand: "Year 9/10",
      title: "Atomic Structure",
      description: "Protons, neutrons, electrons and the periodic table",
      surgeonRelevance:
        "Understanding atomic structure helps surgeons interpret radiology contrast agents, anaesthetic pharmacology, and blood gas chemistry.",
      order: 1,
      lessons: [
        {
          slug: "intro-atoms",
          title: "What is an Atom?",
          order: 1,
          interactiveRef: "atom-builder",
          medicalCallout:
            "The human body contains about 7×10²⁷ atoms. Surgeons use atomic-level understanding when interpreting PET scans, which track radioactive tracers at the molecular level.",
          content: `## Atoms: The Building Blocks

Everything around you — including your own body — is made of **atoms**. An atom has three subatomic particles:

- **Protons** (+ charge) — in the nucleus, determine the element
- **Neutrons** (no charge) — in the nucleus, determine the isotope
- **Electrons** (− charge) — occupy energy levels (shells) around the nucleus

The **atomic number (Z)** = number of protons. The **mass number (A)** = protons + neutrons.

A neutral atom has equal numbers of protons and electrons.

### Electron shells
Electrons fill shells from inside out: 2, 8, 8… (2n² maximum per shell).

### Try it yourself
Open the **Atom Builder** lab to construct atoms and watch the structure update in real time!`,
        },
        {
          slug: "periodic-table",
          title: "The Periodic Table",
          order: 2,
          interactiveRef: "periodic-table",
          medicalCallout:
            "Iron (Fe) in haemoglobin carries oxygen in blood. Surgeons monitor iron levels and blood chemistry using principles from the periodic table.",
          content: `## The Periodic Table

Elements are arranged by **atomic number** in the periodic table.

- **Groups** (columns) share similar chemical properties and valence electrons
- **Periods** (rows) share the same number of electron shells
- **Metals** are on the left and centre; **non-metals** on the right
- **Noble gases** (Group 18) have full outer shells — they rarely react

### Trends
- Atomic radius **decreases** across a period (more protons pull electrons closer)
- Reactivity of metals **increases** down Group 1; halogens **decrease** down Group 17

Metals tend to **lose** electrons; non-metals tend to **gain** them.`,
        },
        {
          slug: "isotopes-ions",
          title: "Isotopes & Ions",
          order: 3,
          medicalCallout:
            "Radioactive isotopes like Technetium-99m are used in nuclear medicine scans. Surgeons review these images before operating to locate tumours or assess organ function.",
          content: `## Isotopes

**Isotopes** are atoms of the same element with different numbers of neutrons.

- Carbon-12 and Carbon-14 both have 6 protons, but C-14 has 8 neutrons
- Isotopes have the **same chemical properties** but different mass

## Ions

When atoms gain or lose electrons they become **ions**:
- **Cations** — positive ions (lost electrons), e.g. Na⁺, Ca²⁺
- **Anions** — negative ions (gained electrons), e.g. Cl⁻, O²⁻

### Medical ions
Na⁺, K⁺, Ca²⁺ and Cl⁻ are essential electrolytes. Surgeons monitor these during surgery — imbalances can cause cardiac arrest.`,
        },
        {
          slug: "electron-configuration",
          title: "Electron Configuration",
          order: 4,
          medicalCallout:
            "Contrast agents used in CT scans contain iodine (53 protons). Understanding electron structure explains why iodine absorbs X-rays so effectively.",
          content: `## Electron Configuration

Electrons occupy orbitals in a specific order:

**2, 8, 8, 18…** filling pattern for main-group elements.

Examples:
- Sodium (Na, Z=11): 2, 8, 1
- Chlorine (Cl, Z=17): 2, 8, 7
- Calcium (Ca, Z=20): 2, 8, 8, 2

### Valence electrons
Electrons in the **outermost shell** determine chemical reactivity.

- Group 1 elements have 1 valence electron → very reactive metals
- Group 18 elements have a full outer shell → inert

The **octet rule**: atoms tend to gain, lose, or share electrons to achieve 8 outer electrons.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "What particle determines the identity of an element?",
          options: JSON.stringify(["Proton", "Neutron", "Electron", "Photon"]),
          answer: "Proton",
          explanation: "The number of protons (atomic number) defines which element it is.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Carbon-12 has 6 protons. How many neutrons does it have?",
          options: JSON.stringify(["6", "12", "8", "4"]),
          answer: "6",
          explanation: "Mass number 12 − 6 protons = 6 neutrons.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "An atom has 11 protons and 12 neutrons. What is its mass number?",
          options: null,
          answer: "23|0|",
          explanation: "Mass number = protons + neutrons = 11 + 12 = 23.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are subatomic particles found in the nucleus? (Select all that apply)",
          options: JSON.stringify(["Proton", "Neutron", "Electron", "Positron"]),
          answer: JSON.stringify(["Proton", "Neutron"]),
          explanation: "Only protons and neutrons are in the nucleus. Electrons orbit outside.",
          difficulty: 2,
        },
        {
          type: "interactive-task",
          prompt: "Build a neutral Oxygen atom in the Atom Builder (8 protons, 8 electrons).",
          options: null,
          answer: JSON.stringify({ protons: 8, electrons: 8 }),
          explanation: "Oxygen has atomic number 8, so a neutral atom has 8 protons and 8 electrons.",
          difficulty: 2,
          interactiveConfig: JSON.stringify({ type: "atom-builder", protons: 8, electrons: 8 }),
        },
        {
          type: "mcq",
          prompt: "Which group in the periodic table contains the noble gases?",
          options: JSON.stringify(["Group 1", "Group 7", "Group 17", "Group 18"]),
          answer: "Group 18",
          explanation: "Group 18 (He, Ne, Ar…) have full outer shells and are chemically inert.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "An ion with 11 protons and 10 electrons has a charge of:",
          options: JSON.stringify(["1+", "1−", "2+", "Neutral"]),
          answer: "1+",
          explanation: "11 protons − 10 electrons = +1 charge (Na⁺).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many electrons can the first electron shell hold?",
          options: null,
          answer: "2|0|",
          explanation: "The first shell holds a maximum of 2 electrons (2n² where n=1).",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which statements about isotopes are correct? (Select all that apply)",
          options: JSON.stringify([
            "Isotopes have the same number of protons",
            "Isotopes have the same number of neutrons",
            "Isotopes have the same chemical properties",
            "Isotopes always have the same mass number",
          ]),
          answer: JSON.stringify([
            "Isotopes have the same number of protons",
            "Isotopes have the same chemical properties",
          ]),
          explanation: "Isotopes differ in neutron number and mass, but share proton count and chemistry.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which element has the electron configuration 2, 8, 7?",
          options: JSON.stringify(["Sodium", "Chlorine", "Argon", "Potassium"]),
          answer: "Chlorine",
          explanation: "2+8+7 = 17 electrons = 17 protons = Chlorine (Z=17).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What is the charge of an electron?",
          options: JSON.stringify(["Positive (+1)", "Negative (−1)", "Neutral (0)", "Varies with element"]),
          answer: "Negative (−1)",
          explanation: "Electrons carry a relative charge of −1.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "How many protons does sodium (Na) have?",
          options: JSON.stringify(["10", "11", "12", "23"]),
          answer: "11",
          explanation: "Sodium has atomic number Z = 11, so it has 11 protons.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Calcium (Z = 20) has mass number 40. How many neutrons does it have?",
          options: null,
          answer: "20|0|",
          explanation: "Neutrons = mass number − atomic number = 40 − 20 = 20.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which of the following is an isotope of carbon-12?",
          options: JSON.stringify(["Nitrogen-14", "Carbon-14", "Oxygen-16", "Boron-11"]),
          answer: "Carbon-14",
          explanation: "Carbon-14 has 6 protons (same element as carbon-12) but 8 neutrons instead of 6.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which statements about neutrons are correct? (Select all that apply)",
          options: JSON.stringify([
            "Neutrons have no electric charge",
            "Neutrons are found in the nucleus",
            "Neutrons determine the atomic number",
            "Neutrons contribute to the mass number",
          ]),
          answer: JSON.stringify([
            "Neutrons have no electric charge",
            "Neutrons are found in the nucleus",
            "Neutrons contribute to the mass number",
          ]),
          explanation: "Protons determine atomic number, not neutrons. The other three statements are correct.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What is the electron configuration of calcium (Z = 20)?",
          options: JSON.stringify(["2, 8, 10", "2, 8, 8, 2", "2, 18", "2, 8, 2, 8"]),
          answer: "2, 8, 8, 2",
          explanation: "Calcium fills shells: 2 + 8 + 8 + 2 = 20 electrons total.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A chloride ion (Cl⁻) has 17 protons. How many electrons does it have?",
          options: null,
          answer: "18|0|",
          explanation: "Cl gains 1 electron to form Cl⁻: 17 + 1 = 18 electrons.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Technetium-99m is used in nuclear medicine scans. Its key advantage is that it:",
          options: JSON.stringify([
            "Is completely stable with no decay",
            "Emits gamma rays and has a short half-life of ~6 hours",
            "Has the same proton count as carbon",
            "Is the most abundant element on Earth",
          ]),
          answer: "Emits gamma rays and has a short half-life of ~6 hours",
          explanation: "Tc-99m emits detectable gamma radiation and decays quickly, minimising patient radiation dose.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which periodic table trends are correct? (Select all that apply)",
          options: JSON.stringify([
            "Atomic radius decreases across a period (left to right)",
            "Ionisation energy increases across a period",
            "Reactivity of Group 1 metals increases down the group",
            "Noble gases are in Group 1",
          ]),
          answer: JSON.stringify([
            "Atomic radius decreases across a period (left to right)",
            "Ionisation energy increases across a period",
            "Reactivity of Group 1 metals increases down the group",
          ]),
          explanation: "Noble gases are in Group 18, not Group 1. The other three trends are correct.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An atom that has lost electrons has become a:",
          options: JSON.stringify(["Anion", "Cation", "Isotope", "Molecule"]),
          answer: "Cation",
          explanation: "Cations are positive ions formed when atoms lose electrons.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the mass number of iron-56 (Z = 26)?",
          options: null,
          answer: "56|0|",
          explanation: "The mass number is stated in the isotope name: iron-56 has A = 56.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Elements in Group 1 of the periodic table are collectively known as:",
          options: JSON.stringify(["Halogens", "Noble gases", "Alkali metals", "Transition metals"]),
          answer: "Alkali metals",
          explanation: "Group 1 elements (Li, Na, K, Rb, Cs, Fr) are alkali metals — reactive metals with 1 valence electron.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The electron configuration 2, 8, 8, 2 belongs to which element?",
          options: JSON.stringify(["Magnesium", "Calcium", "Potassium", "Argon"]),
          answer: "Calcium",
          explanation: "2 + 8 + 8 + 2 = 20 electrons = 20 protons = Calcium (Z = 20).",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which statements about protons are correct? (Select all that apply)",
          options: JSON.stringify([
            "Protons carry a positive charge",
            "Protons are located in the nucleus",
            "The number of protons equals the mass number",
            "The number of protons defines the element",
          ]),
          answer: JSON.stringify([
            "Protons carry a positive charge",
            "Protons are located in the nucleus",
            "The number of protons defines the element",
          ]),
          explanation: "Mass number = protons + neutrons, not protons alone. The other three statements are correct.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A positron used in PET scans is best described as:",
          options: JSON.stringify([
            "An electron with double the charge",
            "An antimatter electron with a positive charge",
            "A type of photon",
            "A proton at low energy",
          ]),
          answer: "An antimatter electron with a positive charge",
          explanation: "A positron has the same mass as an electron but carries +1 charge — it is the electron's antiparticle.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "Iron-56 has atomic number 26. How many neutrons does it have?",
          options: null,
          answer: "30|0|",
          explanation: "Neutrons = mass number − atomic number = 56 − 26 = 30.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Moving from left to right across Period 3, atomic radius generally:",
          options: JSON.stringify(["Increases steadily", "Decreases", "Remains constant", "First increases then decreases"]),
          answer: "Decreases",
          explanation: "Increasing nuclear charge (more protons) pulls electrons closer, decreasing atomic radius.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An atom gains 2 electrons. The resulting particle is:",
          options: JSON.stringify(["A cation with 2+ charge", "An anion with 2− charge", "A neutral atom", "A radioisotope"]),
          answer: "An anion with 2− charge",
          explanation: "Gaining electrons creates negative charge. 2 electrons gained → 2− charge (e.g. O²⁻).",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are alkali metals? (Select all that apply)",
          options: JSON.stringify(["Lithium (Li)", "Sodium (Na)", "Calcium (Ca)", "Potassium (K)"]),
          answer: JSON.stringify(["Lithium (Li)", "Sodium (Na)", "Potassium (K)"]),
          explanation: "Li, Na, and K are Group 1 alkali metals. Calcium is a Group 2 alkaline earth metal.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The mass number (A) of an atom is defined as:",
          options: JSON.stringify([
            "Number of protons only",
            "Number of neutrons only",
            "Total number of protons and neutrons",
            "Number of electrons only",
          ]),
          answer: "Total number of protons and neutrons",
          explanation: "A = Z (protons) + N (neutrons).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "How many valence electrons does oxygen (Z = 8) have?",
          options: null,
          answer: "6|0|",
          explanation: "Oxygen configuration: 2, 6 — the outermost shell has 6 valence electrons.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which noble gas has atomic number 36?",
          options: JSON.stringify(["Helium", "Neon", "Argon", "Krypton"]),
          answer: "Krypton",
          explanation: "Krypton (Kr) has Z = 36 and a completely filled outer shell.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Electronegativity is highest for which element?",
          options: JSON.stringify(["Cesium", "Oxygen", "Fluorine", "Chlorine"]),
          answer: "Fluorine",
          explanation: "Fluorine (top-right of periodic table, excluding noble gases) is the most electronegative element.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which are properties of metals compared to non-metals? (Select all that apply)",
          options: JSON.stringify([
            "Good electrical conductors",
            "Malleable and ductile",
            "Located on the right side of the periodic table",
            "Tend to lose electrons in chemical reactions",
          ]),
          answer: JSON.stringify([
            "Good electrical conductors",
            "Malleable and ductile",
            "Tend to lose electrons in chemical reactions",
          ]),
          explanation: "Metals are on the left and centre of the periodic table. Non-metals are on the right.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Potassium (Z = 19) has electrons distributed across how many shells?",
          options: JSON.stringify(["2", "3", "4", "5"]),
          answer: "4",
          explanation: "K configuration: 2, 8, 8, 1 — four shells.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "CT contrast agents use iodine. What is iodine's atomic number?",
          options: null,
          answer: "53|0|",
          explanation: "Iodine has Z = 53. Its high atomic number means many electrons that absorb X-rays effectively.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which row lists elements found in Period 3 of the periodic table?",
          options: JSON.stringify([
            "H, He, Li",
            "Li, Be, B, C, N, O, F, Ne",
            "Na, Mg, Al, Si, P, S, Cl, Ar",
            "K, Ca, Sc, Ti",
          ]),
          answer: "Na, Mg, Al, Si, P, S, Cl, Ar",
          explanation: "Period 3 spans Z = 11 (Na) to Z = 18 (Ar), with 3 electron shells.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An alpha particle emitted during radioactive decay is identical to:",
          options: JSON.stringify([
            "A high-energy electron",
            "A neutron",
            "A helium-4 nucleus (2 protons + 2 neutrons)",
            "A gamma-ray photon",
          ]),
          answer: "A helium-4 nucleus (2 protons + 2 neutrons)",
          explanation: "Alpha particles (⁴₂He) carry 2 protons and 2 neutrons — same composition as a helium-4 nucleus.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which radioisotopes have established clinical uses? (Select all that apply)",
          options: JSON.stringify([
            "Technetium-99m — bone and organ scans",
            "Iodine-131 — thyroid cancer treatment",
            "Carbon-12 — PET imaging",
            "Fluorine-18 — PET tracer (FDG)",
          ]),
          answer: JSON.stringify([
            "Technetium-99m — bone and organ scans",
            "Iodine-131 — thyroid cancer treatment",
            "Fluorine-18 — PET tracer (FDG)",
          ]),
          explanation: "Carbon-12 is stable and non-radioactive; it is not used for PET imaging. The other three are clinically used.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "First ionisation energy generally increases across a period because:",
          options: JSON.stringify([
            "Electrons move to larger orbits",
            "Increasing nuclear charge binds outer electrons more tightly",
            "The atom becomes larger and looser",
            "There are fewer neutrons to stabilise the nucleus",
          ]),
          answer: "Increasing nuclear charge binds outer electrons more tightly",
          explanation: "More protons (higher Z) pull the outer electrons more strongly, requiring more energy to remove one.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "Calcium (Z = 20) loses 2 electrons to form Ca²⁺. How many electrons remain?",
          options: null,
          answer: "18|0|",
          explanation: "Ca has 20 electrons; losing 2 leaves 18 electrons (isoelectronic with argon).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which species are isoelectronic with neon (10 electrons)?",
          options: JSON.stringify(["Na (neutral atom)", "Na⁺ only", "Mg²⁺ and Na⁺", "Only F⁻"]),
          answer: "Mg²⁺ and Na⁺",
          explanation: "Na⁺ (11 − 1 = 10 e⁻) and Mg²⁺ (12 − 2 = 10 e⁻) both have 10 electrons, same as Ne.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Phosphorus is element number:",
          options: JSON.stringify(["14", "15", "16", "17"]),
          answer: "15",
          explanation: "Phosphorus (P) has atomic number Z = 15.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Dalton's atomic theory stated that atoms of the same element:",
          options: JSON.stringify([
            "Contain a nucleus with protons",
            "Are identical in mass and properties",
            "Orbit each other in pairs",
            "Always bond in groups of four",
          ]),
          answer: "Are identical in mass and properties",
          explanation: "Dalton proposed identical atoms per element; we now know isotopes exist with different masses.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which statements about electron shells are correct? (Select all that apply)",
          options: JSON.stringify([
            "Shell 1 holds a maximum of 2 electrons",
            "Shell 2 holds a maximum of 8 electrons",
            "Electrons fill inner shells before outer shells",
            "Shell 3 holds an unlimited number of electrons",
          ]),
          answer: JSON.stringify([
            "Shell 1 holds a maximum of 2 electrons",
            "Shell 2 holds a maximum of 8 electrons",
            "Electrons fill inner shells before outer shells",
          ]),
          explanation: "Shell 3 has a maximum of 18 electrons (not unlimited). The other three statements are correct.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which element occupies Group 2, Period 3 of the periodic table?",
          options: JSON.stringify(["Calcium (Ca)", "Magnesium (Mg)", "Beryllium (Be)", "Barium (Ba)"]),
          answer: "Magnesium (Mg)",
          explanation: "Period 3 runs from Na to Ar; Group 2 in Period 3 is magnesium (Z = 12), config 2, 8, 2.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "Carbon-14 is used in radiocarbon dating. Given Z = 6, how many neutrons does C-14 have?",
          options: null,
          answer: "8|0|",
          explanation: "Neutrons = mass number − atomic number = 14 − 6 = 8.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Fluorine readily forms F⁻ because:",
          options: JSON.stringify([
            "It loses 1 electron to have a full outer shell",
            "It gains 1 electron to complete its octet",
            "It shares electrons equally with metals",
            "It has too many protons to remain neutral",
          ]),
          answer: "It gains 1 electron to complete its octet",
          explanation: "Fluorine (config 2, 7) needs 1 more electron to reach 8 valence electrons (full outer shell).",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are true for all isotopes of the same element? (Select all that apply)",
          options: JSON.stringify([
            "Same atomic number (same number of protons)",
            "Same mass number",
            "Different number of neutrons",
            "Same chemical properties",
          ]),
          answer: JSON.stringify([
            "Same atomic number (same number of protons)",
            "Different number of neutrons",
            "Same chemical properties",
          ]),
          explanation: "Isotopes have the same atomic number and chemical properties, but different neutron counts and mass numbers.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Iodine-based CT contrast agents make blood vessels visible because iodine's high atomic number (Z = 53) means it:",
          options: JSON.stringify([
            "Emits light in the visible spectrum",
            "Absorbs X-rays strongly due to its many electrons",
            "Bonds to haemoglobin in red blood cells",
            "Reacts chemically with vessel walls",
          ]),
          answer: "Absorbs X-rays strongly due to its many electrons",
          explanation: "High-Z elements like iodine have many electron shells that absorb X-rays, creating visible contrast in CT scans.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "chemical-bonding",
      yearBand: "VCE Unit 1",
      title: "Chemical Bonding",
      description: "Ionic, covalent and metallic bonding",
      surgeonRelevance:
        "Bond polarity explains how drugs dissolve and cross cell membranes — critical for anaesthesia and antibiotics.",
      order: 2,
      lessons: [
        {
          slug: "ionic-bonding",
          title: "Ionic Bonding",
          order: 1,
          medicalCallout:
            "Sodium and potassium ions (Na⁺/K⁺) are critical for nerve signals and heart rhythm. Surgeons monitor electrolytes during operations.",
          content: `## Ionic Bonding

When a **metal** transfers electrons to a **non-metal**, ions form and attract electrostatically.

Example: **NaCl**
- Sodium (Na) loses 1 electron → Na⁺
- Chlorine (Cl) gains 1 electron → Cl⁻
- Oppositely charged ions attract

### Properties of ionic compounds
- High melting and boiling points
- Conduct electricity when **molten or dissolved** in water
- Form crystal lattice structures`,
        },
        {
          slug: "covalent-bonding",
          title: "Covalent Bonding",
          order: 2,
          medicalCallout:
            "Drug molecules are held together by covalent bonds. Understanding bond strength helps predict how medications break down in the body.",
          content: `## Covalent Bonding

Atoms **share** electrons to achieve a full outer shell.

- **Single bond** — 1 shared pair (e.g. H−H)
- **Double bond** — 2 shared pairs (e.g. O=O)
- **Triple bond** — 3 shared pairs (e.g. N≡N)

### Molecular substances
- Generally lower melting points than ionic compounds
- Do not conduct electricity
- Many biological molecules are covalently bonded: proteins, DNA, fats`,
        },
        {
          slug: "metallic-intermolecular",
          title: "Metallic & Intermolecular Forces",
          order: 3,
          medicalCallout:
            "Surgical stainless steel instruments rely on metallic bonding. Hydrogen bonds in DNA and proteins determine how tissues respond to heat during cautery.",
          content: `## Metallic Bonding

Metal atoms release valence electrons into a **sea of delocalised electrons**.
- Explains conductivity and malleability
- Surgical instruments and implants use metals (stainless steel, titanium)

## Intermolecular Forces

Forces **between** molecules (weaker than bonds within molecules):
- **Dispersion forces** — weakest, present in all molecules
- **Dipole-dipole** — between polar molecules
- **Hydrogen bonding** — strong; occurs when H is bonded to N, O, or F

Hydrogen bonding explains why water is liquid at room temperature and why DNA forms a double helix.`,
        },
        {
          slug: "lewis-structures",
          title: "Lewis Structures & VSEPR",
          order: 4,
          medicalCallout:
            "The shape of drug molecules (VSEPR) determines how they fit into receptors — like a key in a lock. This is the basis of pharmacology.",
          content: `## Lewis Structures

Show valence electrons as dots or lines around atoms.

Steps:
1. Count total valence electrons
2. Place atoms (least electronegative in centre)
3. Connect with single bonds
4. Distribute remaining electrons to satisfy octet rule

## VSEPR Theory

Electron pairs repel → molecules adopt shapes that minimise repulsion:
- 2 pairs → linear (CO₂)
- 3 pairs → trigonal planar (BF₃)
- 4 pairs → tetrahedral (CH₄)

**Molecular shape affects biological activity** — enzyme active sites bind specific shapes.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "What type of bond forms between Na and Cl in sodium chloride?",
          options: JSON.stringify(["Ionic", "Covalent", "Metallic", "Hydrogen"]),
          answer: "Ionic",
          explanation: "Sodium transfers an electron to chlorine, forming ions that attract.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "How many electrons does oxygen need to gain to fill its outer shell?",
          options: JSON.stringify(["1", "2", "3", "4"]),
          answer: "2",
          explanation: "Oxygen has 6 valence electrons; the octet rule requires 8.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are properties of ionic compounds? (Select all that apply)",
          options: JSON.stringify([
            "High melting point",
            "Conduct when dissolved in water",
            "Soft and malleable",
            "Formed between metals and non-metals",
          ]),
          answer: JSON.stringify([
            "High melting point",
            "Conduct when dissolved in water",
            "Formed between metals and non-metals",
          ]),
          explanation: "Ionic compounds are brittle (not malleable) and conduct when ions are mobile.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which intermolecular force is strongest?",
          options: JSON.stringify(["Dispersion", "Dipole-dipole", "Hydrogen bonding", "Ionic bonding"]),
          answer: "Hydrogen bonding",
          explanation: "Among intermolecular forces, hydrogen bonding is strongest. (Ionic bonding is intramolecular.)",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What shape does a molecule with 4 bonding pairs and 0 lone pairs adopt?",
          options: JSON.stringify(["Linear", "Bent", "Tetrahedral", "Trigonal planar"]),
          answer: "Tetrahedral",
          explanation: "Four bonding pairs with no lone pairs → tetrahedral geometry (e.g. CH₄).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many covalent bonds does a nitrogen atom form in ammonia (NH₃)?",
          options: null,
          answer: "3|0|",
          explanation: "Nitrogen forms 3 single bonds with hydrogen in NH₃.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Metallic bonding explains why metals are:",
          options: JSON.stringify([
            "Brittle and insulating",
            "Malleable and conductive",
            "Always gaseous at room temperature",
            "Unable to form alloys",
          ]),
          answer: "Malleable and conductive",
          explanation: "Delocalised electrons allow metals to conduct and layers to slide.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Hydrogen bonding can occur when hydrogen is bonded to: (Select all that apply)",
          options: JSON.stringify(["Carbon", "Nitrogen", "Oxygen", "Fluorine"]),
          answer: JSON.stringify(["Nitrogen", "Oxygen", "Fluorine"]),
          explanation: "H-bonding requires H bonded to N, O, or F (high electronegativity).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In a covalent bond, electrons are:",
          options: JSON.stringify([
            "Transferred from one atom to another",
            "Shared between atoms",
            "Completely removed",
            "Only found in the nucleus",
          ]),
          answer: "Shared between atoms",
          explanation: "Covalent bonds involve sharing electron pairs between non-metal atoms.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which molecule contains a double covalent bond?",
          options: JSON.stringify(["H₂O", "O₂", "NaCl", "CH₄"]),
          answer: "O₂",
          explanation: "Oxygen exists as O₂ with a double bond (O=O).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Sodium chloride (NaCl) is described as a giant ionic lattice. This means it:",
          options: JSON.stringify(["Contains individual NaCl molecules", "Has alternating Na⁺ and Cl⁻ ions in a repeating 3D structure", "Is a covalent network solid", "Has delocalised electrons throughout"]),
          answer: "Has alternating Na⁺ and Cl⁻ ions in a repeating 3D structure",
          explanation: "NaCl forms a giant ionic lattice where Na⁺ and Cl⁻ ions alternate, held by electrostatic attraction.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "How many electrons are shared in the double bond of O₂?",
          options: null,
          answer: "4|0|",
          explanation: "A double bond consists of 2 shared pairs = 4 electrons total.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are properties of covalent molecular substances? (Select all that apply)",
          options: JSON.stringify([
            "Generally low melting and boiling points",
            "Do not conduct electricity",
            "Contain positive and negative ions",
            "Can be gases, liquids, or solids at room temperature",
          ]),
          answer: JSON.stringify([
            "Generally low melting and boiling points",
            "Do not conduct electricity",
            "Can be gases, liquids, or solids at room temperature",
          ]),
          explanation: "Covalent molecular substances contain no ions. They have weak intermolecular forces and low melting points.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A polar covalent bond forms when:",
          options: JSON.stringify([
            "Two identical atoms share electrons equally",
            "Electrons are transferred completely from one atom to another",
            "Two atoms with different electronegativities share electrons unequally",
            "Delocalised electrons move freely through a lattice",
          ]),
          answer: "Two atoms with different electronegativities share electrons unequally",
          explanation: "Unequal sharing creates partial charges (δ+ and δ−), making the bond polar covalent.",
          difficulty: 2,
        },
        {
          type: "equation-balance",
          prompt: "Balance: _N₂ + _H₂ → _NH₃ (Haber process for producing ammonia fertiliser)",
          options: JSON.stringify({ reactants: ["N₂", "H₂"], products: ["NH₃"] }),
          answer: JSON.stringify({ N2: 1, H2: 3, NH3: 2 }),
          explanation: "N₂ + 3H₂ → 2NH₃ — 2 N and 6 H balanced on each side.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Carbon dioxide (CO₂) has which molecular shape?",
          options: JSON.stringify(["Bent", "Trigonal planar", "Linear", "Tetrahedral"]),
          answer: "Linear",
          explanation: "CO₂ has 2 double bonds and no lone pairs on carbon → linear geometry (180°).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Water (H₂O) has a bent shape because:",
          options: JSON.stringify([
            "Oxygen has 4 bonding pairs",
            "Oxygen has 2 lone pairs that repel bonding pairs",
            "Hydrogen is larger than oxygen",
            "Water has a triple bond",
          ]),
          answer: "Oxygen has 2 lone pairs that repel bonding pairs",
          explanation: "VSEPR: 2 lone pairs on O push the H−O−H bonds closer together, giving a bent shape (~104.5°).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "What is the approximate bond angle (in degrees) in a tetrahedral molecule like CH₄?",
          options: null,
          answer: "109.5|0.5|degrees",
          explanation: "Four equivalent bonding pairs in a tetrahedral arrangement give bond angles of 109.5°.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which properties are explained by metallic bonding? (Select all that apply)",
          options: JSON.stringify([
            "High electrical conductivity",
            "Malleability (can be hammered into sheets)",
            "High melting points in most metals",
            "All metals are transparent",
          ]),
          answer: JSON.stringify([
            "High electrical conductivity",
            "Malleability (can be hammered into sheets)",
            "High melting points in most metals",
          ]),
          explanation: "Metals are not transparent. Conductivity, malleability, and high melting points arise from delocalised electrons.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Dispersion (London) forces are present in:",
          options: JSON.stringify([
            "Only polar molecules",
            "Only ionic compounds",
            "All molecules, polar and non-polar",
            "Only metals",
          ]),
          answer: "All molecules, polar and non-polar",
          explanation: "Dispersion forces arise from temporary electron fluctuations and exist in all molecules.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A bond is considered ionic when the electronegativity difference between bonded atoms is approximately:",
          options: JSON.stringify(["Less than 0.5", "Between 0.5 and 1.7", "Greater than 1.7", "Exactly zero"]),
          answer: "Greater than 1.7",
          explanation: "A large electronegativity difference (>1.7) leads to electron transfer and ionic character.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Diamond has an extremely high melting point because it is a:",
          options: JSON.stringify([
            "Simple molecular covalent substance",
            "Ionic crystal",
            "Network (giant) covalent solid",
            "Metallic alloy",
          ]),
          answer: "Network (giant) covalent solid",
          explanation: "Diamond is a giant covalent network where each C bonds to 4 others — enormous energy is needed to break these bonds.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which are types of intermolecular forces? (Select all that apply)",
          options: JSON.stringify([
            "Dispersion forces",
            "Dipole-dipole interactions",
            "Hydrogen bonding",
            "Covalent bonding",
          ]),
          answer: JSON.stringify([
            "Dispersion forces",
            "Dipole-dipole interactions",
            "Hydrogen bonding",
          ]),
          explanation: "Covalent bonding is an intramolecular (within-molecule) force, not an intermolecular force.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Water has an unusually high boiling point for its molecular mass due to:",
          options: JSON.stringify([
            "Dispersion forces only",
            "Ionic bonding within water",
            "Hydrogen bonding between water molecules",
            "Metallic bonding",
          ]),
          answer: "Hydrogen bonding between water molecules",
          explanation: "O−H bonds allow strong hydrogen bonding between water molecules, requiring more energy to vaporise.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many lone pairs does the oxygen atom have in a water molecule?",
          options: null,
          answer: "2|0|",
          explanation: "Oxygen in H₂O has 6 valence electrons; 2 are used in bonds with H, leaving 2 lone pairs.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Boron trifluoride (BF₃) has what molecular geometry?",
          options: JSON.stringify(["Tetrahedral", "Trigonal planar", "Linear", "Trigonal pyramidal"]),
          answer: "Trigonal planar",
          explanation: "BF₃ has 3 bonding pairs and no lone pairs on B → trigonal planar with 120° bond angles.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which molecule is polar?",
          options: JSON.stringify(["CO₂ (linear)", "CCl₄ (symmetrical tetrahedral)", "H₂O (bent)", "N₂ (diatomic homonuclear)"]),
          answer: "H₂O (bent)",
          explanation: "H₂O is asymmetric with polar O−H bonds; the dipoles do not cancel, making it polar.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Drugs cross cell membranes more easily when they are:",
          options: JSON.stringify([
            "Highly ionic and charged",
            "Non-polar and lipid-soluble",
            "Very large in molecular size",
            "Strongly hydrogen-bonded to water",
          ]),
          answer: "Non-polar and lipid-soluble",
          explanation: "Cell membranes are lipid bilayers; non-polar (lipid-soluble) drugs dissolve through them more easily — critical for anaesthesia.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are true about ionic bonding? (Select all that apply)",
          options: JSON.stringify([
            "It involves electron transfer from metal to non-metal",
            "The resulting ions attract each other electrostatically",
            "Ionic compounds are always liquids at room temperature",
            "Ionic compounds conduct electricity when molten",
          ]),
          answer: JSON.stringify([
            "It involves electron transfer from metal to non-metal",
            "The resulting ions attract each other electrostatically",
            "Ionic compounds conduct electricity when molten",
          ]),
          explanation: "Most ionic compounds are solids at room temperature. The other three statements are correct.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Ranking covalent bonds by typical strength from weakest to strongest:",
          options: JSON.stringify([
            "Single < Double < Triple",
            "Triple < Double < Single",
            "All bonds are equal",
            "Double > Triple > Single",
          ]),
          answer: "Single < Double < Triple",
          explanation: "Bond strength increases with the number of shared electron pairs: single < double < triple.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "In ammonia (NH₃), nitrogen forms 3 bonds. How many lone pairs does N have?",
          options: null,
          answer: "1|0|",
          explanation: "N has 5 valence electrons; 3 are used in N−H bonds, leaving 1 lone pair.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Alloys (e.g. stainless steel, bronze) are best described as:",
          options: JSON.stringify([
            "Ionic compounds of two metals",
            "Covalent molecules of metal atoms",
            "Mixtures of metals held together by metallic bonding",
            "Salts formed from metal reactions",
          ]),
          answer: "Mixtures of metals held together by metallic bonding",
          explanation: "Alloys are mixtures of two or more metals (or a metal and non-metal), still held by metallic bonding.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which molecules can form hydrogen bonds with water? (Select all that apply)",
          options: JSON.stringify(["Ethanol (C₂H₅OH)", "Ammonia (NH₃)", "Methane (CH₄)", "Hydrogen fluoride (HF)"]),
          answer: JSON.stringify(["Ethanol (C₂H₅OH)", "Ammonia (NH₃)", "Hydrogen fluoride (HF)"]),
          explanation: "H-bonding requires H attached to N, O, or F. Methane lacks these, so it cannot H-bond with water.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Ethanol (C₂H₅OH) has a higher boiling point than dimethyl ether (CH₃OCH₃) despite similar molar mass because:",
          options: JSON.stringify([
            "Ethanol is more massive",
            "Ethanol can form hydrogen bonds; dimethyl ether cannot",
            "Dimethyl ether has stronger dispersion forces",
            "Ethanol has ionic bonds",
          ]),
          answer: "Ethanol can form hydrogen bonds; dimethyl ether cannot",
          explanation: "Ethanol has a free O−H group for hydrogen bonding; the O in dimethyl ether has no attached H for H-bonding.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Ammonia (NH₃) has a trigonal pyramidal shape because:",
          options: JSON.stringify([
            "N has 4 bonding pairs",
            "N has 3 bonding pairs and 1 lone pair that pushes bonds downward",
            "N uses only 2 bonds",
            "N and H have identical electronegativity",
          ]),
          answer: "N has 3 bonding pairs and 1 lone pair that pushes bonds downward",
          explanation: "The lone pair on N repels bonding pairs, distorting the tetrahedral geometry to a trigonal pyramidal shape.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "What is the approximate bond angle (degrees) in water (H₂O)?",
          options: null,
          answer: "104.5|1|degrees",
          explanation: "Two lone pairs on oxygen compress the H−O−H angle below 109.5° to approximately 104.5°.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "DNA strands are held together by:",
          options: JSON.stringify([
            "Covalent bonds between complementary bases",
            "Ionic bonds between nucleotides",
            "Hydrogen bonds between complementary base pairs",
            "Metallic bonds in the backbone",
          ]),
          answer: "Hydrogen bonds between complementary base pairs",
          explanation: "Hydrogen bonds (A−T and G−C) hold the two DNA strands together — weak enough to be 'unzipped' during replication.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which molecules are non-polar? (Select all that apply)",
          options: JSON.stringify(["CO₂ (linear, symmetric)", "CCl₄ (tetrahedral, symmetric)", "H₂O", "N₂"]),
          answer: JSON.stringify(["CO₂ (linear, symmetric)", "CCl₄ (tetrahedral, symmetric)", "N₂"]),
          explanation: "CO₂ and CCl₄ are symmetric so dipoles cancel. N₂ is homonuclear. H₂O is asymmetric and polar.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Intermolecular forces act:",
          options: JSON.stringify([
            "Within the nucleus of each atom",
            "Between separate molecules",
            "Between electrons and protons in the same atom",
            "Only in ionic compounds",
          ]),
          answer: "Between separate molecules",
          explanation: "Inter- means 'between'; intermolecular forces act between different molecules (as opposed to intramolecular bonds within a molecule).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Stainless steel surgical instruments can be autoclaved at 134°C because metallic bonding provides:",
          options: JSON.stringify([
            "Brittleness and low reactivity",
            "Strength, malleability, and high-temperature resistance",
            "Transparency and low density",
            "Ionic character that dissolves in saline",
          ]),
          answer: "Strength, malleability, and high-temperature resistance",
          explanation: "The delocalised electron sea gives stainless steel strength and thermal stability needed for sterilisation.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "Carbon dioxide (CO₂) has 2 double bonds. How many bonding electron pairs are in the entire molecule?",
          options: null,
          answer: "4|0|",
          explanation: "Each double bond = 2 shared pairs; 2 double bonds = 4 bonding pairs total.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In a Lewis structure of water (H₂O), how many lone pairs does oxygen have?",
          options: JSON.stringify(["0", "1", "2", "3"]),
          answer: "2",
          explanation: "Oxygen has 6 valence electrons; 2 are used in O−H bonds, leaving 4 non-bonding electrons = 2 lone pairs.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A dative (coordinate) covalent bond differs from a regular covalent bond in that:",
          options: JSON.stringify([
            "It is always stronger than an ionic bond",
            "Both electrons in the shared pair come from the same atom",
            "It only forms between metals",
            "It involves three atoms simultaneously",
          ]),
          answer: "Both electrons in the shared pair come from the same atom",
          explanation: "In a dative bond, one atom donates both electrons of the shared pair (e.g. N→H in NH₄⁺).",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which are true about covalent network solids? (Select all that apply)",
          options: JSON.stringify([
            "They have very high melting points",
            "Diamond and silicon dioxide are examples",
            "They conduct electricity easily",
            "Each atom is covalently bonded to many others",
          ]),
          answer: JSON.stringify([
            "They have very high melting points",
            "Diamond and silicon dioxide are examples",
            "Each atom is covalently bonded to many others",
          ]),
          explanation: "Network covalent solids do not conduct electricity (no free electrons or ions). The other three are correct.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Titanium is preferred over stainless steel for permanent bone implants because it:",
          options: JSON.stringify([
            "Has stronger ionic bonds",
            "Is biocompatible and forms a stable oxide layer that bonds to bone",
            "Dissolves slowly to release nutrients",
            "Has the lowest possible melting point for easy shaping",
          ]),
          answer: "Is biocompatible and forms a stable oxide layer that bonds to bone",
          explanation: "Titanium's oxide layer makes it inert in biological tissue and enables osseointegration (bone bonding).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many electrons are shared in the triple bond of N₂?",
          options: null,
          answer: "6|0|",
          explanation: "A triple bond = 3 shared pairs = 6 electrons total.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "An ionic compound conducts electricity:",
          options: JSON.stringify([
            "In solid form only",
            "Only when molten or dissolved in water",
            "Never — it is always an insulator",
            "Only when heated above 1000°C",
          ]),
          answer: "Only when molten or dissolved in water",
          explanation: "In solid ionic compounds, ions are fixed in place; when molten or dissolved, ions are free to carry charge.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Among all bond types (intramolecular), which is generally the strongest?",
          options: JSON.stringify(["Hydrogen bonding", "Ionic bond", "Covalent triple bond (e.g. N≡N)", "Dispersion force"]),
          answer: "Covalent triple bond (e.g. N≡N)",
          explanation: "Covalent triple bonds such as N≡N (945 kJ/mol) rank among the strongest intramolecular bonds known.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which properties are associated with polar molecules? (Select all that apply)",
          options: JSON.stringify([
            "They have a permanent dipole moment",
            "They exhibit stronger intermolecular forces than non-polar molecules of similar mass",
            "They always have a symmetrical geometry",
            "They can hydrogen bond if they contain N−H, O−H, or F−H bonds",
          ]),
          answer: JSON.stringify([
            "They have a permanent dipole moment",
            "They exhibit stronger intermolecular forces than non-polar molecules of similar mass",
            "They can hydrogen bond if they contain N−H, O−H, or F−H bonds",
          ]),
          explanation: "Polar molecules are asymmetric; symmetric molecules have cancelling dipoles and are non-polar.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Oxygen (O) is more electronegative than sulfur (S) because:",
          options: JSON.stringify([
            "Oxygen has more electrons than sulfur",
            "Oxygen is smaller with a higher effective nuclear charge on its outer electrons",
            "Sulfur is in a higher period and has less protons",
            "Oxygen has more neutrons",
          ]),
          answer: "Oxygen is smaller with a higher effective nuclear charge on its outer electrons",
          explanation: "Electronegativity decreases down a group; oxygen (Period 2) attracts bonding electrons more strongly than sulfur (Period 3).",
          difficulty: 3,
        },
      ],
    },
    {
      slug: "chemical-reactions",
      yearBand: "VCE Unit 2",
      title: "Chemical Reactions",
      description: "Balancing equations, stoichiometry and reaction types",
      surgeonRelevance:
        "Metabolic reactions in the body follow the same principles — surgeons must understand acid-base balance and electrolyte chemistry.",
      order: 3,
      lessons: [
        {
          slug: "balancing-equations",
          title: "Balancing Equations",
          order: 1,
          medicalCallout:
            "Cellular respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Surgeons monitor oxygen and CO₂ during anaesthesia using these principles.",
          content: `## Chemical Equations

A chemical equation shows reactants → products.

**Law of conservation of mass**: atoms are neither created nor destroyed.

### Balancing steps
1. Write correct formulae
2. Count atoms on each side
3. Add coefficients (whole numbers) to balance
4. Check all elements are balanced

Example: **2H₂ + O₂ → 2H₂O**
- H: 4 on each side ✓
- O: 2 on each side ✓`,
        },
        {
          slug: "reaction-types",
          title: "Types of Reactions",
          order: 2,
          medicalCallout:
            "Oxidation-reduction reactions power cellular metabolism. Anaesthetics work by disrupting nerve signal transmission — a biochemical reaction.",
          content: `## Common Reaction Types

### Synthesis (combination)
A + B → AB

### Decomposition
AB → A + B

### Single displacement
A + BC → AC + B

### Combustion
Fuel + O₂ → CO₂ + H₂O (+ energy)

### Redox
- **Oxidation** — loss of electrons
- **Reduction** — gain of electrons
- OIL RIG: Oxidation Is Loss, Reduction Is Gain`,
        },
        {
          slug: "stoichiometry",
          title: "Stoichiometry & Moles",
          order: 3,
          medicalCallout:
            "Drug dosing uses stoichiometry — calculating exact moles of anaesthetic agent per kilogram of body weight keeps patients safe.",
          content: `## The Mole

One **mole** = 6.02 × 10²³ particles (Avogadro's number).

**n = m/M** where n = moles, m = mass (g), M = molar mass (g/mol)

### Stoichiometry
Use mole ratios from balanced equations to calculate quantities.

Example: How many grams of H₂O from 4 g of H₂?
- 2H₂ + O₂ → 2H₂O
- 2 mol H₂ → 2 mol H₂O
- 4 g H₂ = 2 mol → 2 mol H₂O = 36 g`,
        },
        {
          slug: "energy-reactions",
          title: "Energy in Reactions",
          order: 4,
          medicalCallout:
            "Hypothermia during long surgeries slows metabolic reaction rates. Surgeons use warming blankets to maintain body temperature and enzyme activity.",
          content: `## Exothermic vs Endothermic

- **Exothermic** — releases energy (ΔH < 0), temperature rises
- **Endothermic** — absorbs energy (ΔH > 0), temperature drops

### Activation energy
Energy needed to **start** a reaction. Enzymes in the body lower activation energy.

### Reaction rate factors
- Temperature ↑ → rate ↑
- Concentration ↑ → rate ↑
- Catalyst present → rate ↑

In surgery, maintaining body temperature keeps metabolic reactions at safe rates.`,
        },
      ],
      questions: [
        {
          type: "equation-balance",
          prompt: "Balance: _H₂ + _O₂ → _H₂O",
          options: JSON.stringify({ reactants: ["H₂", "O₂"], products: ["H₂O"] }),
          answer: JSON.stringify({ H2: 2, O2: 1, H2O: 2 }),
          explanation: "2H₂ + O₂ → 2H₂O — 4 H and 2 O on each side.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "What type of reaction is: 2Mg + O₂ → 2MgO?",
          options: JSON.stringify(["Decomposition", "Synthesis", "Single displacement", "Neutralisation"]),
          answer: "Synthesis",
          explanation: "Two reactants combine to form one product — synthesis/combination.",
          difficulty: 1,
        },
        {
          type: "equation-balance",
          prompt: "Balance: _Fe + _O₂ → _Fe₂O₃",
          options: JSON.stringify({ reactants: ["Fe", "O₂"], products: ["Fe₂O₃"] }),
          answer: JSON.stringify({ Fe: 4, O2: 3, Fe2O3: 2 }),
          explanation: "4Fe + 3O₂ → 2Fe₂O₃.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "What is the molar mass of water (H₂O)? (g/mol, nearest whole number)",
          options: null,
          answer: "18|0|g/mol",
          explanation: "2(1) + 16 = 18 g/mol.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "In a redox reaction, oxidation is:",
          options: JSON.stringify([
            "Gain of electrons",
            "Loss of electrons",
            "Gain of protons",
            "Loss of mass",
          ]),
          answer: "Loss of electrons",
          explanation: "OIL RIG: Oxidation Is Loss (of electrons).",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which factors increase the rate of a chemical reaction? (Select all that apply)",
          options: JSON.stringify([
            "Increasing temperature",
            "Decreasing concentration",
            "Adding a catalyst",
            "Decreasing surface area",
          ]),
          answer: JSON.stringify(["Increasing temperature", "Adding a catalyst"]),
          explanation: "Higher temperature and catalysts increase rate. Lower concentration and surface area decrease it.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Avogadro's number is approximately:",
          options: JSON.stringify(["6.02 × 10²³", "3.00 × 10⁸", "1.60 × 10⁻¹⁹", "9.81"]),
          answer: "6.02 × 10²³",
          explanation: "One mole contains 6.02 × 10²³ particles.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "How many moles are in 44 g of CO₂? (Molar mass CO₂ = 44 g/mol)",
          options: null,
          answer: "1|0|mol",
          explanation: "n = m/M = 44/44 = 1 mol.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A reaction that releases heat to the surroundings is:",
          options: JSON.stringify(["Endothermic", "Exothermic", "Isothermal", "Reversible only"]),
          answer: "Exothermic",
          explanation: "Exothermic reactions release energy (ΔH < 0).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which is the correctly balanced equation for the combustion of methane?",
          options: JSON.stringify([
            "CH₄ + O₂ → CO₂ + H₂O",
            "CH₄ + 2O₂ → CO₂ + 2H₂O",
            "CH₄ + O₂ → CO + H₂O",
            "2CH₄ + O₂ → 2CO₂ + 4H₂O",
          ]),
          answer: "CH₄ + 2O₂ → CO₂ + 2H₂O",
          explanation: "1 C, 4 H, and 4 O are balanced on both sides.",
          difficulty: 2,
        },
        {
          type: "equation-balance",
          prompt: "Balance: _Ca + _O₂ → _CaO",
          options: JSON.stringify({ reactants: ["Ca", "O₂"], products: ["CaO"] }),
          answer: JSON.stringify({ Ca: 2, O2: 1, CaO: 2 }),
          explanation: "2Ca + O₂ → 2CaO — 2 Ca and 2 O balanced on each side.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which is an example of a decomposition reaction?",
          options: JSON.stringify([
            "2H₂ + O₂ → 2H₂O",
            "2H₂O → 2H₂ + O₂",
            "Mg + O₂ → MgO",
            "HCl + NaOH → NaCl + H₂O",
          ]),
          answer: "2H₂O → 2H₂ + O₂",
          explanation: "Decomposition: one reactant breaks into two or more simpler products.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the molar mass of sodium chloride (NaCl)? Na = 23, Cl = 35.5 g/mol",
          options: null,
          answer: "58.5|0.5|g/mol",
          explanation: "M(NaCl) = 23 + 35.5 = 58.5 g/mol.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Cellular respiration (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy) is best classified as:",
          options: JSON.stringify([
            "Endothermic synthesis",
            "Exothermic oxidation of glucose",
            "Decomposition of oxygen",
            "Neutralisation",
          ]),
          answer: "Exothermic oxidation of glucose",
          explanation: "Cellular respiration releases energy (exothermic); glucose is oxidised and O₂ is reduced.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are exothermic processes? (Select all that apply)",
          options: JSON.stringify([
            "Combustion of petrol",
            "Photosynthesis",
            "Oxidation of iron (rusting)",
            "Dissolving ammonium nitrate in water",
          ]),
          answer: JSON.stringify(["Combustion of petrol", "Oxidation of iron (rusting)"]),
          explanation: "Combustion and rusting release heat. Photosynthesis and dissolving NH₄NO₃ are endothermic.",
          difficulty: 2,
        },
        {
          type: "equation-balance",
          prompt: "Balance: _Al + _HCl → _AlCl₃ + _H₂",
          options: JSON.stringify({ reactants: ["Al", "HCl"], products: ["AlCl₃", "H₂"] }),
          answer: JSON.stringify({ Al: 2, HCl: 6, AlCl3: 2, H2: 3 }),
          explanation: "2Al + 6HCl → 2AlCl₃ + 3H₂ — 2 Al, 6 Cl, and 6 H balanced on each side.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "In the formula n = m/M, the symbol M represents:",
          options: JSON.stringify([
            "Mass in grams",
            "Molar mass in g/mol",
            "Number of molecules",
            "Molarity in mol/L",
          ]),
          answer: "Molar mass in g/mol",
          explanation: "n = moles, m = mass (g), M = molar mass (g/mol).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "How many moles are in 64 g of oxygen gas (O₂)? (Molar mass O₂ = 32 g/mol)",
          options: null,
          answer: "2|0|mol",
          explanation: "n = m/M = 64/32 = 2 mol.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "If a reaction has ΔH < 0, the reaction is:",
          options: JSON.stringify(["Endothermic", "Exothermic", "Isothermal", "Spontaneous only at high temperature"]),
          answer: "Exothermic",
          explanation: "ΔH < 0 means the products have lower energy than reactants — energy is released (exothermic).",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which factors increase the rate of a chemical reaction? (Select all that apply)",
          options: JSON.stringify([
            "Increasing temperature",
            "Increasing surface area (crushing a solid)",
            "Adding a catalyst",
            "Reducing concentration of reactants",
          ]),
          answer: JSON.stringify([
            "Increasing temperature",
            "Increasing surface area (crushing a solid)",
            "Adding a catalyst",
          ]),
          explanation: "Reducing concentration decreases collision frequency, slowing the reaction. The other three speed it up.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An enzyme is a biological catalyst. This means it:",
          options: JSON.stringify([
            "Produces energy by ionic bonding",
            "Speeds up metabolic reactions without being permanently consumed",
            "Acts as a structural material in bones",
            "Carries oxygen in the blood",
          ]),
          answer: "Speeds up metabolic reactions without being permanently consumed",
          explanation: "Enzymes lower activation energy and are regenerated after each reaction cycle, critical for sustaining metabolism.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the mass (in grams) of 2 moles of CO₂? (Molar mass CO₂ = 44 g/mol)",
          options: null,
          answer: "88|0|g",
          explanation: "m = n × M = 2 × 44 = 88 g.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Zinc displaces copper from copper sulfate solution: Zn + CuSO₄ → ZnSO₄ + Cu. This is a:",
          options: JSON.stringify(["Synthesis reaction", "Decomposition", "Single displacement", "Combustion"]),
          answer: "Single displacement",
          explanation: "A more reactive metal (Zn) displaces a less reactive metal (Cu) from solution — single displacement.",
          difficulty: 2,
        },
        {
          type: "equation-balance",
          prompt: "Balance the combustion of propane: _C₃H₈ + _O₂ → _CO₂ + _H₂O",
          options: JSON.stringify({ reactants: ["C₃H₈", "O₂"], products: ["CO₂", "H₂O"] }),
          answer: JSON.stringify({ C3H8: 1, O2: 5, CO2: 3, H2O: 4 }),
          explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O — 3 C, 8 H, and 10 O balanced on each side.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Activation energy is best defined as:",
          options: JSON.stringify([
            "The energy released by the reaction",
            "The minimum energy needed for reactants to successfully react",
            "The total energy of all reactants",
            "The energy stored in chemical bonds of products",
          ]),
          answer: "The minimum energy needed for reactants to successfully react",
          explanation: "Activation energy (Ea) is the energy barrier that must be overcome for a reaction to proceed.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which statements about catalysts are correct? (Select all that apply)",
          options: JSON.stringify([
            "Catalysts lower the activation energy",
            "Catalysts are consumed during the reaction",
            "Catalysts increase the rate of reaction",
            "Enzymes are biological catalysts",
          ]),
          answer: JSON.stringify([
            "Catalysts lower the activation energy",
            "Catalysts increase the rate of reaction",
            "Enzymes are biological catalysts",
          ]),
          explanation: "Catalysts are not consumed — they are regenerated after each reaction cycle.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In a redox reaction, the reducing agent:",
          options: JSON.stringify([
            "Is reduced and gains electrons",
            "Is oxidised and donates electrons to another species",
            "Acts as an electron acceptor",
            "Always has an oxidation number of +1",
          ]),
          answer: "Is oxidised and donates electrons to another species",
          explanation: "The reducing agent is the electron donor — it causes reduction in another species but is itself oxidised.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "In 2H₂ + O₂ → 2H₂O, what is the coefficient of H₂O?",
          options: null,
          answer: "2|0|",
          explanation: "The balanced equation shows a coefficient of 2 for water.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The law of conservation of mass states that in a chemical reaction:",
          options: JSON.stringify([
            "Energy is always released",
            "The total mass of products equals the total mass of reactants",
            "More mass is always produced than consumed",
            "Only atoms with the same mass can react",
          ]),
          answer: "The total mass of products equals the total mass of reactants",
          explanation: "Atoms are rearranged but not created or destroyed, so total mass is conserved.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "An endothermic reaction energy profile shows:",
          options: JSON.stringify([
            "Products at lower energy than reactants",
            "Products at higher energy than reactants",
            "A horizontal line (no energy change)",
            "Products and reactants at exactly the same energy",
          ]),
          answer: "Products at higher energy than reactants",
          explanation: "Endothermic reactions absorb energy (ΔH > 0), so products are at higher energy than reactants.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which statements about stoichiometry are correct? (Select all that apply)",
          options: JSON.stringify([
            "It uses mole ratios from balanced equations",
            "n = m/M relates moles, mass, and molar mass",
            "It can be used to predict the mass of products",
            "Stoichiometry only applies to gas-phase reactions",
          ]),
          answer: JSON.stringify([
            "It uses mole ratios from balanced equations",
            "n = m/M relates moles, mass, and molar mass",
            "It can be used to predict the mass of products",
          ]),
          explanation: "Stoichiometry applies to all phases (solid, liquid, gas, aqueous). The other three are correct.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "General anaesthetic agents work by disrupting nerve signal transmission. This is an example of:",
          options: JSON.stringify([
            "A nuclear reaction",
            "A biochemical reaction involving receptor binding",
            "A precipitation reaction",
            "An ionic neutralisation",
          ]),
          answer: "A biochemical reaction involving receptor binding",
          explanation: "Anaesthetics bind to membrane receptors/ion channels, disrupting neurotransmission — a biochemical process.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many moles are in 4 g of hydrogen gas (H₂)? (Molar mass H₂ = 2 g/mol)",
          options: null,
          answer: "2|0|mol",
          explanation: "n = m/M = 4/2 = 2 mol.",
          difficulty: 2,
        },
        {
          type: "equation-balance",
          prompt: "Balance: _N₂ + _O₂ → _NO (nitrogen monoxide, a vasodilator produced in blood vessel walls)",
          options: JSON.stringify({ reactants: ["N₂", "O₂"], products: ["NO"] }),
          answer: JSON.stringify({ N2: 1, O2: 1, NO: 2 }),
          explanation: "N₂ + O₂ → 2NO — 2 N and 2 O balanced on each side.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Combustion reactions always require:",
          options: JSON.stringify([
            "A catalyst",
            "Oxygen and a fuel",
            "Water as a reactant",
            "A metal oxide",
          ]),
          answer: "Oxygen and a fuel",
          explanation: "Combustion is the reaction of a fuel with oxygen, releasing energy, CO₂, and water.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which of the following equations are correctly balanced? (Select all that apply)",
          options: JSON.stringify([
            "2H₂ + O₂ → 2H₂O",
            "H₂ + O₂ → H₂O",
            "4Fe + 3O₂ → 2Fe₂O₃",
            "CH₄ + 2O₂ → CO₂ + 2H₂O",
          ]),
          answer: JSON.stringify([
            "2H₂ + O₂ → 2H₂O",
            "4Fe + 3O₂ → 2Fe₂O₃",
            "CH₄ + 2O₂ → CO₂ + 2H₂O",
          ]),
          explanation: "H₂ + O₂ → H₂O is unbalanced (2 O on left, 1 O on right). The other three are balanced.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "When two clear solutions mix to form a solid product, this is called a:",
          options: JSON.stringify(["Combustion", "Neutralisation", "Precipitation reaction", "Decomposition"]),
          answer: "Precipitation reaction",
          explanation: "A precipitate is an insoluble solid that forms when two solutions react.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Using n = cV, how many moles of HCl are in 250 mL of 0.40 mol/L hydrochloric acid?",
          options: null,
          answer: "0.1|0|mol",
          explanation: "n = c × V = 0.40 mol/L × 0.250 L = 0.10 mol.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Hypothermia during long surgeries slows metabolic reaction rates because:",
          options: JSON.stringify([
            "Cold temperature reduces enzyme activity and molecular collision frequency",
            "Cold increases activation energy permanently",
            "Hypothermia increases blood pH causing faster reactions",
            "Low temperature dissolves more O₂ and speeds reactions",
          ]),
          answer: "Cold temperature reduces enzyme activity and molecular collision frequency",
          explanation: "Lower temperature = fewer collisions with sufficient energy, and enzyme function declines, slowing metabolic reactions.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which of the following are synthesis (combination) reactions? (Select all that apply)",
          options: JSON.stringify([
            "2Mg + O₂ → 2MgO",
            "N₂ + 3H₂ → 2NH₃",
            "2H₂O → 2H₂ + O₂",
            "SO₃ + H₂O → H₂SO₄",
          ]),
          answer: JSON.stringify(["2Mg + O₂ → 2MgO", "N₂ + 3H₂ → 2NH₃", "SO₃ + H₂O → H₂SO₄"]),
          explanation: "2H₂O → 2H₂ + O₂ is decomposition. The other three combine two reactants into one product.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Photosynthesis (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂) requires light energy. It is classified as:",
          options: JSON.stringify(["Exothermic combustion", "Endothermic synthesis", "Exothermic decomposition", "Neutralisation"]),
          answer: "Endothermic synthesis",
          explanation: "Photosynthesis absorbs light energy (endothermic) and synthesises glucose from CO₂ and H₂O.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "What is the coefficient of CO₂ in balanced propane combustion: C₃H₈ + 5O₂ → __ CO₂ + 4H₂O?",
          options: null,
          answer: "3|0|",
          explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O; the coefficient of CO₂ is 3.",
          difficulty: 1,
        },
        {
          type: "equation-balance",
          prompt: "Balance: _Zn + _HCl → _ZnCl₂ + _H₂",
          options: JSON.stringify({ reactants: ["Zn", "HCl"], products: ["ZnCl₂", "H₂"] }),
          answer: JSON.stringify({ Zn: 1, HCl: 2, ZnCl2: 1, H2: 1 }),
          explanation: "Zn + 2HCl → ZnCl₂ + H₂ — 1 Zn, 2 Cl, and 2 H balanced on each side.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Le Chatelier's principle states that when a system at equilibrium is disturbed, it:",
          options: JSON.stringify([
            "Always shifts to produce more reactants",
            "Shifts to counteract the disturbance and restore equilibrium",
            "Stops reacting completely",
            "Shifts to produce more heat in all cases",
          ]),
          answer: "Shifts to counteract the disturbance and restore equilibrium",
          explanation: "Le Chatelier's principle: the system adjusts to minimise the effect of the disturbance.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which statements about endothermic reactions are correct? (Select all that apply)",
          options: JSON.stringify([
            "ΔH > 0",
            "The products have more energy than the reactants",
            "The surroundings cool down during the reaction",
            "They release heat to the surroundings",
          ]),
          answer: JSON.stringify([
            "ΔH > 0",
            "The products have more energy than the reactants",
            "The surroundings cool down during the reaction",
          ]),
          explanation: "Endothermic reactions absorb heat from surroundings (cooling them) and have ΔH > 0 and higher-energy products.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The oxidation number of oxygen in water (H₂O) is:",
          options: JSON.stringify(["0", "+2", "−2", "+1"]),
          answer: "−2",
          explanation: "Oxygen is more electronegative than hydrogen; it has an oxidation number of −2 in H₂O.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Collision theory explains that a reaction occurs when particles collide with:",
          options: JSON.stringify([
            "Any amount of energy",
            "Sufficient energy and correct orientation",
            "Only at room temperature",
            "Equal masses",
          ]),
          answer: "Sufficient energy and correct orientation",
          explanation: "Effective collisions require both the activation energy and the correct molecular orientation.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A patient requires 0.1 mmol/kg of a drug (M = 200 g/mol). For a 70 kg patient, how many milligrams are needed?",
          options: JSON.stringify(["140 mg", "1400 mg", "14 mg", "7000 mg"]),
          answer: "1400 mg",
          explanation: "0.1 mmol/kg × 70 kg = 7 mmol = 0.007 mol; 0.007 mol × 200 g/mol = 1.4 g = 1400 mg.",
          difficulty: 2,
        },
        {
          type: "equation-balance",
          prompt: "Balance the complete combustion of ethanol: _C₂H₅OH + _O₂ → _CO₂ + _H₂O",
          options: JSON.stringify({ reactants: ["C₂H₅OH", "O₂"], products: ["CO₂", "H₂O"] }),
          answer: JSON.stringify({ C2H5OH: 1, O2: 3, CO2: 2, H2O: 3 }),
          explanation: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Check: C 2=2 ✓, H 6=6 ✓, O 1+6=4+3=7 ✓.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Increasing the surface area of a solid reactant increases the reaction rate because:",
          options: JSON.stringify([
            "It increases the activation energy",
            "It provides more collision sites between particles",
            "It decreases the temperature of the reaction",
            "It changes the products formed",
          ]),
          answer: "It provides more collision sites between particles",
          explanation: "A greater surface area exposes more particles to collisions, increasing the frequency of effective collisions and thus the reaction rate.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "acids-bases",
      yearBand: "VCE Unit 3",
      title: "Acids & Bases",
      description: "pH, buffers and titrations",
      surgeonRelevance:
        "Blood pH must stay between 7.35–7.45. Surgeons monitor acid-base status during surgery to prevent organ damage.",
      order: 4,
      lessons: [
        {
          slug: "intro-acids-bases",
          title: "Acids & Bases",
          order: 1,
          medicalCallout:
            "Metabolic acidosis (pH < 7.35) during surgery can cause cardiac arrhythmias. Surgeons and anaesthetists correct this with bicarbonate infusion.",
          content: `## Acids and Bases

**Arrhenius definition:**
- **Acid** — produces H⁺ in water
- **Base** — produces OH⁻ in water

**Bronsted-Lowry:**
- **Acid** — proton (H⁺) donor
- **Base** — proton acceptor

### Common acids & bases
- Strong acids: HCl, H₂SO₄, HNO₃ (fully ionise)
- Strong bases: NaOH, KOH (fully ionise)
- Weak acids: CH₃COOH (ethanoic acid), carbonic acid`,
        },
        {
          slug: "ph-scale",
          title: "The pH Scale",
          order: 2,
          medicalCallout:
            "Blood pH is tightly regulated between 7.35 and 7.45. A drop to 7.20 can be fatal without intervention.",
          content: `## pH

**pH = −log₁₀[H⁺]**

| pH | Nature | Example |
|----|--------|---------|
| 0–6 | Acidic | Stomach acid (~pH 2) |
| 7 | Neutral | Pure water |
| 8–14 | Basic | Blood (~pH 7.4) |

### Calculations
If [H⁺] = 1 × 10⁻³ mol/L → pH = 3
If [H⁺] = 1 × 10⁻⁹ mol/L → pH = 9

**pH + pOH = 14** (at 25°C)`,
        },
        {
          slug: "neutralisation",
          title: "Neutralisation & Titration",
          order: 3,
          medicalCallout:
            "Antacids neutralise stomach acid (HCl) during reflux. Surgeons prescribe these before operations to reduce aspiration risk.",
          content: `## Neutralisation

Acid + Base → Salt + Water

Example: HCl + NaOH → NaCl + H₂O

## Titration

A technique to find the concentration of an unknown solution:
1. Add acid to base (or vice versa) from a burette
2. Use an indicator to find the **equivalence point**
3. Calculate concentration using n = cV

### Indicators
- Phenolphthalein: colourless in acid, pink in base
- Universal indicator: full pH colour range`,
        },
        {
          slug: "buffers",
          title: "Buffers & Blood Chemistry",
          order: 4,
          medicalCallout:
            "The bicarbonate buffer system (H₂CO₃/HCO₃⁻) maintains blood pH. Surgeons monitor arterial blood gas (ABG) results intraoperatively.",
          content: `## Buffer Solutions

A **buffer** resists pH change when small amounts of acid or base are added.

The blood buffer system:
**H₂CO₃ ⇌ H⁺ + HCO₃⁻**

- Excess acid → HCO₃⁻ absorbs H⁺
- Excess base → H₂CO₃ donates H⁺

### ABG values surgeons monitor
| Parameter | Normal range |
|-----------|-------------|
| pH | 7.35–7.45 |
| pCO₂ | 35–45 mmHg |
| HCO₃⁻ | 22–26 mmol/L |

Acidosis or alkalosis outside these ranges requires immediate correction.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "What is the normal pH range of human blood?",
          options: JSON.stringify(["6.0–6.5", "7.0–7.2", "7.35–7.45", "8.0–8.5"]),
          answer: "7.35–7.45",
          explanation: "Blood pH is tightly regulated between 7.35 and 7.45.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A solution has [H⁺] = 1×10⁻⁷ mol/L. What is its pH?",
          options: null,
          answer: "7|0.1|",
          explanation: "pH = −log₁₀(10⁻⁷) = 7. This is neutral.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Which is a strong acid?",
          options: JSON.stringify(["CH₃COOH", "H₂CO₃", "HCl", "H₂O"]),
          answer: "HCl",
          explanation: "HCl fully ionises in water — it is a strong acid.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the pH of a solution with [H⁺] = 1×10⁻² mol/L?",
          options: null,
          answer: "2|0.1|",
          explanation: "pH = −log(10⁻²) = 2.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which describe a Bronsted-Lowry base? (Select all that apply)",
          options: JSON.stringify([
            "Proton acceptor",
            "Proton donor",
            "Produces OH⁻ in water",
            "Can be a molecule or ion",
          ]),
          answer: JSON.stringify(["Proton acceptor", "Can be a molecule or ion"]),
          explanation: "B-L bases accept protons; they may or may not produce OH⁻.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In a neutralisation reaction, the products are:",
          options: JSON.stringify(["Salt and water", "Acid and base", "H₂ and O₂", "CO₂ only"]),
          answer: "Salt and water",
          explanation: "Acid + Base → Salt + Water.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A buffer solution is best described as:",
          options: JSON.stringify([
            "A solution that changes pH rapidly",
            "A solution that resists pH change",
            "A solution with pH = 0",
            "A solution of pure water",
          ]),
          answer: "A solution that resists pH change",
          explanation: "Buffers minimise pH change when acid or base is added.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "If pH = 4, what is [H⁺] in mol/L as a power of 10? (enter the exponent as a negative number, e.g. -4)",
          options: null,
          answer: "-4|0|",
          explanation: "[H⁺] = 10⁻⁴ mol/L; exponent = −4.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Stomach acid has a pH of approximately:",
          options: JSON.stringify(["2", "5", "7", "9"]),
          answer: "2",
          explanation: "Gastric HCl gives stomach acid a pH of about 1.5–3.5.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which are products of HCl + NaOH? (Select all that apply)",
          options: JSON.stringify(["NaCl", "H₂O", "H₂", "NaOH"]),
          answer: JSON.stringify(["NaCl", "H₂O"]),
          explanation: "HCl + NaOH → NaCl + H₂O.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "According to Arrhenius, an acid is a substance that:",
          options: JSON.stringify([
            "Accepts protons in water",
            "Produces H⁺ ions when dissolved in water",
            "Has pH > 7",
            "Reacts only with metals",
          ]),
          answer: "Produces H⁺ ions when dissolved in water",
          explanation: "Arrhenius definition: acids produce H⁺ (or H₃O⁺) in aqueous solution.",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "A solution has [H⁺] = 0.01 mol/L. What is its pH?",
          options: null,
          answer: "2|0|",
          explanation: "pH = −log₁₀(0.01) = −log₁₀(10⁻²) = 2.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which of these is a weak acid?",
          options: JSON.stringify(["HCl", "H₂SO₄", "CH₃COOH (ethanoic acid)", "HNO₃"]),
          answer: "CH₃COOH (ethanoic acid)",
          explanation: "Ethanoic acid only partially ionises in water — it is a weak acid.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are properties of strong acids? (Select all that apply)",
          options: JSON.stringify([
            "Fully ionise in water",
            "Partially ionise in water",
            "Have low pH values in solution",
            "Examples include HCl and H₂SO₄",
          ]),
          answer: JSON.stringify([
            "Fully ionise in water",
            "Have low pH values in solution",
            "Examples include HCl and H₂SO₄",
          ]),
          explanation: "Strong acids fully ionise (100%), producing high [H⁺] and very low pH. Partial ionisation describes weak acids.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "If a solution has pH = 9, what is its pOH? (pH + pOH = 14 at 25°C)",
          options: JSON.stringify(["9", "5", "14", "7"]),
          answer: "5",
          explanation: "pOH = 14 − pH = 14 − 9 = 5.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "What is [H⁺] in mol/L when pH = 12? (Enter the exponent, e.g. −12)",
          options: null,
          answer: "-12|0|",
          explanation: "[H⁺] = 10⁻¹² mol/L when pH = 12.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Phenolphthalein indicator is colourless in acid. In a solution of pH 3, phenolphthalein would appear:",
          options: JSON.stringify(["Pink", "Colourless", "Yellow", "Orange"]),
          answer: "Colourless",
          explanation: "pH 3 is acidic; phenolphthalein is colourless in acidic conditions.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The equivalence point in a titration is when:",
          options: JSON.stringify([
            "The indicator changes colour",
            "Moles of acid exactly equal the moles of base",
            "The pH of the solution is always 7",
            "The burette is half empty",
          ]),
          answer: "Moles of acid exactly equal the moles of base",
          explanation: "At the equivalence point, stoichiometrically equal amounts of acid and base have reacted.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "What is required for an effective buffer solution? (Select all that apply)",
          options: JSON.stringify([
            "A weak acid and its conjugate base",
            "A strong acid and a strong base",
            "Ability to absorb added H⁺ or OH⁻",
            "Resistance to large pH changes",
          ]),
          answer: JSON.stringify([
            "A weak acid and its conjugate base",
            "Ability to absorb added H⁺ or OH⁻",
            "Resistance to large pH changes",
          ]),
          explanation: "Buffers require a weak acid/conjugate base pair. A strong acid and strong base do not form an effective buffer.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "In the blood, CO₂ produced during metabolism reacts with water to form:",
          options: JSON.stringify([
            "Carbonic acid (H₂CO₃)",
            "Hydrochloric acid",
            "Sodium bicarbonate directly",
            "Sulfuric acid",
          ]),
          answer: "Carbonic acid (H₂CO₃)",
          explanation: "CO₂ + H₂O ⇌ H₂CO₃; this is the first step in the blood bicarbonate buffering system.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Acid rain typically has a pH between:",
          options: JSON.stringify(["1–2", "4–5", "7–8", "10–12"]),
          answer: "4–5",
          explanation: "Acid rain (formed from SO₂ and NOₓ emissions) has pH typically between 4 and 5.6.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "25.0 mL of 0.10 mol/L NaOH is used in a titration. How many millimoles of NaOH are used?",
          options: null,
          answer: "2.5|0|mmol",
          explanation: "n = c × V = 0.10 mol/L × 0.025 L = 0.0025 mol = 2.5 mmol.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "NaOH (sodium hydroxide) is best classified as:",
          options: JSON.stringify(["A weak base", "A weak acid", "A strong base", "A neutral salt"]),
          answer: "A strong base",
          explanation: "NaOH fully dissociates in water to give Na⁺ and OH⁻ — it is a strong base.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A neutral aqueous solution at 25°C has pH of:",
          options: JSON.stringify(["0", "7", "14", "Depends on concentration"]),
          answer: "7",
          explanation: "At 25°C, pure water has [H⁺] = [OH⁻] = 10⁻⁷ mol/L → pH = 7.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which statements about the pH scale are correct? (Select all that apply)",
          options: JSON.stringify([
            "Lower pH means higher [H⁺] concentration",
            "A change of 1 pH unit represents a 10-fold change in [H⁺]",
            "pH 7 is neutral regardless of temperature",
            "The pH scale runs from 0 to 14 for most aqueous solutions",
          ]),
          answer: JSON.stringify([
            "Lower pH means higher [H⁺] concentration",
            "A change of 1 pH unit represents a 10-fold change in [H⁺]",
            "The pH scale runs from 0 to 14 for most aqueous solutions",
          ]),
          explanation: "pH 7 is neutral at 25°C, but neutrality shifts with temperature. The other three are correct.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Metabolic acidosis in surgical patients occurs when blood pH falls below 7.35. A common cause is:",
          options: JSON.stringify([
            "Too much bicarbonate in the blood",
            "Accumulation of lactic acid during tissue hypoxia",
            "Hyperventilation removing too much CO₂",
            "Drinking excessive water",
          ]),
          answer: "Accumulation of lactic acid during tissue hypoxia",
          explanation: "Poor perfusion → anaerobic metabolism → lactic acid accumulates → blood pH falls (metabolic acidosis).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "A solution with pH = 3 has [H⁺] how many times greater than a solution with pH = 5?",
          options: null,
          answer: "100|0|",
          explanation: "Each pH unit = 10-fold difference in [H⁺]; pH 3 vs pH 5 = 10² = 100 times more [H⁺].",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Antacids (e.g. calcium carbonate) treat heartburn by:",
          options: JSON.stringify([
            "Increasing stomach acid production",
            "Neutralising excess hydrochloric acid in the stomach",
            "Absorbing food before digestion",
            "Reducing the flow of bile",
          ]),
          answer: "Neutralising excess hydrochloric acid in the stomach",
          explanation: "Antacids are weak bases: e.g. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are strong bases? (Select all that apply)",
          options: JSON.stringify(["NaOH", "KOH", "NH₃ (ammonia)", "Ba(OH)₂"]),
          answer: JSON.stringify(["NaOH", "KOH", "Ba(OH)₂"]),
          explanation: "NH₃ is a weak base (partially ionises). NaOH, KOH, and Ba(OH)₂ are strong bases (fully dissociate).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "In the Bronsted-Lowry model, the conjugate base of HCO₃⁻ is:",
          options: JSON.stringify(["H₂CO₃", "CO₃²⁻", "H₃O⁺", "OH⁻"]),
          answer: "CO₃²⁻",
          explanation: "HCO₃⁻ donates a proton to form CO₃²⁻ (its conjugate base).",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "If a solution has pH = 4, what is its pOH? (pH + pOH = 14)",
          options: null,
          answer: "10|0|",
          explanation: "pOH = 14 − pH = 14 − 4 = 10.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Nitric acid (HNO₃) is classified as a:",
          options: JSON.stringify(["Weak acid", "Weak base", "Strong acid", "Strong base"]),
          answer: "Strong acid",
          explanation: "HNO₃ fully ionises in water — it is a strong acid along with HCl and H₂SO₄.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The blood bicarbonate buffer system helps maintain pH because HCO₃⁻ can:",
          options: JSON.stringify([
            "React with excess H⁺ to form H₂CO₃, preventing pH from falling",
            "React with excess H⁺ to form NaCl",
            "Donate H⁺ directly to raise pH",
            "Absorb all CO₂ produced by the body indefinitely",
          ]),
          answer: "React with excess H⁺ to form H₂CO₃, preventing pH from falling",
          explanation: "HCO₃⁻ + H⁺ → H₂CO₃ — bicarbonate absorbs excess acid to protect blood pH.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are clinical applications of acid-base chemistry in surgery? (Select all that apply)",
          options: JSON.stringify([
            "Monitoring arterial blood gas (ABG) results",
            "Giving sodium bicarbonate to correct metabolic acidosis",
            "Adjusting ventilator settings to control CO₂ and pH",
            "Using osmotic pressure alone to manage pH",
          ]),
          answer: JSON.stringify([
            "Monitoring arterial blood gas (ABG) results",
            "Giving sodium bicarbonate to correct metabolic acidosis",
            "Adjusting ventilator settings to control CO₂ and pH",
          ]),
          explanation: "Osmotic pressure is a separate concept. All three acid-base interventions are routinely used in surgical care.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Pure water at 25°C has a pH of:",
          options: JSON.stringify(["0", "5", "7", "9"]),
          answer: "7",
          explanation: "At 25°C, [H⁺] = [OH⁻] = 10⁻⁷ mol/L in pure water → pH = 7.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Proton pump inhibitors (PPIs) prescribed before surgery to reduce aspiration risk work by:",
          options: JSON.stringify([
            "Neutralising acid in the oesophagus",
            "Blocking H⁺/K⁺ ATPase in stomach cells, reducing acid production",
            "Increasing bicarbonate secretion from the pancreas",
            "Widening the lower oesophageal sphincter",
          ]),
          answer: "Blocking H⁺/K⁺ ATPase in stomach cells, reducing acid production",
          explanation: "PPIs irreversibly block the proton pump, reducing H⁺ secretion into the stomach.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "In a titration, 20.0 mL of 0.50 mol/L HCl is neutralised by NaOH. How many millimoles of HCl were present?",
          options: null,
          answer: "10|0|mmol",
          explanation: "n = c × V = 0.50 mol/L × 0.020 L = 0.010 mol = 10 mmol.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Universal indicator turns green at approximately pH:",
          options: JSON.stringify(["2", "4", "7", "10"]),
          answer: "7",
          explanation: "Universal indicator is green at neutral pH (~7) — yellow-orange in mild acid, blue-purple in alkali.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Sulfuric acid (H₂SO₄) is diprotic, meaning it:",
          options: JSON.stringify([
            "Has two oxygen atoms",
            "Can donate two protons (H⁺) per molecule",
            "Only reacts with two types of bases",
            "Ionises to exactly two products",
          ]),
          answer: "Can donate two protons (H⁺) per molecule",
          explanation: "Diprotic acids have two ionisable protons; H₂SO₄ → 2H⁺ + SO₄²⁻.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are correct statements about buffer solutions? (Select all that apply)",
          options: JSON.stringify([
            "A buffer resists pH changes when small amounts of acid or base are added",
            "The blood bicarbonate system is a physiological buffer",
            "Buffers have unlimited capacity to neutralise acid or base",
            "A buffer typically consists of a weak acid and its conjugate base",
          ]),
          answer: JSON.stringify([
            "A buffer resists pH changes when small amounts of acid or base are added",
            "The blood bicarbonate system is a physiological buffer",
            "A buffer typically consists of a weak acid and its conjugate base",
          ]),
          explanation: "Buffers have a limited capacity — adding too much acid or base will eventually overcome the buffer.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Respiratory acidosis occurs in surgical patients when:",
          options: JSON.stringify([
            "Patients hyperventilate, removing too much CO₂",
            "Inadequate ventilation causes CO₂ to accumulate, lowering blood pH",
            "Excess bicarbonate is given intravenously",
            "Blood glucose rises too high",
          ]),
          answer: "Inadequate ventilation causes CO₂ to accumulate, lowering blood pH",
          explanation: "↑CO₂ → ↑H₂CO₃ → ↑H⁺ → ↓pH (acidosis). Anaesthetists manage ventilation to prevent this.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "10 mL of 0.1 mol/L NaOH neutralises a HCl solution. How many millimoles of HCl were present?",
          options: null,
          answer: "1|0|mmol",
          explanation: "n(NaOH) = 0.1 × 0.010 = 0.001 mol = 1 mmol; 1:1 ratio means n(HCl) = 1 mmol.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Adding CO₂ to blood (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻) shifts equilibrium right, which:",
          options: JSON.stringify([
            "Raises blood pH",
            "Lowers blood pH by increasing [H⁺]",
            "Has no effect on pH",
            "Converts all bicarbonate to carbonate",
          ]),
          answer: "Lowers blood pH by increasing [H⁺]",
          explanation: "More CO₂ drives formation of H₂CO₃ then H⁺, decreasing pH — the basis of respiratory acidosis.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Oxalic acid (HOOC−COOH), found in rhubarb, is classified as:",
          options: JSON.stringify(["A strong monobasic acid", "A weak diprotic acid", "A strong base", "A neutral compound"]),
          answer: "A weak diprotic acid",
          explanation: "Oxalic acid partially ionises (weak) and has two ionisable protons (diprotic).",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are examples of acid-base indicators? (Select all that apply)",
          options: JSON.stringify([
            "Phenolphthalein",
            "Methyl orange",
            "Universal indicator",
            "Litmus",
          ]),
          answer: JSON.stringify([
            "Phenolphthalein",
            "Methyl orange",
            "Universal indicator",
            "Litmus",
          ]),
          explanation: "Phenolphthalein, methyl orange, universal indicator, and litmus are all common acid-base indicators.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A smaller Ka value for an acid indicates:",
          options: JSON.stringify([
            "A stronger acid with more ionisation",
            "A weaker acid with less ionisation",
            "A higher concentration of H⁺",
            "Greater solubility in water",
          ]),
          answer: "A weaker acid with less ionisation",
          explanation: "Ka is the acid dissociation constant; a smaller Ka means less ionisation and therefore a weaker acid.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "What is the pH of a 0.001 mol/L solution of the strong acid HCl?",
          options: null,
          answer: "3|0|",
          explanation: "[H⁺] = 0.001 = 10⁻³ mol/L; pH = −log(10⁻³) = 3.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A solution of KOH (potassium hydroxide) would have a pH:",
          options: JSON.stringify(["Below 7", "Equal to 7", "Above 7", "Impossible to determine"]),
          answer: "Above 7",
          explanation: "KOH is a strong base; its solution contains excess OH⁻, giving pH > 7.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which species can act as both an acid and a base (amphiprotic)? (Select all that apply)",
          options: JSON.stringify(["H₂O", "HCO₃⁻", "OH⁻", "H₃PO₄"]),
          answer: JSON.stringify(["H₂O", "HCO₃⁻"]),
          explanation: "H₂O and HCO₃⁻ are amphiprotic — they can donate or accept a proton. OH⁻ can only accept; H₃PO₄ can only donate.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Patients on renal dialysis need carefully pH-controlled dialysate because healthy kidneys normally:",
          options: JSON.stringify([
            "Produce CO₂ to regulate pH",
            "Excrete excess H⁺ and reabsorb HCO₃⁻ to maintain acid-base balance",
            "Only regulate sodium and potassium",
            "Have no role in pH regulation",
          ]),
          answer: "Excrete excess H⁺ and reabsorb HCO₃⁻ to maintain acid-base balance",
          explanation: "Kidneys are the major long-term regulator of acid-base balance; dialysis must replicate this function.",
          difficulty: 3,
        },
      ],
    },
    {
      slug: "organic-chemistry",
      yearBand: "VCE Unit 4",
      title: "Organic Chemistry",
      description: "Functional groups, polymers and biochemistry",
      surgeonRelevance:
        "Organic chemistry underpins pharmacology — understanding drug structures helps predict side effects and interactions.",
      order: 5,
      lessons: [
        {
          slug: "functional-groups",
          title: "Functional Groups",
          order: 1,
          medicalCallout:
            "Many drugs contain amine and carboxylic acid groups. Understanding functional groups helps predict drug behaviour in the body.",
          content: `## Organic Functional Groups

| Group | Formula | Example |
|-------|---------|---------|
| Alcohol | −OH | Ethanol |
| Aldehyde | −CHO | Formaldehyde |
| Ketone | C=O (between carbons) | Acetone |
| Carboxylic acid | −COOH | Ethanoic acid |
| Amine | −NH₂ | Amino acids |
| Ester | −COO− | Fats |

Functional groups determine **chemical properties and reactivity**.`,
        },
        {
          slug: "hydrocarbons",
          title: "Hydrocarbons",
          order: 2,
          medicalCallout:
            "General anaesthetics like isoflurane are halogenated hydrocarbons. Their structure determines potency and speed of onset.",
          content: `## Hydrocarbons

Molecules containing only carbon and hydrogen.

### Alkanes (CₙH₂ₙ₊₂) — single bonds, saturated
- Methane CH₄, Ethane C₂H₆, Propane C₃H₈

### Alkenes (CₙH₂ₙ) — one C=C double bond
- Ethene C₂H₄, Propene C₃H₆

### Alkynes (CₙH₂ₙ₋₂) — one C≡C triple bond
- Ethyne C₂H₂

### Naming
Use IUPAC: longest chain, number substituents, add suffix (-ane, -ene, -yne).`,
        },
        {
          slug: "polymers-biochemistry",
          title: "Polymers & Biochemistry",
          order: 3,
          medicalCallout:
            "Dissolvable surgical sutures are made from biodegradable polymers. The body breaks them down via hydrolysis over weeks.",
          content: `## Polymers

**Polymers** are long chains of repeating monomer units.

- **Addition polymers**: ethene → polyethene (plastic)
- **Condensation polymers**: amino acids → proteins; glucose → starch/cellulose

### Biological macromolecules
| Molecule | Monomer | Role |
|----------|---------|------|
| Proteins | Amino acids | Enzymes, structure |
| Carbohydrates | Monosaccharides | Energy |
| Lipids | Fatty acids + glycerol | Membranes, storage |
| Nucleic acids | Nucleotides | DNA, RNA |

Surgical sutures, grafts, and joint replacements use biocompatible polymers.`,
        },
        {
          slug: "reactions-organic",
          title: "Organic Reactions",
          order: 4,
          medicalCallout:
            "Local anaesthetics like lignocaine are esters or amides. Ester-type anaesthetics are metabolised faster — important for patients with liver disease.",
          content: `## Key Organic Reactions

### Combustion
Hydrocarbon + O₂ → CO₂ + H₂O

### Addition (alkenes)
Alkene + X₂ → dihalide (e.g. ethene + Br₂ → dibromoethane)

### Esterification
Acid + Alcohol → Ester + Water

### Hydrolysis
Ester + H₂O → Acid + Alcohol (reverse of esterification)

### Fermentation
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast enzyme)

Understanding these reactions explains how drugs are metabolised in the liver.`,
        },
      ],
      questions: [
        {
          type: "mcq",
          prompt: "The functional group −OH is called:",
          options: JSON.stringify(["Hydroxyl / alcohol", "Carboxyl", "Amino", "Carbonyl"]),
          answer: "Hydroxyl / alcohol",
          explanation: "The −OH group defines alcohols in organic chemistry.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The general formula for alkanes is:",
          options: JSON.stringify(["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"]),
          answer: "CₙH₂ₙ₊₂",
          explanation: "Alkanes are saturated hydrocarbons with formula CₙH₂ₙ₊₂.",
          difficulty: 1,
        },
        {
          type: "multi-select",
          prompt: "Which are functional groups found in biological molecules? (Select all that apply)",
          options: JSON.stringify(["Amine (−NH₂)", "Carboxylic acid (−COOH)", "Hydroxyl (−OH)", "Noble gas"]),
          answer: JSON.stringify(["Amine (−NH₂)", "Carboxylic acid (−COOH)", "Hydroxyl (−OH)"]),
          explanation: "Amino acids contain amine and carboxylic acid groups; sugars contain hydroxyl.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Proteins are polymers made from:",
          options: JSON.stringify(["Glucose monomers", "Amino acid monomers", "Fatty acids", "Nucleotides only"]),
          answer: "Amino acid monomers",
          explanation: "Proteins are polypeptides — chains of amino acids.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Which hydrocarbon contains a C=C double bond?",
          options: JSON.stringify(["Ethane", "Ethene", "Ethyne", "Methane"]),
          answer: "Ethene",
          explanation: "Ethene (C₂H₄) is an alkene with one C=C double bond.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Esterification produces:",
          options: JSON.stringify(["An ester and water", "An acid and CO₂", "A salt only", "A polymer only"]),
          answer: "An ester and water",
          explanation: "Acid + Alcohol → Ester + Water.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are biological macromolecules? (Select all that apply)",
          options: JSON.stringify(["Proteins", "DNA", "Table salt (NaCl)", "Polysaccharides"]),
          answer: JSON.stringify(["Proteins", "DNA", "Polysaccharides"]),
          explanation: "Proteins, nucleic acids (DNA), and polysaccharides are biological macromolecules.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The monomer of polyethylene (plastic) is:",
          options: JSON.stringify(["Ethene", "Ethane", "Ethanol", "Ethyne"]),
          answer: "Ethene",
          explanation: "Polyethylene forms by addition polymerisation of ethene (C₂H₄).",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "An alkyne contains:",
          options: JSON.stringify(["Only single bonds", "A double bond", "A triple bond", "An ionic bond"]),
          answer: "A triple bond",
          explanation: "Alkynes have the general formula CₙH₂ₙ₋₂ with a C≡C triple bond.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many carbon atoms are in propane (C₃H₈)?",
          options: null,
          answer: "3|0|",
          explanation: "The prefix 'prop-' indicates 3 carbons.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "What is the IUPAC name for the compound CH₃CH₂OH?",
          options: JSON.stringify(["Methanol", "Ethanol", "Propanol", "Ethanoic acid"]),
          answer: "Ethanol",
          explanation: "CH₃CH₂OH has 2 carbons with a hydroxyl group — it is ethanol (ethane-1-ol).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "How many carbon atoms are in hexane?",
          options: null,
          answer: "6|0|",
          explanation: "'Hex-' means 6 carbon atoms; hexane is C₆H₁₄.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The ester functional group has the general structure:",
          options: JSON.stringify(["−OH", "−COOH", "−COO−", "−CHO"]),
          answer: "−COO−",
          explanation: "Esters contain the −COO− linkage, formed from a carboxylic acid reacting with an alcohol.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which reactions can alkenes undergo? (Select all that apply)",
          options: JSON.stringify([
            "Addition reactions (e.g. with Br₂)",
            "Substitution reactions only (like alkanes)",
            "Polymerisation by addition",
            "Hydrogenation (addition of H₂)",
          ]),
          answer: JSON.stringify([
            "Addition reactions (e.g. with Br₂)",
            "Polymerisation by addition",
            "Hydrogenation (addition of H₂)",
          ]),
          explanation: "Alkenes undergo addition reactions due to the C=C double bond. Substitution is typical of alkanes.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Which hydrocarbon is unsaturated?",
          options: JSON.stringify(["Methane (CH₄)", "Propane (C₃H₈)", "Butane (C₄H₁₀)", "Propene (C₃H₆)"]),
          answer: "Propene (C₃H₆)",
          explanation: "Propene contains a C=C double bond, making it unsaturated. The others are alkanes (saturated).",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "The carboxylic acid functional group is:",
          options: JSON.stringify(["−NH₂", "−OH", "−COOH", "C=O (ketone)"]),
          answer: "−COOH",
          explanation: "Carboxylic acids contain the −COOH group (carbonyl + hydroxyl on the same carbon).",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many hydrogen atoms are in butane (C₄H₁₀)?",
          options: null,
          answer: "10|0|",
          explanation: "Butane has the formula C₄H₁₀ — 10 hydrogen atoms.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Condensation polymerisation differs from addition polymerisation because it:",
          options: JSON.stringify([
            "Produces no by-products",
            "Releases a small molecule (e.g. water) with each bond formed",
            "Only works with alkenes",
            "Produces only branched chains",
          ]),
          answer: "Releases a small molecule (e.g. water) with each bond formed",
          explanation: "Condensation polymerisation joins monomers by eliminating a small molecule such as water.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are correct statements about amino acids? (Select all that apply)",
          options: JSON.stringify([
            "They contain both an amine (−NH₂) and carboxylic acid (−COOH) group",
            "They are the monomers of proteins",
            "They are only found in plant cells",
            "There are 20 standard amino acids used in human proteins",
          ]),
          answer: JSON.stringify([
            "They contain both an amine (−NH₂) and carboxylic acid (−COOH) group",
            "They are the monomers of proteins",
            "There are 20 standard amino acids used in human proteins",
          ]),
          explanation: "Amino acids occur in all living cells (not just plants). The other three statements are correct.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Isoflurane is a halogenated hydrocarbon general anaesthetic. Its potency depends primarily on its:",
          options: JSON.stringify([
            "Molecular weight only",
            "Lipid solubility (related to non-polar character)",
            "Water solubility exclusively",
            "Number of carbon atoms only",
          ]),
          answer: "Lipid solubility (related to non-polar character)",
          explanation: "Anaesthetic potency correlates with lipid solubility (Meyer-Overton hypothesis) — more lipid-soluble agents are more potent.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Hydrolysis is the reverse reaction of:",
          options: JSON.stringify(["Addition polymerisation", "Esterification", "Fermentation", "Combustion"]),
          answer: "Esterification",
          explanation: "Esterification: acid + alcohol → ester + water. Hydrolysis: ester + water → acid + alcohol.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many carbon atoms are in decane?",
          options: null,
          answer: "10|0|",
          explanation: "'Dec-' means 10; decane is C₁₀H₂₂.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Benzene (C₆H₆) is aromatic. Its ring structure features:",
          options: JSON.stringify([
            "Only single bonds between carbons",
            "Alternating double and single bonds that are delocalised across all 6 carbons",
            "Three isolated triple bonds",
            "An ionic ring",
          ]),
          answer: "Alternating double and single bonds that are delocalised across all 6 carbons",
          explanation: "Benzene has a delocalised π system — the electrons are shared over all 6 carbons rather than fixed double bonds.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Aspirin (acetylsalicylic acid) contains which functional groups? (Select all that apply)",
          options: JSON.stringify(["Ester (−COO−)", "Carboxylic acid (−COOH)", "Amine (−NH₂)", "Aromatic ring"]),
          answer: JSON.stringify(["Ester (−COO−)", "Carboxylic acid (−COOH)", "Aromatic ring"]),
          explanation: "Aspirin has an ester group (acetyl), a carboxylic acid group, and a benzene ring. It has no amine group.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "Addition reactions require alkenes because:",
          options: JSON.stringify([
            "Alkenes have ionic bonds",
            "The C=C double bond can break and atoms add across the two carbons",
            "Alkenes have no hydrogen atoms",
            "Alkenes are always gases",
          ]),
          answer: "The C=C double bond can break and atoms add across the two carbons",
          explanation: "One bond of the double bond breaks and atoms (e.g. H₂, Br₂) add across the two carbons.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Fermentation of glucose (C₆H₁₂O₆) produces:",
          options: JSON.stringify([
            "Ethanol and CO₂",
            "Ethanoic acid and H₂",
            "Methanol and O₂",
            "Water and N₂",
          ]),
          answer: "Ethanol and CO₂",
          explanation: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (catalysed by yeast enzymes under anaerobic conditions).",
          difficulty: 1,
        },
        {
          type: "numeric",
          prompt: "What is the molar mass of ethanol (C₂H₅OH)? (C = 12, H = 1, O = 16 g/mol)",
          options: null,
          answer: "46|0|g/mol",
          explanation: "M = 2(12) + 6(1) + 16 = 24 + 6 + 16 = 46 g/mol.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Nylon and Kevlar are examples of:",
          options: JSON.stringify([
            "Addition polymers",
            "Condensation polymers (polyamides)",
            "Natural proteins",
            "Ionic lattice structures",
          ]),
          answer: "Condensation polymers (polyamides)",
          explanation: "Nylon and Kevlar form amide bonds (−CONH−) with release of water — they are polyamides (condensation polymers).",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are correctly matched polymer–monomer pairs? (Select all that apply)",
          options: JSON.stringify([
            "Polyethylene — ethene",
            "Protein — amino acids",
            "Starch — glucose",
            "Natural rubber — nitrogen gas",
          ]),
          answer: JSON.stringify([
            "Polyethylene — ethene",
            "Protein — amino acids",
            "Starch — glucose",
          ]),
          explanation: "Natural rubber is made from isoprene (C₅H₈), not nitrogen gas. The other three are correctly matched.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The aldehyde functional group (−CHO) is found in which molecule?",
          options: JSON.stringify(["Acetone", "Formaldehyde (methanal)", "Ethanol", "Ethanoic acid"]),
          answer: "Formaldehyde (methanal)",
          explanation: "Formaldehyde (HCHO / methanal) is the simplest aldehyde with a −CHO group.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Drug metabolism primarily occurs in the:",
          options: JSON.stringify(["Kidneys", "Liver", "Lungs", "Stomach"]),
          answer: "Liver",
          explanation: "The liver contains cytochrome P450 enzymes that metabolise most drugs via oxidation, reduction, and hydrolysis.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "Ethyne (C₂H₂) contains a triple bond. What is its degree of unsaturation?",
          options: null,
          answer: "2|0|",
          explanation: "Degree of unsaturation = (2×2 + 2 − 2)/2 = 4/2 = 2. A triple bond contributes 2 degrees of unsaturation.",
          difficulty: 3,
        },
        {
          type: "mcq",
          prompt: "A saturated fat differs from an unsaturated fat because saturated fats:",
          options: JSON.stringify([
            "Contain C=C double bonds in their fatty acid chains",
            "Have no C=C double bonds — all carbon-carbon bonds are single bonds",
            "Are always liquid at room temperature",
            "Contain nitrogen atoms",
          ]),
          answer: "Have no C=C double bonds — all carbon-carbon bonds are single bonds",
          explanation: "Saturated fats have fully saturated (all single bonds) fatty acid chains; unsaturated fats have one or more C=C bonds.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are properties of lipids? (Select all that apply)",
          options: JSON.stringify([
            "Insoluble in water (hydrophobic)",
            "Esters of fatty acids and glycerol",
            "Major component of cell membranes",
            "Made from glucose monomers",
          ]),
          answer: JSON.stringify([
            "Insoluble in water (hydrophobic)",
            "Esters of fatty acids and glycerol",
            "Major component of cell membranes",
          ]),
          explanation: "Lipids are not made from glucose monomers — that describes polysaccharides.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "The backbone of the DNA double helix consists of:",
          options: JSON.stringify([
            "Amino acid chains",
            "Alternating deoxyribose sugar and phosphate groups",
            "Fatty acid chains",
            "Glucose polymers",
          ]),
          answer: "Alternating deoxyribose sugar and phosphate groups",
          explanation: "DNA's backbone is made of alternating deoxyribose sugar and phosphate groups, with nitrogenous bases attached.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Lignocaine (lidocaine), a local anaesthetic, contains an amide bond (−CONH−). This bond forms between:",
          options: JSON.stringify([
            "Two carboxylic acid groups",
            "A carboxylic acid and an amine group",
            "Two alcohol groups",
            "An aldehyde and a ketone",
          ]),
          answer: "A carboxylic acid and an amine group",
          explanation: "An amide bond (−CONH−) forms when a carboxylic acid reacts with an amine, releasing water.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "How many hydrogen atoms does ethene (C₂H₄) have?",
          options: null,
          answer: "4|0|",
          explanation: "Ethene is C₂H₄ — four hydrogen atoms.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "Starch and cellulose are both polymers of glucose but differ because:",
          options: JSON.stringify([
            "Starch uses α-glucose (coiled structure); cellulose uses β-glucose (linear chains)",
            "They are made from different monosaccharide monomers",
            "Cellulose is a lipid",
            "Starch contains nitrogen",
          ]),
          answer: "Starch uses α-glucose (coiled structure); cellulose uses β-glucose (linear chains)",
          explanation: "The α vs β glycosidic linkage determines digestibility: humans digest starch but cannot digest cellulose.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which organic reactions are correctly described? (Select all that apply)",
          options: JSON.stringify([
            "Combustion: hydrocarbon + O₂ → CO₂ + H₂O",
            "Esterification: acid + alcohol → ester + water",
            "Addition: alkane + Br₂ → dibromoalkane",
            "Hydrolysis: ester + water → acid + alcohol",
          ]),
          answer: JSON.stringify([
            "Combustion: hydrocarbon + O₂ → CO₂ + H₂O",
            "Esterification: acid + alcohol → ester + water",
            "Hydrolysis: ester + water → acid + alcohol",
          ]),
          explanation: "Addition reactions occur with alkenes (not alkanes). Alkanes undergo substitution, not addition.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Dissolvable surgical sutures made from biodegradable polymers (e.g. polyglycolic acid) disappear because they undergo:",
          options: JSON.stringify([
            "Combustion in the body",
            "Hydrolysis by body fluids and enzymes",
            "Oxidation by haemoglobin",
            "Fermentation by gut bacteria",
          ]),
          answer: "Hydrolysis by body fluids and enzymes",
          explanation: "Ester or amide bonds in biodegradable sutures are cleaved by hydrolysis, producing small excretable fragments.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Butanoic acid has how many carbon atoms?",
          options: JSON.stringify(["2", "3", "4", "5"]),
          answer: "4",
          explanation: "'But-' = 4 carbons; butanoic acid is CH₃CH₂CH₂COOH.",
          difficulty: 2,
        },
        {
          type: "numeric",
          prompt: "How many carbon atoms are in propene (C₃H₆)?",
          options: null,
          answer: "3|0|",
          explanation: "'Prop-' means 3 carbons; propene is C₃H₆.",
          difficulty: 1,
        },
        {
          type: "mcq",
          prompt: "A peptide bond links two amino acids by connecting:",
          options: JSON.stringify([
            "The carboxyl group of one amino acid to the amine group of the next",
            "The amine groups of both amino acids",
            "The hydroxyl groups of both amino acids",
            "Two carboxyl groups together",
          ]),
          answer: "The carboxyl group of one amino acid to the amine group of the next",
          explanation: "Peptide bond: −CO−NH− formed between −COOH of one amino acid and −NH₂ of the next, releasing water.",
          difficulty: 2,
        },
        {
          type: "multi-select",
          prompt: "Which are correct statements about alkenes? (Select all that apply)",
          options: JSON.stringify([
            "General formula: CₙH₂ₙ",
            "They contain at least one C=C double bond",
            "They are saturated hydrocarbons",
            "They decolourise bromine water",
          ]),
          answer: JSON.stringify([
            "General formula: CₙH₂ₙ",
            "They contain at least one C=C double bond",
            "They decolourise bromine water",
          ]),
          explanation: "Alkenes are unsaturated (not saturated). The other three are correct — they decolourise bromine water via addition.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Fats (triglycerides) are esters formed from:",
          options: JSON.stringify([
            "Three fatty acids and one glycerol molecule",
            "Amino acids and glucose",
            "Nucleotides and phosphate groups",
            "Two fatty acids and acetone",
          ]),
          answer: "Three fatty acids and one glycerol molecule",
          explanation: "Triglycerides are triesters formed from one glycerol and three fatty acid molecules via esterification.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "A chiral carbon (stereocentre) in a drug molecule is clinically significant because:",
          options: JSON.stringify([
            "It makes the drug more water-soluble",
            "Mirror-image forms (enantiomers) can have different biological activities",
            "It increases the boiling point of the drug",
            "It prevents the drug from crossing membranes",
          ]),
          answer: "Mirror-image forms (enantiomers) can have different biological activities",
          explanation: "Enantiomers of chiral drugs may have different pharmacological effects — one may be active, the other inactive or even harmful.",
          difficulty: 3,
        },
        {
          type: "numeric",
          prompt: "What is the molar mass of glucose (C₆H₁₂O₆)? (C = 12, H = 1, O = 16 g/mol)",
          options: null,
          answer: "180|0|g/mol",
          explanation: "M = 6(12) + 12(1) + 6(16) = 72 + 12 + 96 = 180 g/mol.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Saponification (alkaline hydrolysis) of fats with NaOH produces:",
          options: JSON.stringify([
            "Amino acids and glycerol",
            "Fatty acid salts (soap) and glycerol",
            "Alkenes and water",
            "Ethanol and CO₂",
          ]),
          answer: "Fatty acid salts (soap) and glycerol",
          explanation: "NaOH hydrolyses the ester bonds in triglycerides, yielding sodium salts of fatty acids (soap) and glycerol.",
          difficulty: 3,
        },
        {
          type: "multi-select",
          prompt: "Which are components of a nucleotide? (Select all that apply)",
          options: JSON.stringify([
            "A phosphate group",
            "A five-carbon sugar (pentose)",
            "A nitrogenous base (e.g. adenine, guanine)",
            "A fatty acid chain",
          ]),
          answer: JSON.stringify([
            "A phosphate group",
            "A five-carbon sugar (pentose)",
            "A nitrogenous base (e.g. adenine, guanine)",
          ]),
          explanation: "Nucleotides consist of a phosphate group, a pentose sugar, and a nitrogenous base. Fatty acids are components of lipids.",
          difficulty: 2,
        },
        {
          type: "mcq",
          prompt: "Ester-type local anaesthetics (e.g. procaine) are metabolised faster than amide-types (e.g. lignocaine) because ester bonds are rapidly cleaved by:",
          options: JSON.stringify([
            "Liver cytochrome P450 enzymes only",
            "Plasma cholinesterases (pseudocholinesterases) in the blood",
            "Renal tubular secretion",
            "Gastric acid hydrolysis",
          ]),
          answer: "Plasma cholinesterases (pseudocholinesterases) in the blood",
          explanation: "Ester anaesthetics are hydrolysed quickly by plasma cholinesterases; amide types must travel to the liver for metabolism.",
          difficulty: 3,
        },
      ],
    },
  ],
};
