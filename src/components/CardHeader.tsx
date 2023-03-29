import React from "react";
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

const cardTitle = {
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "16px",
};
const subTitleStyle = {
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  w: "190px",
};
const threeDots = {
  alignSelf: "start",
  variant: "ghost",
  size: "sm",
  fontSize: "20px",
  color: "#96A09B",
};

type CardHeaderProps = {
  title: string;
  subtitle: string;
};

export default function CardHeader({ title, subtitle }: CardHeaderProps) {
  return (
    <HStack>
      <VStack alignItems="start">
        <Text {...cardTitle}>{title}</Text>
        <Text {...subTitleStyle} isTruncated>
          {subtitle}
        </Text>
      </VStack>
      <Spacer />
      <Menu>
        <MenuButton {...threeDots} as={IconButton} icon={<FiMoreVertical />} />
      </Menu>
    </HStack>
  );
}
