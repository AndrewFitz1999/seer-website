import RevealSection from "./RevealSection";

const team = [
  {
    name: "Dean Minnock",
    role: "PhD, Molecular Physiology",
    detail: "10+ years in Medical Device & Digital Health",
  },
  {
    name: "Chloë Royston",
    role: "PhD, AI/ML",
    detail: "5+ years in AI/ML & Digital Twin",
  },
  {
    name: "Yuri Matsumoto",
    role: "MSci, Medical Physics",
    detail: "10+ years in Medical Devices & Pharma",
  },
  {
    name: "Benedikt Baumgartner",
    role: "PhD, Computer Science",
    detail: "15+ years in SaMD & MedTech",
  },
  {
    name: "Maria Cristina Foss-Freitas",
    role: "MD, PhD, Endocrinology & Cardiometabolism",
    detail: "25+ years as a physician-scientist",
  },
];

export default function Team() {
  return (
    <RevealSection id="team" className="border-t border-ink/10 bg-paper-2 px-[8vw] py-[8vh]">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-10 text-[0.95rem] text-grey">Team and collaborators</p>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
          {team.map((person) => (
            <div key={person.name} className="border-t border-ink/15 pt-5">
              <div className="font-display text-[1.15rem] font-medium text-ink">{person.name}</div>
              <div className="mt-1.5 text-[0.9rem] text-grey">{person.role}</div>
              <div className="mt-1 text-[0.85rem] text-grey-dim">{person.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
