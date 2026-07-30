/* ============================================================
   ALL WEBSITE TEXT LIVES HERE
   Slate Eatery — Pontiac, MI
   ============================================================ */

export const restaurant = {
  name: "Slate Eatery",
  cuisine: "American",
  tagline: "Breakfast, lunch, and a booth with your name on it.",
  phone: "(248) 309-3130",
  phoneHref: "tel:+12483093130",
  email: "",
  address: "429 Elizabeth Lake Rd, Pontiac, MI 48341",
  directionsUrl:
    "https://maps.google.com/?q=429+Elizabeth+Lake+Rd,+Pontiac,+MI+48341",
  established: "",
  social: [
    {
      label: "Google",
      href: "https://maps.google.com/?q=Slate+Eatery+429+Elizabeth+Lake+Rd+Pontiac+MI",
    },
  ],
};

/* Browser tab title, Google search snippet, and link previews. */
export const seo = {
  title: "Slate Eatery — Breakfast & Lunch in Pontiac, MI",
  description:
    "Big breakfasts, daily lunch specials and fresh espresso on Elizabeth Lake Road in Pontiac. Open seven days a week. See our menu, hours and directions.",
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
  eyebrow: "Breakfast & lunch in Pontiac",
  heading: "Slate Eatery",
  subheading:
    "A mom-and-pop spot on Elizabeth Lake Road serving big breakfasts, honest lunches, and fresh espresso — seven days a week.",
  primaryCta: "See Our Menu",
  secondaryCta: "Get Directions",
  todayLabel: "Open today",
};

export const about = {
  eyebrow: "Come on in",
  heading: "A neighborhood place, plain and simple",
  paragraphs: [
    "Slate Eatery sits on the corner of Elizabeth Lake and Telegraph, and it has the feel of the kind of diner you don't find many places anymore — friendly faces, generous plates, and prices that don't make you wince.",
    "We're open for breakfast and lunch every day of the week. Omelettes and fresh espresso in the morning, burgers, gyros, and daily lunch specials through the afternoon. No dress code, no rush. Come as you are.",
  ],
  stats: [
    { value: "7", label: "Days a week" },
    { value: "8 AM", label: "Doors open daily" },
    { value: "11–3", label: "Daily lunch specials" },
  ],
};

/* ---- MENU ----
   Two menus: Breakfast and Lunch.
   Add or remove a category by adding/removing an object inside a group.
   Add or remove a dish by adding/removing an item row. */
