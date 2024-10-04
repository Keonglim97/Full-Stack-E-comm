import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Elegant Stripes Blouse",
    category: "women",
    image: p1_img,
    description: "A stylish blouse with flutter sleeves and a peplum hem, perfect for casual or office wear, offering both comfort and elegance for various occasions.",
    new_price: 55.0,
    old_price: 85.0,
    categories: ["Women", "Blouses", "Office Wear"],
    tags: ["elegant", "fashion"],
  },
  {
    id: 2,
    name: "Chic Overlap Blouse",
    category: "women",
    image: p2_img,
    description: "Elegant blouse featuring overlapping collar and soft stripes, adding a touch of charm and versatility that makes it ideal for both work settings and casual outings.",
    new_price: 70.0,
    old_price: 110.0,
    categories: ["Women", "Blouses", "Casual Wear"],
    tags: ["chic", "style"],
  },
  {
    id: 3,
    name: "Modern Flutter Sleeve Top",
    category: "women",
    image: p3_img,
    description: "A chic top with a unique collar design and comfortable flutter sleeves that enhance your look, providing a modern style that's perfect for any gathering.",
    new_price: 60.0,
    old_price: 95.0,
    categories: ["Women", "Tops", "Trendy"],
    tags: ["modern", "comfortable"],
  },
  {
    id: 4,
    name: "Peplum Hem Fashion Blouse",
    category: "women",
    image: p4_img,
    description: "Trendy blouse with a flattering peplum hem, combining contemporary fashion with classic elements to give your outfit a refined and fashionable touch for special events.",
    new_price: 85.0,
    old_price: 130.0,
    categories: ["Women", "Blouses", "Fashion"],
    tags: ["trendy", "refined"],
  },
  {
    id: 5,
    name: "Casual Striped Blouse",
    category: "women",
    image: p5_img,
    description: "Perfect for day or night, this blouse is versatile and features a modern, stylish design, making it a staple piece in your wardrobe that can be dressed up or down easily.",
    new_price: 45.0,
    old_price: 75.0,
    categories: ["Women", "Blouses", "Casual Wear"],
    tags: ["versatile", "modern"],
  },
  {
    id: 6,
    name: "Sophisticated Striped Blouse",
    category: "women",
    image: p6_img,
    description: "Soft stripes and a charming flutter sleeve design make this blouse ideal for any occasion, ensuring you feel both stylish and comfortable no matter where you go.",
    new_price: 50.0,
    old_price: 80.0,
    categories: ["Women", "Blouses", "Elegant"],
    tags: ["sophisticated", "charming"],
  },
  {
    id: 7,
    name: "Trendy Flutter Sleeve Blouse",
    category: "women",
    image: p7_img,
    description: "Add this playful blouse with flutter sleeves to your collection for a fun and fresh look that captures attention and keeps you comfortable all day long.",
    new_price: 55.0,
    old_price: 90.0,
    categories: ["Women", "Tops", "Fashion"],
    tags: ["playful", "fresh"],
  },
  {
    id: 8,
    name: "Stylish Peplum Blouse",
    category: "women",
    image: p8_img,
    description: "A beautiful peplum blouse that combines comfort with a stylish silhouette, making it a great choice for a day out or a special dinner with friends or family.",
    new_price: 65.0,
    old_price: 100.0,
    categories: ["Women", "Blouses", "Stylish"],
    tags: ["beautiful", "silhouette"],
  },
  {
    id: 9,
    name: "Elegant Evening Blouse",
    category: "women",
    image: p9_img,
    description: "Perfect for evening outings, this blouse adds a touch of elegance to your look while offering comfort and style that transitions seamlessly from day to night.",
    new_price: 80.0,
    old_price: 120.0,
    categories: ["Women", "Blouses", "Evening Wear"],
    tags: ["elegant", "evening"],
  },
  {
    id: 10,
    name: "Casual Chic Top",
    category: "women",
    image: p10_img,
    description: "A casual top with chic details, suitable for both work and play, making it an essential addition to your wardrobe for those busy days when you want to look your best.",
    new_price: 50.0,
    old_price: 85.0,
    categories: ["Women", "Tops", "Casual Wear"],
    tags: ["casual", "chic"],
  },
  {
    id: 11,
    name: "Urban Style Blouse",
    category: "women",
    image: p11_img,
    description: "This urban-style blouse is perfect for modern women looking to express their individuality while maintaining a fashionable appearance in everyday settings.",
    new_price: 60.0,
    old_price: 90.0,
    categories: ["Women", "Blouses", "Urban"],
    tags: ["urban", "individuality"],
  },
  {
    id: 12,
    name: "Floral Accent Blouse",
    category: "women",
    image: p12_img,
    description: "A beautiful floral accent blouse that brightens up your day with its vibrant patterns, providing a lovely addition to any spring or summer outfit.",
    new_price: 70.0,
    old_price: 100.0,
    categories: ["Women", "Blouses", "Floral"],
    tags: ["floral", "bright"],
  },
  {
    id: 13,
    name: "Green Bomber Jacket",
    category: "men",
    image: p13_img,
    description: "A stylish bomber jacket that provides comfort and a cool look for men, featuring a modern design that pairs well with both casual and smart-casual outfits.",
    new_price: 90.0,
    old_price: 130.0,
    categories: ["Men", "Jackets", "Casual"],
    tags: ["stylish", "comfortable"],
  },
  {
    id: 14,
    name: "Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    description: "This slim fit bomber jacket offers a sleek silhouette and a modern appeal, ideal for layering and perfect for those who want to make a fashion statement.",
    new_price: 95.0,
    old_price: 135.0,
    categories: ["Men", "Jackets", "Stylish"],
    tags: ["slim fit", "modern"],
  },
  {
    id: 15,
    name: "Classic Zippered Jacket",
    category: "men",
    image: p15_img,
    description: "A classic zippered jacket that combines style with functionality, making it an ideal choice for a variety of occasions while ensuring warmth and comfort.",
    new_price: 80.0,
    old_price: 115.0,
    categories: ["Men", "Jackets", "Classic"],
    tags: ["classic", "functional"],
  },
  {
    id: 16,
    name: "Casual Bomber Jacket",
    category: "men",
    image: p16_img,
    description: "Perfect for casual outings, this bomber jacket is versatile and stylish, providing an easy way to elevate your everyday look while keeping you cozy.",
    new_price: 85.0,
    old_price: 125.0,
    categories: ["Men", "Jackets", "Casual"],
    tags: ["versatile", "casual"],
  },
  {
    id: 17,
    name: "Sporty Bomber Jacket",
    category: "men",
    image: p17_img,
    description: "A sporty bomber jacket that complements an active lifestyle, combining both comfort and style for the modern man who enjoys staying active and looking good.",
    new_price: 95.0,
    old_price: 140.0,
    categories: ["Men", "Jackets", "Sporty"],
    tags: ["sporty", "active"],
  },
  {
    id: 18,
    name: "Green Casual Jacket",
    category: "men",
    image: p18_img,
    description: "This green casual jacket is perfect for layering and adds a pop of color to your outfit, making it a refreshing choice for any casual ensemble.",
    new_price: 75.0,
    old_price: 110.0,
    categories: ["Men", "Jackets", "Casual"],
    tags: ["green", "layering"],
  },
  {
    id: 19,
    name: "Black Zippered Jacket",
    category: "men",
    image: p19_img,
    description: "A black zippered jacket that pairs well with any outfit, providing a timeless look that never goes out of style while ensuring you stay warm and comfortable.",
    new_price: 85.0,
    old_price: 125.0,
    categories: ["Men", "Jackets", "Classic"],
    tags: ["black", "versatile"],
  },
  {
    id: 20,
    name: "Lightweight Hooded Jacket",
    category: "men",
    image: p20_img,
    description: "A lightweight hooded jacket that's perfect for layering on cool days, designed for those who appreciate both comfort and style during outdoor adventures.",
    new_price: 70.0,
    old_price: 100.0,
    categories: ["Men", "Jackets", "Lightweight"],
    tags: ["lightweight", "hooded"],
  }, 
  {
    id: 21,
    name: "Classic Denim Jacket",
    category: "men",
    image: p21_img,
    description: "A classic denim jacket that never goes out of style, offering timeless appeal and versatility for casual wear that can be dressed up or down effortlessly.",
    new_price: 90.0,
    old_price: 140.0,
    categories: ["Men", "Jackets", "Classic"],
    tags: ["denim", "timeless"],
  },
  {
    id: 22,
    name: "Trendy Leather Jacket",
    category: "men",
    image: p22_img,
    description: "A trendy leather jacket that adds an edge to your outfit, featuring a modern cut that enhances your style while providing durability and comfort.",
    new_price: 120.0,
    old_price: 160.0,
    categories: ["Men", "Jackets", "Leather"],
    tags: ["trendy", "edgy"],
  },
  {
    id: 23,
    name: "Stylish Overcoat",
    category: "men",
    image: p23_img,
    description: "A stylish overcoat that provides warmth and elegance, making it an ideal choice for chilly evenings or sophisticated occasions when you want to look your best.",
    new_price: 150.0,
    old_price: 200.0,
    categories: ["Men", "Coats", "Stylish"],
    tags: ["overcoat", "elegance"],
  },
  {
    id: 24,
    name: "Winter Parka Jacket",
    category: "men",
    image: p24_img,
    description: "A warm winter parka jacket designed for comfort and protection against the cold, featuring a modern design that combines functionality with style.",
    new_price: 130.0,
    old_price: 180.0,
    categories: ["Men", "Jackets", "Winter"],
    tags: ["parka", "warm"],
  },
  {
    id: 25,
    name: "Sporty Zip-Up Jacket",
    category: "kid",
    image: p25_img,
    description: "A sporty zip-up jacket suitable for all outdoor activities, designed to keep you comfortable and stylish during your adventures while providing practical features.",
    new_price: 100.0,
    old_price: 140.0,
    categories: ["Kid", "Jackets", "Sporty"],
    tags: ["zip-up", "outdoor"],
  },
  {
    id: 26,
    name: "Smart Casual Jacket",
    category: "kid",
    image: p26_img,
    description: "A smart casual jacket perfect for any occasion, from work to dinner, blending sophistication with comfort to ensure you look polished no matter the setting.",
    new_price: 110.0,
    old_price: 150.0,
    categories: ["Kid", "Jackets", "Smart Casual"],
    tags: ["smart", "casual"],
  },
  {
    id: 27,
    name: "Lightweight Travel Jacket",
    category: "kid",
    image: p27_img,
    description: "A lightweight travel jacket that's easy to pack and wear, designed for travelers who appreciate convenience without sacrificing style or comfort.",
    new_price: 85.0,
    old_price: 120.0,
    categories: ["Kid", "Jackets", "Travel"],
    tags: ["travel", "lightweight"],
  },
  {
    id: 28,
    name: "Casual Oversized Jacket",
    category: "kid",
    image: p28_img,
    description: "An oversized casual jacket that provides comfort and style, allowing you to layer effortlessly while making a bold fashion statement wherever you go.",
    new_price: 95.0,
    old_price: 135.0,
    categories: ["Kid", "Jackets", "Oversized"],
    tags: ["oversized", "comfortable"],
  },
  {
    id: 29,
    name: "Classic Trench Coat",
    category: "kid",
    image: p29_img,
    description: "A classic trench coat that adds sophistication to your look, featuring timeless design elements that ensure you stay stylish and warm during cooler months.",
    new_price: 120.0,
    old_price: 160.0,
    categories: ["Kid", "Coats", "Classic"],
    tags: ["trench", "sophisticated"],
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    description: "A fashionable hoodie that’s perfect for a casual day out, offering a blend of style and comfort that keeps you looking good while feeling relaxed.",
    new_price: 60.0,
    old_price: 90.0,
    categories: ["Kid", "Hoodies", "Casual"],
    tags: ["fashionable", "casual"],
  },
  {
    id: 31,
    name: "Eco-Friendly Hoodie",
    category: "kid",
    image: p31_img,
    description: "This eco-friendly hoodie is stylish and sustainable, perfect for eco-conscious consumers who want to make a positive impact on the planet without compromising style.",
    new_price: 65.0,
    old_price: 95.0,
    categories: ["Kid", "Hoodies", "Eco-Friendly"],
    tags: ["eco-friendly", "sustainable"],
  },
  {
    id: 32,
    name: "Street Style Hoodie",
    category: "kid",
    image: p32_img,
    description: "A street-style hoodie that combines comfort and trendiness for urban wear, designed to make you stand out while ensuring you stay cozy throughout the day.",
    new_price: 70.0,
    old_price: 100.0,
    categories: ["Kid", "Hoodies", "Street Style"],
    tags: ["street", "trendy"],
  },
  {
    id: 33,
    name: "Minimalist Hoodie",
    category: "kid",
    image: p33_img,
    description: "A minimalist hoodie that offers a sleek look for everyday wear, providing a versatile piece that pairs effortlessly with a variety of outfits for any occasion.",
    new_price: 55.0,
    old_price: 80.0,
    categories: ["Kid", "Hoodies", "Minimalist"],
    tags: ["minimalist", "sleek"],
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    description: "A vintage-style hoodie that gives a retro vibe while keeping you comfortable, perfect for those who appreciate a nostalgic look with modern comfort.",
    new_price: 75.0,
    old_price: 110.0,
    categories: ["Kid", "Hoodies", "Vintage"],
    tags: ["vintage", "retro"],
  },
  {
    id: 35,
    name: "Layered Look Hoodie",
    category: "kid",
    image: p35_img,
    description: "A layered look hoodie that adds depth to your casual outfit, offering a unique design that stands out while ensuring comfort and style throughout the day.",
    new_price: 85.0,
    old_price: 120.0,
    categories: ["Kid", "Hoodies", "Layered"],
    tags: ["layered", "depth"],
  },
  {
    id: 36,
    name: "Bright Color Hoodie",
    category: "kid",
    image: p36_img,
    description: "A bright color hoodie that makes a statement while ensuring comfort, ideal for those who love to express their personality through their clothing.",
    new_price: 65.0,
    old_price: 95.0,
    categories: ["Kid", "Hoodies", "Bright"],
    tags: ["bright", "statement"],
  },
];


export default all_product;