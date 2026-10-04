/* ==========================================================================
   Données du site : tout le texte affiché vient de ce fichier.
   Sources : document "Risks at Work" + pages HSE (hse.gov.uk), chiffres 2024/25.
   ========================================================================== */

// Chiffres clés affichés sur l'accueil (HSE, Grande-Bretagne)
const chiffresCles = [
  { valeur: "1.9 million", libelle: "workers suffering from a work-related illness (2024/25)" },
  { valeur: "680,000", libelle: "workers injured at work (2024/25)" },
  { valeur: "40.1 million", libelle: "working days lost to illness and injury (2024/25)" },
  { valeur: "£22.9 billion", libelle: "estimated yearly cost of injuries and ill health (2023/24)" }
];

// Notions de base présentées sous les cartes de l'accueil
const bases = {
  introduction:
    "A hazard is anything that may cause harm, such as a wet floor or a chemical. " +
    "A risk is the chance, high or low, that someone will be harmed by the hazard, " +
    "together with how serious the harm could be. In the UK, employers must assess " +
    "the risks in their workplace and take reasonable steps to control them under the " +
    "Health and Safety at Work etc. Act 1974 and the Management of Health and Safety " +
    "at Work Regulations 1999.",
  etapes: [
    "Identify the hazards",
    "Decide who might be harmed and how",
    "Evaluate the risks and decide on precautions",
    "Record your findings and put them into practice",
    "Review the assessment and update it when necessary"
  ],
  hierarchie: [
    "Eliminate the hazard completely",
    "Substitute it with something less dangerous",
    "Use engineering controls (guards, ventilation, equipment)",
    "Use administrative controls (training, procedures, signs)",
    "Provide personal protective equipment (PPE) as a last resort"
  ],
  conclusion:
    "Most workplace accidents and illnesses can be prevented. Employers must assess " +
    "risks and apply controls, but safety is a shared responsibility: employees must " +
    "follow procedures, use equipment correctly and report hazards. A good safety " +
    "culture protects people and also improves productivity.",
  glossaire: [
    { terme: "Hazard", definition: "something with the potential to cause harm" },
    { terme: "Risk", definition: "the likelihood and severity of harm from a hazard" },
    { terme: "HSE", definition: "Health and Safety Executive, the UK regulator for workplace safety" },
    { terme: "RIDDOR", definition: "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations" },
    { terme: "MSD", definition: "musculoskeletal disorder" },
    { terme: "PPE", definition: "personal protective equipment" },
    { terme: "RCD", definition: "residual current device" }
  ]
};

/* Les 5 risques.
   id      : sert d'adresse (#id) dans l'URL
   icone   : tracé SVG (viewBox 24x24)
   chiffre : statistique HSE mise en avant
   precisions : compléments tirés des pages HSE */
