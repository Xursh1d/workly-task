import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type FooterProps = {
  avatarSrc: string;
  fullName: string;
  profession: string;
};
const avatarStyle = {
  w: "28px",
  h: "28px",
  mr: "2",
  border: "1px solid #C9D2CE",
};
export default function CardFooter({
  avatarSrc,
  fullName,
  profession,
}: FooterProps) {
  return (
    <Flex alignItems="center" w={'100%'}>
      <Avatar src={avatarSrc} name={fullName} {...avatarStyle} />
      <Box>
        <Text fontWeight="400" fontSize="11px" lineHeight="13px">
          {profession}
        </Text>
        <Text fontWeight="500" fontSize="12px" lineHeight="14px">
          {fullName}
        </Text>
      </Box>
    </Flex>
  );
}
