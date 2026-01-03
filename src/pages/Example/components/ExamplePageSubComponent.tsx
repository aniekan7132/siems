import type { ExamplePageSubComponentProps } from '../Example.types';
import { Card } from '@chakra-ui/react';

export const ExamplePageSubComponent = ({
  title,
  description,
}: ExamplePageSubComponentProps) => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};
