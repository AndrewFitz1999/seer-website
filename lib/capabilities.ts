export type CapabilityItem = {
  title: string;
  description: string;
  href: string;
};

export type CapabilityColumn = {
  eyebrow: string;
  items: CapabilityItem[];
};

export const capabilityColumns: CapabilityColumn[] = [
  {
    eyebrow: "For your platform",
    items: [
      {
        title: "Metabolic API",
        description: "Tap into the Twin's predictions in your own product, no infra to build.",
        href: "/platform",
      },
    ],
  },
  {
    eyebrow: "For consumers",
    items: [
      {
        title: "SEER App",
        description: "Your personal Metabolic Digital Twin. See how food, sleep and activity move your glucose.",
        href: "/app",
      },
    ],
  },
  {
    eyebrow: "For clinicians",
    items: [
      {
        title: "Clinician Solution",
        description: "See patients' metabolic picture inside your workflow.",
        href: "/clinicians",
      },
    ],
  },
];
