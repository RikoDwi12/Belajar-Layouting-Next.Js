import React from "react";
import ProductCard from "./ProductCard";

type ProductListProps = {
  Products: {
    id: number;
    nama: string;
    deskripsi: string;
    imageURL: string;
  }[];
  onDeleteProduct: (id: number) => void;
  onEditeProduct: (id: any, data: any) => void;
};

const ProductList: React.FC<ProductListProps> = ({
  Products,
  onDeleteProduct,
  onEditeProduct,
}) => {
  return (
    <div className="mx-[16px] lg:mx-[64px] py-[10px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            nama={product.nama}
            deskripsi={product.deskripsi}
            imageURL={product.imageURL}
            onDeleteProduct={onDeleteProduct}
            onEditeProduct={onEditeProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
