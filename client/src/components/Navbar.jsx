import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import herbsinnlogo from "../assets/herbsinn.png";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <>
      {/* Top Bar - Logo and Menu Button */}
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 border-b border-gray-300 bg-white relative">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-30" src={herbsinnlogo} alt="dummyLogoColored" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">All Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <img
              src={assets.search_icon}
              alt="search"
              className="w-4 h-4"
            ></img>
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="w-6 opacity-80"
            ></img>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
              {getCartCount()}
            </button>
          </div>

          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-green-200 transition text-white rounded-full"
            >
              Login
            </button>
          ) : (
            <div className="relative group cursor-pointer ">
              <img src={assets.profile_icon} className="w-10 " alt="avatar" />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-500 py-2.5 w-50 rounded-md text-sm z-40">
                <li className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">
                  Hi!{user.name}, email:{user.email}
                </li>
                <li
                  onClick={() => navigate("my-orders")}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button - Top Right */}
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          <img src={assets.menu_icon} alt="menu"></img>
        </button>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around items-center py-3 z-50">
        <NavLink
          to="/"
          className="flex flex-col items-center text-xs"
          onClick={() => setOpen(false)}
        >
          <img src={assets.home} alt="Home" className="w-6 h-6" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/products"
          className="flex flex-col items-center text-xs"
          onClick={() => setOpen(false)}
        >
          <img src={assets.products} alt="Products" className="w-6 h-6" />
          <span>Products</span>
        </NavLink>
        <div
          onClick={() => {
            navigate("/cart");
            setOpen(false);
          }}
          className="flex flex-col items-center text-xs relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="Cart" className="w-6 h-6" />
          <span>Cart</span>
          {getCartCount() > 0 && (
            <span className="absolute -top-1 right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </div>
        {!user ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="flex flex-col items-center text-xs"
          >
            <img src={assets.profile_icon} alt="Login" className="w-6 h-6" />
            <span>Login</span>
          </button>
        ) : (
          <div
            onClick={logout}
            className="flex flex-col items-center text-xs cursor-pointer"
          >
            <img src={assets.profile_icon} alt="Logout" className="w-6 h-6" />
            <span>Logout</span>
          </div>
        )}
        {user && (
          <NavLink
            to="/my-orders"
            onClick={() => setOpen(false)}
            className="flex flex-col items-center text-xs cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="Products"
              className="w-6 h-6 bg-green-300 rounded-1xl"
            />
            <span>My Orders</span>
          </NavLink>
        )}
      </div>

      {/* Mobile Search Panel - Only shown when toggled */}
      {open && (
        <div className="sm:hidden top-[70px] left-0 right-0 bg-white shadow-md py-4 px-5 z-40">
          <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <img
              src={assets.search_icon}
              alt="search"
              className="w-4 h-4"
            ></img>
          </div>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 p-2 border-b border-gray-200"
          >
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
