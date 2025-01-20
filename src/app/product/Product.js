import React from "react";
import { products } from "@/app/data/products";
import { ProductCard } from "@/app/components/ProductCard";

function Product() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Unlock Your Full Potential with Premium Steroids and Personalized
          Health Insights
        </h1>
        <p className="text-lg text-gray-600">
          Discover high-quality steroids and Specialized Medical Risk
          Assessments (SMRAs) that empower you to enhance your fitness,
          performance, and overall well-being. Start your journey towards a
          healthier, stronger you today
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Product;
