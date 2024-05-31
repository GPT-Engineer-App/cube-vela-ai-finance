import { Container, Box, Heading, Text, VStack, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="center" textAlign="center">
        {/* Logo */}
        <Box boxSize="100px">
          <Image src="https://images.unsplash.com/photo-1556710807-a9261921475f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdWJlJTIwbG9nb3xlbnwwfHx8fDE3MTcxNzk2NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vela Logo" />
        </Box>

        {/* Main Heading */}
        <Heading as="h1" size="2xl">
          Pushing the boundaries of Finance and AI
        </Heading>

        {/* Subheading */}
        <Text fontSize="xl" color="gray.600">
          Welcome to Vela, where we innovate at the intersection of finance and artificial intelligence.
        </Text>

        {/* Call to Action */}
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>

        {/* Social Media Icons */}
        <HStack spacing={4}>
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
