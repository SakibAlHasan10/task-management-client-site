import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = ({ children }) => {
  return (
    <div className="border rounded-lg">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          height={50}
          style={{ zIndex: "0" }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {children?.slice(0, 3).map((sl) => (
            <SwiperSlide key={sl._id}>
              <img
                src={sl?.photo}
                alt=""
                className="h-[70vh] z-0 w-full rounded-lg"
              />
              <div className=" bg-[#ffffff62] p-6 rounded-xl absolute top-6 lg:top-16 right-10 md:right-20 text-black  z-20">
                <p className="text-3xl  font-bold">{sl.brand}</p>
                <h2 className="text-2xl md:text-3xl lg:text-5xl my-6 text-red-600 font-bold">
                  {sl.name}
                </h2>
                <p className="text-base md:w-80 ">{sl.description}</p>
                <p className="text-red-600 mt-4 font-bold text-2xl">
                  ${sl.price}.00
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
Slider.propTypes = {
  children: PropTypes.array,
};
export default Slider;
