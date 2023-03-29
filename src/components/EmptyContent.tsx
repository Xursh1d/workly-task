import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function EmptyContent() {
  return (
    <VStack
      position={"absolute"}
      top={"44px"}
      left={"0"}
      boxSize="sm"
      w="100%"
      p="10"
      zIndex={1}
    >
      <Image src="../../public/empty-content.png" alt="Dan Abramov" />
      <Text fontSize="sm">
        Если есть подходящие заявки, перетащите их сюда 🤓
      </Text>
    </VStack>
  );
}
