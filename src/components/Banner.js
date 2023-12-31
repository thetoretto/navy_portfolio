import React from "react";

//images
import Image from "../assets/avatar.svg";
//icons
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagramSquare,
  FaMediumM,
} from "react-icons/fa";
//type animation

import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home">
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12">
          {/* text  */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] font-bold leading-[0.8] lg:text-[80px]">
              Greetings Mavericks!
              {/* <span></span> */}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 text-[40px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]">
              <span className="mr-4"> I am a</span>
              <TypeAnimation
                sequence={[
                  "tech Entousiast",
                  2000,
                  "project Cordinator ",
                  2000,
                  "solution architect ",
                  2000,
                  "Founder",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 max-w-lg mx-auto lg:mx-1">
              Fueling my insatiable tech obsession, one exhilarating project at
              a time as a dedicated Tech Enthusiast.{" "}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me </button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials  */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto
                        lg:mx-0">
              <a href="https://github.com/thetoretto">
                <FaGithub />
              </a>
              {/* -------------------------- */}
              <a href="https://www.linkedin.com/in/munyangabe-yvan-536b81150/">
                <FaLinkedinIn />
              </a>
              {/* -------------------------- */}
              <a href="https://www.instagram.com/n.vv.y/">
                <FaInstagramSquare />
              </a>
              {/* -------------------------- */}
              <a href="https://medium.com/@munyangabeY">
                <FaMediumM />
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482]">
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
