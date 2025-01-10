import React, { ChangeEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "../(components)/Header";

type ProductFromData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProductFromData) => void;
}

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  const labelCssStyle = "block text-sm font-medium text-gray-700";
  const inputCssStyle =
    "block w-full mb-2 p-2 boder-gray-500 boder-2 rounded-md";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 boder w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit} className="mt-5">
          <label htmlFor="productName" className={labelCssStyle}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            className={inputCssStyle}
            required
          />
          {/* STOCK QUANTITY */}
          <label htmlFor="stockQuantity" className={labelCssStyle}>
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            onChange={handleChange}
            value={formData.stockQuantity}
            className={inputCssStyle}
            required
          />
          {/* RATING */}
          <label htmlFor="Rating" className={labelCssStyle}>
            Product Name
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            onChange={handleChange}
            value={formData.rating}
            className={inputCssStyle}
            required
          />

          {/* CREATE ACTIONS */}
          <button
            type="submit"
            className="mt-4 px-4 py-2  bg-blue-500 text-white  rounded hover:bg-blue-700"
          >
            Crete
          </button>
          <button
            onClick={onClose}
            type="button"
            className="ml-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
