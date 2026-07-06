export type Testimonial = {
  name: string;
  rating: number;
  timeAgo: string;
  text: string;
  reply?: {
    author: string;
    timeAgo: string;
    text: string;
  };
};

export const testimonials: Testimonial[] = [
  {
    name: "Ross Barr",
    rating: 5,
    timeAgo: "18 hours ago",
    text: "We were really impressed with the high quality of deep cleans given to two of our 8 seater vehicles.",
    reply: {
      author: "Elite Autocare (Owner)",
      timeAgo: "2 hours ago",
      text: "Thank you very much for the review, we are very happy you are pleased with the outcome of your vehicles, don't expect any less from Elite Auto Care and look forward to seeing you again",
    },
  },
  {
    name: "Donna McCallum",
    rating: 5,
    timeAgo: "22 hours ago",
    text: "Couldn't recommend this company anymore if I could give 6 stars I would, car was like brand new and the workers were polite and courteous",
    reply: {
      author: "Elite Autocare (Owner)",
      timeAgo: "2 hours ago",
      text: "Thank you for your review, glad your happy with the outcome and hope to see you again \u{1F64F}\u{1F3FB}",
    },
  },
];
