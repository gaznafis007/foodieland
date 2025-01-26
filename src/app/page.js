import Categories from "@/components/Categories/Categories";
import ContactUs from "@/components/ContactUs/ContactUs";
import FeaturedRecipes from "@/components/FeaturedRecipes/FeaturedRecipes";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Recipes from "@/components/Recipes/Recipes";
import Reviews from "@/components/Reviews/Reviews";


export default function Home() {
  return (
    <div>
      <Header/>
      <Categories/>
      <Recipes/>
      <Hero/>
      <Reviews/>
      <FeaturedRecipes/>
      <ContactUs/>
    </div>
  );
}
