import Image from "next/image";

const coFounders = [
  {
    name: "Dean Minnock",
    initials: "DM",
    photo: "/team/dean.png",
    role: "+10y Medical Device & Digital Health",
    degree: "PhD in Molecular Physiology",
    color: "#661FE4",
    bio: "Brings more than a decade of leadership across medical devices, connected drug delivery and digital health, backed by a PhD-level research background in molecular physiology and metabolism. As CEO of Innovation Zed, he has built and commercialised regulated healthcare technology businesses. At SEER Health, Dean leads strategy, fundraising and commercial development.",
  },
  {
    name: "Yuri Matsumoto",
    initials: "YM",
    photo: "/team/yuri.jpg",
    role: "+10y Medical Devices & Pharma",
    degree: "MSci Medical Physics",
    color: "#8A52F0",
    bio: "Brings more than a decade of experience across medical devices, pharmaceuticals and diabetes technology, supported by a postgraduate background in medical physics. He combines deep knowledge of regulated healthcare products with practical experience bringing them to real-world use. As COO, Yuri translates SEER Health's strategy into execution — product development, partnerships and the regulatory foundations needed to scale.",
  },
  {
    name: "Chloë Royston",
    initials: "CR",
    photo: "/team/chloe.png",
    role: "+5y AI/ML & Digital Twin",
    degree: "PhD candidate in AI/ML",
    color: "#0E8C7F",
    bio: "Combines expertise in artificial intelligence, computer science and biotechnology with lived experience of type 1 diabetes. A Harvard computer science graduate with postgraduate study in biotechnology at Cambridge, she is completing doctoral research under Professor Roman Hovorka on metabolic modelling and digital twin technology. As Chief AI Officer, Chloë leads the development of SEER Health's modelling and machine-learning capabilities.",
  },
  {
    name: "Benedikt Baumgartner",
    initials: "BB",
    photo: "/team/benedikt.jpg",
    role: "+15y SaMD & MedTech",
    degree: "PhD in Computer Science",
    color: "#0E8C7F",
    bio: "Has more than 15 years of experience across medical technology, software engineering and intelligent healthcare systems, backed by a PhD in computer science. His work spans embedded systems, patient-monitoring technology and applying data science to complex clinical challenges. As CTO, Benedikt leads the architecture of SEER Health's Metabolic Digital Twin Engine.",
  },
];

const advisors = [
  {
    name: "Maria Cristina Foss-Freitas",
    initials: "MF",
    photo: "/team/maria.png",
    role: "+25y Physician-Scientist in Endocrinology",
    degree: "MD, PhD in Endocrinology & Cardiometabolism",
    color: "#661FE4",
    bio: "An endocrinologist and physician-scientist with extensive clinical and academic expertise in diabetes, insulin resistance and complex metabolic disorders. An MD and PhD, she has held senior academic roles at the University of São Paulo and completed postdoctoral research at the Joslin Diabetes Center. As Medical Director and Clinical Advisor, Maria guides SEER Health's clinical strategy and evidence foundations.",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function PersonCard({
  person,
}: {
  person: { name: string; initials: string; photo?: string; role: string; degree: string; color: string; bio: string };
}) {
  return (
    <div className="flex gap-5 border-t border-ink/15 pt-6">
      <div
        className="h-24 w-24 shrink-0 overflow-hidden rounded-full"
        style={{ boxShadow: `0 0 0 1px ${person.color}4D` }}
      >
        {person.photo ? (
          <Image
            src={`${basePath}${person.photo}`}
            alt={person.name}
            width={192}
            height={192}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-display text-[1.3rem] font-medium text-white"
            style={{ background: person.color }}
          >
            {person.initials}
          </div>
        )}
      </div>
      <div className="pt-1">
        <div className="font-display text-[1.15rem] font-medium text-ink">{person.name}</div>
        <div className="mt-1.5 text-[0.9rem] text-grey">{person.role}</div>
        <div className="mt-0.5 text-[0.85rem] text-grey-dim">{person.degree}</div>
        <p className="mt-3 text-[0.85rem] leading-[1.6] text-grey">{person.bio}</p>
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
