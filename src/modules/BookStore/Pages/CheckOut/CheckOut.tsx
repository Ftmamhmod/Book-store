import { HeadLinks } from "../../../Utils/Interfaces";
import { useLocation } from "react-router-dom";
import SecondaryHeroSection from "../../Components/SecondaryHeroSection/SecondaryHeroSection";
import CheckOutForm from "../../Components/CheckOutForm/CheckOutForm";

export default function CheckOut() {
  const { pathname } = useLocation();

  const headLinks: HeadLinks[] = [
    {
      name: "Home",
      path: "/book-store/home",
    },
    {
      name: "Cart",
      path: "/book-store/cart",
    },
    {
      name: "Checkout",
      path: pathname,
    },
  ];

  return (
    <>
      <SecondaryHeroSection headLinks={headLinks} />
      <CheckOutForm />
    </>
  );
}
