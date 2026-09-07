import RevealSection from "./RevealSection";

const team = [
  {
    name: "Dean Minnock",
    initials: "DM",
    role: "PhD, Molecular Physiology",
    detail: "10+ years in Medical Device & Digital Health",
    color: "#661FE4",
  },
  {
    name: "Chloë Royston",
    initials: "CR",
    role: "PhD, AI/ML",
    detail: "5+ years in AI/ML & Digital Twin",
    color: "#0E8C7F",
  },
  {
    name: "Yuri Matsumoto",
    initials: "YM",
    role: "MSci, Medical Physics",
    detail: "10+ years in Medical Devices & Pharma",
    color: "#8A52F0",
  },
  {
    name: "Benedikt Baumgartner",
    initials: "BB",
    role: "PhD, Computer Science",
    detail: "15+ years in SaMD & MedTech",
    color: "#0E8C7F",
  },
  {
    name: "Maria Cristina Foss-Freitas",
    initials: "MF",
    role: "MD, PhD, Endocrinology & Cardiometabolism",
    detail: "25+ years as a physician-scientist",
    color: "#661FE4",
  },
];

export default function Team() {
  return (
    <RevealSection id="team" className="border-t border-ink/10 bg-paper-2 px-[8vw] py-[8vh]">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-10 text-[0.95rem] text-grey">Team and collaborators</p>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {team.map((person) => (
            <div key={person.name} className="flex gap-5 border-t border-ink/15 pt-6">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                style={{
                  border: `1px solid ${person.color}4D`,
                }}
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
                <div className="mt-1 text-[0.85rem] text-grey-dim">{person.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
