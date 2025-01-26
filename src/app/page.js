import Categories from "@/components/Categories/Categories";
import ContactUs from "@/components/ContactUs/ContactUs";
import FeaturedRecipes from "@/components/FeaturedRecipes/FeaturedRecipes";
import Footer from "@/components/Footer/Footer";
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
      <Footer/>
    </div>
  );
}
