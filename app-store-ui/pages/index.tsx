import React from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./Header.js";
import Item from "./item.js";

import Link from "next/link";
import { useRouter } from "next/router";
// import {items}
import { items } from "./data";
import { motion } from "framer-motion";

// function Card({ id, title, category, theme }:any):any {
//   return (

//   );
// }

// function List() {
//   return (
//     <ul className="card-list">
//       {items.map(card => (
//         <div>

//         </div>
//       ))}
//     </ul>
//   );
// }

// function Store() {
//   const router = useRouter();
//   let id = `c`;
//   console.log(id);
//
//   const test = "/";
//   return (
//     <>
//       <List  />
//       <AnimatePresence>
//         {id && imageHasLoaded && <Item id={id} key="item" />}
//       </AnimatePresence>
//     </>
//   );
// }

export default function App() {
  const [id, setId] = React.useState("");
  // function handler (e) {
  //   return setId()
  // }
  const imageHasLoaded = true;
  React.useEffect(() => {}, [id]);
  console.log(id);
  return (
    <div className="container">
      <Header />
      <ul className="card-list">
        {items.map((n) => {
          return (
            <>
              <li className={`card `} key={n.id} onClick={(e) => setId(n.id)}>
                <div className="card-content-container">
                  <motion.div
                    className="card-content"
                    layoutId={`card-container-${n.id}`}
                  >
                    <motion.div
                      className="card-image-container"
                      layoutId={`card-image-container-${n.id}`}
                    >
                      <img
                        className="card-image"
                        src={`images/${n.id}.jpg`}
                        alt=""
                      />
                    </motion.div>
                    <motion.div
                      className="title-container"
                      layoutId={`title-container-${id}`}
                    >
                      <span className="category">{n.category}</span>
                      <h2>{n.title}</h2>
                    </motion.div>
                  </motion.div>
                </div>
                {/* <a href={n.id} className={`card-open-link`} /> */}
              </li>
            </>
          );
        })}
      </ul>
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </div>
  );
}
