import { Button, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import { InputComponent } from "./components/InputComponent";
import AuthFooter from "@/components/AuthFooter/AuthFooter";
import ResendEmail from "./components/ResendEmail";

const ResetPassword = () => {
  const [values, setValues] = useState({
    resetCode: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    resetCode: "",
    newPassword: "",
    confirmPassword: "",
  });

  const isFormFilled =
    values.resetCode && values.newPassword && values.confirmPassword;

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

  const handleReset = () => {};

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
        heading="Set new password"
        subtext="Create a password to activate your account"
      />

      <Flex direction="column" gap="24px" w="full" alignItems="center">
        <Flex
          direction="column"
          gap="16px"
          as="form"
          onSubmit={handleReset}
          bg="white"
          width="100%"
          maxW="420px"
        >
          <InputComponent
            values={values}
            onChange={handleChange}
            errors={errors}
          />
          <Button
            w="full"
            bg={isFormFilled ? "var(--custom-1)" : "gray.200"}
            color={isFormFilled ? "white" : "gray.400"}
            borderRadius="8px"
            _hover={isFormFilled ? { opacity: 0.9 } : undefined}
            onClick={handleReset}
          >
            Reset password
          </Button>
        </Flex>
      </Flex>

      <ResendEmail />
      <Box >
        <AuthFooter />
      </Box>
    </Flex>
  );
};

export default ResetPassword;
