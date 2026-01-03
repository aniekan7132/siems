import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import AuthFooter from "@/components/AuthFooter/AuthFooter";
import ResendEmail from "./components/ResendEmail";

export default function ResetInstructions() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      p={4}
      gap="32px"
    >
      <AuthHeader heading="Instructions sent!" />

      <Flex direction="column" gap="32px">
        <Box
          bg="var(--gray-mild)"
          py={"40px"}
          px={{ base: "12px", md: "40px" }}
          textAlign={"center"}
          borderRadius="8px"
          w={{ base: "100%", md: "420px" }}
        >
          <Flex direction="column" gap="8px">
            <Text fontSize="sm">
              We've sent an email to{" "}
              <Text as="span" fontWeight="bold">
                dancharles@gmail.com
              </Text>{" "}
              with a code to reset your password.
            </Text>
            <Text fontSize="sm">
              If you have not received the email after a few minutes, kindly
              check your spam folder.
            </Text>
          </Flex>
        </Box>

        <Button
          bg="var(--custom-1)"
          w="full"
          borderRadius="8px"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Flex>
      <ResendEmail />
      <AuthFooter />
    </Flex>
  );
}
