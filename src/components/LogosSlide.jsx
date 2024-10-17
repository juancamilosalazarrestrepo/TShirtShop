import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";

import logoDC from "../../public/images/logos/logoDC.png";
import logoMarvel from "../../public/images/logos/marvelLogo.png";
import logoPS from "../../public/images/logos/logoPS.png";
import logoNintendo from "../../public/images/logos/logoNintendo.png";
import logoBandai from "../../public/images/logos/logoBandai.png";
import logoBandaiNamco from "../../public/images/logos/logoBandiNamco.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function LogosSlider() {
  let images = [
    logoMarvel,
    logoPS,
    logoDC,
    logoNintendo,
    logoBandai,
    logoBandaiNamco,
  ];
  return (
    <div className="logoSliderContainer">
      <div className="sm:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          /* breakpoints= {{
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }}*/
        >
          {images
            ? images.map((img, index) => {
                return (
                  <SwiperSlide key={index}>
                    {" "}
                    <Image
                      src={img}
                      height={500}
                      //sizes="(max-width: 640px) 700px , (min-width:1000px) 1920px"
                      // srcset="../../public/images/eficience.jpg x1 , ../../banner2.webp x2 , ../../banneBlog.webp x3"
                      className="w-100"
                      placeholder="blur"
                    />
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      </div>
      <div className="max-sm:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={4}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          /* breakpoints= {{
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }}*/
        >
          {images
            ? images.map((img, index) => {
                return (
                  <SwiperSlide key={index}>
                    {" "}
                    <Image
                      //  isDuplicate={true}
                      src={img}
                      height={500}
                      //sizes="(max-width: 640px) 700px , (min-width:1000px) 1920px"
                      // srcset="../../public/images/eficience.jpg x1 , ../../banner2.webp x2 , ../../banneBlog.webp x3"
                      className="w-100"
                      placeholder="blur"
                    />
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      </div>
    </div>
  );
}
