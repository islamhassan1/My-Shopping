/*Sidebar*/
import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaAngellist,
  FaShopify,
  FaReadme,
  FaTwitch,
  FaSistrix,
  FaCcAmazonPay,
  FaViber,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/home',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/New In',
    text: 'New In',
    icon: <FaAngellist />,
  },
  {
    id: 3,
    url: '/Find A Products',
    text: 'Find A Products',
    icon: <FaSistrix />,
  },
  {
    id: 4,
    url: '/Categories',
    text: 'Categories',
    icon: <FaShopify />,
  },
  {
    id: 5,
    url: '/Our Reviews',
    text: 'Our Reviews',
    icon: <FaReadme />,
  },
  {
    id: 6,
    url: '/Intro',
    text: 'Intro',
    icon: <FaTwitch />,
  },
  {
    id: 7,
    url: '/Membership card',
    text: 'Membership card',
    icon: <FaCcAmazonPay />,
  },
  {
    id: 8,
    url: '/Contact Us',
    text: 'Contact Us ',
    icon: <FaViber />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.behance.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.sketch.com',
    icon: <FaSketch />,
  },
];



/* MENU*/

const menu = [
  {
    id: 1,
    title: 'Men suit',
    category: 'Men',
    price: 15.99,
    img: '/src/components/img/item-1.jpg',
    desc: `Charcoal grey solid formal suit
    Charcoal grey solid super slim-fit formal blazer, has a notched lapel, single-breasted with double button closures `,
  },
  {
    id: 2,
    title: 'Women Green Top',
    category: 'Woman',
    price: 13.99,
    img: '/src/components/img/item-4.jpg',
    desc: `Green embroidered regular top and has a round neck, three quarter sleeves . `,
  },
  {
    id: 3,
    title: 'Boys T-shirts',
    category: 'Kids',
    price: 6.99,
    img: '/src/components/img/item-7.jpg',
    desc: `Pack of five knitted T-shirts in red, green, blue, green, white and black, has a contrast ribbed round neck, short sleeves with contrast ribbed cuffs, graphic print on the front, straight hem.`,
  },
  {
    id: 4,
    title: 'Men sweatshirt',
    category: 'Men',
    price: 20.99,
    img: '/src/components/img/item-2.jpg',
    desc: `Mustard yellow printed pullover sweatshirt, has a hood, two pockets, long sleeves, straight hem . `,
  },
  {
    id: 5,
    title: 'Women Jacket',
    category: 'Woman',
    price: 22.99,
    img: '/src/components/img/item-5.jpg',
    desc: `Maroon solid quilted jacket, has a stand collar, 2 pockets, zip closure, long sleeves, straight hem, and polyester lining .`,
  },
  {
    id: 6,
    title: 'Girls Dress',
    category: 'Kids',
    price: 18.99,
    img: '/src/components/img/item-8.jpg',
    desc: `Peach-Coloured printed woven fit and flare dress, has a round neck, short sleeves, concealed zip closure, and flared hem .`,
  },
  {
    id: 7,
    title: 'Men jeans jacket',
    category: 'Men',
    price: 8.99,
    img: '/src/components/img/item-3.jpg',
    desc: `Blue solid jacket, has a stand collar, 4 pockets, zip closure, long sleeves, straight hem, and unlined .`,
  },
  {
    id: 8,
    title: 'Women T-shirt',
    category: 'Woman',
    price: 12.99,
    img: '/src/components/img/item-6.jpg',
    desc: `Yellow and Beige printed T-shirt, has a round neck, and short sleeves .  `,
  },
  {
    id: 9,
    title: 'Kids Jacket',
    category: 'Kids',
    price: 16.99,
    img: '/src/components/img/item-10.jpg',
    desc: `Purple and Red printed jacket, has a hooded, 2 pockets, zip closure, long sleeves, straight hem, and polyester lining .`,
  },
];

export default menu;