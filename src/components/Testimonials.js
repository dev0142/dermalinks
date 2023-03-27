import React from "react";
import visitUs from "../photos/visitUs.jpg";
import image1 from "../photos/image1.jpg";
import image2 from "../photos/image2.jpg";
import docpic from "../photos/docpic.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider } from "@mui/material";
import { Avatar } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Testimonials() {
  const testimonials = [
    {
      testiBy: "Geeta Bhandari",
      testiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit sed mauris euismod aliquam. Aenean augue velit, iaculis id ligula a, pret",
      testiImage: "",
    },
    {
      testiBy: "Priyaa rawat",
      testiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit sed mauris euismod aliquam. Aenean augue velit, iaculis id ligula a, pret",
      testiImage: "",
    },
    {
      testiBy: "Mohit",
      testiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit sed mauris euismod aliquam. Aenean augue velit, iaculis id ligula a, pret",
      testiImage: "",
    },
    {
      testiBy: "Anjali Bisht",
      testiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit sed mauris euismod aliquam. Aenean augue velit, iaculis id ligula a, pret",
      testiImage: "",
    },
    {
      testiBy: "Anjali Bisht",
      testiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit sed mauris euismod aliquam. Aenean augue velit, iaculis id ligula a, pret",
      testiImage: "",
    },
  ];
  return (
    <>
      <div className="docServicesText">
        <h2
          style={{
            textAlign: "center",
            fontWeight: "400",
            margin: "30px 0px 10px 0px",
          }}
        >
          Testimonials
        </h2>
        <h1
          style={{ textAlign: "center", fontWeight: "500", margin: "2px 0px" }}
        >
          What people say about us
        </h1>
        <Divider
          sx={{
            width: "15%",
            margin: "10px auto",
            border: "2px solid black",
            borderRadius: "50%",
            "@media (max-width: 990px)": {
              width: "55%",
            },
          }}
        />
      </div>
      <div className="testimonials">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          loop={false}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
        >
          {testimonials.map((item, index) => {
            return (
              <SwiperSlide>
                <div className="main">
                  <div className="Client-Card" style={{ display: "flex" }}>
                    <Avatar
                      imgProps={{ style: { borderRadius: "50%" } }}
                      className="avatar"
                      src={item.testiImage}
                    />
                    <p style={{ marginTop: 25 }}>
                      <span>&ldquo;</span>
                      {item.testiDesc}
                    </p>
                    <p>
                      <span className="Name">{item.testiBy}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Testimonials;
