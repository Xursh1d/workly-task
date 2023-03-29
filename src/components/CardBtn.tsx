import { Icon, Box, Button, HStack, Text, WrapItem } from "@chakra-ui/react";
import React from "react";
import { BsPeople } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";

const btnWithIcon = {
  background: "#FAFFFC",
  border: "1px solid #EBF3EF",
  borderRadius: "4px",
  py: "4px",
  px: "8px",
  size: "sm",
  variant: "outline",
  mr: "2",
  fontSize: "11px",
  fontFamily: "Roboto",
};
const btnStatus = {
  size: "sm",
  mr: "2",
  borderRadius: "4px",
  fontWeight: "500",
  fontSize: "11px",
  fontFamily: "Roboto",
  py: "4px",
  px: "8px",
};

type CardBtnProps = {
  status: string;
  members: number;
  tasks: number;
};
export default function CardBtn({ status, members, tasks }: CardBtnProps) {
  return (
    <Box my="2" w={'100%'}>
      <Button
        {...btnStatus}
        color={
          status == "В приоритете"
            ? "purple"
            : status == "Второстепенная"
            ? "cyan.500"
            : status == "Срочная заявка"
            ? "red"
            : status == "Закрытые"
            ? "orange"
            : ""
        }
        bg={
          status == "В приоритете"
            ? "purple.50"
            : status == "Второстепенная"
            ? "cyan.50"
            : status == "Срочная заявка"
            ? "red.50"
            : status == "Закрытые"
            ? "orange.50"
            : ""
        }
      >
        {status}
      </Button>
      <Button {...btnWithIcon}>
        <HStack>
          <Icon as={BsPeople} fontSize="15px" />
          <Text>{members}</Text>
        </HStack>
      </Button>
      <Button {...btnWithIcon}>
        <HStack>
          <Icon as={TbChecklist} fontSize="15px" />
          <Text>{tasks}</Text>
        </HStack>
      </Button>
    </Box>
  );
}
