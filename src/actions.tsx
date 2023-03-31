import { DraggableLocation } from "react-beautiful-dnd";
import { Column } from "./modules/types";

interface UpdateColumnList {
  sourceCol: Column;
  startIndex: number;
  endIndex: number;
}

const updateColumnList = ({ sourceCol, startIndex, endIndex }: UpdateColumnList) => {
  const newCards = [...sourceCol.cards];
  const [removed] = newCards.splice(startIndex, 1);
  newCards.splice(endIndex, 0, removed);

  return { ...sourceCol, cards: newCards };
};

export const handleMoveCard = ({
  sourceCol,
  destinationCol,
  source,
  destination,
  lists,
  setLists,
}: {
  sourceCol: Column;
  destinationCol: Column;
  source: DraggableLocation;
  destination: DraggableLocation;
  lists: Column[];
  setLists: React.Dispatch<React.SetStateAction<Column[]>>;
}) => {
  if (sourceCol?.columnType === destinationCol?.columnType) {
    const { index: startIndex } = source || {};
    const { index: endIndex } = destination || {};
    if (startIndex != null && endIndex != null) {
      const newColumn = updateColumnList({ sourceCol, startIndex, endIndex });
      const updatedLists = lists.map((list) =>
        list.columnType === sourceCol.columnType ? newColumn : list
      );
      setLists(updatedLists);
    }
  } else {
    const startCards = [...(sourceCol?.cards || [])];
    const [removed] = startCards.splice(source.index ?? 0, 1);
    const newStartCol = { ...sourceCol, cards: startCards };
    const endCards = [...(destinationCol?.cards || [])];
    endCards.splice(destination.index ?? 0, 0, removed);
    const newEndCol = { ...destinationCol, cards: endCards };
    const updatedLists = lists.map((list) =>
      list.columnType === newStartCol?.columnType
        ? newStartCol
        : list.columnType === newEndCol?.columnType
        ? newEndCol
        : list
    );
    setLists(updatedLists);
  }
};
