import { Box, Flex, VStack } from "@chakra-ui/react";

interface AdminLayuotProps {
  children: React.ReactNode;
}
const sideBar = {
  minW: "200px",
  h: "100%",
  bg: "white !important",
  boxShadow: "-1px 0px 16px rgba(0, 0, 0, 0.06)",
};
export default function AdminLayuot({ children }: AdminLayuotProps) {
  return (
    <VStack>
      <Box w="100%" h="44px" bg="green.100"></Box>
      <Flex w="100%" h={`calc(100vh - 44px)`} mt="0 !important" bg={"gray.100"}>
        <Box {...sideBar}></Box>
        <Box w='100%' p="5" overflow={"auto"} >
          {children}
        </Box>
      </Flex>
    </VStack>
  );
}
