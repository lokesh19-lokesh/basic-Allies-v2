export const products = [
  {
    id: 1,
    name: "Premium Cotton Sketchbook (A5)",
    price: 24.00,
    originalPrice: 30.00,
    category: "Watercolor",
    image: "/assets/hero-1.png",
    description: "Our signature 300 GSM 100% cotton watercolor paper. Perfect for wet-on-wet techniques and layered washes. Features a durable linen hardbound cover.",
    specs: {
      gsm: "300 GSM",
      paperType: "100% Cotton",
      size: "A5 (14.8 x 21 cm)",
      pages: "48 Pages",
      texture: "Cold Pressed"
    },
    isNew: true,
    isPopular: true,
    isBestSelling: false,
  },
  {
    id: 2,
    name: "Linen Cover Journal (A6)",
    price: 18.00,
    originalPrice: 22.00,
    category: "Journals",
    image: "/assets/cat-watercolor.png",
    description: "Compact and elegant, this A6 journal features buttery smooth 120 GSM paper, ideal for ink, charcoal, and sketching on the go.",
    specs: {
      gsm: "120 GSM",
      paperType: "Acid-Free Paper",
      size: "A6 (10.5 x 14.8 cm)",
      pages: "160 Pages",
      texture: "Smooth"
    },
    isNew: false,
    isPopular: true,
    isBestSelling: true,
  },
  {
    id: 3,
    name: "Heavyweight Acrylic Pad",
    price: 15.00,
    originalPrice: 18.00,
    category: "Acrylic",
    image: "/assets/cat-acrylic.png",
    description: "Thick textured paper designed specifically for acrylic and oil painting. Prevents buckling and maintains vibrant color accuracy.",
    specs: {
      gsm: "400 GSM",
      paperType: "Cellulose",
      size: "A4 (21 x 29.7 cm)",
      pages: "20 Sheets",
      texture: "Canvas-like"
    },
    isNew: true,
    isPopular: false,
    isBestSelling: false,
  },
  {
    id: 4,
    name: "Artisanal Sketchbook (Gray)",
    price: 22.00,
    originalPrice: 25.00,
    category: "Sketchbooks",
    image: "/assets/hero-1.png",
    description: "Minimalist aesthetic with a soft-touch gray cover. Contains 150 GSM cream-toned paper suitable for all dry media.",
    specs: {
      gsm: "150 GSM",
      paperType: "Cream Paper",
      size: "Square (20 x 20 cm)",
      pages: "80 Pages",
      texture: "Fine Grain"
    },
    isNew: false,
    isPopular: true,
    isBestSelling: true,
  },
  {
    id: 5,
    name: "Handmade Deckle Edge Set",
    price: 32.00,
    originalPrice: 40.00,
    category: "Watercolor",
    image: "/assets/cat-watercolor.png",
    description: "Traditional handmade paper with natural deckle edges. Provides a unique, organic feel to your watercolor masterpieces.",
    specs: {
      gsm: "250 GSM",
      paperType: "Handmade Cotton",
      size: "Custom (15 x 15 cm)",
      pages: "25 Loose Sheets",
      texture: "Rough"
    },
    isNew: true,
    isPopular: false,
    isBestSelling: false,
  },
  {
    id: 6,
    name: "Vintage Canvas Journal",
    price: 28.00,
    originalPrice: 35.00,
    category: "Journals",
    image: "/assets/cta-bg.png",
    description: "Rugged canvas cover with a vintage wash effect. Ideal for mixed media journaling and travel documentation.",
    specs: {
      gsm: "180 GSM",
      paperType: "Mixed Media",
      size: "B5 (17.6 x 25 cm)",
      pages: "120 Pages",
      texture: "Medium Grain"
    },
    isNew: false,
    isPopular: true,
    isBestSelling: false,
  }
];

export const categories = [
  { name: "Watercolor", image: "/src/assets/cat-watercolor.png" },
  { name: "Acrylic", image: "/src/assets/cat-acrylic.png" },
  { name: "Sketchbooks", image: "/src/assets/hero-1.png" },
  { name: "Journals", image: "/src/assets/cta-bg.png" }
];
