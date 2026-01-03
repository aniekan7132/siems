import { Text, Link } from "@chakra-ui/react";

export default function ResendEmail() {
  return (
    <Text mt={"-8px"} fontSize="sm" color="gray.600" textAlign="center">
      Didn’t receive an email?{" "}
      <Link color="var(--custom-1)" fontWeight="medium" href="#">
        Click to resend
      </Link>
    </Text>
  );
}
