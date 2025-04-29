import React from "react";
import img1 from "../assets/home2.jpg";
import img2 from "../assets/home 3.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/desifn-removebg-preview.png";
// import img5 from "../assets/Screenshot (74).png";
import * as motion from "motion/react-client";
import { easeOut } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* <div className="mt-[-30px] ">
        <div className="carousel h-[1000px] mb-28  w-full">
          <div id="slide1" className="carousel-item relative w-full transition duration-200">
            <div
              className="hero bg-slate-500 text-white  bg-blend-overlay bg-cover h-[-600px]"
              style={{
                backgroundImage: `url(${img1})`,
              }}
            >
              <div className=""></div>
              <div className="mx-auto bg-black bg-opacity-40 p-8 pt-4">
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
          <div id="slide2" className="carousel-item relative w-full transition duration-200">
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
          <div id="slide3" className="carousel-item relative w-full transition duration-200">
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
      </div> */}


      <div className="hero h-[850px]  mb-28 bg-[#EEF7FF] min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <div className="flex-1 ">
            <div className="flex flex-row">
            <motion.img
              src={img3}
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="h-[265px] w-[440px] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            />
            <motion.img
              src={img4}
              animate={{ x: [0, 90, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="mr-[-100px] h-20 mt-40 ml-5 mb-3"
            />
            </div>
            <div className="flex flex-row-reverse gap-0">
              <motion.img
                src={img2}
                animate={{ x: [100, 150, 100] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="h-[265px] w-[440px] ml-7 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
              />
              <motion.img
                src={img4}
                animate={{ y: [0, 65, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="mr-[-100px] h-20 mt-10"
              />
            </div>
          </div>
          <div className="flex-1 font-semibold mr-[300px]">
            <motion.h1
              animate={{ x: 50 }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
              New Modern {" "}
              <motion.span
                animate={{ color: ["red", "blue"] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
              >
                Collection
              </motion.span>{" "}
              for you!
            </motion.h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem quisquam numquam quis excepturi minima magni? Fuga
              suscipit quidem est dolor voluptas nam iusto temporibus numquam,
              doloremque possimus natus, a laborum beatae earum autem dolorem
              impedit consequatur, quam iste deserunt fugit!
            </p>
            <Link to="allProperties" className="btn bg-blue-700 text-white">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
