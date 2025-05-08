// import { useEffect, useState } from "react";
// import { useAppContext } from "../context/AppContext";
// import { Link, useParams } from "react-router-dom";
// import { assets } from "../assets/assets";
// import ProductCard from "../components/ProductCard";
// const ProductDetails = () => {
//   const { products, navigate, currency, addToCart } = useAppContext();
//   const { id } = useParams();
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const [thumbnail, setThumbnail] = useState(null);

//   const product = products.find((item) => item._id === id);

//   useEffect(() => {
//     if (products.length > 0) {
//       let productsCopy = products.slice();
//       productsCopy = productsCopy.filter(
//         (item) => product.category === item.category
//       );
//       setRelatedProducts(productsCopy.slice(0, 5));
//     }
//   }, [products]);

//   useEffect(() => {
//     setThumbnail(product?.image[0] ? product.image[0] : null);
//   }, [product]);

//   return (
//     product && (
//       <div className="mt-12">
//         <p>
//           <Link to={"/"}>Home</Link> /<Link to={"/products"}> Products</Link> /
//           <Link to={`/products/${product.category.toLowerCase()}`}>
//             {" "}
//             {product.category}
//           </Link>{" "}
//           /<span className="text-primary"> {product.name}</span>
//         </p>

//         <div className="flex flex-col md:flex-row gap-16 mt-4">
//           <div className="flex gap-3">
//             <div className="flex flex-col gap-3">
//               {product.image.map((image, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setThumbnail(image)}
//                   className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
//                 >
//                   <img src={image} alt={`Thumbnail ${index + 1}`} />
//                 </div>
//               ))}
//             </div>

//             <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
//               <img src={thumbnail} alt="Selected product" />
//             </div>
//           </div>

//           <div className="text-sm w-full md:w-1/2">
//             <h1 className="text-3xl font-medium">{product.name}</h1>

//             <div className="flex items-center gap-0.5 mt-1">
//               {Array(5)
//                 .fill("")
//                 .map((_, i) => (
//                   <img
//                     src={i < 4 ? assets.star_icon : assets.star_dull_icon}
//                     alt=""
//                     className="md:w-4 w-3.5"
//                   />
//                 ))}
//               <p className="text-base ml-2">(4)</p>
//             </div>

//             <div className="mt-6">
//               <p className="text-gray-500/70 line-through">
//                 MRP: {currency}
//                 {product.price}
//               </p>
//               <p className="text-2xl font-medium">
//                 MRP: {currency}
//                 {product.offerPrice}
//               </p>
//               <span className="text-gray-500/70">(inclusive of all taxes)</span>
//             </div>

//             <p className="text-base font-medium mt-6">About Product</p>
//             <ul className="list-disc ml-4 text-gray-500/70">
//               {product.description.map((desc, index) => (
//                 <li key={index}>{desc}</li>
//               ))}
//             </ul>

//             <div className="flex items-center mt-10 gap-4 text-base">
//               <button
//                 onClick={() => addToCart(product._id)}
//                 className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => {
//                   addToCart(product._id);
//                   navigate("/cart");
//                 }}
//                 className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull"
//               >
//                 Buy now
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* related products */}
//         <div className="flex flex-col item-center mt-20">
//           <div className="flex flex-col item-center w-max">
//             <p className="text-3xl font-medium">Related Products</p>
//             <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
//             {relatedProducts
//               .filter((product) => product.inStock)
//               .map((product, index) => (
//                 <ProductCard key={index} product={product} />
//               ))}
//           </div>
//           <button
//             onClick={() => {
//               navigate("/products");
//               scrollTo(0, 0);
//             }}
//             className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition"
//           >
//             {" "}
//             See More
//           </button>
//         </div>
//       </div>
//     )
//   );
// };
// export default ProductDetails;

