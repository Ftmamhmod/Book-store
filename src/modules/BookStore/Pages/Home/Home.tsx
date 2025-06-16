import { useDispatch, useSelector } from "react-redux";
import AllBookSlider from "../../Components/AllBookSlider/AllBookSlider";
import BookOfferSection from "../../Components/BookOfferSection/BookOfferSection";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import FeaturedBooks from "../../Components/FeaturedBooks/FeaturedBooks";
import HeroSecion from "../../Components/HeroSecion/HeroSecion";
import { AppDispatch, RootState } from "../../../Store/Store";
import { useEffect } from "react";
import { fetchCategories } from "../../../Store/Slices/CategorySlice";
import NotFound from "../../../Shared/NotFound/NotFound";

export default function Home() {
  const { error: catError } = useSelector(
    (state: RootState) => state.categories
  );
  const { error: bookError } = useSelector((state: RootState) => state.books);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (catError || bookError) return <NotFound />;

  return (
    <>
      <HeroSecion />
      <CategoriesSection />
      <AllBookSlider />
      <FeaturedBooks />
      <BookOfferSection />
    </>
  );
}
