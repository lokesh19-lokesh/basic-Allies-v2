const sharedDescription = `What's inside?
1. 6 Colouring Sheets: Simple, elegant designs for kids and adults alike. Because who doesn't love a good colouring session? 😊

2. 2 Sensory Calming Stickers: Our latest experiment! They might look a little... unusual, but trust us, they're magic. 🌟 Infused with essential oil for a calming effect. Just peel, stick, and breathe in the zen. Pro tip: keep them in the packet when not in use, unless you want your whole house to smell like a spa.

4. Catalog: so you dont have to keep guessing what colour to use. We have it made ready for you.

5. File: Everything is neatly packed in a file for safe delivery. We didn't want anything to get lost in transit... or creased. 😅

Important Note
Keep the stickers in their packet when not in use, and if you're allergic or sensitive to fragrances, please avoid using them. We don't want any, ahem, "scent-itive" reactions. 🤧

Happy colouring, and don't hesitate to reach out if you need anything! 😊`;

const specsTemplate = {
  gsm: "Premium",
  paperType: "High Quality Paper",
  size: "Standard",
  pages: "6 Sheets + Extras",
  texture: "Smooth"
};

export const products = [
  {
    id: 1,
    name: "Colouring Set 1",
    price: 280,
    originalPrice: 20.00,
    category: "Set 1",
    image: "/set1/1.jpeg",
    images: ["/set1/1.jpeg", "/set1/2.jpeg", "/set1/3.jpeg", "/set1/4.jpeg", "/set1/5.jpeg", "/set1/6.jpeg"],
    description: sharedDescription,
    specs: specsTemplate,
    isNew: true,
    isPopular: true,
    isBestSelling: true,
  },
  {
    id: 2,
    name: "Colouring Set 2",
    price: 280,
    originalPrice: 20.00,
    category: "Set 2",
    image: "/set2/1.jpeg",
    images: ["/set2/1.jpeg", "/set2/2.jpeg", "/set2/3.jpeg", "/set2/4.jpeg", "/set2/5.jpeg", "/set2/6.jpeg"],
    description: sharedDescription,
    specs: specsTemplate,
    isNew: true,
    isPopular: false,
    isBestSelling: true,
  },
  {
    id: 3,
    name: "Colouring Set 3",
    price: 280,
    originalPrice: 20.00,
    category: "Set 3",
    image: "/set3/1.jpeg",
    images: ["/set3/1.jpeg", "/set3/2.jpeg", "/set3/3.jpeg", "/set3/4.jpeg", "/set3/5.jpeg", "/set3/6.jpeg"],
    description: sharedDescription,
    specs: specsTemplate,
    isNew: false,
    isPopular: true,
    isBestSelling: false,
  },
  {
    id: 4,
    name: "Colouring Set 4",
    price: 280,
    originalPrice: 20.00,
    category: "Set 4",
    image: "/set4/1.jpeg",
    images: ["/set4/1.jpeg", "/set4/2.jpeg", "/set4/3.jpeg", "/set4/4.jpeg", "/set4/5.jpeg", "/set4/6.jpeg"],
    description: sharedDescription,
    specs: specsTemplate,
    isNew: true,
    isPopular: false,
    isBestSelling: false,
  },
  {
    id: 5,
    name: "Colouring Set 5",
    price: 280,
    originalPrice: 20.00,
    category: "Set 5",
    image: "/set5/1.jpeg",
    images: ["/set5/1.jpeg", "/set5/2.jpeg", "/set5/3.jpeg", "/set5/4.jpeg", "/set5/5.jpeg", "/set5/6.jpeg"],
    description: sharedDescription,
    specs: specsTemplate,
    isNew: false,
    isPopular: true,
    isBestSelling: true,
  }
];

export const categories = [
  { name: "Set 1", image: "/set1/1.jpeg" },
  { name: "Set 2", image: "/set2/1.jpeg" },
  { name: "Set 3", image: "/set3/1.jpeg" },
  { name: "Set 4", image: "/set4/1.jpeg" },
  { name: "Set 5", image: "/set5/1.jpeg" }
];