const risques = [
  {
    id: "glissades",
    titre: "Slips, trips and falls",
    titreCourt: "Slips & trips",
    icone: '<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>',
    accroche: "The most common cause of injury at work, in every sector.",
    chiffre: {
      valeur: "30%",
      libelle: "of non-fatal injuries reported by employers in 2024/25 were slips, trips or falls on the same level – the number one cause."
    },
    presentation:
      "Slips, trips and falls on the same level are among the most frequent causes of " +
      "injury at work in the UK. They happen in every sector: offices, shops, warehouses, " +
      "kitchens, hospitals and building sites. A slip happens when there is too little " +
      "friction between footwear and the floor; a trip happens when a foot hits an obstacle.",
    causes: [
      "Wet or greasy floors and spillages",
      "Loose cables, rugs or damaged flooring",
      "Cluttered corridors, stairs and exits",
      "Poor lighting",
      "Unsuitable footwear",
      "Weather (rain, ice, snow) at entrances and car parks",
      "Rushing or being distracted"
    ],
    consequences: [
      "Bruises, sprains and broken bones",
      "Head injuries",
      "Long absences from work",
      "Costs for the company (sick pay, compensation, lost productivity)",
      "In serious cases, permanent disability or death"
    ],
    loi:
      "The Workplace (Health, Safety and Welfare) Regulations 1992 require floors and " +
      "traffic routes to be suitable, in good condition and free from obstructions. " +
      "Serious accidents must be reported under RIDDOR.",
    solutions: [
      "Good housekeeping: keep walkways and stairs clear and tidy",
      "Clean up spillages immediately and use warning signs for wet floors",
      "Repair or replace damaged flooring and carpets",
      "Route cables safely or use cable covers",
      "Provide good lighting, inside and outside",
      "Choose slip-resistant flooring and provide suitable footwear",
      "Put in place a simple system for reporting hazards"
    ],
    conseils: [
      "Report any hazard you see instead of ignoring it",
      "Do not carry loads that block your view",
      "Take your time on stairs and use the handrail"
    ],
    precisions: [
      "HSE looks at slips through six factors that work together: contamination, cleaning, flooring, footwear, the environment and people.",
      "Most slips happen on a floor that is wet or contaminated, so stopping the floor from getting dirty is more effective than cleaning it afterwards.",
      "Cleaning can create the risk it is meant to remove: a freshly mopped floor stays slippery until it is completely dry."
    ],
    verifications: [
      "Are all walkways clear?",
      "Are spillages cleaned immediately?",
      "Is lighting sufficient everywhere?",
      "Are cables out of walking areas?",
      "Do staff know how to report hazards?"
    ],
    source: { nom: "HSE – Preventing slips and trips at work", url: "https://www.hse.gov.uk/slips/preventing.htm" }
  },
  {
    id: "manutention",
    titre: "Manual handling",
    titreCourt: "Manual handling",
    icone: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    accroche: "Lifting, carrying, pushing and pulling: the main source of back pain.",
    chiffre: {
      valeur: "511,000",
      libelle: "workers were suffering from a work-related musculoskeletal disorder in 2024/25. Handling, lifting or carrying caused 17% of reported non-fatal injuries."
    },
    presentation:
      "Manual handling means moving or supporting a load by hand or bodily force: lifting, " +
      "lowering, pushing, pulling, carrying or holding. It is one of the biggest causes of " +
      "musculoskeletal disorders (MSDs), especially back pain. Injuries often build up over " +
      "time rather than from one single accident.",
    causes: [
      "Loads that are too heavy, bulky or unstable",
      "Repetitive lifting or carrying",
      "Awkward postures (twisting, bending, reaching)",
      "Lack of training or lack of lifting equipment",
      "Long distances to carry loads",
      "Tiredness and time pressure"
    ],
    consequences: [
      "Back, shoulder and neck pain",
      "Muscle and joint injuries, hernias",
      "Chronic pain and long-term illness",
      "Absenteeism and early retirement from work"
    ],
    loi:
      "The Manual Handling Operations Regulations 1992 require employers to avoid hazardous " +
      "manual handling when reasonably practicable, assess the risk of any task that cannot " +
      "be avoided, and reduce the risk of injury as far as possible.",
    solutions: [
      "Avoid the task: use trolleys, hoists, pallet trucks or conveyors",
      "Assess the task, the individual, the load and the environment (TILE)",
      "Reduce the weight or split loads into smaller ones",
      "Organise the workplace so that loads are stored between knee and shoulder height",
      "Train employees in safe lifting techniques",
      "Share heavy loads between two or more people",
      "Plan rest breaks and rotate tasks"
    ],
    conseils: [
      "Keep the load close to your body",
      "Bend your knees, not your back",
      "Never twist while carrying a load",
      "Ask for help or use equipment when in doubt"
    ],
    precisions: [
      "The regulations do not set a maximum legal weight: the risk depends on the whole task, not only on the load.",
      "The legal definition of a load also covers people and animals, which is why care workers are particularly exposed.",
      "Good technique according to HSE: plan the lift, adopt a stable stance with feet apart, get a good hold, keep the load close to the waist and move smoothly without jerking.",
      "To adjust your grip, put the load down first and then reposition it.",
      "HSE provides free assessment tools: the MAC tool for lifting and carrying, and the RAPP tool for pushing and pulling."
    ],
    verifications: [
      "Can the task be avoided or mechanised?",
      "Is lifting equipment available and in good condition?",
      "Have staff received training?",
      "Are loads labelled with their weight?",
      "Are rest breaks planned?"
    ],
    source: { nom: "HSE – Manual handling at work", url: "https://www.hse.gov.uk/msd/manual-handling/index.htm" }
  },
  {
    id: "stress",
    titre: "Work-related stress",
    titreCourt: "Stress",
    icone: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    accroche: "An invisible risk, and the leading cause of work-related ill health.",
    chiffre: {
      valeur: "964,000",
      libelle: "workers were suffering from work-related stress, depression or anxiety in 2024/25 – about half of all work-related ill health."
    },
    presentation:
      "Stress is the adverse reaction people have to excessive pressure or demands at work. " +
      "A little pressure can be motivating, but long-term pressure with no support can lead " +
      "to anxiety, depression and physical illness. Stress, depression and anxiety are a " +
      "leading cause of working days lost due to ill health in the UK.",
    causes: [
      "Excessive workload or unrealistic deadlines",
      "Lack of control over how work is done",
      "Poor relationships, bullying or harassment",
      "Lack of support from managers or colleagues",
      "Unclear role or lack of information about changes",
      "Job insecurity",
      "Difficulty balancing work and private life"
    ],
    consequences: [
      "Anxiety, depression and burnout",
      "Headaches, sleep problems and fatigue",
      "Heart problems and weaker immune system",
      "Reduced concentration, more mistakes and accidents",
      "High absenteeism and staff turnover"
    ],
    loi:
      "Employers have a duty of care for employees' mental as well as physical health, " +
      "so stress must be included in the risk assessment like any other hazard. " +
      "The HSE's Management Standards describe six areas of work to keep under control.",
    solutions: [
      "Carry out a stress risk assessment and talk with employees",
      "Set a clear stress-at-work policy",
      "Balance workloads and set realistic deadlines",
      "Give employees more control over how they work (flexible hours, remote work)",
      "Train managers to spot early signs and to be approachable",
      "Provide support: counselling, employee assistance programmes, mental health first aiders",
      "Tackle bullying and harassment firmly"
    ],
    conseils: [
      "Talk to your manager or a trusted colleague early",
      "Take your breaks and your holidays",
      "Keep a healthy lifestyle: sleep, exercise, social contact"
    ],
    precisions: [
      "Demands: workload, work patterns and the work environment.",
      "Control: how much say people have in the way they do their work.",
      "Support: the encouragement and resources given by the organisation, managers and colleagues.",
      "Relationships: promoting positive working to avoid conflict, and dealing with unacceptable behaviour.",
      "Role: whether people understand their role and do not have conflicting roles.",
      "Change: how organisational change, large or small, is managed and communicated."
    ],
    titrePrecisions: "The six Management Standards",
    verifications: [
      "Are workloads realistic?",
      "Do staff feel able to speak up?",
      "Is there a clear policy and a named contact?",
      "Are managers trained?",
      "Are absence and turnover levels monitored?"
    ],
    source: { nom: "HSE – Stress Management Standards", url: "https://www.hse.gov.uk/stress/standards/index.htm" }
  },
  {
    id: "hauteur",
    titre: "Falls from height",
    titreCourt: "Falls from height",
    icone: '<path d="M8 3v18M16 3v18M8 7h8M8 12h8M8 17h8"/>',
    accroche: "Ladders, roofs and scaffolds: rare accidents, but often very serious.",
    chiffre: {
      valeur: "8%",
      libelle: "of non-fatal injuries reported by employers in 2024/25 were falls from a height – fewer than slips, but far more often fatal or life-changing."
    },
    presentation:
      "Working at height means working in any place where a person could fall a distance " +
      "and be injured, even from a low level. It includes ladders, roofs, scaffolds, " +
      "platforms and openings in floors. Falls from height are one of the main causes of " +
      "fatal and serious workplace accidents, especially in construction and maintenance.",
    causes: [
      "Unsafe or unsuitable ladders and scaffolds",
      "Fragile roofs and skylights",
      "Missing guardrails or edge protection",
      "Lack of training and supervision",
      "Bad weather (wind, rain, ice)",
      "Overreaching or carrying loads while climbing"
    ],
    consequences: [
      "Fractures and head injuries",
      "Spinal injuries and paralysis",
      "Permanent disability",
      "Death"
    ],
    loi:
      "The Work at Height Regulations 2005 require employers to avoid work at height where " +
      "possible, use equipment to prevent falls where it cannot be avoided, and reduce the " +
      "distance and consequences of a fall.",
    solutions: [
      "Avoid working at height when possible (e.g. use extendable tools from the ground)",
      "Use collective protection first: guardrails, scaffolding, platforms",
      "Use personal protection (harness) only when collective measures are not possible",
      "Choose the right equipment and inspect it before every use",
      "Train and supervise workers",
      "Do not work at height in dangerous weather conditions",
      "Plan rescue procedures in case of a fall"
    ],
    conseils: [
      "Always keep three points of contact on a ladder",
      "Never overreach: move the ladder instead",
      "Report damaged equipment and do not use it"
    ],
    precisions: [
      "Ladders are not banned: HSE accepts them for low-risk, short-duration tasks, as part of a sensible and proportionate approach.",
      "A ladder is not automatically the first choice: check first whether safer equipment can be used.",
      "Use the right type of ladder for the job and check that it is safe before every use.",
      "A leaning ladder must be secured and set at the correct angle: one unit out for every four units up (the 1 in 4 rule)."
    ],
    verifications: [
      "Can the job be done from the ground?",
      "Is the equipment suitable and inspected?",
      "Are workers trained?",
      "Is edge protection in place?",
      "Is there a rescue plan?"
    ],
    source: { nom: "HSE – Safe use of ladders and stepladders", url: "https://www.hse.gov.uk/work-at-height/ladders/index.htm" }
  },
  {
    id: "electricite",
    titre: "Electrical hazards",
    titreCourt: "Electricity",
    icone: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
    accroche: "Present in almost every workplace, and impossible to see.",
    chiffre: {
      valeur: "50 V",
      libelle: "Contact with a voltage above about 50 volts AC is enough to cause injury. Standard UK mains sockets supply 230 volts."
    },
    presentation:
      "Electricity is used in almost every workplace, so electrical hazards are everywhere. " +
      "Contact with electricity can cause shocks and burns, and faulty equipment is a common " +
      "cause of fires. Electrical risks are often invisible, which makes them particularly " +
      "dangerous.",
    causes: [
      "Damaged or frayed cables and plugs",
      "Faulty or poorly maintained equipment",
      "Overloaded sockets and extension leads",
      "Water or damp near electrical equipment",
      "Work on live equipment by untrained people",
      "Contact with overhead or buried power lines"
    ],
    consequences: [
      "Electric shock and burns",
      "Cardiac arrest",
      "Fires and explosions",
      "Death",
      "Damage to equipment and property"
    ],
    loi:
      "The Electricity at Work Regulations 1989 require all electrical systems to be safe " +
      "and properly maintained, and work on them to be done by competent people.",
    solutions: [
      "Inspect equipment regularly and test it when required (e.g. PAT testing)",
      "Remove and replace damaged cables, plugs and equipment immediately",
      "Do not overload sockets and avoid daisy-chained extension leads",
      "Install residual current devices (RCDs) for extra protection",
      "Keep electrical equipment away from water",
      "Switch off and isolate the supply before maintenance work",
      "Allow only qualified electricians to carry out repairs"
    ],
    conseils: [
      "Never use equipment with visible damage",
      "Do not attempt your own repairs",
      "Know where the emergency switch-off is"
    ],
    precisions: [
      "PAT testing is not a legal requirement in itself: the law only requires equipment to be kept in a safe condition, with checks based on the level of risk.",
      "How often to check depends on the equipment and where it is used: a power tool on a building site needs far more frequent checks than an office lamp.",
      "In a clean, dry environment such as an office, a simple visual inspection by a trained member of staff finds most faults.",
      "An RCD rated at no more than 30 mA can save a life, but it does not protect against every type of electric shock.",
      "Always assume that overhead power lines are live and dangerous when planning work near them.",
      "Even very low voltages can be dangerous: a spark from a small battery can ignite an explosive atmosphere."
    ],
    verifications: [
      "Are cables and plugs in good condition?",
      "Is equipment inspected and tested?",
      "Are sockets overloaded?",
      "Are RCDs installed?",
      "Is only qualified staff doing electrical work?"
    ],
    source: { nom: "HSE – Electrical safety: frequently asked questions", url: "https://www.hse.gov.uk/electricity/faq.htm" }
  }
];
