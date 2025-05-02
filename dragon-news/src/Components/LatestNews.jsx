import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-4 mt-3 font-semibold bg-base-200 text-xl">
        <button className="btn btn-secondary mr-3 text-lg">Latest</button>
        <Marquee pauseOnHover={true} speed={50}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          necessitatibus ut exercitationem aliquam pariatur nulla sapiente
          laborum ad molestiae, ipsam nesciunt temporibus labore laudantium
          distinctio reiciendis eligendi minima modi aspernatur eveniet. Eius
          officia quod, consequatur reiciendis non deserunt atque alias odit
          neque amet perspiciatis repudiandae, illum dolores! Officiis,
          doloremque vel.
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
