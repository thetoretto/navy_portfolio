import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadIn } from "../variants";
// image
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="Work">
      <div className="container mx-auto">
        <div>
          {/* ttext  */}
          <div>
            <h2 className="h2 leading-tight text-accent">
              my Latest <br />
              Work.
            </h2>
            <p className="max-w-sm mb-16">
              Amet laborum adipisicing eu aliqua duis officia quis amet velit
              fugiat nostrud anim. Quis duis voluptate aliqua pariatur nisi
              consectetur ex eiusmod et tempor. Sint incididunt aliquip irure
              dolore ad labore cupidatat aliquip excepteur id in qui. Est labore
              laboris minim deserunt cupidatat fugiat consequat minim esse
              laborum in eu aliqua. Veniam laborum id laborum consequat ea
              tempor nisi incididunt ex.
            </p>
          </div>
          {/* Image  */}
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
