import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function BasicTrigger() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".b", {
      x: 400,
      rotation: 360,
      scrollTrigger: {
        trigger: ".b",
        start: "top center",
        end: "top 100px",
        scrub: true,
        markers: true,
        id: "scrub",
      },
    });

    const anim = gsap.to(".c", {
      x: 400,
      rotation: 360,
      duration: 3,
    });

    ScrollTrigger.create({
      trigger: ".c",
      animation: anim,
    });
  }, []);

  console.log(gsap);
  return (
    <div>
      <div class="box a">a</div>
      <div class="box b">b</div>
      <div class="box ghost">c</div>
      <div class="box c">c</div>
    </div>
  );
}
