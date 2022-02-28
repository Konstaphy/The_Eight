import React, { useState } from "react";
import "./content.scss";
import { animated, config, useSpring } from "react-spring";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import SquaresList from "./squaresList/squaresList";
import { useRandomNumbers } from "../hooks/useRandomNumbers";

export const Content = () => {
  const st = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
    delay: 200,
  });

  const onSuccess = () => {
    console.log("you're right!");
  };

  const reorder = (dest: number, src: number, arr: number[]) => {
    const items = arr;
    const [reorderedItems] = items.splice(src, 1);
    items.splice(dest, 0, reorderedItems);
    return items;
  };

  const onDragEnd = (record: DropResult) => {
    if (record.destination?.index !== undefined) {
      // Updates indexes
      const items = reorder(record.destination?.index, record.source.index, numbers);

      if (items.every((num, index) => num === index)) onSuccess();
      setNumber(items);
    }
  };

  const [numbers, setNumber] = useState(useRandomNumbers());

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <animated.main style={st} className="content">
        <SquaresList setNumbers={setNumber} numbers={numbers} />
      </animated.main>
    </DragDropContext>
  );
};
