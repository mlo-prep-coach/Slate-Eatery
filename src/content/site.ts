/* ============================================================
   ALL WEBSITE TEXT LIVES HERE
   Swap the placeholders below for the real restaurant details.
   Nothing else needs editing to change the copy.
   ============================================================ */

export const restaurant = {
  name: "[RESTAURANT NAME]",
  cuisine: "[CUISINE TYPE]",
  tagline: "Good food, friendly faces, and a booth with your name on it.",
  phone: "[PHONE]",
  phoneHref: "tel:[PHONE]",
  email: "[EMAIL]",
  address: "[ADDRESS]",
  directionsUrl: "https://maps.google.com/?q=[ADDRESS]",
  established: "1978",
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Google", href: "#" },
  ],
};

export const nav = {
  links: [
    { label: "Menu", href: "#menu" },
    { label: "Specials", href: "#specials" },
    { label: "Favorites", href: "#favorites" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Hours", href: "#hours" },
  ],
  callLabel: "Call Now",
};

export const hero = {
  eyebrow: "Your neighborhood [CUISINE TYPE] diner",
  heading: "[RESTAURANT NAME]",
  subheading:
    "Hearty plates, bottomless coffee, and the same warm welcome we've been serving up on this corner for over forty years.",
  primaryCta: "See Our Menu",
  secondaryCta: "Get Directions",
  todayLabel: "Open today",
};

export const about = {
  eyebrow: "Come on in",
  heading: "A family place, run by a family",
  paragraphs: [
    "[RESTAURANT NAME] started as a twelve-stool counter and a hand-written [CUISINE TYPE] menu. Three generations later we're still flipping burgers on the same griddle, still peeling potatoes by hand, and still learning our regulars' orders by heart.",
    "There's no dress code and no rush. Bring the kids, bring the whole ball team, bring your paper and sit a while. The coffee pot is always on and the pie is always fresh.",
  ],
  stats: [
    { value: "40+", label: "Years on the corner" },
    { value: "7", label: "Days a week" },
    { value: "1", label: "Family, still cooking" },
  ],
};

/* ---- MENU ----
   Add or remove a category by adding/removing an object.
   Add or remove a dish by adding/removing an item row. */
export const menu = {
  heading: "Our Menu",
  intro:
    "Everything is made to order, portions are generous, and substitutions are no trouble at all. Ask your server about today's soup.",
  note: "Prices are placeholders. Consuming raw or undercooked foods may increase your risk of foodborne illness.",
  categories: [
    {
      name: "Appetizers",
      items: [
        { name: "Loaded Potato Skins", description: "Cheddar, bacon, scallions, sour cream on the side.", price: "$8.50" },
        { name: "Buttermilk Onion Rings", description: "Hand-battered, stacked high, house dipping sauce.", price: "$7.25" },
        { name: "Chicken Wings", description: "A full pound, tossed in buffalo, BBQ or plain.", price: "$11.00" },
        { name: "Soup of the Day", description: "Made fresh every morning. Cup or bowl.", price: "$4.75" },
      ],
    },
    {
      name: "Sandwiches & Burgers",
      items: [
        { name: "The Classic Cheeseburger", description: "Half-pound patty, American cheese, lettuce, tomato, pickle, fries.", price: "$12.50" },
        { name: "Double Stack Burger", description: "Two patties, double cheese, grilled onions. Bring an appetite.", price: "$15.00" },
        { name: "Hot Turkey Sandwich", description: "Roasted turkey on white bread, mashed potatoes, gravy over the whole thing.", price: "$13.25" },
        { name: "Grilled Cheese & Tomato Soup", description: "Buttery sourdough with a cup of soup for dunking.", price: "$9.50" },
        { name: "Patty Melt", description: "Rye bread, Swiss, caramelized onions, griddled crisp.", price: "$13.00" },
      ],
    },
    {
      name: "Entrees",
      items: [
        { name: "Country Fried Chicken", description: "Buttermilk-brined, mashed potatoes, pan gravy, buttermilk biscuit.", price: "$16.50" },
        { name: "Grandma's Meatloaf", description: "Thick-cut with tomato glaze, mashed potatoes and green beans.", price: "$15.75" },
        { name: "Chicken Pot Pie", description: "Flaky crust, big chunks of chicken and vegetables.", price: "$14.50" },
        { name: "Friday Fish Fry", description: "Beer-battered cod, coleslaw, fries, tartar sauce.", price: "$15.00" },
        { name: "All-Day Breakfast Platter", description: "Three eggs any style, hash browns, toast, bacon or sausage.", price: "$12.00" },
      ],
    },
    {
      name: "Sides",
      items: [
        { name: "Hand-Cut Fries", description: "Crispy, salted, never frozen.", price: "$4.00" },
        { name: "Mac & Cheese", description: "Baked with a crunchy top.", price: "$5.50" },
        { name: "Coleslaw", description: "Creamy and cold.", price: "$3.50" },
        { name: "Buttermilk Biscuit", description: "With honey butter.", price: "$3.00" },
      ],
    },
    {
      name: "Desserts",
      items: [
        { name: "Homemade Apple Pie", description: "Warmed up, with a scoop of vanilla.", price: "$6.50" },
        { name: "Chocolate Layer Cake", description: "Four layers, thick fudge frosting.", price: "$7.00" },
        { name: "Hand-Spun Milkshake", description: "Chocolate, vanilla, strawberry or malt.", price: "$6.00" },
        { name: "Banana Pudding", description: "Vanilla wafers, whipped cream, the old family recipe.", price: "$5.75" },
      ],
    },
    {
      name: "Drinks",
      items: [
        { name: "Bottomless Coffee", description: "We'll keep coming by with the pot.", price: "$2.75" },
        { name: "Fresh-Brewed Iced Tea", description: "Sweet or unsweet.", price: "$3.00" },
        { name: "Fountain Soda", description: "Free refills.", price: "$3.00" },
        { name: "Fresh Squeezed Lemonade", description: "Made every morning.", price: "$3.75" },
      ],
    },
  ],
};

export const specials = {
  heading: "This Week's Specials",
  intro: "A little something different every day — ask your server, or just look at the chalkboard by the door.",
  days: [
    { day: "Monday", title: "Meatloaf Monday", description: "Grandma's meatloaf plate with two sides.", price: "$13.00" },
    { day: "Tuesday", title: "Taco Tuesday", description: "Three griddled tacos, rice and beans.", price: "$11.50" },
    { day: "Wednesday", title: "Burger & Shake", description: "Classic cheeseburger with any hand-spun shake.", price: "$15.00" },
    { day: "Thursday", title: "Pot Roast Thursday", description: "Slow-cooked pot roast, potatoes and carrots.", price: "$16.00" },
    { day: "Friday", title: "Friday Fish Fry", description: "All the beer-battered cod you can eat.", price: "$17.00" },
    { day: "Saturday", title: "Big Breakfast", description: "Pancakes, eggs, bacon and coffee, served till noon.", price: "$12.50" },
    { day: "Sunday", title: "Sunday Family Dinner", description: "Fried chicken platter for four with sides.", price: "$46.00" },
  ],
};

export const favorites = {
  heading: "Customer Favorites",
  intro: "The plates our regulars order without even opening the menu.",
  badge: "Customer Favorite",
  items: [
    {
      name: "The Classic Cheeseburger",
      description: "Half a pound of griddled beef, melty American cheese and a mountain of hand-cut fries.",
      price: "$12.50",
      image: "burger",
    },
    {
      name: "Country Fried Chicken",
      description: "Buttermilk-brined and fried golden, with mashed potatoes, gravy and a warm biscuit.",
      price: "$16.50",
      image: "chicken",
    },
    {
      name: "Homemade Apple Pie",
      description: "Baked every morning, served warm with a big scoop of vanilla ice cream.",
      price: "$6.50",
      image: "pie",
    },
  ],
};

export const gallery = {
  heading: "A Look Around",
  intro: "Good plates, full booths, and a corner spot that hasn't changed much in forty years.",
};

export const reviews = {
  heading: "See What People Are Saying",
  intro: "Reviews from our neighbors on Google.",
  items: [
    {
      name: "Dana R.",
      rating: 5,
      text: "Best breakfast in town, hands down.",
    },
    {
      name: "Marcus T.",
      rating: 5,
      text: "We've been coming here every Sunday since our oldest was in a high chair — she's in college now and it's still the first place she asks to go when she's home. The staff remembers our order, the coffee never gets low, and the pot roast is exactly the same as it was fifteen years ago. That kind of consistency is rare and we don't take it for granted.",
    },
    {
      name: "Priya S.",
      rating: 5,
      text: "Huge portions, fair prices, and the friendliest servers I've met anywhere. The country fried chicken is worth the drive.",
    },
    {
      name: "Bill H.",
      rating: 4,
      text: "Busy on weekends but worth the wait.",
    },
    {
      name: "Elena M.",
      rating: 5,
      text: "Took my parents here for their anniversary and they loved it. Nothing fancy — just really good home cooking and people who genuinely seem happy you came in. The apple pie was still warm.",
    },
    {
      name: "Terrence W.",
      rating: 5,
      text: "This is my lunch spot three days a week. Patty melt and an iced tea, every time.",
    },
  ],
  googleLabel: "Posted on Google",
};

/* Day order matters — index 0 is Sunday to match Date.getDay(). */
export const hours = {
  heading: "Hours & Location",
  intro: "Come as you are. Big groups welcome — give us a call ahead and we'll pull some tables together.",
  mapNote: "[ADDRESS] — map embed goes here",
  schedule: [
    { day: "Sunday", time: "7:00 AM – 8:00 PM" },
    { day: "Monday", time: "6:30 AM – 9:00 PM" },
    { day: "Tuesday", time: "6:30 AM – 9:00 PM" },
    { day: "Wednesday", time: "6:30 AM – 9:00 PM" },
    { day: "Thursday", time: "6:30 AM – 9:00 PM" },
    { day: "Friday", time: "6:30 AM – 10:00 PM" },
    { day: "Saturday", time: "7:00 AM – 10:00 PM" },
  ],
};

export const contact = {
  heading: "Give Us a Call",
  intro: "Takeout, big tables, or just a question about the specials — we're happy to hear from you.",
  callCta: "Call to Order",
};

export const footer = {
  blurb: "A neighborhood [CUISINE TYPE] diner serving the same good food since 1978.",
  quickLinksTitle: "Quick Links",
  followTitle: "Say Hello",
  copyright: `© ${new Date().getFullYear()} [RESTAURANT NAME]. All rights reserved.`,
};
