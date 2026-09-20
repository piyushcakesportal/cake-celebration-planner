export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  displayDate: string;
  readTime: string;
  introduction: string;
  sections: BlogSection[];
  takeaway: string;
};

export const posts: BlogPost[] = [
  {
    slug: "choose-the-right-cake-size",
    title: "How to Choose the Right Cake Size Without Guessing",
    description:
      "A practical way to estimate cake portions using guest count, serving style, and the rest of the dessert table.",
    category: "Planning",
    publishedAt: "2026-09-14",
    displayDate: "14 September 2026",
    readTime: "5 min read",
    introduction:
      "Cake weight is useful, but it does not tell the whole story. Two cakes of the same weight can produce different numbers of portions because height, shape, decoration, and cutting style all matter. A better estimate starts with the people at the table.",
    sections: [
      {
        heading: "Count the guests who will actually eat dessert",
        paragraphs: [
          "Begin with the confirmed guest count, then consider how many children and adults are attending. If the cake follows a full meal, smaller dessert portions are usually enough. If cake is the main sweet item, allow a little more per person.",
          "It is sensible to add a small buffer, but ordering for twice the expected number usually creates waste rather than peace of mind.",
        ],
      },
      {
        heading: "Decide how the cake will be served",
        paragraphs: [
          "A neat event-style slice is smaller than a generous family slice. Tall cakes can often be cut into slim rectangular portions, while low cakes are more commonly served in wider wedges.",
        ],
        bullets: [
          "Ask for the number of dessert-size portions the exact design provides.",
          "Mention if the cake will be served after a meal or as the main dessert.",
          "Tell the baker if you prefer generous home-style slices.",
        ],
      },
      {
        heading: "Account for other desserts",
        paragraphs: [
          "Cupcakes, ice cream, sweets, or a dessert table reduce the amount of cake each guest is likely to take. When several options are available, a slightly smaller cake can still be comfortable for the gathering.",
          "For a mixed dessert table, focus less on weight alone and more on the total number of portions available across everything being served.",
        ],
      },
    ],
    takeaway:
      "Use guest count as the starting point, describe how the cake will be served, and confirm the expected portions for the specific design before ordering.",
  },
  {
    slug: "plan-cake-delivery-without-last-minute-stress",
    title: "Plan Cake Delivery Without Last-Minute Stress",
    description:
      "Work backwards from the cutting time and prepare the address, receiver, and storage space before delivery day.",
    category: "Delivery",
    publishedAt: "2026-09-07",
    displayDate: "7 September 2026",
    readTime: "4 min read",
    introduction:
      "The best delivery time is not simply the earliest available slot. It should leave enough room for traffic and handover while avoiding hours of unnecessary storage. A short plan made the day before can prevent most delivery-day confusion.",
    sections: [
      {
        heading: "Work backwards from the cutting time",
        paragraphs: [
          "Write down when the cake will be cut, then allow time for delivery, checking the message and design, arranging the table, and taking photographs. Local traffic, security gates, lifts, and reception desks can all add time after the rider reaches the area.",
          "Choose a buffer that suits the venue. A home gathering may need less time than a banquet hall or gated complex.",
        ],
      },
      {
        heading: "Make the address easy to use",
        paragraphs: [
          "A complete address should include the building or house number, floor, nearby landmark, and the correct entrance. A map pin is helpful, but it should support the written address rather than replace it.",
        ],
        bullets: [
          "Share the number of the person who will actually receive the order.",
          "Mention gate, tower, floor, or parking restrictions in advance.",
          "Keep the receiver available during the selected slot.",
        ],
      },
      {
        heading: "Prepare a safe place before the box arrives",
        paragraphs: [
          "Clear a flat refrigerator shelf if the cake needs chilling. Avoid balancing the box on food containers or placing heavy items above it. When moving the cake, support the base rather than holding the sides of the box.",
          "Follow the storage advice supplied with the cake because cream, fondant, and fresh-fruit designs can have different requirements.",
        ],
      },
    ],
    takeaway:
      "Plan from the event time, provide a complete handover route, and make room for safe storage before delivery begins.",
  },
  {
    slug: "prepare-a-photo-for-a-personalised-cake",
    title: "How to Prepare a Photo for a Personalised Cake",
    description:
      "Choose a clear original image, leave room for cropping, and send names or messages separately to avoid preventable errors.",
    category: "Personalisation",
    publishedAt: "2026-08-31",
    displayDate: "31 August 2026",
    readTime: "5 min read",
    introduction:
      "A printed cake image can only be as clear as the file supplied. Screenshots, social-media downloads, and repeatedly forwarded photos may look acceptable on a phone but lose detail when enlarged and printed.",
    sections: [
      {
        heading: "Send the best available original",
        paragraphs: [
          "Use the original camera file whenever possible. Check that the face is in focus and not covered by stickers, captions, or interface icons. A bright, evenly lit photograph normally reproduces more reliably than a dark image with strong filters.",
          "If the only copy is in a messaging app, look for the option to send it as a document or file to reduce additional compression.",
        ],
      },
      {
        heading: "Leave enough space for the final shape",
        paragraphs: [
          "A rectangular photograph may need to fit a round or heart-shaped print. Images with a little open space around the face and shoulders are easier to crop without removing important details.",
        ],
        bullets: [
          "Avoid tightly cropped selfies when another image is available.",
          "Say which people or details must remain visible.",
          "Ask to see a crop preview when placement is especially important.",
        ],
      },
      {
        heading: "Type the message separately",
        paragraphs: [
          "Do not rely on handwritten text inside the photo. Send the cake message as plain typed text and check every name, date, and age. If the message uses another language, provide the exact final wording rather than a phonetic instruction.",
          "A final confirmation that includes both the image and the typed message gives everyone the same reference before production begins.",
        ],
      },
    ],
    takeaway:
      "Use the original image, protect important details from cropping, and confirm all wording in typed form before the design is prepared.",
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
