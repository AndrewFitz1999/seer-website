import RevealSection from "./RevealSection";

const coFounders = [
  {
    name: "Dean Minnock",
    initials: "DM",
    bio: "PhD in Molecular Physiology, over 10 years across medical device and digital health, co-founder leading SEER's clinical and physiological strategy.",
    color: "#661FE4",
  },
  {
    name: "Yuri Matsumoto",
    initials: "YM",
    bio: "MSci in Medical Physics, over 10 years across medical devices and pharma, co-founder focused on the platform's technical foundations.",
    color: "#8A52F0",
  },
  {
    name: "Chloë Royston",
    initials: "CR",
    bio: "PhD in AI/ML, over 5 years in AI/ML and digital twin technology, co-founder leading the modeling behind the Metabolic Digital Twin.",
    color: "#0E8C7F",
  },
  {
    name: "Benedikt Baumgartner",
    initials: "BB",
    bio: "PhD in Computer Science, over 15 years in SaMD and MedTech, co-founder overseeing platform architecture and regulatory-grade software.",
    color: "#0E8C7F",
  },
];

const advisors = [
  {
    name: "Maria Cristina Foss-Freitas",
    initials: "MF",
    bio: "MD, PhD in Endocrinology & Cardiometabolism, 25+ years as a physician-scientist, advising on clinical and endocrine strategy.",
    color: "#661FE4",
  },
];

function PersonCard({
  person,
}: {
  person: { name: string; initials: string; bio: string; color: string };
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
        <div className="mt-1.5 max-w-[46ch] text-[0.9rem] leading-[1.6] text-grey">{person.bio}</div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <RevealSection id="team" className="bg-paper-2 px-[8vw] py-[12vh]">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
          Team
        </h2>

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
    </RevealSection>
  );
}
