import Categories from "@/components/Categories/Categories";
import ContactUs from "@/components/ContactUs/ContactUs";
import FeaturedRecipes from "@/components/FeaturedRecipes/FeaturedRecipes";
import Hero from "@/components/Hero/Hero";
import Reviews from "@/components/Reviews/Reviews";


export default function Home() {
  return (
    <div>
      <Categories/>
      <Hero/>
      <Reviews/>
      <FeaturedRecipes/>
      <ContactUs/>
    </div>
  );
}
