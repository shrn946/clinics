export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    title: "General Information",
    items: [
      {
        id: "faq-1",
        question: "What services do you offer?",
        answer: "We offer a comprehensive range of dental services including general dentistry, cosmetic treatments, teeth whitening, implants, root canals, pediatric care, emergency care, and clear aligners."
      },
      {
        id: "faq-2",
        question: "How often should I visit the dentist?",
        answer: "For most patients, we recommend a routine check-up and cleaning every six months to maintain healthy teeth and gums, and to diagnose any potential problems early."
      },
      {
        id: "faq-3",
        question: "Do you accept insurance?",
        answer: "Yes, we accept a variety of insurance plans. Please contact our office with your insurance information to verify if your specific provider is accepted and to check your coverage limits."
      },
      {
        id: "faq-4",
        question: "What can I expect during my first visit?",
        answer: "Your first visit involves a comprehensive oral examination, cleanings, necessary digital X-rays, and a personalized consultation to discuss your dental health goals and treatment plan."
      },
      {
        id: "faq-5",
        question: "Do you offer emergency dental care?",
        answer: "Yes, we offer same-day appointments for dental emergencies like severe toothaches, chipped or broken teeth, or knocked-out teeth to relieve pain and start treatment immediately."
      }
    ]
  },
  {
    title: "Preventive Care",
    items: [
      {
        id: "faq-6",
        question: "What is preventive dental care?",
        answer: "Preventive care includes routine cleanings, regular exams, fluoride treatments, and dental sealants to protect your teeth from decay and maintain oral health."
      },
      {
        id: "faq-7",
        question: "Are dental sealants safe for children?",
        answer: "Yes, dental sealants are completely safe and are highly recommended for children to shield their newly erupted permanent molars from cavity-causing bacteria."
      },
      {
        id: "faq-8",
        question: "How does brushing and flossing help?",
        answer: "Brushing twice a day and flossing daily removes plaque—a sticky film of bacteria that causes cavities, gum disease, and bad breath."
      }
    ]
  },
  {
    title: "Treatments & Cosmetics",
    items: [
      {
        id: "faq-9",
        question: "What is cosmetic dentistry?",
        answer: "Cosmetic dentistry is aimed at enhancing the visual appearance of your teeth, gums, and smile using treatments like veneers, teeth whitening, and bonding."
      },
      {
        id: "faq-10",
        question: "How long does teeth whitening last?",
        answer: "Teeth whitening results typically last from 6 months to 2 years, depending on your lifestyle, diet (avoiding coffee, tea, red wine), and oral hygiene habits."
      },
      {
        id: "faq-11",
        question: "Are dental implants permanent?",
        answer: "Yes, dental implants are designed to be a permanent solution for missing teeth. The titanium post fuses with your jawbone and can last a lifetime with proper care."
      }
    ]
  }
];
