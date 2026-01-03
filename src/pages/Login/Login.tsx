import { useState } from "react";
import { FormInputComponent } from "./components/FormInputComponent";
import { Button, Flex, Box, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AuthFooter from "@/components/AuthFooter/AuthFooter";
import AuthHeader from "@/components/AuthHeader/AuthHeader";

export default function LoginPage() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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
        heading="Ministry of Education Portal"
        subtext="Authorized Access Only"
      />

      <Flex direction="column" gap="24px" w="full" alignItems="center">
        <Box
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          bg="white"
          width="100%"
          maxW="420px"
        >
          <FormInputComponent
            values={values}
            onChange={handleChange}
            errors={errors}
          />

          <Button
            mt={4}
            bg={
              values.email || values.password
                ? "blue.700"
                : "gray.300"
            }
            color={
              values.email || values.password
                ? "white"
                : "gray.500"
            }
            _hover={
              values.email || values.password
                ? { bg: "blue.600", opacity: 0.9 }
                : { bg: "gray.300" }
            }
            height="40px"
            width="100%"
            type="submit"
            borderRadius="8px"
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" /> : "Log In"}
          </Button>
        </Box>

        <Text
          fontSize="sm"
          fontWeight="medium"
          textAlign="center"
          color="gray.700"
        >
          Forgot password?{" "}
          <Text
            as="span"
            color="blue.400"
            cursor="pointer"
            fontWeight="medium"
          >
            <Link to="/forgot-password">Reset password</Link>
          </Text>
        </Text>
      </Flex>

      <AuthFooter />
    </Flex>
  );
}
