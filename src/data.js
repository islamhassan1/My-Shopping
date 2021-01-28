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
    img: 'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-1342609.jpg&fm=jpg',
    desc: `Charcoal grey solid formal suit
    Charcoal grey solid super slim-fit formal blazer, has a notched lapel, single-breasted with double button closures `,
  },
  {
    id: 2,
    title: 'Women Green Top',
    category: 'Woman',
    price: 13.99,
    img: 'https://images.pexels.com/photos/3767410/pexels-photo-3767410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    desc: `Green embroidered regular top and has a round neck, three quarter sleeves . `,
  },
  {
    id: 3,
    title: 'Boys T-shirts',
    category: 'Kids',
    price: 6.99,
    img: 'https://images.pexels.com/photos/4712012/pexels-photo-4712012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    desc: `Pack of five knitted T-shirts in red, green, blue, green, white and black, has a contrast ribbed round neck, short sleeves with contrast ribbed cuffs, graphic print on the front, straight hem.`,
  },
  {
    id: 4,
    title: 'Men sweatshirt',
    category: 'Men',
    price: 20.99,
    img: 'https://images.pexels.com/photos/1706910/pexels-photo-1706910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    desc: `Mustard yellow printed pullover sweatshirt, has a hood, two pockets, long sleeves, straight hem . `,
  },
  {
    id: 5,
    title: 'Women Jacket',
    category: 'Woman',
    price: 22.99,
    img: 'https://images.pexels.com/photos/6530732/pexels-photo-6530732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    desc: `Maroon solid quilted jacket, has a stand collar, 2 pockets, zip closure, long sleeves, straight hem, and polyester lining .`,
  },
  {
    id: 6,
    title: 'Girls Dress',
    category: 'Kids',
    price: 18.99,
    img: 'https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    desc: `Peach-Coloured printed woven fit and flare dress, has a round neck, short sleeves, concealed zip closure, and flared hem .`,
  },
  {
    id: 7,
    title: 'Men jeans jacket',
    category: 'Men',
    price: 8.99,
    img: 'https://images.pexels.com/photos/6273203/pexels-photo-6273203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    desc: `Blue solid jacket, has a stand collar, 4 pockets, zip closure, long sleeves, straight hem, and unlined .`,
  },
  {
    id: 8,
    title: 'Women T-shirt',
    category: 'Woman',
    price: 12.99,
    img: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    desc: `Yellow and Beige printed T-shirt, has a round neck, and short sleeves .  `,
  },
  {
    id: 9,
    title: 'Kids Jacket',
    category: 'Kids',
    price: 16.99,
    img: 'https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    desc: `Purple and Red printed jacket, has a hooded, 2 pockets, zip closure, long sleeves, straight hem, and polyester lining .`,
  },
];



/* Reviews*/

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "Have bought two sets of these in the last week or two, ‘sold and despatched by Amazon’. 100% real, comfortable and fit exactly as expected (size Medium, 32/33” waist). Only gripe is the price fluctuates but can still be found cheaper on the high street so do your research and you can pay £26 for a 3 pack on the high street",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'As the title mentions I was sceptical of the price however a quick email to CK cleared out any doubts. They said they can guarantee that CK products sold directly by Amazon are legitimate and you dont need to worry about them being counterfeit.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'These are not fake! I bought these for my husband; then read the reviews ( as you do.) concerned that they had been branded as fake I bought the next lot directly from Calvin Klein ( the company, not himself!) They were exactly the same in every way. So this product is the real deal and it’s so disappointing that some are saying otherwise.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'My husband has been doing kung fu, thai chi and yoga for nearly a year now. Ive been noticing how much fitter he looks and orderd him these fantastic pants to show off his new figure...Straight away, he said...Theyll never fit, theyre far too small!! .',
  },
];


/*export default reviews;
export default menu;
*/


export  {menu, reviews };


