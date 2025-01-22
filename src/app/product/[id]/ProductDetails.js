"use client";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/app/data/products";
import { ShoppingCart, Check } from "lucide-react";
import { useCartStore } from "@/app/store/useCart";
import ImageSlider from "@/app/components/ImageSlider";

export const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const { addToCart } = useCartStore();

  const product = products.find((p) => p.slug === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="md:flex-shrink-0">
              {product?.images?.length <= 1 ? (
                <img
                  className="h-96 w-full object-cover"
                  src={product.images?.[0]?.src?.src}
                  alt={product.name}
                />
              ) : (
                <ImageSlider images={product.images} />
              )}
            </div>
            <div className="md:px-8 px-4 flex flex-col justify-end">
              <div className="text-sm text-blue-600 font-semibold tracking-wide">
                {product.category}
              </div>
              <h2 className="mt-2 md:text-5xl text-3xl font-bold text-gray-900">
                {product.name}
              </h2>
              <p className="mt-4 md:text-3xl text-2xl text-gray-900 font-bold">
                ₹{product.price.toFixed(2)}
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
              {/* 
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.details.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    addToCart(product);
                    router.push("/cart");
                  }}
                  className="flex items-center justify-center space-x-2 w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
            {/* <h3 className="text-2xl font-semibold">Description</h3>
            <p className="text-base my-4">
              Anavar (oxandrolone) is an anabolic steroid known for its mild
              nature compared to other steroids. It has several potential
              benefits, which include:
            </p> */}
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Dosing Information
              </h2>

              <ul className="list-disc list-inside space-y-2">
                {product?.dosing?.map((dose, index) => (
                  <li key={index}>
                    <span className="font-semibold text-gray-700">
                      {dose?.label}
                    </span>
                    <span className="text-gray-600">{dose.description}</span>
                  </li>
                ))}
                <li>
                  <span className="font-semibold text-gray-700">
                    PCT-Matrix:
                  </span>
                  <span className="text-gray-600"> 2 tablets every day</span>
                </li>
              </ul>
            </div>

            {product?.about &&
              Object.entries(product?.about)?.map(
                ([key, { description, benefits }]) => (
                  <div key={key} className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {key}
                    </h2>
                    <p className="mt-2 text-gray-600">{description}</p>
                    <div className="mt-4 space-y-2">
                      {benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 justify-start"
                        >
                          <div>
                            <div className="flex justify-start items-start gap-2">
                              <Check
                                size={16}
                                className="text-green-500 font-bold"
                              />
                              <h3 className="font-bold text-gray-700">
                                {benefit.label}
                              </h3>
                            </div>

                            <p className="text-gray-500 ml-6">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
