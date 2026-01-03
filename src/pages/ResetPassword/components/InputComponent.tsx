import type { FormInputComponentProps } from "../Reset.types";
import { useState } from "react";
import { Input, InputGroup, Button, Flex, Field } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

export const InputComponent: React.FC<FormInputComponentProps> = ({
  errors,
  values,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShow = () => setShowPassword((prev) => !prev);

  return (
    <Flex flexDirection="column" gap="16px">
      <Field.Root invalid={!!errors.resetCode} width="100%">
        <Input
          name="resetCode"
          placeholder="Enter reset code"
          value={values.resetCode}
          onChange={onChange}
          height="40px"
          width="100%"
          borderColor="gray.200"
          _focus={{
            borderColor: errors.resetCode
              ? "red.500"
              : "var(--custom-3)",
            outline: "none",
            boxShadow: "none",
          }}
          _invalid={{
            borderColor: "red.500",
          }}
        />
        {errors.resetCode && (
          <Field.ErrorText>{errors.resetCode}</Field.ErrorText>
        )}
      </Field.Root>

      <Field.Root invalid={!!errors.newPassword} width="100%">
        <InputGroup
          width="100%"
          endElement={
            <Button
              h="1.75rem"
              size="sm"
              variant="ghost"
              color="gray.400"
              onClick={toggleShow}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </Button>
          }
        >
          <Input
            name="newPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={values.newPassword}
            onChange={onChange}
            height="40px"
            width="100%"
            pr="4.5rem"
            borderColor="gray.200"
            _focus={{
              borderColor: errors.newPassword
                ? "red.500"
                : "var(--custom-3)",
              outline: "none",
              boxShadow: "none",
            }}
            _invalid={{
              borderColor: "red.500",
            }}
          />
        </InputGroup>
        {errors.newPassword && (
          <Field.ErrorText>{errors.newPassword}</Field.ErrorText>
        )}
      </Field.Root>

      <Field.Root invalid={!!errors.confirmPassword} width="100%">
        <InputGroup
          endElement={
            <Button
              h="1.75rem"
              size="sm"
              variant="ghost"
              color="gray.400"
              onClick={toggleShow}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </Button>
          }
        >
          <Input
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm new password"
            value={values.confirmPassword}
            onChange={onChange}
            height="40px"
            width="100%"
            pr="4.5rem"
            borderColor="gray.200"
            _focus={{
              borderColor: errors.confirmPassword
                ? "red.500"
                : "var(--custom-3)",
              outline: "none",
              boxShadow: "none",
            }}
            _invalid={{
              borderColor: "red.500",
            }}
          />
        </InputGroup>
        {errors.confirmPassword && (
          <Field.ErrorText>{errors.confirmPassword}</Field.ErrorText>
        )}
      </Field.Root>
    </Flex>
  );
};
