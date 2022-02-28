import React from "react";
import {Draggable} from "react-beautiful-dnd";

interface SquareProps {
  number: number;
  index: number;
}

const Square: React.FC<SquareProps> = (props) => {
  return (
    <Draggable draggableId={props.number.toString()} index={props.index} key={props.number.toString()}>
      {(provided) => (
        <li
          className="content__item"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {props.number}
        </li>
      )}
    </Draggable>
  );
};

export default Square;