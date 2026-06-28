export interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Dianne Russell",
    role: "Patient",
    image: "/images/author-1.jpg",
    rating: 5,
    content: "The professionalism and friendliness of the whole team are outstanding. I've been going for years for all my dental needs, and I wouldn't go anywhere else."
  },
  {
    name: "Harper Green",
    role: "Patient",
    image: "/images/author-2.jpg",
    rating: 5,
    content: "My teeth whitening treatment was completely pain-free and the results are unbelievable. The clinic has a very welcoming environment and amazing doctors."
  },
  {
    name: "Scott Lucas",
    role: "Patient",
    image: "/images/author-3.jpg",
    rating: 5,
    content: "I had a dental implant procedure done here. They explained everything clearly and the follow-up care was excellent. I highly recommend Primecare."
  },
  {
    name: "Benjamin Adams",
    role: "Patient",
    image: "/images/author-4.jpg",
    rating: 5,
    content: "Excellent pediatric care! My kids actually look forward to going to the dentist. They make the visits fun and educational for children."
  },
  {
    name: "Eleanor Pena",
    role: "Patient",
    image: "/images/author-1.jpg",
    rating: 5,
    content: "Primecare saved my weekend! I had a severe toothache and they got me in for an emergency appointment right away. Very grateful for their prompt care."
  },
  {
    name: "Albert Flores",
    role: "Patient",
    image: "/images/author-2.jpg",
    rating: 5,
    content: "Highly recommend their cosmetic dentistry services. The clear aligners process was smooth, and my smile has completely changed for the better."
  }
];
