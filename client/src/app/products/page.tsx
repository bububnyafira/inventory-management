"use client";

import { useCreateProductMutation, useGetProductsQuery } from "../state/api";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Header from "../(components)/Header";
import Rating from "../(components)/Rating";
import CreateProductModal from "./CreateProductModal";
import Image from "next/image";
import React from "react";

type ProductFromData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
}

const page = () => {
  return <div>page</div>;
};

export default page;
