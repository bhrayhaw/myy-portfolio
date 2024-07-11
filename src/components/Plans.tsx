// src/components/Plans.tsx
import React from "react";

const Plans: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Economy</h3>
            <p className="text-gray-700 mb-4">£199.00</p>
            <p className="text-gray-500">Basic plan description</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Business</h3>
            <p className="text-gray-700 mb-4">£299.00</p>
            <p className="text-gray-500">Business plan description</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="text-gray-700 mb-4">£399.00</p>
            <p className="text-gray-500">Premium plan description</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Exclusive</h3>
            <p className="text-gray-700 mb-4">£499.00</p>
            <p className="text-gray-500">Exclusive plan description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
