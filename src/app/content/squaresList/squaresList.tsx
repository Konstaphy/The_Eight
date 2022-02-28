import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Square } from "./square/square";

interface SquaresListProps {
  setNumbers: (numbers: number[]) => void;
  numbers: number[];
}

export const SquaresList: React.FC<SquaresListProps> = (props) => {
  const getSquares = (): JSX.Element[] => {
    return props.numbers.map((num, index) => {
      return <Square number={num} index={index} key={num} />;
    });
  };

  return (
    <Droppable droppableId={"numbers"} direction="horizontal">
      {(provided) => (
        <ul className="content__squares" {...provided.droppableProps} ref={provided.innerRef}>
          {getSquares()}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};
