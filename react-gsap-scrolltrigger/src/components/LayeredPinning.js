/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/scrollReveal.css";
export default function LayeredPinning() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel"),
      scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=200%",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
      });
    });

    // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col text-center h-[10rem] bg-blue-400  text-xl py-10">
        <div>
          <h1>Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down
            <div className="arrow" />
          </div>
        </div>
      </div>

      <section class="panel bg-red-600">ONE</section>
      <section class="panel bg-orange-600">TWO</section>
      <section class="panel bg-purple-600">THREE</section>
      <section class="panel bg-green-600">FOUR</section>

      <header>
        <a href="https://greensock.com/scrolltrigger">
          <img
            className="greensock-icon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width={200}
            height={64}
          />
        </a>
      </header>
    </div>
  );
}
