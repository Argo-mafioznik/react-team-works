import React, { useContext, useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/";
import ProductsList from "../../components/ProductsList";
import ProductsPagination from "../../components/ProductsPagination";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";

import HeroImg from "../../assets/images/hero.jpeg";
import HeroImg2 from "../../assets/images/hero2.jpeg";
import HeroImg3 from "../../assets/images/hero3.jpeg";
import HeroImg4 from "../../assets/images/hero4.jpeg";
import HeroImg5 from "../../assets/images/hero5.jpeg";
import HeroImg6 from "../../assets/images/hero6.jpeg";

import video from "../../assets/Video/muzey.mp4";
import scryp from "../../assets/Video/scryp.mp4";

export default function MainPage() {
  const { products, fetchProducts, total } = useContext(storeContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(page - 1);
  }, [page]);

  const heroSlider = [
    { src: HeroImg, title: "hero" },
    { src: HeroImg2, title: "hero2" },
    { src: HeroImg3, title: "hero3" },
    { src: HeroImg4, title: "hero4" },
    { src: HeroImg5, title: "hero5" },
    { src: HeroImg6, title: "hero6" },
  ];

  return (
    <MainLayout>
      {/* <div>
        <video controls>
          <source src={scryp} />
        </video>
      </div> */}
      <HeroSlider slider={heroSlider} />
      <ProductsList products={products} />
      <ProductsPagination
        setPage={setPage}
        page={page}
        count={Math.ceil(total / 4)}
      />
      <iframe
        width="50%"
        height="500"
        src="https://www.youtube.com/embed/x6m1ZRDTP70"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      {/* <div>
        <video controls>
          <source src={video} />
        </video>
      </div> */}
    </MainLayout>
  );
}
