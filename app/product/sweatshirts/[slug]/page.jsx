"use client";
import {useParams } from "next/navigation";
import ProductDetails from "@/components/Product/Product";
import { useRouter } from "next/navigation";
import { addItem, clearCart } from "@/redux/features/Cartslice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import NotFound from "../../not-found";
import fetchProduct from "@/actions/getProduct";
import ProductLoadingSkeleton from "@/components/skeletons/ProductSkeleton";
import checkPinAvailability from "@/actions/getPincode";

function Product({ params }) {
  const pathname = useParams();
  const router = useRouter();
  const [pin, setPin] = useState();
  const dispatch = useDispatch();
  const [ServiceAvailability, setServiceAvailability] = useState();
  const { slug } = pathname;

  const onchangePin = (e) => {
    setPin(e.target.value);
  };

  const checkServiceAvailability = async () => {
    const data = await checkPinAvailability(pin);
    if (data==="Success") {
      setServiceAvailability(true);
    }
    else if (data==="Error") {
      setServiceAvailability(false);
    }
  }

  useEffect(() => {
    const fetchProductThroughServer = async () => {
      try {
        const slug = params.slug
        const data = await fetchProduct(slug,"sweatshirts");
        setVariants(data.Variants);
        setColor(data.Color);
        setSize(data.Size);
        setWrongSlug(data.wrongSlug);
        setProductSlug(data.ProductSlug);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchProductThroughServer();
  }, []);

  const [variants, setVariants] = useState({});
  const [productSlug, setProductSlug] = useState({});
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [loading, setLoading] = useState(true); 
  const [wrongSlug, setWrongSlug] = useState(false);

  const refreshVariant = (newsize, newcolor) => {
    let url = `/product/sweatshirts/${variants[newcolor][newsize]["slug"]}`;
    router.push(url);
  };

  const { slug: ProductSlug, name, Price, discountedPrice, color: ProductColor, size: ProductSize, imageUrl: ProductImageUrl } = productSlug;

  const handleCart = () => {
    const item = {
      id: ProductSlug,
      name: name,
      price: Price,
      discountedPrice: discountedPrice,
      color: ProductColor,
      size: ProductSize,
      image: ProductImageUrl,
      quantity: 1,
    };
  
    dispatch(addItem({ product: item }));
  };
  
  const handleBuyNow = () => {
    const item = {
      id: ProductSlug,
      name: name,
      price: Price,
      discountedPrice: discountedPrice,
      color: ProductColor,
      size: ProductSize,
      image: ProductImageUrl,
      quantity: 1,
    };
  
    dispatch(clearCart());
    dispatch(addItem({ product: item }));
    router.push("/checkout");
  };

  if (wrongSlug==true) {
    return <NotFound />
  }

  if (loading) {
    return <ProductLoadingSkeleton theme={"light"} />
  }

  return (
    <ProductDetails
      productSlug={productSlug}
      size={size}
      color={color}
      variants={variants}
      loading={loading}
      wrongSlug={wrongSlug}
      onChangePin={onchangePin}
      checkServiceAvailability={checkServiceAvailability}
      serviceAvailability={ServiceAvailability}
      handleBuyNow={handleBuyNow}
      handleCart={handleCart}
      refreshVariant={refreshVariant}
    />
  );
}

export default Product;
