import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../styles/scrollReveal.css";
export default function Layeredscroll() {
  useEffect(() => {
    let sections = gsap.utils.toArray(".section3");
    let boxees = gsap.utils.toArray(".boxees_holder");

    gsap.to(boxees, {
      x: () => {
        return (
          -(sections[0].scrollWidth - document.documentElement.clientWidth) +
          "px"
        );
      },
      ease: "none",
      scrollTrigger: {
        trigger: boxees,
        start: () => "-600px",
        end: () => {
          return "+=" + sections[0].scrollWidth;
        },
        scrub: true,
        // pin: '.wrapper',
        markers: true,
        anticipatePin: 1,
      },
    });
  });

  return (
    <>
      {/* <div className="h-[150vh]">
        <BasicTrigger />
      </div>
      <div className="min-h-[100vh]">
        <ScrollReveal />
      </div>   
     <div className="min-h-screen  text-emerald-50">
        <LayeredPinning />
      </div> */}

      {/* <Router>
        <nav className="text-white h-[4.3rem] text-3xl  items-center flex justify-around ">
          <Link to="/">home</Link>
          <Link to="/ScrollReveal">ScrollReveal</Link>
          <Link to="/LayeredPinning">LayeredPinning</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<BasicTrigger />} />
          <Route exact path="/ScrollReveal" element={<ScrollReveal />} />
          <Route exact path="/LayeredPinning" element={<LayeredPinning />} />
        </Routes>
      </Router> */}

      <div className="wrapper">
        <div className="section1">
          <h1>Here is the first section</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="section2">
          <h1>Here is the second section</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="section3">
          <div className="section-heading">Here is the third section</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>

          <div className="boxees_holder">
            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>

            <div className="boxe"></div>
          </div>
        </div>

        <div className="section1">
          <h1>Here is the first section</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}
