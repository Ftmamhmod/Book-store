import { useLocation } from "react-router-dom";
import { HeadLinks } from "../../../Utils/Interfaces";
import SecondaryHeroSection from "../../Components/SecondaryHeroSection/SecondaryHeroSection";
import CartSection from "../../Components/CartSection/CartSection";

export default function Cart() {
  const { pathname } = useLocation();
  const headLinks: HeadLinks[] = [
    {
      name: "Home",
      path: "/dashboard/home",
    },
    {
      name: "Cart",
      path: pathname,
    },
  ];

  return (
    <>
      <SecondaryHeroSection headLinks={headLinks} />
      <CartSection />
    </>
  );
}
