"use client";
import { products } from "@/app/data/products";
import { ProductCard } from "./components/ProductCard";
import { useRouter } from "next/navigation";
import HeroImageSlider from "./components/HeroImageSlider";
import heroImageOne from "../../public/assets/hero-slide-1.jpg";
import heroImageTwo from "../../public/assets/hero-slide-2.jpg";
import heroImageThree from "../../public/assets/hero-slide-3.jpg";
import heroImageFour from "../../public/assets/hero-slide-4.jpg";

export default function Home() {
  const router = useRouter();
  const heroImages = [
    {
      src: heroImageOne,
      alt: "Slide 1",
    },
    {
      src: heroImageTwo,
      alt: "Slide 2",
    },
    {
      src: heroImageThree,
      alt: "Slide 3",
    },
    {
      src: heroImageFour,
      alt: "Slide 4",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroImageSlider images={heroImages} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">
            Unlock Your Full Potential with Premium Steroids and Personalized
            Health Insights
          </h1>
          <p className="md:text-lg text-base text-gray-600">
            Discover high-quality steroids and Specialized Medical Risk
            Assessments (SMRAs) that empower you to enhance your fitness,
            performance, and overall well-being. Start your journey towards a
            healthier, stronger you today
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.slice(0, 4)?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          <button
            className="flex items-center space-x-1 bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => router.push("/product")}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
