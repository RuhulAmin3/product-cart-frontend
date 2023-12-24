import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import logo from "../assets/images/logo.png";
import { addSearchText } from "../redux/features/products/products.slice";
import ShoppingCart from "../assets/icons/ShoppingCart";
import LogOutIcon from "../assets/icons/LogoutIcon";
import { getUserInfo, removeFromLocalStorage } from "../utils";
import toast from "react-hot-toast";

const Header = () => {
  const { cartLength } = useAppSelector((state) => state?.cart) || {};
  const { userId } = getUserInfo() || {};
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    dispatch(addSearchText(value));
  };

  const handleLogout = () => {
    removeFromLocalStorage("accessToken");
    toast.success("user logout successfully");
    navigate("/");
  };

  return (
    <>
      <header className="text-gray-800 p-4 py-4 shadow-header-shadow sticky top-0 z-50 bg-white">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link to={"/products"} className="font-bold text-lg">
              <img src={logo} alt="classic it" className=" h-10  md:h-12" />
            </Link>
          </div>
          <div className="flex-grow text-center mx-4">
            <input
              onChange={(e) => handleChange(e.target.value)}
              type="text"
              placeholder="Search by title or category..."
              className="w-full md:w-1/2 p-2 bg-white text-gray-800 border border-gray-200 outline-none focus:border-primary round-sm"
            />
          </div>
          <Link
            to="/"
            className="cursor-pointer relative mr-5 hover:text-primary"
          >
            Login
          </Link>
          <Link to="/carts" className="cursor-pointer relative mr-5">
            <ShoppingCart />
            <p className="absolute -top-2 -right-2 z-10 h-4 w-4 rounded-full bg-primary flex items-center justify-center text-white text-xs">
              {cartLength}
            </p>
          </Link>
          {userId && (
            <span onClick={() => handleLogout()} className="cursor-pointer">
              {" "}
              <LogOutIcon />
            </span>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
