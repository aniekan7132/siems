import type { FormInputComponentProps } from "../Login.types";
import { useState } from "react";
import { Input, InputGroup, Button, Stack, Field } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

export const FormInputComponent: React.FC<FormInputComponentProps> = ({
  errors,
  values,
  onChange,
}) => {
  const [showPwd, setShowPwd] = useState(false);
  const toggleShow = () => setShowPwd((prev) => !prev);

  return (
    <Stack align="center" width="100%">
      <Field.Root invalid={!!errors.email} width="100%">
        <Input
          name="email"
          placeholder="Email address"
          value={values.email}
          onChange={onChange}
          height="40px"
          width="100%"
          borderColor="gray.300"
          _focus={{
            borderColor: errors.email ? "red.500" : "blue.400",
            outline: "none",
            boxShadow: "none",
          }}
          _invalid={{
            borderColor: "red.500",
          }}
        />
        {errors.email && <Field.ErrorText>{errors.email}</Field.ErrorText>}
      </Field.Root>

      <Field.Root invalid={!!errors.password} width="100%">
        <InputGroup
          width="100%"
          endElement={
            <Button
              h="1.75rem"
              size="sm"
              variant="ghost"
              color="gray.500"
              onClick={toggleShow}
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? <FiEye /> : <FiEyeOff />}
            </Button>
          }
        >
          <Input
            name="password"
            type={showPwd ? "text" : "password"}
            placeholder="Password"
            value={values.password}
            onChange={onChange}
            height="40px"
            width="100%"
            pr="4.5rem"
            borderColor="gray.300"
            _focus={{
              borderColor: errors.password ? "red.500" : "blue.400",
              outline: "none",
              boxShadow: "none",
            }}
            _invalid={{
              borderColor: "red.500",
            }}
          />
        </InputGroup>
        {errors.password && (
          <Field.ErrorText>{errors.password}</Field.ErrorText>
        )}
      </Field.Root>
    </Stack>
  );
};
