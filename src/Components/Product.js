import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import BreadCrum from './BreadCrum/BreadCrum';
import ProductDisplay from './ProductDisplay/ProductDisplay';
import DescriptionBox from './DescriptionBox/DescriptionBox';
import RelatedProduct from './RelatedProduct/RelatedProduct';
import all_product  from './Assets/all_product';
const Product = () => {
  // const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay  product={product}/>
    <DescriptionBox/>
    <RelatedProduct />
    </div>
  );
};

export default Product;
