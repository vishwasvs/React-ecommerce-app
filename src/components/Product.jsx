import { ProductCard } from "./ProductCard";


const products = [
  {
    id: 1,
    title: "Shoes",
    price: 100,
    category: "Shoes",
    image: "https://th.bing.com/th/id/OIP.VjGpdDhQBcHOSVgnIuLPUAHaE8?w=276&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 2,
    title: "Watch",
    price: 200,
    category: "Watches",
    image: "https://th.bing.com/th?id=OIF.6xWsnAwpfR1B0WI28M%2fanQ&w=202&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 3,
    title: "T-Shirt",
    price: 50,
    category: "Clothing",
    image: "https://th.bing.com/th/id/OIP.YFoz0-t31Ndh8RlKtyBmbAHaFj?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 4,
    title: "Headphones",
    price: 150,
    category: "Electronics",
    image: "https://th.bing.com/th/id/OIP.bd0bRvIVrpXRJornwNXhegHaE9?w=242&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },

   {
    id: 5,
    title: "Running Shoes",
    price: 180,
    category: "Shoes",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/377048/01/sv01/fnd/IND/fmt/png/Softride-Cushioned-Comfort-Shoes"
  },

  {
    id: 6,
    title: "Smart Watch",
    price: 250,
    category: "Watches",
    image: "https://th.bing.com/th/id/OIP.GOnVw7fxAcF5GYEOZA4FHwHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },

  {
    id: 7,
    title: "Jeans",
    price: 80,
    category: "Clothing",
    image: "https://th.bing.com/th/id/OIP.M08Dmogtl3Mm9pLlblCGcwHaG0?w=216&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },

  {
    id: 8,
    title: "Laptop",
    price: 900,
    category: "Electronics",
    image: "https://th.bing.com/th/id/OIP.XKP7SbUO8Dm5bTl1Xo3sOwHaET?w=267&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
];

const prodArrival=[
    {
        id: 5,
        title: "Phone",
        price:599,
        image:"https://th.bing.com/th/id/OIP.rUrbVNtro6ecx3dM1-FMnwHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
     {
    id: 6,
    title: "Shoes",
    price: 150,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/377048/01/sv01/fnd/IND/fmt/png/Softride-Cushioned-Comfort-Shoes"
  },
    {
        id:7,
        title: "Jacket",
        price:120,
        image:"https://th.bing.com/th/id/OIP.yVXmJL39rD0o8uv430tSqgHaE8?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },

    {
    id: 9,
    title: "Bluetooth Speaker",
    price: 120,
    category: "Electronics",
    image: "https://th.bing.com/th/id/OIP.KS_YBcLci1w9x2unDdtA0AHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 10,
    title: "Hoodie",
    price: 90,
    category: "Clothing",
    image: "https://th.bing.com/th/id/OIP.j6V1Wi-I82u8Ao5dAy_IEgHaFS?w=182&h=130&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
]

export const Product = ({ category = null }) => {
  const filteredProducts = category
    ? products.filter(item => item.category === category)
    : products;

  return (
    <div className="container mt-5">

      <h4 className="mb-4">Featured Products</h4>
      <div className="row">
        {filteredProducts.map(item => (
          <div className="col-md-3 mb-4" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>

      <h4 className="mb-4 mt-5">New Arrivals</h4>
      <div className="row">
        {prodArrival.map(item => (
          <div className="col-md-3 mb-4" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>

    </div>
  );
};