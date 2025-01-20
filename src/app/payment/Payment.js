"use client";
import React, { useState } from "react";
import { User } from "@/utils/schema";
import { db } from "@/utils/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  CircleChevronRight,
  CircleChevronLeft,
  Info,
} from "lucide-react";
import { useCartStore } from "@/app/store/useCart";
import qrCode from "../../../public/assets/qr-code.jpg";
import Image from "next/image";

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
  const [step, setStep] = useState(1);
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

  const onChangeStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const stepContainer = {
    1: (
      <>
        <CardContent className="flex flex-col gap-4">
          <Image src={qrCode} className="w-full h-80" alt="qr-code" />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </CardContent>
      </>
    ),
    2: (
      <>
        <CardContent className="flex flex-col">
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <Label
                htmlFor="utrId"
                className="flex justify-start items-center gap-2"
              >
                <span>Enter UTR number</span>
                <Info size={16} className="cursor-pointer" />
              </Label>
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
      </>
    ),
  };
  return (
    <main className="min-h-screen flex justify-center items-center flex-col max-w-7xl md:mx-auto mx-5">
      <Card>
        <CardHeader>
          <div className="w-full flex justify-start items-start gap-1 text-gray-600">
            <CircleChevronLeft
              className="cursor-pointer"
              onClick={() => onChangeStep(1)}
            />
            <CircleChevronRight
              className="cursor-pointer"
              onClick={() => onChangeStep(2)}
            />
          </div>
          <CardTitle className="text-base font-bold">
            {step === 1
              ? "Please Scan the QR code or pay on this UPI ID"
              : "Please confirm your payment by entering UTR number"}
          </CardTitle>
        </CardHeader>
        {stepContainer[step]}
      </Card>
    </main>
  );
}

export default Payment;
