import home1 from "../../assets/images/banner_home1.png";
import home2 from "../../assets/images/banner_home2.png";
import home3 from "../../assets/images/banner_home3.png";
import home4 from "../../assets/images/banner_box4.jpg";
import home5 from "../../assets/images/banner_box5.jpg";

const HomeSlider = () => {
  return (
    <>
      <div className="mb-7 grid grid-cols-12  ">
        <div className=" col-span-8 ">
          <swiper-container loop={true}>
            <swiper-slide>
              <img src={home1} alt="" />
              <img src={home4} alt="" className="w-full" />
            </swiper-slide>
            <swiper-slide>
              <img src={home2} alt="" />
              <img src={home5} alt="" className="w-full" />
            </swiper-slide>
            <swiper-slide>
              <img src={home1} alt="" />
              <img src={home4} alt="" className="w-full" />
            </swiper-slide>
          </swiper-container>
        </div>
        <div className="col-span-4 h-1/2">
          <img src={home3} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
