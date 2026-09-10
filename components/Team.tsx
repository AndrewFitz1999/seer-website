const coFounders = [
  {
    name: "Dean Minnock",
    initials: "DM",
    role: "+10y Medical Device & Digital Health",
    degree: "PhD in Molecular Physiology",
    color: "#661FE4",
  },
  {
    name: "Yuri Matsumoto",
    initials: "YM",
    role: "+10y Medical Devices & Pharma",
    degree: "MSci Medical Physics",
    color: "#8A52F0",
  },
  {
    name: "Chloë Royston",
    initials: "CR",
    role: "+5y AI/ML & Digital Twin",
    degree: "PhD in AI/ML",
    color: "#0E8C7F",
  },
  {
    name: "Benedikt Baumgartner",
    initials: "BB",
    role: "+15y SaMD & MedTech",
    degree: "PhD in Computer Science",
    color: "#0E8C7F",
  },
];

const advisors = [
  {
    name: "Maria Cristina Foss-Freitas",
    initials: "MF",
    role: "+25y Physician-Scientist in Endocrinology",
    degree: "MD, PhD in Endocrinology & Cardiometabolism",
    color: "#661FE4",
  },
];

function PersonCard({
  person,
}: {
  person: { name: string; initials: string; role: string; degree: string; color: string };
}) {
  return (
    <div className="flex gap-5 border-t border-ink/15 pt-6">
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
        style={{ border: `1px solid ${person.color}4D` }}
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full font-display text-[0.9rem] font-medium text-white"
          style={{ background: person.color }}
        >
          {person.initials}
        </div>
      </div>
      <div className="pt-1">
        <div className="font-display text-[1.15rem] font-medium text-ink">{person.name}</div>
        <div className="mt-1.5 text-[0.9rem] text-grey">{person.role}</div>
        <div className="mt-0.5 text-[0.85rem] text-grey-dim">{person.degree}</div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <p className="mb-6 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-grey-dim">
        Co-founders
      </p>
      <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
        {coFounders.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>

      <p className="mt-16 mb-6 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-grey-dim">
        Advisors
      </p>
      <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
        {advisors.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
}
