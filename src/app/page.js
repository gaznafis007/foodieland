import Categories from "@/components/Categories/Categories";
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
    </div>
  );
}
