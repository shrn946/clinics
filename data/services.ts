export interface Service {
  name: string;
  slug: string;
  icon: string;
  image: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  faq: { question: string; answer: string }[];
}

export const servicesData: Service[] = [
  {
    name: "General Dentistry",
    slug: "general-dentistry",
    icon: "/images/icon-service-1.svg",
    image: "/images/service-img-1.jpg",
    description: "We are excited to meet you and provide the best dental care for your family.",
    fullDescription: "General dentistry focuses on the prevention, diagnosis, and treatment of common oral health issues. It includes routine services such as cleanings, fillings, and exams to maintain overall dental health. General dentists address a wide range of concerns, from cavities and gum disease to oral hygiene education, ensuring comprehensive care for patients of all ages.",
    benefits: [
      "Personalized oral health advice",
      "Restorative treatments",
      "Overall health improvement",
      "Orthodontic assessments",
      "Gum health management"
    ],
    process: [
      "Initial consultation and patient history",
      "Comprehensive examination and X-rays",
      "Personalized preventive treatment plan",
      "Procedure execution (cleaning, filling, etc.)",
      "Post-care follow-up and monitoring"
    ],
    faq: [
      {
        question: "What does general dentistry cover?",
        answer: "It covers preventive care like cleanings, exams, X-rays, as well as restorations like fillings, crowns, and root canals."
      },
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend coming in every six months to keep your teeth and gums healthy and catch any issues early."
      }
    ]
  },
  {
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    icon: "/images/icon-service-2.svg",
    image: "/images/service-img-2.jpg",
    description: "Enhance your smile and boost your confidence with our custom cosmetic treatments.",
    fullDescription: "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. From minor adjustments to major transformations, our cosmetic procedures are designed to enhance your smile's aesthetics while maintaining optimal functionality.",
    benefits: [
      "Enhanced smile aesthetics",
      "Boosted self-confidence",
      "Long-lasting, natural-looking results",
      "Improved overall facial harmony",
      "Stain removal and alignment correction"
    ],
    process: [
      "Cosmetic smile analysis and consultation",
      "Treatment design and simulation",
      "Preparation of teeth (if necessary)",
      "Bonding, placement, or application",
      "Polishing and final smile reveal"
    ],
    faq: [
      {
        question: "What is cosmetic dentistry?",
        answer: "Cosmetic dentistry involves treatments designed to improve the look of your teeth and smile, such as veneers, bonding, and shaping."
      },
      {
        question: "Are cosmetic dental procedures painful?",
        answer: "Most cosmetic procedures are minimally invasive and can be performed with local anesthesia to ensure complete comfort."
      }
    ]
  },
  {
    name: "Teeth Whitening",
    slug: "teeth-whitening",
    icon: "/images/icon-service-3.svg",
    image: "/images/service-img-3.jpg",
    description: "Get a bright, sparkling smile with our safe and effective whitening systems.",
    fullDescription: "Teeth whitening is a simple, non-invasive dental treatment used to change the color of natural tooth enamel and is an ideal way to enhance the beauty of your smile. We offer both in-office laser treatments and custom take-home kits for your convenience.",
    benefits: [
      "Removes deep stains and discoloration",
      "Several shades brighter in a single visit",
      "Safe for tooth enamel and gums",
      "Quick and highly effective treatments",
      "Customized whitening levels"
    ],
    process: [
      "Shade evaluation and pre-whitening exam",
      "Lip and gum protection placement",
      "Application of professional-grade whitening gel",
      "Light activation (for in-office treatment)",
      "Rinse and post-treatment shade check"
    ],
    faq: [
      {
        question: "Is teeth whitening safe?",
        answer: "Yes, when performed by a dental professional, teeth whitening is perfectly safe and does not damage your tooth enamel."
      },
      {
        question: "How long do whitening results last?",
        answer: "Results typically last from six months to two years, depending on your diet, smoking habits, and oral hygiene."
      }
    ]
  },
  {
    name: "Dental Implants",
    slug: "dental-implants",
    icon: "/images/icon-service-4.svg",
    image: "/images/service-img-4.jpg",
    description: "Restore missing teeth with permanent, natural-looking dental implants.",
    fullDescription: "Dental implants are the gold standard for replacing missing teeth. They are biocompatible titanium posts placed surgically into the jawbone, serving as strong foundations for custom crowns that match your natural teeth perfectly.",
    benefits: [
      "Permanent tooth replacement solution",
      "Prevents bone loss in the jaw",
      "Restores full chewing and speaking ability",
      "Looks and functions like natural teeth",
      "Supports adjacent teeth without modifying them"
    ],
    process: [
      "Comprehensive surgical and restorative planning",
      "Implant post placement surgery",
      "Healing period (osteointegration) of 3-6 months",
      "Abutment placement and impression taking",
      "Final custom crown fitting and attachment"
    ],
    faq: [
      {
        question: "Am I a good candidate for dental implants?",
        answer: "Most adults with good general health and sufficient jawbone density are excellent candidates for implants."
      },
      {
        question: "How long do dental implants last?",
        answer: "With proper care and regular checkups, dental implants can last a lifetime."
      }
    ]
  },
  {
    name: "Root Canal Treatment",
    slug: "root-canal-treatment",
    icon: "/images/icon-service-5.svg",
    image: "/images/service-img-5.jpg",
    description: "Save damaged or infected teeth and relieve pain with gentle root canal therapy.",
    fullDescription: "Root canal therapy is a highly successful treatment designed to save a tooth that is severely decayed, infected, or damaged. During the procedure, the infected nerve and pulp are removed, and the inside of the tooth is cleaned, sealed, and protected with a crown.",
    benefits: [
      "Relieves severe tooth pain and pressure",
      "Saves your natural tooth from extraction",
      "Prevents the spread of infection to other teeth",
      "Restores normal biting force and sensation",
      "Protects the jawbone and facial structure"
    ],
    process: [
      "Diagnosis with digital X-rays",
      "Local anesthesia to ensure a pain-free procedure",
      "Opening the tooth and removing the infected pulp",
      "Cleaning, shaping, and sealing the root canals",
      "Restoring the tooth with a temporary filling and later a permanent crown"
    ],
    faq: [
      {
        question: "Does a root canal hurt?",
        answer: "Modern anesthetics make root canals no more painful than getting a routine filling. It actually relieves the pain caused by the infection."
      },
      {
        question: "Can I eat after a root canal?",
        answer: "We recommend waiting until the numbness wears off to avoid biting your tongue or cheek, and avoiding hard foods until the permanent crown is placed."
      }
    ]
  },
  {
    name: "Emergency Dental Care",
    slug: "emergency-dental-care",
    icon: "/images/icon-service-6.svg",
    image: "/images/service-img-6.jpg",
    description: "Get immediate attention and relief for urgent dental issues and toothaches.",
    fullDescription: "Dental emergencies can happen at any time. Whether you have a severe toothache, a broken tooth, a knocked-out tooth, or a lost restoration, our team is equipped to provide immediate, compassionate care to relieve pain and protect your smile.",
    benefits: [
      "Same-day emergency appointments available",
      "Immediate pain relief and stabilization",
      "Prevents minor issues from becoming major problems",
      "Expert treatment for trauma, swelling, and bleeding",
      "On-call assistance and guidance"
    ],
    process: [
      "Urgent assessment and diagnostics",
      "Immediate pain management and relief",
      "Temporary or permanent treatment to stabilize the issue",
      "Coordination of follow-up care if necessary",
      "Prescription of necessary medications (antibiotics/painkillers)"
    ],
    faq: [
      {
        question: "What is considered a dental emergency?",
        answer: "Severe tooth pain, a knocked-out or loose tooth, uncontrollable bleeding, facial swelling, or a broken jaw are all dental emergencies."
      },
      {
        question: "What should I do if a tooth is knocked out?",
        answer: "Keep the tooth moist. Try placing it back in the socket without touching the root, or keep it in a container of milk, and contact us immediately."
      }
    ]
  },
  {
    name: "Invisalign / Braces",
    slug: "invisalign-braces",
    icon: "/images/icon-service-2.svg",
    image: "/images/service-img-2.jpg",
    description: "Straighten your teeth comfortably and discreetly with clear aligners or braces.",
    fullDescription: "Straighten your teeth and achieve the perfect smile without the bulk of traditional metal braces. Invisalign clear aligners are custom-made, removable, and virtually invisible, providing a comfortable and aesthetic orthodontic treatment.",
    benefits: [
      "Virtually invisible orthodontic treatment",
      "Removable for easy eating, brushing, and flossing",
      "Custom-fit aligners ensure maximum comfort",
      "Shorter treatment duration in many cases",
      "Fewer orthodontic checkup visits required"
    ],
    process: [
      "Digital 3D smile scan and treatment preview",
      "Custom fabrication of your aligner series",
      "Fitting and instructions on wearing your aligners",
      "Progress checks every 4 to 6 weeks",
      "Retainer fitting to maintain your straight new smile"
    ],
    faq: [
      {
        question: "How long does Invisalign treatment take?",
        answer: "Most cases take between 12 to 18 months, depending on the complexity of the tooth alignment needed."
      },
      {
        question: "Are clear aligners painful?",
        answer: "You may feel some pressure for the first few days of each new set of aligners, which is normal and shows the teeth are moving."
      }
    ]
  },
  {
    name: "Restorative Dentistry",
    slug: "restorative-dentistry",
    icon: "/images/icon-service-3.svg",
    image: "/images/service-img-3.jpg",
    description: "Restore the function and structure of your teeth with fillings, crowns, and bridges.",
    fullDescription: "Restorative dentistry aims to repair and restore the structure, function, and aesthetics of damaged, decayed, or missing teeth. From tooth-colored fillings to crowns and bridges, we help you regain a fully functional, healthy smile.",
    benefits: [
      "Repairs decayed and damaged tooth structure",
      "Restores normal biting and chewing functions",
      "Prevents teeth shifting and alignment problems",
      "Blends seamlessly with your natural teeth",
      "Protects weak teeth from further fractures"
    ],
    process: [
      "Bite analysis and decay removal",
      "Tooth preparation and reshaping",
      "Digital or physical impressions",
      "Placement of direct restorations or fitting of indirect restorations",
      "Polishing and bite adjustment"
    ],
    faq: [
      {
        question: "What is the difference between a filling and a crown?",
        answer: "A filling is used to repair minor decay in a small part of the tooth, while a crown covers and protects the entire tooth when it is weak or heavily damaged."
      },
      {
        question: "Do restorative treatments look natural?",
        answer: "Yes, we use advanced composite resins, porcelain, and ceramics that match the color and transparency of your natural teeth."
      }
    ]
  },
  {
    name: "Dental Sealants",
    slug: "dental-sealants",
    icon: "/images/icon-service-5.svg",
    image: "/images/service-img-5.jpg",
    description: "Protect your teeth from decay with thin, protective coatings applied to molars.",
    fullDescription: "Dental sealants are thin, plastic coatings painted on the chewing surfaces of the back teeth (molars and premolars) to prevent tooth decay. They quickly bond into the depressions and grooves of the teeth, forming a protective shield over the enamel.",
    benefits: [
      "Provides a barrier against plaque and food particles",
      "Reduces the risk of decay in molars by up to 80%",
      "Quick, painless, and non-invasive application",
      "Long-lasting protection for children and teens",
      "Invisible, clear or tooth-colored coating"
    ],
    process: [
      "Thorough cleaning of the target teeth",
      "Drying and application of an acidic gel to roughen the surface",
      "Rinsing and drying the teeth again",
      "Painting the liquid sealant onto the enamel grooves",
      "Using a curing light to harden the sealant"
    ],
    faq: [
      {
        question: "Who should get dental sealants?",
        answer: "Children and teenagers are the primary candidates for sealants as their permanent molars emerge, but adults can benefit too."
      },
      {
        question: "How long do sealants last?",
        answer: "Sealants can protect teeth for up to 9 years, but they should be checked for wear and chipping during regular cleanings."
      }
    ]
  },
  {
    name: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    icon: "/images/icon-service-6.svg",
    image: "/images/service-img-6.jpg",
    description: "Provide gentle, friendly, and specialized dental care for children and infants.",
    fullDescription: "Pediatric dentistry is dedicated to the oral health of children from infancy through their teen years. We create a warm, fun, and non-threatening environment to teach children good habits and monitor their development.",
    benefits: [
      "Child-friendly environment to ease dental anxiety",
      "Early monitoring of jaw development and tooth eruption",
      "Preventive treatments like sealants and fluoride",
      "Habit counseling for thumb sucking and pacifier use",
      "Fun education on brushing and flossing"
    ],
    process: [
      "Friendly introduction and office tour",
      "Gentle cleaning and tooth counting",
      "Examination of tooth alignment and bite",
      "Fluoride application (if recommended)",
      "Prizes, rewards, and home hygiene instruction"
    ],
    faq: [
      {
        question: "When should my child first visit the dentist?",
        answer: "We recommend scheduling their first visit by their first birthday, or within six months of their first tooth erupting."
      },
      {
        question: "How do I care for my baby's first teeth?",
        answer: "Clean baby teeth gently with a soft baby toothbrush and a tiny smear of fluoride toothpaste twice a day."
      }
    ]
  }
];
