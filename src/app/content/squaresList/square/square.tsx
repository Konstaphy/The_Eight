import React from "react";
import {Draggable} from "react-beautiful-dnd";

interface SquareProps {
  number: number;
  index: number;
}

const Square: React.FC<SquareProps> = (props) => {
  function getStyle(style: any, snapshot: any) {
    if (!snapshot.isDropAnimating) {
      return style;
    }

    // patching the existing style
    return {
      ...style,
      transition: "all 1s ease",
    };
  }
  return (
    <Draggable draggableId={props.number.toString()} index={props.index} key={props.number.toString()}>
      {(provided, snap) => (
        <li
          className="content__item"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          style={getStyle(provided.draggableProps.style, snap)}
        >
          {props.number}
        </li>
      )}
    </Draggable>
  );
};

export default Square;