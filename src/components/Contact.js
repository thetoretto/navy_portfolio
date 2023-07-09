import React from "react";
//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

//icons

import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="Contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ oncuechange: false, amount: 0.3 }}
            className="flex-1">
            <div>
              <h2
                className="text-x1 uppercase font-medium mb-2
               tracking-wide">
                Get in touch
              </h2>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12  text-accent ">
                Let's work <br /> together !
              </h2>
            </div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[40px] gap-x-8 max-w-max mx-auto
                        lg:mx-0">
              <a href="https://www.linkedin.com/in/munyangabe-yvan-536b81150/">
                <FaLinkedin />
              </a>
              {/* -------------------------- */}
              <a href="https://www.instagram.com/n.vv.y/">
                <FaInstagramSquare />
              </a>
              {/* -------------------------- */}
              <a href="https://medium.com/@munyangabeY">
                <FaTwitterSquare />
              </a>
            </motion.div>
          </motion.div>
          {/* form  */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ oncuechange: false, amount: 0.3 }}
            className="flex-1 border rounded-2x1 flex flex-col gap-y-6 
          pb-24 p-6 items-start">
            <input
              className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Names"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent transition-all 
            resize-none mb-12 "
              placeholder="Your message"></textarea>
            <button className="btn btn-lg">send a message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
