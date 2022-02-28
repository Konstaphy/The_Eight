import React, {useState} from "react";
import "./content.scss";
import {animated, config, useSpring} from "react-spring";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import SquaresList from "./squaresList/squaresList";

export const Content = () => {
  const st = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
    delay: 200,
  });

  const onDragEnd = (record: DropResult) => {
    if (record.destination?.index !== undefined){
      const items = [...numbers];
      const [reorderedItems] = items.splice(record.source.index, 1);
      items.splice(record.destination.index, 0, reorderedItems);
      if (items.every((num, index) => num === index))
        console.log("you're right!");
      setNumber(items);
    }
  };

  const [numbers, setNumber] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5) );

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <animated.main style={st} className="content">
        <SquaresList setNumbers={setNumber} numbers={numbers}/>
      </animated.main>
    </DragDropContext>
  );
};
