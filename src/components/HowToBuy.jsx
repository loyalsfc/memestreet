import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import {HowTo, HowToSecond, HowToThird} from "./HowTo";

export default function HowToBuy() {
  return (
    <section>
        <div className="container mx-auto">
            <h2 className="text-center font-bold text-3xl mb-10 md:text-[50px] text-main-color">How to buy $MS.</h2>
            <p className="text-center text-xl max-w-[700px] mx-auto mb-[56px]">So you want to buy $MS? Great! Simply follow the steps below. If you have any more questions simply send us a message in on Telegram!</p>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <HowTo />
                </SwiperSlide>
                <SwiperSlide>
                    <HowToSecond />
                </SwiperSlide>
                <SwiperSlide>
                    <HowToThird />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  );
}