export const menu = {
  heading: "Our Menu",
  intro:
    "Breakfast from the moment we open, lunch specials daily from 11 to 3. Everything is made to order and substitutions are no trouble.",
  note: "Ask your server about menu items that are cooked to order or served raw. Consuming raw or undercooked meat, poultry or eggs may increase your risk of foodborne illness.",
  groups: [
    {
      name: "Breakfast",
      blurb: "Served every day from 8 AM.",
      categories: [
        {
          name: "Eggs",
          items: [
            {
              name: "8 oz. Steak & Eggs",
              description: "Served with hash browns, toast & jelly.",
              price: "$15",
            },
            {
              name: "Breakfast Burrito",
              description:
                "Scrambled eggs, diced tomato, onion, green pepper, cheese and your choice of ham, bacon or sausage.",
              price: "$12",
            },
            {
              name: "Elizabeth Breakfast",
              description:
                "Three XL eggs, two bacon, two sausage and ham, served with hash browns, toast & jelly.",
              price: "$10",
            },
            {
              name: "Two Eggs Any Style — with toast",
              description: "Cooked the way you like them.",
              price: "$4",
            },
            {
              name: "Two Eggs Any Style — with hash browns",
              description: "Two XL eggs and a side of hash browns.",
              price: "$7",
            },
            {
              name: "Two Eggs Any Style — with choice of meat",
              description: "Bacon, sausage or ham.",
              price: "$8",
            },
            {
              name: "Two Eggs Any Style — with hash browns & meat",
              description: "The full plate.",
              price: "$9",
            },
          ],
        },
        {
          name: "Omelettes",
          items: [
            {
              name: "Corned Beef & Swiss Cheese",
              description:
                "Made with two XL eggs, served with hash browns, toast & jelly.",
              price: "$11",
            },
            {
              name: "Country Omelette",
              description: "Sausage and Swiss cheese topped with country gravy.",
              price: "$14",
            },
            {
              name: "Greek Omelette",
              description: "Feta cheese, onions, tomatoes and gyro meat.",
              price: "$14",
            },
            {
              name: "Western Omelette",
              description: "Ham, green peppers, onions and cheese.",
              price: "$11",
            },
            {
              name: "Ham, Bacon or Sausage & Cheese",
              description: "Your choice of meat with melted cheese.",
              price: "$10",
            },
            {
              name: "Cheese Omelette",
              description: "Choice of Swiss or American cheese.",
              price: "$8",
            },
            {
              name: "Vegetarian Omelette",
              description:
                "Onions, tomatoes, green peppers, mushrooms, American and Swiss cheese.",
              price: "$10",
            },
            {
              name: "Mushroom & Cheese Omelette",
              description: "Simple and good.",
              price: "$11",
            },
            {
              name: "Farmer's Omelette",
              description:
                "Sausage, green peppers, onions, American cheese and hash browns folded inside.",
              price: "$15",
            },
            {
              name: "Chicken Breast with Cheese",
              description: "Grilled chicken breast and melted cheese.",
              price: "$12",
            },
            {
              name: "Irish Omelette",
              description: "Corned beef hash, Swiss cheese and mushrooms.",
              price: "$15",
            },
          ],
        },
        {
          name: "From the Griddle",
          items: [
            {
              name: "Belgian Waffle",
              description: "With 2 eggs $9 · with meat $10 · with meat & eggs $12.",
              price: "$7",
            },
            {
              name: "Waffle & 5 Wing Dings",
              description: "Chicken and waffles, Slate style.",
              price: "$11",
            },
            {
              name: "Pancakes",
              description:
                "Full stack (3) $6 · half (2) $5. With 2 eggs $8 · with meat $9 · with eggs & meat $10.",
              price: "$6",
            },
            {
              name: "French Toast",
              description:
                "Full $7 · half $6. With 2 eggs $8 · with meat $9 · with eggs & meat $12.",
              price: "$7",
            },
            {
              name: "Biscuits & Gravy",
              description:
                "Full (2) $7 · half (1) $6. With 2 eggs $9 · with meat $11 · with eggs & meat $12.",
              price: "$7",
            },
          ],
        },
        {
          name: "Breakfast Sides",
          items: [
            { name: "Bacon (4)", description: "Crisp and hot.", price: "$4" },
            { name: "Sausage Links", description: "Griddled golden.", price: "$4" },
            { name: "Ham", description: "Thick-cut and grilled.", price: "$2" },
            {
              name: "Hash Browns",
              description: "Crispy on the edges.",
              price: "$3.50",
            },
            { name: "Biscuit", description: "Warm from the oven.", price: "$2.50" },
            { name: "Country Gravy", description: "Cup $3 · bowl $4.", price: "$3" },
            { name: "Tomato Slices", description: "Fresh sliced.", price: "$1.50" },
          ],
        },
      ],
    },
    {
      name: "Lunch",
      blurb: "Lunch specials served daily from 11 to 3.",
      categories: [
        {
          name: "Lunch Specials",
          items: [
            {
              name: "Chicken Gyro",
              description: "Served daily 11am–3pm. Includes fries.",
              price: "$10",
            },
            {
              name: "Chicken Strip Pita",
              description: "Includes fries.",
              price: "$10",
            },
            {
              name: "Corned Beef Sandwich",
              description: "Includes fries.",
              price: "$15",
            },
            { name: "Gyro", description: "Includes fries.", price: "$10" },
            { name: "Cheeseburger", description: "Includes fries.", price: "$11" },
            { name: "BLT Sandwich", description: "Includes fries.", price: "$10" },
            {
              name: "Chicken Breast Sandwich",
              description: "Includes fries.",
              price: "$11",
            },
            {
              name: "Chicken Melt Sandwich",
              description: "Includes fries.",
              price: "$12",
            },
            { name: "Turkey Melt", description: "Includes fries.", price: "$12" },
            { name: "3 Tacos", description: "Includes fries.", price: "$12.50" },
            {
              name: "Wing Dings",
              description:
                "6 pc $10 · 8 pc $12. BBQ, honey mustard, spicy ranch or buffalo.",
              price: "$10",
            },
          ],
        },
        {
          name: "Appetizers",
          items: [
            { name: "Cheese Sticks (6)", description: "Golden and gooey.", price: "$8" },
            { name: "Fried Mushrooms", description: "Hand-battered.", price: "$7" },
            { name: "21 Shrimp Basket", description: "Crispy fried shrimp.", price: "$8" },
            {
              name: "Pretzel Bites",
              description: "Warm, salted, with dipping sauce.",
              price: "$9",
            },
            { name: "Beef Sliders", description: "Priced each.", price: "$3" },
            { name: "Chips & Salsa", description: "Fresh and simple.", price: "$7" },
            {
              name: "Nachos & Cheese",
              description:
                "With lettuce, tomato and onion. Add beef $12 · add chicken $10.",
              price: "$9",
            },
            {
              name: "Chicken Strips",
              description: "Ask about available sauces.",
              price: "$9",
            },
            { name: "Onion Rings", description: "Thick-cut and crispy.", price: "$5" },
            {
              name: "Appetizer Sampler",
              description:
                "Three onion rings, three chicken strips and three mozzarella sticks.",
              price: "$9",
            },
            {
              name: "Wing Dings",
              description:
                "6 pc $8 · 8 pc $10. BBQ, honey mustard, spicy ranch or buffalo.",
              price: "$8",
            },
          ],
        },
        {
          name: "Soup & Chili",
          items: [
            {
              name: "Soup of the Day",
              description: "Made fresh. Served by the bowl.",
              price: "$4",
            },
            {
              name: "Chili",
              description: "Hearty and warming. Served by the bowl.",
              price: "$5",
            },
          ],
        },
        {
          name: "Salads",
          items: [
            {
              name: "Greek Salad",
              description:
                "Iceberg lettuce topped with feta, cucumbers, beets, tomatoes, olives, pepperoncini, onions and Greek dressing.",
              price: "$10",
            },
            {
              name: "Crispy Chicken Salad",
              description:
                "Lettuce, tomato, American and Swiss cheese and hard boiled egg.",
              price: "$12",
            },
            {
              name: "Grilled Chicken Salad",
              description:
                "Iceberg lettuce with Swiss and American cheese, cucumbers, tomatoes, hard-boiled egg and tender strips of chicken breast.",
              price: "$11",
            },
            {
              name: "Caesar Salad",
              description: "Romaine lettuce, croutons and Parmesan cheese.",
              price: "$10",
            },
            {
              name: "Chef Salad",
              description:
                "Turkey, American and Swiss cheese, lettuce, tomatoes, cucumber, onion and hard boiled egg.",
              price: "$12",
            },
            {
              name: "Club Salad",
              description: "Grilled chicken, bacon, lettuce, tomato and cucumbers.",
              price: "$12",
            },
            {
              name: "Taco Salad",
              description:
                "Ground beef, cheese, tomatoes, onion, green peppers and black olives.",
              price: "$13",
            },
            {
              name: "Michigan Salad",
              description:
                "Lettuce, tomatoes, cucumbers, cherries, mozzarella, walnuts, chicken breast and raspberry vinaigrette.",
              price: "$13",
            },
            {
              name: "Slate Salad",
              description:
                "Lettuce, tomatoes, onion, Swiss and American cheese. Add shrimp $12 · steak $18 · chicken $16.",
              price: "$6.50",
            },
          ],
        },
        {
          name: "½ lb. Burgers",
          items: [
            {
              name: "Cheeseburger",
              description: "Served with lettuce, tomato and mayo. Add fries $3.",
              price: "$9",
            },
            { name: "Bacon Cheeseburger", description: "Add fries $3.", price: "$10" },
            {
              name: "Mushroom & Swiss Burger",
              description: "Add fries $3.",
              price: "$10",
            },
            {
              name: "Jalapeño Burger",
              description: "Cheddar cheese, bacon, onion and sliced jalapeños.",
              price: "$11",
            },
            {
              name: "Elizabeth Burger",
              description:
                "Lettuce, tomato, mushrooms, grilled onions and Swiss cheese.",
              price: "$11",
            },
            {
              name: "Double Cheeseburger",
              description: "Two half-pound patties.",
              price: "$12",
            },
            { name: "3 Sliders", description: "Three little burgers.", price: "$10" },
            {
              name: "Slate Burger",
              description:
                "Topped with corned beef, tomato, Swiss and American cheese.",
              price: "$12",
            },
          ],
        },
        {
          name: "Sandwiches",
          items: [
            {
              name: "Beef Brisket Sandwich",
              description: "With cheese and our own special sauce.",
              price: "$15",
            },
            {
              name: "Corned Beef & Swiss",
              description: "Served on white, wheat, rye or an onion roll.",
              price: "$13",
            },
            { name: "Reuben Sandwich", description: "The classic.", price: "$13" },
            {
              name: "Chicken Breast Sandwich",
              description: "With lettuce, tomato and mayo.",
              price: "$9",
            },
            { name: "Tuna Melt", description: "Griddled with melted cheese.", price: "$9" },
            { name: "BLT Sandwich", description: "Bacon, lettuce and tomato.", price: "$8" },
            { name: "Grilled Ham & Cheese", description: "Simple and good.", price: "$8" },
            {
              name: "Club Sandwich",
              description: "Turkey, bacon, lettuce, tomato and mayo.",
              price: "$10",
            },
            {
              name: "Chicken Club",
              description: "Chicken, bacon, lettuce, tomato and mayo.",
              price: "$12",
            },
          ],
        },
        {
          name: "Melts",
          items: [
            {
              name: "Super Melt",
              description: "Grilled chicken, bacon, onion, tomato and Swiss cheese.",
              price: "$11",
            },
            {
              name: "Chicken Melt",
              description: "Grilled chicken, tomato, mayo and Swiss cheese.",
              price: "$11",
            },
            {
              name: "Turkey Melt",
              description: "Swiss cheese, tomato and mayo.",
              price: "$11",
            },
            {
              name: "Patty Melt",
              description: "Hand patty, onion and Swiss cheese.",
              price: "$11",
            },
          ],
        },
        {
          name: "Pitas & Wraps",
          items: [
            {
              name: "Grilled Chicken Pita",
              description: "With lettuce, tomato and mayo.",
              price: "$8",
            },
            {
              name: "Chicken Strip Pita",
              description: "With lettuce, tomato and mayo.",
              price: "$8",
            },
            {
              name: "Club Pita",
              description: "Bacon, turkey, lettuce, tomato and mayo.",
              price: "$8",
            },
            {
              name: "Gyro Pita",
              description: "Gyro meat, tomatoes, onions and tzatziki sauce.",
              price: "$8",
            },
            {
              name: "Chicken Gyro Pita",
              description: "Chicken, tomatoes, onions and tzatziki sauce.",
              price: "$8",
            },
            {
              name: "N.Y. Strip Steak Pita",
              description: "With onions, green peppers and mushrooms.",
              price: "$12",
            },
            {
              name: "Grilled or Fried Chicken Wrap",
              description: "With lettuce, tomato and mayo.",
              price: "$9",
            },
            {
              name: "Club Wrap",
              description: "Turkey, bacon, lettuce, tomato and mayo.",
              price: "$11",
            },
            {
              name: "Chicken Gyro Wrap",
              description: "Chicken, bacon, lettuce, tomato and mayo.",
              price: "$9",
            },
          ],
        },
        {
          name: "Subs",
          items: [
            {
              name: "Philly Steak",
              description: "With lettuce, tomato and mayo on a sub bun.",
              price: "$10",
            },
            { name: "Philly Chicken", description: "On a sub bun.", price: "$9" },
            { name: "N.Y. Steak", description: "On a sub bun.", price: "$15" },
            { name: "Turkey", description: "On a sub bun.", price: "$10" },
            { name: "Ham & Cheese", description: "On a sub bun.", price: "$12" },
          ],
        },
        {
          name: "Mexican",
          items: [
            { name: "Ground Beef Taco", description: "Priced each.", price: "$3.50" },
            { name: "Brisket Taco", description: "Priced each.", price: "$3.50" },
            {
              name: "Steak Quesadilla",
              description:
                "Melted cheese, onions and jalapeños on a grilled tortilla with sour cream and salsa.",
              price: "$17",
            },
            {
              name: "Chicken Quesadilla",
              description:
                "Melted cheese, onions and jalapeños on a grilled tortilla with sour cream and salsa.",
              price: "$15",
            },
            {
              name: "Wet Burrito",
              description:
                "Grilled tortilla stuffed with chili, green peppers, onions and cheddar cheese, salsa on top.",
              price: "Ask",
            },
          ],
        },
        {
          name: "Entrees",
          items: [
            {
              name: "Ribeye Steak Dinner",
              description:
                "Served with your choice of potato or rice, plus soup, salad or coleslaw and bread.",
              price: "$23",
            },
            {
              name: "Salmon Dinner",
              description: "Served with soup, salad or coleslaw and bread.",
              price: "$18",
            },
            {
              name: "Fish 'n Chips (3 pc)",
              description: "Served with soup, salad or coleslaw and bread.",
              price: "$16",
            },
            {
              name: "Jumbo Shrimp Dinner (6 pc)",
              description: "Served with your choice of potato or rice.",
              price: "$15",
            },
            {
              name: "Chicken Breast Dinner",
              description: "Served with soup, salad or coleslaw and bread.",
              price: "$12",
            },
            {
              name: "Chicken Strip Dinner (5 pc)",
              description: "Served with soup, salad or coleslaw and bread.",
              price: "$12",
            },
          ],
        },
        {
          name: "Pasta",
          items: [
            {
              name: "Elizabeth Pasta",
              description:
                "Coconut shrimp, spinach and Italian macaroni noodles with creamy tomato sauce. Served with garlic bread.",
              price: "$12",
            },
            {
              name: "Spaghetti",
              description: "Topped with tomato sauce and mozzarella cheese.",
              price: "$13",
            },
            {
              name: "Lasagna",
              description: "Baked with ground beef and shredded mozzarella.",
              price: "$13",
            },
            {
              name: "Chicken Alfredo",
              description:
                "Alfredo noodles topped with creamy alfredo sauce and grilled chicken.",
              price: "$15",
            },
            {
              name: "Chicken Parmesan",
              description:
                "Chicken breast and mushroom cheese sauce served over spaghetti noodles.",
              price: "$15",
            },
          ],
        },
        {
          name: "Stir Fry",
          items: [
            {
              name: "Veggie Stir Fry",
              description: "Served with rice and stir fry vegetables.",
              price: "$15",
            },
            {
              name: "Chicken Stir Fry",
              description: "Served with rice and stir fry vegetables.",
              price: "$18",
            },
            {
              name: "Jumbo Shrimp Stir Fry",
              description: "Served with rice and stir fry vegetables.",
              price: "$20",
            },
            {
              name: "Steak Stir Fry",
              description: "Served with rice and stir fry vegetables.",
              price: "$22",
            },
          ],
        },
        {
          name: "Flat Bread Pizza",
          items: [
            {
              name: "Caprese Pizza",
              description: "Mozzarella, tomatoes and balsamic glaze.",
              price: "$13",
            },
            {
              name: "BBQ Chicken Pizza",
              description: "Cheese, cilantro and red onion.",
              price: "$13",
            },
            {
              name: "Buffalo Chicken Pizza",
              description: "With green onion and buffalo sauce.",
              price: "$13",
            },
          ],
        },
        {
          name: "Sides",
          items: [
            { name: "Fries", description: "Small $2.85 · large $5.", price: "$2.85" },
            {
              name: "Cheese Fries",
              description: "Small $5.95 · large $7.",
              price: "$5.95",
            },
            {
              name: "Chili Fries",
              description: "Small $5.50 · large $7.",
              price: "$5.50",
            },
            { name: "Pita Bread", description: "Warm and soft.", price: "$1.75" },
            { name: "Rice", description: "Steamed.", price: "$4" },
          ],
        },
        {
          name: "Beverages",
          items: [
            {
              name: "Espresso Bar",
              description: "Ask about today's espresso drinks.",
              price: "Ask",
            },
            { name: "Coffee", description: "Fresh brewed.", price: "$2.50" },
            { name: "Juice", description: "Orange, apple or cranberry.", price: "$3" },
            { name: "Soft Drinks", description: "Coca-Cola products.", price: "$2.50" },
            { name: "Milk", description: "Cold and fresh.", price: "$2.50" },
            { name: "Chocolate Milk", description: "A kid favorite.", price: "$2.50" },
          ],
        },
      ],
    },
  ],
};

