// import React from "react";
// import ProductCard from "./productCard"; // Fixed: `productCard` → `ProductCard` (PascalCase)
// import { useAppContext } from "../context/AppContext";

// const BestSeller = () => {
//   const { products } = useAppContext(); // Fixed: Added parentheses to call the hook
//   return (
//     <div className="mt-16">
//       <p className="text-2xl md:text-3xl font-medium">Best Seller</p>
//       <div
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6
//       lg:grid-cols-5 mt-6"
//       >
//         {products
//           .filter((product) => product.inStock)
//           .slice(0, 5)
//           .map((product, index) => (
//             <ProductCard key={index} product={product} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;

import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div
      id="best-sellers"
      className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 md:mb-8">
        Best Seller
        <div className="w-36 h-0.5 bg-primary rounded-full"></div>
      </p>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8 sm:gap-5 md:gap-6 lg:gap-7">
        {products
          .filter((product) => product.inStock)
          .slice(0, 6)
          .map((product) => (
            <div key={product.id} className="p-1.5 sm:p-3">
              {" "}
              {/* Reduced mobile padding */}
              <ProductCard product={product} className="w-full h-full" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
