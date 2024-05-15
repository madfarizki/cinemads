import { Box, Link, Text } from "@chakra-ui/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      textAlign="center"
      py={4}
      bg="rgba(0,0,0, 0.25)"
      backdropFilter="blur(3.5px)"
      color="white">
      <Text>
        © {currentYear} CineMads. Created by{" "}
        <Link href="https://madfariz.my.id/" target="_blank" fontWeight="bold">
          Ahmad Alfarizki
        </Link>{" "}
        with 💖
      </Text>
    </Box>
  );
}

export default Footer;
