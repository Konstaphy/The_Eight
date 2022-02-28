import React from "react";
import {Droppable} from "react-beautiful-dnd";
import Square from "./square/square";

interface SquaresListProps {
  setNumbers: (numbers: number[]) => void;
  numbers: number[]
}

export const SquaresList: React.FC<SquaresListProps> = (props) => {
  return (
    <Droppable droppableId={"numbers"}>
      {(provided) => (
        <ul className="content__squares" {...provided.droppableProps} ref={provided.innerRef}>
          {props.numbers.map((num, index) => {
            return (
              <Square number={num} index={index} key={num}/>
            );
          })}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default SquaresList;