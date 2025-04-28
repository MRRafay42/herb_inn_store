// import React from "react";
// import { assets } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";

// const ProductCard = ({ product }) => {
//   const { currency, addToCart, removeCartItem, cartItems, navigate } =
//     useAppContext();

//   return (
//     product && (
//       <div
//         onClick={() => {
//           navigate(
//             `/products/${product.category.toLowerCase()}/${product._id}`
//           );
//           scrollTo(0, 0);
//         }}
//         className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full"
//       >
//         <div className="group cursor-pointer flex items-center justify-center px-2">
//           <img
//             className="group-hover:scale-105 transition max-w-26 md:max-w-36"
//             src={product.image[0]}
//             alt={product.name}
//           />
//         </div>
//         <div className="text-gray-500/60 text-sm">
//           <p>{product.category}</p>
//           <p className="text-gray-700 font-medium text-lg truncate w-full">
//             {product.name}
//           </p>
//           <div className="flex items-center gap-0.5">
//             {Array(5)
//               .fill("")
//               .map((_, i) => (
//                 <img
//                   key={i}
//                   className="md:w-3.5 w-3"
//                   src={i < 4 ? assets.star_icon : assets.star_dull_icon}
//                   alt=""
//                 />
//               ))}
//             <p>(4)</p>
//           </div>
//           <div className="flex items-end justify-between mt-3">
//             <p className="md:text-xl text-base font-medium text-indigo-500">
//               {currency}
//               {product.offerPrice}{" "}
//               <span className="text-gray-500/60 md:text-sm text-xs line-through">
//                 {currency}
//                 {product.price}
//               </span>
//             </p>
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//               }}
//               className="text-primary"
//             >
//               {!cartItems[product._id] ? (
//                 <button
//                   className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
//                   onClick={() => addToCart(product._id)}
//                 >
//                   <img src={assets.cart_icon} alt="cart_icon" />
//                   Add
//                 </button>
//               ) : (
//                 <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
//                   <button
//                     onClick={() => {
//                       removeCartItem(product._id);
//                     }}
//                     className="cursor-pointer text-md px-2 h-full"
//                   >
//                     -
//                   </button>
//                   <span className="w-5 text-center">
//                     {cartItems[product._id]}
//                   </span>
//                   <button
//                     onClick={() => {
//                       addToCart(product._id);
//                     }}
//                     className="cursor-pointer text-md px-2 h-full"
//                   >
//                     +
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default ProductCard;

//////////////////////////////////////2/////////////////////////////////////////////////

// import React from "react";
// import { assets } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";

// const ProductCard = ({ product }) => {
//   const { currency, addToCart, removeCartItem, cartItems, navigate } =
//     useAppContext();

//   if (!product) return null;

//   return (
//     <div
//       onClick={() => {
//         navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
//         window.scrollTo(0, 0);
//       }}
//       className="border border-gray-500/20 rounded-lg bg-white w-full
//       hover:shadow-md transition-shadow duration-300
//       px-2 xs:px-3 sm:px-4 py-2
//       min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] md:min-w-[200px]"
//     >
//       {/* Image Container */}
//       <div
//         className="group cursor-pointer flex items-center justify-center
//       h-[100px] xs:h-[120px] sm:h-[140px] md:h-[160px] mb-2 overflow-hidden"
//       >
//         <img
//           className="group-hover:scale-105 transition-transform duration-300
//           h-full w-auto object-contain"
//           src={product.image[0]}
//           alt={product.name}
//           loading="lazy"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="text-gray-500/60 text-xs xs:text-sm sm:text-base">
//         <p className="truncate">{product.category}</p>
//         <p className="text-gray-700 font-medium text-sm xs:text-base sm:text-lg md:text-xl truncate">
//           {product.name}
//         </p>

//         {/* Ratings */}
//         <div className="flex items-center gap-0.5 mt-1">
//           {Array(5)
//             .fill("")
//             .map((_, i) => (
//               <img
//                 key={i}
//                 className="w-3 xs:w-3.5 sm:w-4"
//                 src={i < 4 ? assets.star_icon : assets.star_dull_icon}
//                 alt=""
//               />
//             ))}
//           <span className="text-xs xs:text-sm">(4)</span>
//         </div>

//         {/* Price and Add to Cart */}
//         <div className="flex items-end justify-between mt-2 xs:mt-3">
//           <div>
//             <p
//               className="text-indigo-500 font-medium
//               text-sm xs:text-base sm:text-lg md:text-xl"
//             >
//               {currency}
//               {product.offerPrice}
//             </p>
//             <p
//               className="text-gray-500/60 line-through
//               text-xs xs:text-sm"
//             >
//               {currency}
//               {product.price}
//             </p>
//           </div>

