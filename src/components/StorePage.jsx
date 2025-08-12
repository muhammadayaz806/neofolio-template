import Contact from "./Contact";
import "../assets/css/StorePage.css";


const url = '/assets/images/products';

const StorePage = () => {
  const Products = [
    {
      id: 1,
      title: "Website Pack",
      image: `${url}/product1.webp`,
      price: 49.99,
      description:
        "A collection of modern and responsive website templates for any project.",
    },
    {
      id: 2,
      title: "UI Kit",
      image: `${url}/product2.webp`,
      price: 79.99,
      description:
        "A comprehensive Figma UI kit tailored for dashboard designs.",
    },
    {
      id: 3,
      title: "SEO Plugin",
      image: `${url}/product3.webp`,
      price: 29.99,
      description:
        "A powerful WordPress plugin to improve your website's SEO rankings.",
    },
    {
      id: 4,
      title: "E-comm Template",
      image: `${url}/product4.webp`,
      price: 59.99,
      description:
        "A professionally designed Figma template for e-commerce platforms.",
    },
    {
      id: 5,
      title: "Dev Tools",
      image: `${url}/product5.webp`,
      price: 39.99,
      description:
        "A set of useful add-ons for enhancing your development workflow.",
    },
    {
      id: 6,
      title: "Icon Set",
      image: `${url}/product6.webp`,
      price: 19.99,
      description:
        "A collection of custom icons for modern web and mobile applications.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="store-header">
          <h2 className="store-title">Store</h2>
        </div>
        <p className="store-description">
          Unlock a treasure trove of tools, templates, and insights crafted for
          design professionals
        </p>

        <div className="grid grid-cols-2">
          {Products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">$ {product.price}</div>
              </div>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
};

export default StorePage;
