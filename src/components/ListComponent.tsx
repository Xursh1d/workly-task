import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Card from "./Card";
import EmptyContent from "./EmptyContent";
import { Droppable } from "react-beautiful-dnd";
import { Column, ColumnType } from "../modules/types";
import React from "react";

interface ListComponentProps {
  column: { name: string; type: ColumnType };
  lists: Column[];
}

const listCardStyle = {
  border: "1px solid",
  borderColor: "gray.200",
  borderRadius: "4px",
  minW: "276px",
  maxW: "276px",
  overflow: "hidden",
  minH: "80vh ",
  maxH: "100vh",
  pb: "10",
  mr: "80px",
};
const cardHeaderStyle = {
  background: "#F2FAF6",
  borderBottom: "1px solid #C9D2CE",
  borderRadius: "3px 3px 0px 0px",
  h: "40px",
  w: "100%",
};
const cardHeaderText = {
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "14px",
  color: "#414644",
  m: "2",
};

const ListComponent = React.memo(({ column: { name, type }, lists }: ListComponentProps) => {
  const cards = lists?.find((list) => list.columnType === type)?.cards;
  return (
    <Box {...listCardStyle} position={"relative"}>
      <HStack {...cardHeaderStyle} alignItems="center">
        <Text {...cardHeaderText}>{name}</Text>
        <Text {...cardHeaderText}>{cards?.length}</Text>
      </HStack>
      <Droppable droppableId={type} key={type}>
        {(provided) => (
          <VStack ref={provided.innerRef} {...provided.droppableProps} className="container" p={2}>
            {cards?.map((card, index) => (
              <Card index={index} card={card} key={card.id} />
            ))}
            {provided.placeholder}
          </VStack>
        )}
      </Droppable>
      {!cards?.length && <EmptyContent />}
    </Box>
  );
});

export default ListComponent;
