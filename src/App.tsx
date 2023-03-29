import { Box, Flex } from "@chakra-ui/react";
import AdminLayuot from "./AdminLayuot";
import ListComponent from "./components/ListComponent";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useState } from "react";
import { Column } from "./modules/types";
import { handleMoveCard } from "./actions";
import { columnTypes, initialState } from "./store/store";

const app = {
  minH: "100vh",
  bg: "gray.100",
  p: "10",
};

function App() {
  const [lists, setLists] = useState<Column[]>(initialState);
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sourceCol = lists?.find(
      (item) => item.columnType === source.droppableId
    );
    const destinationCol = lists?.find(
      (item) => item.columnType === destination.droppableId
    );

    if (sourceCol && destinationCol) {
      handleMoveCard({
        sourceCol: sourceCol,
        destinationCol: destinationCol,
        source: source,
        destination: destination,
        lists: lists,
        setLists: setLists,
      });
    }
  };
  return (
    <AdminLayuot {...app}>
      <Flex minWidth={"-webkit-fit-content"}>
        <DragDropContext onDragEnd={handleDragEnd}>
          {columnTypes.map((column) => (
            <ListComponent key={column.type} column={column} lists={lists} />
          ))}
        </DragDropContext>
      </Flex>
    </AdminLayuot>
  );
}

export default App;
