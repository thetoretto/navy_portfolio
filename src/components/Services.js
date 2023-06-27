import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

//services data
const services = [
  {
    name: "tech Entousiast",
    description:
      "Ullamco dolor nisi ea in ea excepteur do anim laboris eiusmo reprehenderit. Sint adipisicing mollit aliqua irure aliqua. Enim ut veniam magna id excepteur cillum culpa officia sunt ea duis nostrud. ",
    link: "Learn more",
  },
  {
    name: "project Cordinator",
    description:
      "Ullamco dolor nisi ea in ea excepteur do anim laboris eiusmo reprehenderit. Sint adipisicing mollit aliqua irure aliqua. Enim ut veniam magna id excepteur cillum culpa officia sunt ea duis nostrud. ",
    link: "Learn more",
  },
  {
    name: "solution architect",
    description:
      "Ullamco dolor nisi ea in ea excepteur do anim laboris eiusmo reprehenderit. Sint adipisicing mollit aliqua irure aliqua. Enim ut veniam magna id excepteur cillum culpa officia sunt ea duis nostrud. ",
    link: "Learn more",
  },
  {
    name: "Product Branding ",
    description:
      "Ullamco dolor nisi ea in ea excepteur do anim laboris eiusmo reprehenderit. Sint adipisicing mollit aliqua irure aliqua. Enim ut veniam magna id excepteur cillum culpa officia sunt ea duis nostrud. ",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="Services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ oncuechange: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What i do .</h2>
            <h3 className="h3 max-w-[455] mb-16">
              i'm a Freelance front-end Developer with over 5 years of
              experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ oncuechange: false, amount: 0.3 }}
            className="flex-1">
            {services.map((service, index) => {
              //destructure service
              const { name, description, link } = service;
              return (
                <div
                  className="border-b border-white/20 h-[145px] mb-[38px] flex"
                  key={index}>
                  <div className="max-w-[476px]">
                    <h4
                      className="text-[20px] tracking-wider 
                    font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center
                    items-center">
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