import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { products, navigate, currency, addToCart } = useAppContext();
  const { id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const product = products.find((item) => item._id === id);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => product.category === item.category
      );
      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products]);

  useEffect(() => {
    setThumbnail(product?.image[0] ? product.image[0] : null);

    // Initialize chat with product info when product loads
    if (product) {
      setMessages([
        {
          sender: "bot",
          text: `Hello! I'm your shopping assistant for ${product.name}. Ask me anything about this product.`,
        },
        {
          sender: "bot",
          text: `Here are some quick facts:\n- Category: ${product.category}\n- Price: ${currency}${product.offerPrice}\n- Key features: ${product.description[0]}`,
        },
      ]);
    }
  }, [product]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = { sender: "user", text: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer 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",
            "HTTP-Referer": window.location.href,
            "X-Title": "E-Commerce Store",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-chat:free",
            messages: [
              {
                role: "system",
                content: `You are a helpful shopping assistant for an e-commerce store. 
              The user is currently viewing a product with these details:
              Name: ${product.name}
              Category: ${product.category}
              Price: ${currency}${product.offerPrice}
              Description: ${product.description.join("\n")}
              Please answer questions specifically about this product.`,
              },
              {
                role: "user",
                content: inputMessage,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (data.choices && data.choices[0]) {
        const botResponse = {
          sender: "bot",
          text: data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        throw new Error("Invalid response from AI");
      }
    } catch (error) {
      console.error("Error calling OpenRouter API:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I'm having trouble connecting to the assistant. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    product && (
      <div className="mt-12 relative">
        {/* Floating chat button */}
        <button
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          aria-label="Chat with us"
        >
          {/* Animated chat icon with status indicator */}
          <div className="relative">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzh1N3cycnRnN2JqdTN3M3Bwam8yaXExNmpnODY1MDNrZ2gwZWxxMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/S60CrN9iMxFlyp7uM8/giphy.gif"
              alt=""
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3 sm:w-4 sm:h-4 border-2 border-white"></div>
          </div>

          {/* Chat text that appears on hover */}
          <span className="ml-2 sm:ml-3 mr-1 sm:mr-2 py-1 px-3 sm:py-2 sm:px-4 bg-white text-primary text-sm sm:text-base font-medium rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us!
          </span>

          {/* Mobile tap target enhancement */}
          <span className="sr-only">Open chat window</span>
        </button>

        {/* Chat window */}
        {showChat && (
          <div className="fixed bottom-24 right-8 w-80 bg-white shadow-lg rounded-t-lg flex flex-col z-50 border border-gray-200">
            <div className="bg-primary text-white p-3 rounded-t-lg flex justify-between items-center">
              <h3 className="font-medium">Product Assistant</h3>
              <button onClick={() => setShowChat(false)} className="text-white">
                ×
              </button>
            </div>

            <div className="flex-1 p-3 overflow-y-auto max-h-80">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-3">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-gray-200">
              <div className="flex">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about this product..."
                  className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary-dull"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product details content */}
        <p>
          <Link to={"/"}>Home</Link> /<Link to={"/products"}> Products</Link> /
          <Link to={`/products/${product.category.toLowerCase()}`}>
            {" "}
            {product.category}
          </Link>{" "}
          /<span className="text-primary"> {product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <img src={thumbnail} alt="Selected product" />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                    alt=""
                    className="md:w-4 w-3.5"
                  />
                ))}
              <p className="text-base ml-2">(4)</p>
            </div>

            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: {currency}
                {product.price}
              </p>
              <p className="text-2xl font-medium">
                MRP: {currency}
                {product.offerPrice}
              </p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div className="flex items-center mt-10 gap-4 text-base">
              <button
                onClick={() => addToCart(product._id)}
                className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(product._id);
                  navigate("/cart");
                }}
                className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>

        {/* related products */}
        <div className="flex flex-col item-center mt-20">
          <div className="flex flex-col item-center w-max">
            <p className="text-3xl font-medium">Related Products</p>
            <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
            {relatedProducts
              .filter((product) => product.inStock)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
          <button
            onClick={() => {
              navigate("/products");
              scrollTo(0, 0);
            }}
            className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition"
          >
            {" "}
            See More
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
