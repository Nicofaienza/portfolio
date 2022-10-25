import data from "../works/data";
import Card from "../works/Cards";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const CarouselComponent = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((work) => (
          <SwiperSlide key={work.id}>
            <Card work={work} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselComponent;
