import { VStack } from "@chakra-ui/react";
import CardHeader from "./CardHeader";
import CardBtn from "./CardBtn";
import CardFooter from "./CardFooter";
import { Draggable } from "react-beautiful-dnd";
import { CardData } from "../modules/types";

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

function Card({ index, card }: CardProps) {
  return (
    <Draggable index={index} draggableId={card.id.toString()} key={card.id}>
      {(provided, snapshot) => (
        <VStack
          {...cardStye}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            ...provided.draggableProps.style,
            ...(snapshot.isDragging && draggingStyle),
          }}
        >
          <CardHeader title={card?.title} subtitle={card?.subtitle} />
          <CardBtn
            status={card?.status}
            members={card?.members}
            tasks={card?.tasks}
          />
          <CardFooter
            avatarSrc={card?.avatarSrc}
            fullName={card?.fullName}
            profession={card?.profession}
          />
        </VStack>
      )}
    </Draggable>
  );
}

export default Card;
