import Benefits from "@/components/Benefits-section";
import Blog from "@/components/Blog-section";
import Collection from "@/components/Collection-section";
import Contact from "@/components/Contact-section";
import CustomerFavorites from "@/components/CustomerFavorites-section";
import DiscoverProduct from "@/components/DiscoverProduct-section";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero-section";
import Reviews from "@/components/Reviews-section";
import Showcase from "@/components/ShowcaseGrid-section";
import SocialFeed from "@/components/SocialFeed-section";
import SuccessStories from "@/components/SuccessStories-section";
import TopProduct from "@/components/TopProduct-section";
import Champions from "@/components/WellnessChampions-section";


export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-landing-bg overflow-hidden">
      <div className="flex w-full bg-primary text-center py-2">
        <p className="text-white mx-auto text-xs md:text-sm">Sign up and get 20% off to your first order. <span className="font-bold underline">Sign Up Now</span></p>
      </div>

      <Hero />
      <Collection />
      <Reviews />
      <TopProduct />
      <Champions />
      <DiscoverProduct />
      <CustomerFavorites />
      <SuccessStories />
      <Showcase />
      <Benefits />
      <Blog />
      <SocialFeed />
      <Contact />

      <Footer />
    </main>
  );
}
