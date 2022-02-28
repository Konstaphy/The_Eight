import React, { useState } from "react";
import "./content.scss";
import { config, useSpring, animated } from "react-spring";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

export const Content = () => {
  const st = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
    delay: 200,
  });

  const onDragEnd = (record: DropResult) => {
    if (record.destination?.index){
      const items = numbers;
      const [reorderedItems] = items.splice(record.source.index, 1);
      items.splice(record.destination.index, 0, reorderedItems);
      if (items.every((num, index) => num === index))
        console.log("you're right!");
      setNumber(items);
    }
  };

  const [numbers, setNumber] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <animated.main style={st} className="content">
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId={"numbers"}>
          {(provided) => {
            return (
              <ul className="content__squares" {...provided.droppableProps} ref={provided.innerRef}>
                {numbers.map((num, index) => {
                  return (
                    <Draggable draggableId={num.toString()} index={index} key={num.toString()}>
                      {(provided) => (
                        <li
                          className="content__item"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          {num}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>
      </DragDropContext>
    </animated.main>
  );
};
