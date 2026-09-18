// Mock menu data for Gusteau's Parisian Bistro
// Images are curated Unsplash food photography (royalty-free, hotlinked)

export const categories = [
  "All",
  "Starters",
  "Soups",
  "Main Courses",
  "French Pastries",
  "Signature Ratatouille",
  "Drinks",
];

export const dishes = [
  {
    id: "signature-ratatouille",
    name: "Confit Byaldi",
    category: "Signature Ratatouille",
    price: 28,
    rating: 4.9,
    prepTime: "45 min",
    serves: "1-2 people",
    image:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=1200&q=80",
      "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=1200&q=80",
    ],
    shortDescription:
      "Thinly sliced zucchini, eggplant, and tomato, layered in a spiral over a bed of piperade and slow-roasted until tender.",
    description:
      "The dish that humbled a critic. Every vegetable is sliced by hand to the width of a coin, fanned into a spiral, and bathed in herb-infused olive oil before a long, slow roast. Beneath the vegetables lies a piperade of peppers and onion, sweet and slightly smoky. It is simple food, cooked with total attention — which was always the point.",
    ingredients: [
      "Zucchini",
      "Eggplant",
      "Yellow squash",
      "Roma tomato",
      "Red bell pepper",
      "Sweet onion",
      "Fresh thyme",
      "Garlic-infused olive oil",
    ],
    backstory:
      "Inspired by the dish Remy prepares for Anton Ego — a peasant recipe elevated by precision, proving that anyone can cook if they cook with heart.",
    reviews: [
      {
        name: "Anton E.",
        rating: 5,
        comment:
          "I was transported to my mother's kitchen in an instant. Unpretentious, and unforgettable.",
      },
      {
        name: "Colette R.",
        rating: 5,
        comment: "Precision on a plate. Every slice matters here.",
      },
    ],
  },
  {
    id: "soupe-a-loignon",
    name: "Soupe à l'Oignon Gratinée",
    category: "Soups",
    price: 14,
    rating: 4.7,
    prepTime: "1 hr 30 min",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80",
    ],
    shortDescription:
      "Caramelized onions simmered in rich beef stock, crowned with a toasted baguette crouton and molten Gruyère.",
    description:
      "Onions caramelized low and slow for over an hour until they turn deep amber and sweet, deglazed with dry white wine, and simmered in a dark beef broth. Finished under the broiler with a garlic crouton and a thick blanket of bubbling Gruyère.",
    ingredients: [
      "Yellow onions",
      "Beef stock",
      "Dry white wine",
      "Baguette",
      "Gruyère cheese",
      "Fresh thyme",
      "Bay leaf",
    ],
    backstory:
      "A staple of every Parisian bistro, this soup was the first thing Gusteau ever taught his kitchen brigade: patience turns something humble into something worth savoring.",
    reviews: [
      {
        name: "Linguini",
        rating: 5,
        comment: "The cheese pull alone is worth the visit.",
      },
    ],
  },
  {
    id: "coq-au-vin",
    name: "Coq au Vin",
    category: "Main Courses",
    price: 32,
    rating: 4.8,
    prepTime: "2 hr",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80",
    ],
    shortDescription:
      "Chicken braised in red Burgundy wine with pearl onions, mushrooms, and smoked lardons.",
    description:
      "A cornerstone of French country cooking. Chicken thighs are seared until burnished, then braised for hours in red wine with smoked lardons, pearl onions, and wild mushrooms until the sauce turns glossy and deep. Served with buttered fingerling potatoes.",
    ingredients: [
      "Chicken thighs",
      "Burgundy red wine",
      "Smoked lardons",
      "Pearl onions",
      "Cremini mushrooms",
      "Fingerling potatoes",
      "Fresh tarragon",
    ],
    backstory:
      "Gusteau's own grandmother's recipe — the dish he said convinced him a restaurant could taste like home.",
    reviews: [
      {
        name: "Colette R.",
        rating: 5,
        comment: "The sauce alone deserves its own dish.",
      },
    ],
  },
  {
    id: "creme-brulee",
    name: "Crème Brûlée à la Vanille",
    category: "French Pastries",
    price: 11,
    rating: 4.9,
    prepTime: "40 min + chill",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=1200&q=80",
    ],
    shortDescription:
      "Silken Madagascar vanilla custard beneath a shatteringly thin caramelized sugar crust.",
    description:
      "Egg yolks and cream infused with real vanilla bean, baked in a gentle water bath until barely set, then chilled overnight. Finished tableside with a torch to shatter a perfect glass-thin sugar crust.",
    ingredients: [
      "Heavy cream",
      "Egg yolks",
      "Madagascar vanilla bean",
      "Cane sugar",
    ],
    backstory:
      "Skinner tried to mass-produce this once. It never tasted the same in a box.",
    reviews: [
      {
        name: "Anton E.",
        rating: 5,
        comment: "The crack of the spoon through the sugar is pure theatre.",
      },
    ],
  },
  {
    id: "croissant-au-beurre",
    name: "Croissant au Beurre",
    category: "French Pastries",
    price: 6,
    rating: 4.6,
    prepTime: "18 hr (laminated)",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80",
    ],
    shortDescription:
      "Laminated in pure French butter for eighteen hours, baked to a shattering, honeycombed crumb.",
    description:
      "Dough is folded and rested over three days to build hundreds of buttery layers, then shaped by hand every morning at dawn. The result: a crackling golden crust giving way to a warm, honeycombed interior.",
    ingredients: ["French butter", "Flour", "Fresh yeast", "Milk", "Sugar", "Salt"],
    backstory: "Baked fresh each morning before the bistro opens its doors on Rue Louis-Armand.",
    reviews: [
      { name: "Skinner", rating: 4, comment: "Even I cannot find fault." },
    ],
  },
  {
    id: "bouillabaisse",
    name: "Bouillabaisse",
    category: "Soups",
    price: 26,
    rating: 4.7,
    prepTime: "1 hr 15 min",
    serves: "1-2 people",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1200&q=80",
    ],
    shortDescription:
      "A saffron-scented Provençal fish stew with mussels, prawns, and rouille-topped crostini.",
    description:
      "A Provençal classic built on a saffron-and-fennel broth, simmered with the day's catch, mussels, and prawns. Served with garlic rouille and crisp baguette crostini for dipping.",
    ingredients: [
      "White fish fillet",
      "Mussels",
      "Prawns",
      "Saffron",
      "Fennel",
      "Tomato",
      "Garlic rouille",
    ],
    backstory:
      "A recipe from the south, brought to Paris by a line cook who missed the coast.",
    reviews: [
      { name: "Linguini", rating: 5, comment: "Tastes like the Mediterranean." },
    ],
  },
  {
    id: "duck-confit",
    name: "Confit de Canard",
    category: "Main Courses",
    price: 34,
    rating: 4.8,
    prepTime: "2 hr 30 min",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=1200&q=80",
    ],
    shortDescription:
      "Duck leg slow-cooked in its own fat until fall-off-the-bone, finished crisp-skinned over the flame.",
    description:
      "Duck legs are cured overnight with thyme and garlic, then slowly poached in rendered duck fat for hours until meltingly tender. Finished skin-side down in a hot pan for a shattering crisp crust, served over sautéed potatoes.",
    ingredients: [
      "Duck legs",
      "Duck fat",
      "Garlic",
      "Thyme",
      "Sea salt",
      "Potatoes",
    ],
    backstory: "Gusteau called this dish 'patience made edible.'",
    reviews: [
      { name: "Colette R.", rating: 5, comment: "The skin. THE SKIN." },
    ],
  },
  {
    id: "tarte-tatin",
    name: "Tarte Tatin",
    category: "French Pastries",
    price: 10,
    rating: 4.7,
    prepTime: "1 hr",
    serves: "2 people",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=1200&q=80",
    ],
    shortDescription:
      "Caramelized apples baked beneath buttery puff pastry, inverted tableside.",
    description:
      "Apples are caramelized in butter and sugar directly in the pan, topped with puff pastry, baked, then flipped in one dramatic motion to reveal a glossy caramel crown. Served warm with crème fraîche.",
    ingredients: [
      "Apples",
      "Puff pastry",
      "Butter",
      "Sugar",
      "Crème fraîche",
    ],
    backstory:
      "Born of a kitchen accident, perfected by a hundred years of French grandmothers.",
    reviews: [
      { name: "Anton E.", rating: 4, comment: "Rustic in the best sense." },
    ],
  },
  {
    id: "ratatouille-tartlets",
    name: "Ratatouille Tartlets",
    category: "Signature Ratatouille",
    price: 16,
    rating: 4.6,
    prepTime: "50 min",
    serves: "2 people (4 tartlets)",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200&q=80",
    ],
    shortDescription:
      "Bite-sized shortcrust tartlets filled with slow-roasted ratatouille vegetables and fresh basil oil.",
    description:
      "A playful take on the signature dish — buttery shortcrust shells filled with the same slow-roasted vegetable medley, finished with a thread of fresh basil oil. Perfect for sharing at the start of a meal.",
    ingredients: [
      "Shortcrust pastry",
      "Zucchini",
      "Eggplant",
      "Tomato",
      "Basil oil",
      "Parmesan",
    ],
    backstory: "A starter Remy dreamt up on a slow Tuesday night in the kitchen.",
    reviews: [
      { name: "Django", rating: 5, comment: "Proof a small bite can be a big memory." },
    ],
  },
  {
    id: "vichyssoise",
    name: "Vichyssoise",
    category: "Soups",
    price: 12,
    rating: 4.5,
    prepTime: "45 min + chill",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=80",
    ],
    shortDescription:
      "A silken chilled leek and potato soup finished with crème fraîche and chives.",
    description:
      "Leeks are sweated gently in butter, simmered with potato and stock, then blended until velvety and chilled overnight. Served cold with a swirl of crème fraîche and fresh snipped chives.",
    ingredients: [
      "Leeks",
      "Potatoes",
      "Chicken stock",
      "Crème fraîche",
      "Chives",
    ],
    backstory: "A summer favorite on the bistro's terrace menu.",
    reviews: [
      { name: "Linguini", rating: 4, comment: "Refreshing and elegant." },
    ],
  },
  {
    id: "steak-frites",
    name: "Steak Frites au Poivre",
    category: "Main Courses",
    price: 36,
    rating: 4.8,
    prepTime: "35 min",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    ],
    shortDescription:
      "Pan-seared steak in a cracked peppercorn cognac cream sauce with hand-cut fries.",
    description:
      "A prime cut, seared hard and finished with a peppercorn crust, deglazed with cognac and cream for a bold, silky sauce. Served with double-fried, hand-cut pommes frites.",
    ingredients: [
      "Beef striploin",
      "Cracked black peppercorns",
      "Cognac",
      "Heavy cream",
      "Russet potatoes",
    ],
    backstory: "The dish that keeps the regulars coming back on a Friday night.",
    reviews: [
      { name: "Colette R.", rating: 5, comment: "Cooked exactly to temperature, every time." },
    ],
  },
  {
    id: "macarons",
    name: "Assorted Macarons",
    category: "French Pastries",
    price: 9,
    rating: 4.6,
    prepTime: "1 hr 20 min",
    serves: "1 person (6 pcs)",
    image:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=1200&q=80",
    ],
    shortDescription:
      "Delicate almond shells in six rotating flavors with silky ganache and buttercream fillings.",
    description:
      "Crisp, chewy almond meringue shells sandwiched with rotating fillings — pistachio, raspberry, salted caramel, and more. Aged for a day before serving for the perfect texture.",
    ingredients: [
      "Almond flour",
      "Egg whites",
      "Powdered sugar",
      "Seasonal ganache fillings",
    ],
    backstory: "Perfected after ninety-two failed batches, or so the story goes.",
    reviews: [
      { name: "Anton E.", rating: 5, comment: "A rainbow of restraint." },
    ],
  },
  {
    id: "escargots-bourguignonne",
    name: "Escargots à la Bourguignonne",
    category: "Starters",
    price: 15,
    rating: 4.5,
    prepTime: "25 min",
    serves: "1 person (6 pcs)",
    image:
      "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=1200&q=80",
    ],
    shortDescription:
      "Burgundy snails baked in their shells with garlic-parsley butter, served bubbling hot.",
    description:
      "A true bistro classic. Plump Burgundy snails are tucked back into their shells with a generous spoon of garlic and parsley butter, then baked until the butter turns golden and fragrant. Served with a warm baguette for mopping up every last drop.",
    ingredients: [
      "Burgundy snails",
      "Butter",
      "Garlic",
      "Fresh parsley",
      "Shallot",
      "Baguette",
    ],
    backstory:
      "The dish every new commis is terrified to plate — and every regular orders without fail.",
    reviews: [
      { name: "Django", rating: 4, comment: "Garlic butter perfection, nothing more needed." },
    ],
  },
  {
    id: "salade-nicoise",
    name: "Salade Niçoise",
    category: "Starters",
    price: 16,
    rating: 4.6,
    prepTime: "20 min",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=80",
    ],
    shortDescription:
      "Seared tuna, soft-boiled egg, olives, and haricots verts over crisp lettuce with a Dijon vinaigrette.",
    description:
      "A composed salad from the French Riviera — seared tuna, jammy soft-boiled egg, Niçoise olives, haricots verts, and baby potatoes arranged over butter lettuce, finished with a sharp Dijon vinaigrette.",
    ingredients: [
      "Fresh tuna",
      "Eggs",
      "Niçoise olives",
      "Haricots verts",
      "Baby potatoes",
      "Dijon mustard",
    ],
    backstory: "A taste of the coast, plated for a Parisian evening.",
    reviews: [
      { name: "Colette R.", rating: 5, comment: "Bright, balanced, and beautifully composed." },
    ],
  },
  {
    id: "quiche-lorraine",
    name: "Quiche Lorraine",
    category: "Main Courses",
    price: 18,
    rating: 4.6,
    prepTime: "55 min",
    serves: "1-2 people",
    image:
      "https://images.unsplash.com/photo-1727178757756-8d2accd05082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UXVpY2hlJTIwTG9ycmFpbmV8ZW58MHx8MHx8fDA%3D",
    gallery: [
      "https://images.unsplash.com/photo-1727178757756-8d2accd05082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UXVpY2hlJTIwTG9ycmFpbmV8ZW58MHx8MHx8fDA%3D",
    ],
    shortDescription:
      "A buttery tart shell filled with smoked lardons, Gruyère, and a silky egg custard.",
    description:
      "Flaky, all-butter pastry blind-baked until golden, then filled with smoked lardons, nutty Gruyère, and a rich custard of eggs and cream. Baked until just set with a delicate wobble at the center.",
    ingredients: [
      "Shortcrust pastry",
      "Smoked lardons",
      "Gruyère cheese",
      "Eggs",
      "Heavy cream",
      "Nutmeg",
    ],
    backstory: "A dish from Lorraine that found a permanent home on Gusteau's lunch menu.",
    reviews: [
      { name: "Linguini", rating: 4, comment: "Simple, rich, and endlessly comforting." },
    ],
  },
  {
    id: "profiteroles",
    name: "Profiteroles au Chocolat",
    category: "French Pastries",
    price: 12,
    rating: 4.8,
    prepTime: "1 hr",
    serves: "1 person (3 pcs)",
    image:
      "https://images.unsplash.com/photo-1675870793004-a0b89e0142cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFByb2ZpdGVyb2xlcyUyMGF1JTIwQ2hvY29sYXR8ZW58MHx8MHx8fDA%3D",
    gallery: [
      "https://images.unsplash.com/photo-1675870793004-a0b89e0142cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFByb2ZpdGVyb2xlcyUyMGF1JTIwQ2hvY29sYXR8ZW58MHx8MHx8fDA%3D",
    ],
    shortDescription:
      "Choux pastry puffs filled with vanilla ice cream, drenched in warm dark chocolate sauce.",
    description:
      "Light, airy choux pastry puffs, split and filled with vanilla bean ice cream, then finished tableside with a warm, glossy dark chocolate sauce poured generously over the top.",
    ingredients: [
      "Choux pastry",
      "Vanilla ice cream",
      "Dark chocolate",
      "Heavy cream",
      "Butter",
    ],
    backstory: "A dessert built for drama — the sauce is always poured at the table.",
    reviews: [
      { name: "Anton E.", rating: 5, comment: "Theatre and technique on one plate." },
    ],
  },
  {
    id: "soupe-de-poisson",
    name: "Soupe de Poisson",
    category: "Soups",
    price: 15,
    rating: 4.5,
    prepTime: "1 hr",
    serves: "1 person",
    image:
      "https://images.unsplash.com/photo-1712176591099-8deabb0afc6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNvdXBlJTIwZGUlMjBQb2lzc29ufGVufDB8fDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1712176591099-8deabb0afc6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNvdXBlJTIwZGUlMjBQb2lzc29ufGVufDB8fDB8fHww",
    ],
    shortDescription:
      "A silky puréed fish soup from the south, served with rouille, croutons, and grated cheese.",
    description:
      "Whole fish and aromatics are simmered for hours, then passed through a fine sieve until velvety smooth. Served the traditional way — with garlicky rouille, crisp croutons, and a bowl of grated Gruyère to stir in.",
    ingredients: [
      "Mixed white fish",
      "Fennel",
      "Tomato",
      "Saffron",
      "Garlic rouille",
      "Gruyère cheese",
    ],
    backstory: "A quieter cousin of bouillabaisse — just as soulful, twice as smooth.",
    reviews: [
      { name: "Django", rating: 4, comment: "Deeply savory, perfect on a cold evening." },
    ],
  },
  {
    id: "jus-de-raisin",
    name: "Jus de Raisin",
    category: "Drinks",
    price: 5,
    rating: 4.7,
    prepTime: "2 min",
    serves: "1 glass",
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=1200&q=80",
    ],
    shortDescription:
      "Fresh-pressed purple grape juice, chilled and unsweetened — a bistro classic pairing.",
    description:
      "Deep purple, freshly pressed grape juice served well-chilled in a wine glass. A favorite non-alcoholic pour at Gusteau's, poured for guests of every age who still want something worth swirling.",
    ingredients: ["Concord grapes"],
    backstory:
      "A glass of this was famously poured for a very small, very particular critic-in-training.",
    reviews: [
      { name: "Emile", rating: 5, comment: "Tastes like a proper toast, no alcohol needed." },
    ],
  },
  {
    id: "citron-presse",
    name: "Citron Pressé",
    category: "Drinks",
    price: 6,
    rating: 4.6,
    prepTime: "3 min",
    serves: "1 glass",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=1200&q=80",
    ],
    shortDescription:
      "Fresh-squeezed lemon juice served alongside water and sugar syrup, mixed to your taste.",
    description:
      "The classic French way to serve lemonade: fresh-squeezed lemon juice arrives in its own glass, with a carafe of chilled water and a small pitcher of sugar syrup on the side, so you can mix each glass exactly to taste.",
    ingredients: ["Fresh lemons", "Sugar syrup", "Sparkling water"],
    backstory: "Served on the terrace all summer long.",
    reviews: [
      { name: "Colette R.", rating: 5, comment: "Tart, refreshing, and endlessly adjustable." },
    ],
  },
  {
    id: "sirop-de-menthe",
    name: "Sirop de Menthe à l'Eau",
    category: "Drinks",
    price: 4,
    rating: 4.4,
    prepTime: "2 min",
    serves: "1 glass",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=1200&q=80",
    ],
    shortDescription:
      "Vivid green mint syrup stirred into chilled sparkling water — a French café staple.",
    description:
      "A staple of French café terraces: emerald-green mint syrup poured over ice and topped with sparkling water, stirred tableside. Cool, sweet, and unmistakably Parisian.",
    ingredients: ["Mint syrup", "Sparkling water", "Ice"],
    backstory: "The drink of choice for a hot afternoon on the terrace.",
    reviews: [
      { name: "Emile", rating: 4, comment: "So green, so cold, so good." },
    ],
  },
  {
    id: "chocolat-chaud",
    name: "Chocolat Chaud",
    category: "Drinks",
    price: 7,
    rating: 4.8,
    prepTime: "8 min",
    serves: "1 cup",
    image:
      "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=1200&q=80",
    ],
    shortDescription:
      "Thick, rich Parisian-style hot chocolate made with melted dark chocolate, not cocoa powder.",
    description:
      "Made the Parisian way — real dark chocolate melted slowly into warm milk until thick enough to coat a spoon, with no cocoa powder in sight. Finished with a small pitcher of whipped cream on the side.",
    ingredients: ["Dark chocolate", "Whole milk", "Heavy cream", "Vanilla"],
    backstory: "Kept on the menu year-round, but it disappears fastest in December.",
    reviews: [
      { name: "Django", rating: 5, comment: "Thick enough to stand a spoon in. Perfect." },
    ],
  },
  {
    id: "diabolo-grenadine",
    name: "Diabolo Grenadine",
    category: "Drinks",
    price: 5,
    rating: 4.5,
    prepTime: "2 min",
    serves: "1 glass",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=1200&q=80",
    ],
    shortDescription:
      "A bright red French café classic — lemon-lime soda swirled with sweet pomegranate grenadine.",
    description:
      "Every French child's first café order. Sparkling lemon-lime soda is poured over ice and stained a deep red with a generous pour of grenadine syrup, stirred at the table for that classic ombré swirl.",
    ingredients: ["Lemon-lime soda", "Grenadine syrup", "Ice"],
    backstory: "The unofficial drink of every French summer terrace.",
    reviews: [
      { name: "Emile", rating: 5, comment: "Tastes exactly like being seven years old again." },
    ],
  },
  {
    id: "cafe-au-lait",
    name: "Café au Lait",
    category: "Drinks",
    price: 6,
    rating: 4.7,
    prepTime: "5 min",
    serves: "1 cup",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80",
    ],
    shortDescription:
      "Equal parts strong brewed coffee and steamed milk, served in a wide morning bowl.",
    description:
      "Strong French press coffee and hot steamed milk poured together in equal measure, served the traditional way in a wide bowl for dunking a warm croissant.",
    ingredients: ["Coffee", "Whole milk"],
    backstory: "The first thing brewed in the kitchen each morning, before the ovens even warm up.",
    reviews: [
      { name: "Colette R.", rating: 5, comment: "Exactly how a morning should start." },
    ],
  },
  {
    id: "the-a-la-menthe",
    name: "Thé à la Menthe",
    category: "Drinks",
    price: 5,
    rating: 4.6,
    prepTime: "6 min",
    serves: "1 pot",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1200&q=80",
    ],
    shortDescription:
      "Sweet green tea steeped with fresh mint leaves, poured from height in the traditional style.",
    description:
      "Gunpowder green tea steeped with a generous bundle of fresh mint and a touch of sugar, poured from height into small glasses to build a light foam on top — a nod to the North African tradition beloved across Parisian cafés.",
    ingredients: ["Green tea", "Fresh mint", "Sugar"],
    backstory: "A quiet favorite for lingering over the evening's last course.",
    reviews: [
      { name: "Django", rating: 4, comment: "Fragrant and just sweet enough." },
    ],
  },
];

export function getDishById(id) {
  return dishes.find((d) => d.id === id);
}

export function getRelatedDishes(id, count = 3) {
  const dish = getDishById(id);
  if (!dish) return [];
  return dishes
    .filter((d) => d.id !== id && d.category === dish.category)
    .slice(0, count);
}
