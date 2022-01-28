import React from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./Header.js";
import Item from "./item.js";

import { items } from "./data";
import { motion } from "framer-motion";
import Card from "./Card/Card.jsx";

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
        {items.map((card) => {
          return (
            <div onClick={() => setId(card.id)}>
              <Card key={card.id} isSelected={id === card.id} {...card} />
            </div>
          );
        })}
      </ul>
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </div>
  );
}
