import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist((set) => ({
    items: [],
    totalItems: 0,
    totalPrice: 0,

    addToCart: (product) =>
      set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id);

        if (existingItem) {
          const updatedItems = state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          return {
            items: updatedItems,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          };
        }

        return {
          items: [...state.items, { ...product, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price,
        };
      }),

    removeFromCart: (productId) =>
      set((state) => {
        const item = state.items.find((item) => item.id === productId);
        if (!item) return state;

        return {
          items: state.items.filter((item) => item.id !== productId),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price * item.quantity,
        };
      }),

    updateQuantity: (productId, quantity) =>
      set((state) => {
        const item = state.items.find((item) => item.id === productId);
        if (!item) return state;

        const quantityDiff = quantity - item.quantity;
        const updatedItems = state.items.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        );

        return {
          items: updatedItems,
          totalItems: state.totalItems + quantityDiff,
          totalPrice: state.totalPrice + item.price * quantityDiff,
        };
      }),

    clearCart: () =>
      set({
        items: [],
        totalItems: 0,
        totalPrice: 0,
      }),
  }))
);