export const specials = {
  heading: "Daily Lunch Specials",
  intro:
    "Served every day from 11 to 3, and every one comes with fries. Ask your server what's running today.",
  days: [
    {
      day: "Gyro",
      title: "Gyro or Chicken Gyro",
      description: "Gyro meat, tomatoes, onions and tzatziki. Includes fries.",
      price: "$10",
    },
    {
      day: "Burger",
      title: "Cheeseburger",
      description: "Half-pound patty with lettuce, tomato and mayo. Includes fries.",
      price: "$11",
    },
    {
      day: "Melt",
      title: "Chicken or Turkey Melt",
      description: "Griddled with Swiss cheese. Includes fries.",
      price: "$12",
    },
    {
      day: "Tacos",
      title: "Three Tacos",
      description: "Ground beef or brisket. Includes fries.",
      price: "$12.50",
    },
    {
      day: "Wings",
      title: "Wing Dings",
      description: "6 pc $10 or 8 pc $12. BBQ, honey mustard, spicy ranch or buffalo.",
      price: "$10",
    },
    {
      day: "Corned Beef",
      title: "Corned Beef Sandwich",
      description: "Piled high. Includes fries.",
      price: "$15",
    },
    {
      day: "BLT",
      title: "BLT Sandwich",
      description: "Bacon, lettuce and tomato. Includes fries.",
      price: "$10",
    },
  ],
};

