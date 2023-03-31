import { VStack } from "@chakra-ui/react";
import CardHeader from "./CardHeader";
import CardBtn from "./CardBtn";
import CardFooter from "./CardFooter";
import { Draggable } from "react-beautiful-dnd";
import { CardData } from "../modules/types";
import React from "react";

const cardStye = {
  w: "100%",
  h: "132px",
  p: 2,
  mt: 2,
  background: "#FFFFFF",
  boxShadow:
    "inset 0px 2px 0px rgba(0, 0, 0, 0.05), inset 0px -2px 0px rgba(0, 0, 0, 0.15)",
  borderRadius: "4px",
};
const draggingStyle = {
  background: "rgba(255, 255, 255, 0.25)",
  border: "1px solid #0095F2",
  boxShadow: "0px 4px 16px rgba(0, 113, 218, 0.4)",
  backdropFilter: "blur(4px)",
};

type CardProps = { index: number; card: CardData };

function Card({ index, card: { id, title, subtitle, status, members, tasks, avatarSrc, fullName, profession } }: CardProps) {
  return (
    <Draggable index={index} draggableId={id.toString()} key={id}>
      {({ draggableProps, dragHandleProps, innerRef }, { isDragging }) => (
        <VStack
          {...cardStye}
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
          style={{
            ...draggableProps.style,
            ...(isDragging && draggingStyle),
          }}
        >
          <CardHeader title={title} subtitle={subtitle} />
          <CardBtn status={status} members={members} tasks={tasks} />
          <CardFooter avatarSrc={avatarSrc} fullName={fullName} profession={profession} />
        </VStack>
      )}
    </Draggable>
  );
}

const MemoizedCard = React.memo(Card);
export default MemoizedCard;

