
import { useState } from "react";

export default function Products() {
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [message, setMessage] = useState("");

  const product = {
    name: "Essential Product",
    price: 999,
    image: "https://placehold.co/600x400/f0e2da/8d5545?text=Product",
    description:
      "A stylish and practical choice, designed for everyday use."
  };

  function addToCart() {
    setCartCount((count) => count + quantity);
    setMessage(
      `${quantity} ${quantity === 1 ? "item" : "items"} added to your cart!`
    );
  }

  function buyNow() {
    setMessage(
      `You selected ${quantity} item(s). Checkout can be connected next.`
    );
  }

  return (
    <div className="page products-page">
      <section className="page-banner products-banner">
        <span className="hero-tag">OUR COLLECTION</span>
        <h1>Discover Products</h1>
        <p>Explore our featured product and choose what works for you.</p>
      </section>

      <div className="products-toolbar">
        <h2>Featured Product</h2>

        <div className="cart-counter" aria-live="polite">
          🛒 Cart <span>{cartCount}</span>
        </div>
      </div>

      <section className="prd-layout">
        <div className="product-image-wrap">
          <img src={product.image} alt={product.name} />
          <span className="product-badge">FEATURED</span>
        </div>

        <div className="product-info">
          <span className="product-category">EVERYDAY ESSENTIALS</span>
          <h2>{product.name}</h2>

          <div className="product-rating">
            <span aria-label="5 out of 5 decorative stars">★★★★★</span>
            <small>Featured item</small>
          </div>

          <p className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="product-description">
            {product.description}
          </p>

          <div className="quantity-control">
            <span>Quantity</span>

            <div className="quantity-buttons">
              <button
                type="button"
                onClick={() => {
                  setQuantity((q) => Math.max(1, q - 1));
                  setMessage("");
                }}
                disabled={quantity === 1}
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() => {
                  setQuantity((q) => q + 1);
                  setMessage("");
                }}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <p className="product-total">
            Total: ₹{(product.price * quantity).toLocaleString("en-IN")}
          </p>

          <div className="product-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={buyNow}
            >
              Buy Now
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>

          {message && (
            <p className="product-message" role="status">
              ✓ {message}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
