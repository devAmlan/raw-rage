"use client";
import React, { useState } from "react";
import { User } from "@/utils/schema";
import { db } from "@/utils/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { useCartStore } from "@/app/store/useCart";

const initialState = {
  utrId: "",
};

const FormError = ({ message }) => (
  <div className="flex justify-start items-center gap-2">
    <AlertCircle size={14} className="text-red-500" />
    <p className="text-red-500 text-sm">{message}</p>
  </div>
);

function Payment() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialState);

  const { totalPrice, clearCart } = useCartStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const saveInDatabase = async ({ utrId, price }) => {
    try {
      await db.insert(User).values({
        utrId,
        price,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      clearCart();
      setFormData(initialState);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.utrId) newErrors.utrId = "UTR ID is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <main className="min-h-screen flex justify-center items-center max-w-7xl md:mx-auto mx-5">
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold">
            Please confirm your payment by entering UTR number
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <Label htmlFor="utrId">Enter UTR number</Label>
              <Input
                id="utrId"
                name="utrId"
                value={formData.utrId}
                placeholder="Your Payment UTR number"
                onChange={handleChange}
              />
              {errors.utrId && <FormError message={errors.utrId} />}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={handleSubmit}
            >
              Confirm Payment
            </button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default Payment;
