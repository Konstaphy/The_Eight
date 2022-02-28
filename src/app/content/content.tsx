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
      const [newNumbers] = numbers.splice(record.source.index, 1);
      numbers.splice(record.destination?.index, 0, newNumbers);
    }
    setNumber(numbers);
  };

  const [numbers, setNumber] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <animated.main style={st} className="content">
      <DragDropContext
        onDragEnd={(record) => {
          onDragEnd(record);
        }}
      >
        <Droppable droppableId={"1"}>
          {(provided) => {
            return (
              <ul className="content__squares" {...provided.droppableProps} ref={provided.innerRef}>
                {numbers.map((num) => {
                  return (
                    <Draggable draggableId={num.toString()} index={num} key={num.toString()}>
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
