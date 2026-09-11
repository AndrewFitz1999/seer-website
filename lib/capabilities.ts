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
        title: "MDT+ API",
        description: "Leverage the power of our MDT engine in your own product.",
        href: "/platform",
      },
    ],
  },
  {
    eyebrow: "For consumers",
    items: [
      {
        title: "MyAlly",
        description: "Your unique digital twin offering guidance and insights on your health journey.",
        href: "/app",
      },
    ],
  },
  {
    eyebrow: "For clinicians",
    items: [
      {
        title: "MDT+ For Healthcare",
        description: "Allowing your clinic to deliver AI Native personalised individual care at scale.",
        href: "/clinicians",
      },
    ],
  },
];
