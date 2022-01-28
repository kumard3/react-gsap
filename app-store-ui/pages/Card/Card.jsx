import * as React from "react";
import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useInvertedBorderRadius } from "../../utils/use-inverted-border-radius";

import { ContentPlaceholder } from "./ContentPlaceholder.jsx";
import { Title } from "./Title.jsx";
import { Image } from "./Image.jsx";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "../../utils/use-scroll-constraints";
import { useWheelScroll } from "../../utils/use-wheel-scroll";

const dismissDistance = 10;

// export const Card = (
//   ({
//     isSelected,
//     id,
//     title,
//     category,
//     history,
//     pointOfInterest,
//     backgroundColor,
//   }) => 
//   {
//     const y = useMotionValue(0);
//     const zIndex = useMotionValue(isSelected ? 2 : 0);

//     // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
//     const inverted = useInvertedBorderRadius(20);

//     // We'll use the opened card element to calculate the scroll constraints
//     const cardRef = useRef(null);
//     const constraints = useScrollConstraints(cardRef, isSelected);

//     function checkSwipeToDismiss() {
//       y.get() > dismissDistance && history.push("/");
//     }

//     function checkZIndex(latest) {
//       if (isSelected) {
//         zIndex.set(2);
//       } else if (!isSelected && latest.scaleX < 1.01) {
//         zIndex.set(0);
//       }
//     }

//     // When this card is selected, attach a wheel event listener
//     const containerRef = useRef(null);
//     useWheelScroll(
//       containerRef,
//       y,
//       constraints,
//       checkSwipeToDismiss,
//       isSelected
//     );

//     return (
//       <li ref={containerRef} className={`card`}>
//         <h1 style={{ color: "white" }}>helo</h1>

//         <Overlay isSelected={isSelected} />
//         <div className={`card-content-container ${isSelected && "open"}`}>
//           <motion.div
//             ref={cardRef}
//             className="card-content"
//             style={{ ...inverted, zIndex, y }}
//             layoutTransition={isSelected ? openSpring : closeSpring}
//             drag={isSelected ? "y" : false}
//             dragConstraints={constraints}
//             onDrag={checkSwipeToDismiss}
//             onUpdate={checkZIndex}
//           >
//             <Image
//               id={id}
//               isSelected={isSelected}
//               pointOfInterest={pointOfInterest}
//               backgroundColor={backgroundColor}
//             />
//             <Title title={title} category={category} isSelected={isSelected} />
//             <ContentPlaceholder />
//           </motion.div>
//         </div>
//         {!isSelected && <Link to={id} className={`card-open-link`} />}
//       </li>
//     );
//   },
//   (prev, next) => prev.isSelected === next.isSelected
// );

export default function Card ({
  isSelected,
  id,
  title,
  category,

  pointOfInterest,
  backgroundColor,
})  {
  const router = useRouter()
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);

  // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
  const inverted = useInvertedBorderRadius(20);

  // We'll use the opened card element to calculate the scroll constraints
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  function checkSwipeToDismiss() {
    y.get() > dismissDistance && router.push("/");
  }

  function checkZIndex(latest) {
    if (isSelected) {
      zIndex.set(2);
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }

  // When this card is selected, attach a wheel event listener
  const containerRef = useRef(null);
  useWheelScroll(
    containerRef,
    y,
    constraints,
    checkSwipeToDismiss,
    isSelected
  );

  return (
    <li ref={containerRef} className={`card`}>
      <h1 style={{ color: "white" }}>helo</h1>

      <Overlay isSelected={isSelected} />
      <div className={`card-content-container ${isSelected && "open"}`}>
        <motion.div
          ref={cardRef}
          className="card-content"
          style={{ ...inverted, zIndex, y }}
          layoutTransition={isSelected ? openSpring : closeSpring}
          drag={isSelected ? "y" : false}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}
          onUpdate={checkZIndex}
        >
          <Image
            id={id}
            isSelected={isSelected}
            pointOfInterest={pointOfInterest}
            backgroundColor={backgroundColor}
          />
          <Title title={title} category={category} isSelected={isSelected} />
          <ContentPlaceholder />
        </motion.div>
      </div>
      {/* {!isSelected && <a href={id} className={`card-open-link`} />} */}
    </li>
  );
}
const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    <a href="/" />
  </motion.div>
);
