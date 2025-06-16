import { useLocation } from "react-router-dom";
import { HeadLinks } from "../../../Utils/Interfaces";
import SecondaryHeroSection from "../../Components/SecondaryHeroSection/SecondaryHeroSection";
import ShopMainSection from "../../Components/ShopMainSection/ShopMainSection";

export default function Shop() {
  const { pathname } = useLocation();

  const headLinks: HeadLinks[] = [
    {
      name: "Home",
      path: "/dashboard/home",
    },
    {
      name: "Products",
      path: pathname,
    },
  ];

  return (
    <>
      <SecondaryHeroSection headLinks={headLinks} />
      <ShopMainSection />
    </>
  );
}
