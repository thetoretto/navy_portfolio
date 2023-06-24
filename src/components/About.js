import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10n lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ oncuechange: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ oncuechange: false, amount: 0.3 }}
            className="flex-1">
            <h2 className="h2 text-accent">about me.</h2>
            <h3 className="h3 mb-0">
              i'm a Freelance front-end Developer with over 5 years of
              experience
            </h3>
            <p className="mb-6">
              Ipsum eu laboris est do. Elit magna incididunt cillum sunt irure
              qui reprehenderit exercitation culpa. Nisi tempor officia in
              mollit officia Lorem aliquip. Eiusmod velit mollit amet elit.
            </p>

            {/* slots */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  year of <br />
                  experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  project <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satistified <br />
                  Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg ">contact me</button>
              <a href="#" className="text-gradient btn-link" />
              My Portfolio
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
