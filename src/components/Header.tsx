import { Link } from "react-router-dom";
import shoppingCart from "../assets/svg/shoppingCart.svg";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import logo from "../assets/images/logo.png";
import { addSearchText } from "../redux/features/products/products.slice";

const Header = () => {
  const { cartLength } = useAppSelector((state) => state?.cart) || {};
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    dispatch(addSearchText(value));
  };

  return (
    <>
      <header className="bg-blue-300 mb-4 text-gray-800 p-4 py-4">
        <div className="container flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center">
            {/* <img src="/path/to/your/logo.png" alt="Logo" className="h-8 mr-2" /> */}
            <Link to={"/products"} className="font-bold text-lg">
              <img src={logo} alt="classic it" className="h-12" />
            </Link>
          </div>

          {/* Middle - Search bar */}
          <div className="flex-grow text-center mx-4">
            <input
              onChange={(e) => handleChange(e.target.value)}
              type="text"
              placeholder="Search by title or category..."
              className="w-1/2 p-2 rounded-md bg-white text-gray-800 border-2 border-gray-300 outline-none"
            />
          </div>

          {/* Right side - Cart icon */}
          <Link to="/carts" className="cursor-pointer">
            <img
              className="h-[40px] w-[40px]"
              src={shoppingCart}
              alt="shopping cart"
            />
            {cartLength}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
