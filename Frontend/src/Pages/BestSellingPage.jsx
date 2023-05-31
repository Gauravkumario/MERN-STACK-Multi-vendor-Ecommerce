// import React from 'react'

// import { useSearchParams } from "react-router-dom";
import Header from "../Components/Layout/Header";
import styles from "../Styles/styles";
import { useEffect, useState } from "react";
import { productData } from "../static/data";
import ProductCard from "../Components/Route/ProductCard/ProductCard";

const BestSellingPage = () => {
  //   const [searchParams] = useSearchParams();
  //   const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);
    // window.scrollTo(0,0)
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:gap-[25px] lg:grid-cols-4 lg-gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {/* {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products found
          </h1>
        ) : null} */}
      </div>
    </div>
  );
};

export default BestSellingPage;
