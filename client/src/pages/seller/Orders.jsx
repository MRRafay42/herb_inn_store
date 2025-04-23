// import React, { useEffect, useState } from "react";
// import { useAppContext } from "../../context/AppContext";
// import { assets } from "../../assets/assets";
// import toast from "react-hot-toast";

// const Orders = () => {
//   const { currency, axios } = useAppContext();

//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const { data } = await axios.get("/api/order/seller");
//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);
//   return (
//     <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
//       <div className="md:p-10 p-4 space-y-4">
//         <h2 className="text-lg font-medium">Orders List</h2>
//         {orders.map((order, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:grid md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300 "
//           >
//             <div className="flex gap-5 max-w-80">
//               <img
//                 className="w-12 h-12 object-cover "
//                 src={assets.box_icon}
//                 alt="boxIcon"
//               />
//               <div>
//                 {order.items.map((item, index) => (
//                   <div key={index} className="flex flex-col">
//                     <p className="font-medium">
//                       {item.product.name}{" "}
//                       <span className="text-primary">x {item.quantity}</span>
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="text-sm md:text-base text-black/60">
//               <p className="text-black/80">
//                 {order.address.firstName} {order.address.lastName}
//               </p>
//               <p>
//                 {order.address.street}, {order.address.city}
//               </p>
//               <p>
//                 {order.address.state},{order.address.zipcode}
//                 {order.address.country}
//               </p>
//               <p></p>
//               <p>{order.address.phone}</p>
//             </div>

//             <p className="font-medium text-lg my-auto ">
//               {currency}
//               {order.amount}
//             </p>

//             <div className="flex flex-col text-sm md:text-base text-black/60">
//               <p>Method: {order.paymentType}</p>
//               <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//               <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Orders;

//////////////////new changes //

import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Orders = () => {
  const { currency, axios } = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/seller");
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Calculate total sales
  const calculateTotalSales = () => {
    return orders.reduce((total, order) => total + order.amount, 0);
  };

  // Group orders by date
  const groupOrdersByDate = () => {
    const grouped = {};

    orders.forEach((order) => {
      const date = new Date(order.createdAt);
      // Format as "Day, Month Date, Year" (e.g., "Monday, April 23, 2023")
      const dateKey = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(order);
    });

    return grouped;
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const groupedOrders = groupOrdersByDate();

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-4 space-y-8">
        <h2 className="text-lg font-medium">Orders List</h2>

        {Object.keys(groupedOrders).length > 0 ? (
          Object.entries(groupedOrders).map(([date, dateOrders]) => (
            <div key={date} className="space-y-4">
              <div className="sticky top-0 bg-white py-2 z-10">
                <h3 className="text-lg font-semibold">{date}</h3>
                <p className="text-sm text-gray-500">
                  {dateOrders.length} order{dateOrders.length !== 1 ? "s" : ""}
                </p>
              </div>

              {dateOrders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-col md:grid md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300"
                >
                  <div className="flex gap-5 max-w-80">
                    <div>
                      {order.items.map((item, index) => (
                        <div key={index} className="flex flex-col">
                          <img
                            src={item.product.image[0]}
                            alt=""
                            className="w-16 h-16"
                          />
                          <p className="font-medium">
                            {item.product.name}{" "}
                            <span className="text-primary">
                              x {item.quantity}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm md:text-base text-black/60">
                    <p className="text-black/80">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <p>
                      {order.address.street}, {order.address.city}
                    </p>
                    <p>
                      {order.address.state}, {order.address.zipcode}
                      {order.address.country}
                    </p>
                    <p></p>
                    <p>{order.address.phone}</p>
                  </div>

                  <p className="font-medium text-lg my-auto">
                    {currency}
                    {order.amount}
                  </p>

                  <div className="flex flex-col text-sm md:text-base text-black/60">
                    <p>Method: {order.paymentType}</p>
                    <p>
                      Time: {new Date(order.createdAt).toLocaleTimeString()}
                    </p>
                    <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}

        {/* Total Sales Section */}
        {orders.length > 0 && (
          <div className="flex justify-end mt-6">
            <div className="p-5 max-w-4xl rounded-md bg-gray-100">
              <p className="font-bold text-lg">
                Total Sales: {currency}
                {calculateTotalSales()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
