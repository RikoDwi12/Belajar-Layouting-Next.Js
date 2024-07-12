"use client";

import React, { useState } from "react";
import { Products as ProductData } from "@/data/product";
import ProductList from "@/components/ProductList";
import ProductCreate from "@/components/ProductCreate";

const Page = () => {
  const [products, setProducts] = useState(ProductData);

  const onCreateProduct = (product: any) => {
    setProducts([
      ...products,
      { id: Math.round(Math.random() * 7777), ...product },
    ]);
  };

  const onDeleteProduct = (id: any) => {
    const updateProduct = products.filter((prod) => {
      return prod.id != id;
    });

    setProducts(updateProduct);
  };

  return (
    <>
      <div className="flex justify-center text-[32px] text-black font-bold">
        INI MERUPAKAN SHOWROOM PENJUALAN MOBIL
      </div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList Products={products} onDeleteProduct={onDeleteProduct} />
    </>
  );
};

export default Page;
