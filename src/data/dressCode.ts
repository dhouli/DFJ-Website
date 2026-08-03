export interface DressCodeEntry {
  style: string;
  requirements: string[];
  optional?: string[];
}

export const dressCode: DressCodeEntry[] = [
  {
    style: "Pre-Ballet",
    requirements: [
      "Dance For Joy pink ballet dress",
      "Pink tights",
      "Pink ballet shoes",
    ],
  },
  {
    style: "Tiny Tap and Tumble",
    requirements: [
      "Black or light pink leotard, pink, black, or tan tights",
      "Hair in a pony tail or bun",
      "Capezio Mary Janes Caramel (girls)",
      "Capezio “Fluid” black lace-up tap shoes (boys)",
    ],
    optional: ["Black jazz pants (tight)", "Black booty shorts", "Black capri pants"],
  },
  {
    style: "Ballet 1 through Advanced",
    requirements: [
      "Black or light pink leotard, pink ballet tights (Int./Advanced dancers may wear a leotard color of choice for all styles)",
      "Pink canvas or leather ballet shoes: Capezio “Hanami” or Capezio Juliet",
      "Ballet bun",
    ],
    optional: ["Ballet skirt", "Black ballet shorts / booty shorts"],
  },
  {
    style: "Jazz",
    requirements: [
      "Black or light pink leotard, pink, black, or tan tights",
      "Hair in a pony tail or bun",
      "Caramel Capezio jazz boot",
    ],
    optional: ["Black jazz pants (tight)", "Black booty shorts", "Black capri pants"],
  },
  {
    style: "Lyrical",
    requirements: [
      "Black or light pink leotard, pink, black, or tan tights",
      "Hair in a pony tail or bun",
      "Leather Capezio pirouette half sole in nude",
    ],
    optional: ["Black booty shorts", "Black leggings"],
  },
  {
    style: "Jazz/Lyrical Combo and Musical Theater",
    requirements: [
      "Black or light pink leotard, pink, black, or tan tights",
      "Hair in a pony tail or bun",
      "Caramel Capezio jazz boot",
    ],
    optional: ["Black booty shorts", "Black leggings or capri pants"],
  },
  {
    style: "Tap",
    requirements: [
      "Black or light pink leotard, pink, black, or tan tights",
      "Hair in a pony tail or bun",
      "Tap 1 & 2: Capezio tan Mary Jane tap shoe",
      "Level 3–Advanced: black lace-ups (Jason Samuel Smith, Capezio Roxy, Bloch Sync, or Capezio Fluid — listed most to least expensive)",
    ],
    optional: ["Black jazz pants (tight)", "Black booty shorts", "Black capri pants"],
  },
  {
    style: "Acro",
    requirements: [
      "Black or light pink leotard",
      "Hair in a pony tail or bun",
      "Bare feet",
    ],
    optional: ["Black leggings", "Black booty shorts"],
  },
  {
    style: "Contemporary",
    requirements: [
      "Black or light pink leotard, pink, black, or tan tights",
      "Hair in a pony tail or bun",
    ],
    optional: [
      "Contemporary dance socks (nude) or bare feet",
      "Black jazz pants (tight)",
      "Black booty shorts",
      "Black capri pants",
    ],
  },
  {
    style: "Hip Hop",
    requirements: [
      "Black or light pink leotard, t-shirts, or cropped shirts (no bra tops)",
      "Hair in a pony tail",
      "Black and white Converse sneaker",
    ],
    optional: [
      "Black jazz pants",
      "Leggings",
      "Sweatpants",
      "Black booty shorts",
      "Black capri pants",
    ],
  },
  {
    style: "Boys (All Styles)",
    requirements: [
      "White t-shirt and black sweatpants or shorts",
      "Black tap shoes, black ballet shoes, or black jazz shoes depending on class",
    ],
  },
];

export const dressCodeNotes: string[] = [
  "Leotards are NOT optional. They are required for every discipline at DFJ, except Tap and Hip Hop.",
  "If you have back-to-back classes and one genre requires a leotard, please wear a leotard.",
  "Absolutely no sports bras may be worn as a “top.”",
];
