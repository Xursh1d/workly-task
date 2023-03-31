import { Icon, Box, Button, HStack, Text, WrapItem } from "@chakra-ui/react";
import { BsPeople } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";

const btnStyle = {
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
  const color = () => {
    switch (status) {
      case "В приоритете":
        return "purple";
      case "Второстепенная":
        return "cyan.500";
      case "Срочная заявка":
        return "red";
      case "Закрытые":
        return "orange";
      default:
        return "";
    }
  };

  return (
    <Box my="2" w={'100%'}>
      <Button
        {...btnStyle}
        color={color()}
        bg={color() !== "" ? `${color()}.50` : ""}
      >
        {status}
      </Button>
      <Button {...btnStyle} background="#FAFFFC" border="1px solid #EBF3EF">
        <HStack>
          <Icon as={BsPeople} fontSize="15px" />
          <Text>{members}</Text>
        </HStack>
      </Button>
      <Button {...btnStyle} background="#FAFFFC" border="1px solid #EBF3EF">
        <HStack>
          <Icon as={TbChecklist} fontSize="15px" />
          <Text>{tasks}</Text>
        </HStack>
      </Button>
    </Box>
  );
}
