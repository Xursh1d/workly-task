import React from "react";
import { HStack, IconButton, Menu, MenuButton, Spacer, Text, VStack } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

const titleStyle = {
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "16px",
};
const subTitleStyle = {
  ...titleStyle,
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

const CardHeader = ({ title, subtitle }: CardHeaderProps) => {
  return (
    <HStack>
      <VStack alignItems="start">
        <Text {...titleStyle} fontWeight="600" fontSize="14px" lineHeight="16px">
          {title}
        </Text>
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
};

export default CardHeader;