export const favorites = {
  heading: "Customer Favorites",
  intro: "The plates our regulars order without even opening the menu.",
  badge: "Customer Favorite",
  items: [
    {
      name: "Elizabeth Breakfast",
      description:
        "Three XL eggs, two bacon, two sausage and ham with hash browns, toast and jelly. The plate that keeps people coming back.",
      price: "$10",
      image: "burger",
    },
    {
      name: "Slate Burger",
      description:
        "Our half-pound burger topped with corned beef, tomato, Swiss and American cheese. The one with our name on it.",
      price: "$12",
      image: "chicken",
    },
    {
      name: "Greek Omelette",
      description:
        "Feta cheese, onions, tomatoes and gyro meat, served with hash browns, toast and jelly.",
      price: "$14",
      image: "pie",
    },
  ],
};

export const gallery = {
  heading: "A Look Around",
  intro: "Good plates, full booths, and a corner spot on Elizabeth Lake Road.",
};

export const reviews = {
  heading: "See What People Are Saying",
  intro: "Reviews from our neighbors on Google.",
  items: [
    {
      name: "Liz L.",
      rating: 5,
      text: "Lovely little place to eat! The staff was very kind, the food was super yummy! They have an espresso bar which is rare around this area and the espresso was perfect.",
    },
    {
      name: "Chip A.",
      rating: 5,
      text: "Got the (big) Elizabeth Breakfast — 3 eggs, 3 types of meat and all. Wow. A lot of food for $10. Service and food were excellent. See you all again soon.",
    },
    {
      name: "Howard B.",
      rating: 5,
      text: "What an awesome breakfast spot! Everything was fantastic and very reasonably priced. Small business so please go support!",
    },
    {
      name: "Nicholas K.",
      rating: 5,
      text: "My coworker and I stopped here for lunch around 2pm. The waitress was very friendly and accommodating. The restaurant was clean and aesthetically pleasing. The food tasted fresh and came quickly. I would recommend Slate for anyone in the area looking for a nice sit down restaurant.",
    },
    {
      name: "Jake S.",
      rating: 5,
      text: "Great food, reasonable prices (multiple lunch deals), fast service, would eat here again.",
    },
    {
      name: "Brandon C.",
      rating: 5,
      text: "Discovered this place when they opened and they have been clearly investing in it ever since which I think is great! The food is good, the menu is big but not overwhelming and the service is spot on!",
    },
  ],
  googleLabel: "Posted on Google",
};

/* Day order matters — index 0 is Sunday to match Date.getDay(). */
export const hours = {
  heading: "Hours & Location",
  intro:
    "On the corner of Elizabeth Lake Road and Telegraph. Big groups welcome — give us a call ahead and we'll pull some tables together.",
  mapNote: "429 Elizabeth Lake Rd, Pontiac, MI 48341",
  schedule: [
    { day: "Sunday", time: "8:00 AM – 3:00 PM" },
    { day: "Monday", time: "8:00 AM – 4:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 4:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 4:00 PM" },
    { day: "Thursday", time: "8:00 AM – 4:00 PM" },
    { day: "Friday", time: "8:00 AM – 4:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
  ],
};

export const contact = {
  heading: "Give Us a Call",
  intro:
    "Takeout, big tables, or a question about today's specials — we're happy to hear from you.",
  callCta: "Call to Order",
};

export const footer = {
  blurb:
    "A neighborhood breakfast and lunch spot on Elizabeth Lake Road in Pontiac, Michigan.",
  quickLinksTitle: "Quick Links",
  followTitle: "Find Us Online",
  copyright: `© ${new Date().getFullYear()} Slate Eatery. All rights reserved.`,
};
