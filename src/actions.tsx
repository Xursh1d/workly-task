import { DraggableLocation } from "react-beautiful-dnd";
import { Column } from "./modules/types";

interface UpdateColumnList {
  sourceCol: Column;
  startIndex: number;
  endIndex: number;
}

interface MoveCard {
  sourceCol: Column;
  destinationCol: Column;
  source: DraggableLocation;
  destination: DraggableLocation;
  lists: Column[];
  setLists: React.Dispatch<React.SetStateAction<Column[]>>;
}

const updateColumnList = ({
  sourceCol,
  startIndex,
  endIndex,
}: UpdateColumnList) => {
  const newCards = Array.from(sourceCol.cards);
  const [removed] = newCards.splice(startIndex, 1);
  newCards.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    cards: newCards,
  };

  return newColumn;
};

export const handleMoveCard = ({
  sourceCol,
  destinationCol,
  source,
  destination,
  lists,
  setLists,
}: MoveCard) => {
  if (sourceCol?.columnType === destinationCol?.columnType) {
    const startIndex = source?.index;
    const endIndex = destination?.index;
    if (sourceCol) {
      const newColumn = updateColumnList({
        sourceCol: sourceCol,
        startIndex: startIndex,
        endIndex: endIndex,
      });
      const updatedLists = lists.map((list) =>
        list.columnType === sourceCol.columnType ? newColumn : list
      );
      const newState = [...updatedLists];
      setLists(newState);
    }
    return;
  }
  const startCards = sourceCol?.cards;
  if (startCards) {
    const [removed] = startCards?.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      cards: startCards,
    };
    const endCards = destinationCol?.cards;

    if (endCards.length) {
      endCards?.splice(destination.index, 0, removed);
      const newEndCol = {
        ...destinationCol,
        cards: endCards,
      };
      const updatedLists = lists.map((list) =>
        list?.columnType === newStartCol?.columnType
          ? newStartCol
          : list?.columnType === newEndCol?.columnType
          ? newEndCol
          : list
      );
      const newState = [...updatedLists];
      setLists(newState);
    }
    if (!endCards.length) {
      const newEndCol = {
        ...destinationCol,
        cards: [removed],
      };
      const updatedLists = lists.map((list) =>
        list?.columnType === newEndCol?.columnType ? newEndCol : list
      );
      const newState = [...updatedLists];
      setLists(newState);
    }
  }
};
