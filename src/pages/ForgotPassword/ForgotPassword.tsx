import { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import AuthFooter from "@/components/AuthFooter/AuthFooter";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      px={4}
      gap="32px"
    >
      <AuthHeader
        heading="Forgot password?"
        subtext="Don't worry, we'll send you reset instructions"
      />
      <Box width="100%" maxWidth="420px">
        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <Box mb={3}>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>

          <Button
            type="submit"
            width="100%"
            colorScheme="blue"
            mb={2}
            bg="blue.700"
            borderRadius="md"
          >
            Continue
          </Button>
        </Box>

        <Box mt={1} textAlign="center">
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            width="100%"
            colorScheme="blue"
            color="blue.700"
            borderColor="blue.700"
            borderWidth="1px"
            borderStyle="solid"
          >
            Back to Login
          </Button>
        </Box>
      </Box>

      <AuthFooter />
    </Flex>
  );
};

export default ForgotPassword;
