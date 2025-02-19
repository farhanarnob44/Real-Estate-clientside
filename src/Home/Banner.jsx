import React from "react";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import * as motion from "motion/react-client"
import { easeOut } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="carousel h-[800px] mb-28  w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div
              className="hero bg-slate-500 text-white  bg-blend-overlay bg-cover"
              style={{
                backgroundImage: `url(${img1})`,
              }}
            >
              <div className=""></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <motion.h1
                    animate={{ y: -30 }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      ease: easeOut,
                      repeat: Infinity,
                    }}
                    className="mb-5 text-6xl text-white font-bold"
                  >
                    New Modern Collection
                  </motion.h1>
                  <motion.p
                    animate={{ y: -30 }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      ease: easeOut,
                      repeat: Infinity,
                    }}
                    className="mb-5 text-xl"
                  >
                    Elegence isn't solely defined by what you wear. It's how you
                    carry yourself .How you speak and what you read!
                  </motion.p>
                  <button className="btn btn-outline text-white border-black border-none hover:bg-[black]">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div
              className="hero bg-slate-500 bg-blend-overlay bg-cover"
              style={{
                backgroundImage: `url(${img2})`,
              }}
            >
              <div className=""></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <motion.h1
                    animate={{ y: -30 }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      ease: easeOut,
                      repeat: Infinity,
                    }}
                    className="mb-5 text-white text-5xl font-bold"
                  >
                    Timeless Beauty
                  </motion.h1>
                  <motion.p
                    animate={{ y: -30 }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      ease: easeOut,
                      repeat: Infinity,
                    }}
                    className="mb-5"
                  >
                    Sparkle and save. enjou our stunning jewelary collection at
                    discounted prices.
                  </motion.p>
                  <button className="btn btn-outline text-white border-black border-none hover:bg-[black]">
                    Shop Now!
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div
              className="hero bg-slate-500 bg-blend-overlay bg-cover"
              style={{
                backgroundImage: `url(${img3})`,
              }}
            >
              <div className=""></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <motion.h1
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 2, delay: 2, ease: easeOut }}
                    className="mb-6 text-white text-5xl font-bold"
                  >
                    Meet The Lines of the Millennium
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 2, delay: 2, ease: easeOut }}
                    className="mb-5"
                  >
                    Fashion is to please your eyes, shapes and proportions are
                    for your intellect. Have an obsession with detailed patern?
                  </motion.p>
                  <button className="btn btn-outline text-white border-black border-none hover:bg-[black]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
