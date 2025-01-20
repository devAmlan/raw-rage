"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/useCart";

function RouteProtection({ children, redirectPath = "/" }) {
  const router = useRouter();
  const { items } = useCartStore();
  console.log(items);

  useEffect(() => {
    // Check if items array is empty
    if (items.length === 0) {
      router.push(redirectPath);
    }
  }, [items, redirectPath, router]);

  if (items.length === 0) return;

  return <>{children}</>;
}

export default RouteProtection;
