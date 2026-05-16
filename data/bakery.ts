export interface BakeryProduct {
  id: string;
  name: string;
  price: number;
  category: "Breads" | "Pastries" | "Cakes" | "Drinks";
  description: string;
  emoji: string;
  popular?: boolean;
}

export const bakeryProducts: BakeryProduct[] = [
  // Breads
  {
    id: "b1",
    name: "Sourdough Loaf",
    price: 35,
    category: "Breads",
    description: "Slow-fermented sourdough with a crispy crust and chewy interior. Made fresh daily.",
    emoji: "🍞",
    popular: true,
  },
  {
    id: "b2",
    name: "Whole Wheat Bread",
    price: 28,
    category: "Breads",
    description: "Nutritious whole wheat loaf, perfect for sandwiches and toast.",
    emoji: "🍞",
  },
  {
    id: "b3",
    name: "Rye Bread",
    price: 32,
    category: "Breads",
    description: "Dense and flavorful rye bread with caraway seeds. A hearty choice.",
    emoji: "🫓",
  },
  {
    id: "b4",
    name: "Baguette",
    price: 20,
    category: "Breads",
    description: "Classic French baguette, golden and crispy on the outside, soft inside.",
    emoji: "🥖",
    popular: true,
  },
  {
    id: "b5",
    name: "Brioche",
    price: 40,
    category: "Breads",
    description: "Rich, buttery French bread with a soft and pillowy texture.",
    emoji: "🍞",
  },
  // Pastries
  {
    id: "p1",
    name: "Butter Croissant",
    price: 18,
    category: "Pastries",
    description: "Flaky, buttery croissant made with premium European-style butter. A bakery staple.",
    emoji: "🥐",
    popular: true,
  },
  {
    id: "p2",
    name: "Pain au Chocolat",
    price: 22,
    category: "Pastries",
    description: "Crispy croissant dough wrapped around rich dark chocolate.",
    emoji: "🥐",
    popular: true,
  },
  {
    id: "p3",
    name: "Cinnamon Roll",
    price: 25,
    category: "Pastries",
    description: "Warm, gooey cinnamon roll with cream cheese frosting. Perfect for breakfast.",
    emoji: "🌀",
  },
  {
    id: "p4",
    name: "Almond Danish",
    price: 28,
    category: "Pastries",
    description: "Flaky pastry filled with almond cream and topped with sliced almonds.",
    emoji: "🥐",
  },
  {
    id: "p5",
    name: "Blueberry Muffin",
    price: 20,
    category: "Pastries",
    description: "Moist muffin bursting with fresh blueberries and a crumbly sugar top.",
    emoji: "🫐",
  },
  // Cakes
  {
    id: "c1",
    name: "Chocolate Fudge Cake",
    price: 180,
    category: "Cakes",
    description: "Decadent 3-layer chocolate cake with rich fudge frosting. Serves 10-12.",
    emoji: "🎂",
    popular: true,
  },
  {
    id: "c2",
    name: "Red Velvet Cake",
    price: 200,
    category: "Cakes",
    description: "Classic red velvet cake with cream cheese frosting. A crowd pleaser.",
    emoji: "🍰",
    popular: true,
  },
  {
    id: "c3",
    name: "Lemon Drizzle Cake",
    price: 160,
    category: "Cakes",
    description: "Light sponge cake with tangy lemon icing and zesty lemon curd filling.",
    emoji: "🍋",
  },
  {
    id: "c4",
    name: "Carrot Cake",
    price: 170,
    category: "Cakes",
    description: "Moist spiced carrot cake with walnuts and cream cheese frosting.",
    emoji: "🥕",
  },
  {
    id: "c5",
    name: "Birthday Cheesecake",
    price: 220,
    category: "Cakes",
    description: "New York-style cheesecake on a graham cracker crust. Can be customized.",
    emoji: "🍰",
  },
  // Drinks
  {
    id: "d1",
    name: "Fresh Coffee",
    price: 15,
    category: "Drinks",
    description: "Freshly brewed single-origin coffee from Ghanaian farms.",
    emoji: "☕",
    popular: true,
  },
  {
    id: "d2",
    name: "Hot Chocolate",
    price: 18,
    category: "Drinks",
    description: "Rich and creamy hot chocolate made with premium cocoa.",
    emoji: "🍫",
  },
  {
    id: "d3",
    name: "Fresh Orange Juice",
    price: 20,
    category: "Drinks",
    description: "Freshly squeezed orange juice, no added sugar or preservatives.",
    emoji: "🍊",
  },
  {
    id: "d4",
    name: "Iced Tea",
    price: 12,
    category: "Drinks",
    description: "Chilled brewed tea lightly sweetened with honey. Refreshing!",
    emoji: "🍵",
  },
];

export const bakeryCategories = ["All", "Breads", "Pastries", "Cakes", "Drinks"] as const;
