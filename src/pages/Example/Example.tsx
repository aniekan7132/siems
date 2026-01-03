import { ExamplePageSubComponent } from './components/ExamplePageSubComponent';
import * as S from './Example.styles';

export const Example = () => {
  return (
    <S.ExamplePageContainer $bgColor="#ff5f5f">
      <ExamplePageSubComponent
        title="Example Page"
        description="This is an example page"
      />
    </S.ExamplePageContainer>
  );
};