//           <div onClick={(e) => e.stopPropagation()}>
//             {!cartItems[product._id] ? (
//               <button
//                 className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300
//                 rounded text-indigo-600 font-medium
//                 w-[60px] xs:w-[70px] sm:w-[80px] h-[28px] xs:h-[32px] sm:h-[34px]
//                 text-xs xs:text-sm"
//                 onClick={() => addToCart(product._id)}
//               >
//                 <img
//                   src={assets.cart_icon}
//                   alt="cart"
//                   className="w-3 xs:w-3.5"
//                 />
//                 Add
//               </button>
//             ) : (
//               <div
//                 className="flex items-center justify-center gap-2
//                 bg-indigo-500/25 rounded select-none
//                 w-[70px] xs:w-[80px] sm:w-[90px] h-[28px] xs:h-[32px] sm:h-[34px]"
//               >
//                 <button
//                   onClick={() => removeCartItem(product._id)}
//                   className="cursor-pointer h-full px-1 xs:px-2"
//                 >
//                   -
//                 </button>
//                 <span className="w-5 text-center text-xs xs:text-sm">
//                   {cartItems[product._id]}
//                 </span>
//                 <button
//                   onClick={() => addToCart(product._id)}
//                   className="cursor-pointer h-full px-1 xs:px-2"
//                 >
//                   +
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
//////////////////////////////////3///////////////////////////////////////
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeCartItem, cartItems, navigate } =
    useAppContext();
  const [peopleWatching, setPeopleWatching] = useState(0);

  if (!product) return null;

  // Calculate discount percentage
  const discountPercentage = Math.round(
    ((product.price - product.offerPrice) / product.price) * 100
  );

  useEffect(() => {
    // Initial random number
    const min = 5;
    const max = 50;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setPeopleWatching(random);

    // Set up interval to change the number every few seconds
    const interval = setInterval(() => {
      const fluctuation = Math.floor(Math.random() * 5) - 2; // -2 to +2
      const newCount = Math.max(
        min,
        Math.min(max, peopleWatching + fluctuation)
      );
      setPeopleWatching(newCount);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [product._id, peopleWatching]);

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        window.scrollTo(0, 0);
      }}
      className="border border-gray-500/20 rounded-lg bg-white w-full 
      hover:shadow-md transition-shadow duration-300
      px-2 xs:px-3 sm:px-4 py-2
      min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] md:min-w-[200px]
      relative"
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs xs:text-sm font-bold px-2 py-1 rounded-md">
          {discountPercentage}% OFF
        </div>
      )}

      {/* Image Container */}
      <div
        className="group cursor-pointer flex items-center justify-center 
      h-[100px] xs:h-[120px] sm:h-[140px] md:h-[160px] mb-2 overflow-hidden"
      >
        <img
          className="group-hover:scale-105 transition-transform duration-300 
          h-full w-auto object-contain"
          src={product.image[0]}
          alt={product.name}
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="text-gray-500/60 text-xs xs:text-sm sm:text-base">
        <p className="truncate">{product.category}</p>
        <p className="text-gray-700 font-medium text-sm xs:text-base sm:text-lg md:text-xl truncate">
          {product.name}
        </p>

        {/* Ratings */}
        <div className="flex items-center gap-0.5 mt-1">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                className="w-3 xs:w-3.5 sm:w-4"
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=""
              />
            ))}
          <span className="text-xs xs:text-sm">(4)</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-end justify-between mt-2 xs:mt-3">
          <div>
            <p
              className="text-indigo-500 font-medium 
              text-sm xs:text-base sm:text-lg md:text-xl"
            >
              {currency}
              {product.offerPrice}
            </p>
            <p
              className="text-gray-500/60 line-through
              text-xs xs:text-sm"
            >
              {currency}
              {product.price}
            </p>
          </div>

          <div onClick={(e) => e.stopPropagation()}>
            {!cartItems[product._id] ? (
              <button
                className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 
                rounded text-indigo-600 font-medium
                w-[60px] xs:w-[70px] sm:w-[80px] h-[28px] xs:h-[32px] sm:h-[34px]
                text-xs xs:text-sm"
                onClick={() => addToCart(product._id)}
              >
                <img
                  src={assets.cart_icon}
                  alt="cart"
                  className="w-3 xs:w-3.5"
                />
                Add
              </button>
            ) : (
              <div
                className="flex items-center justify-center gap-2 
                bg-indigo-500/25 rounded select-none
                w-[70px] xs:w-[80px] sm:w-[90px] h-[28px] xs:h-[32px] sm:h-[34px]"
              >
                <button
                  onClick={() => removeCartItem(product._id)}
                  className="cursor-pointer h-full px-1 xs:px-2"
                >
                  -
                </button>
                <span className="w-5 text-center text-xs xs:text-sm">
                  {cartItems[product._id]}
                </span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="cursor-pointer h-full px-1 xs:px-2"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {/* People Watching - Attraction Feature */}
        <div className="mt-2 flex items-center gap-1 text-xs xs:text-sm text-gray-500">
          <div className="relative flex items-center">
            <div className="relative flex -space-x-1.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-indigo-200 border border-white"
                ></div>
              ))}
            </div>
          </div>
          <span>{peopleWatching} people are watching this product</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
