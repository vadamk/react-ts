import React from 'react';
import faker from 'faker';

import { StyledLabel, StyledLabelText } from './Label.styles';

interface Props {
  id?: string;
  text: string;
  forField?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

const Label = (
  {
    id = `label-${faker.random.uuid()}`,
    text,
    forField,
    styles = {},
    children,
  }: React.PropsWithChildren<Props>,
  ref: React.Ref<HTMLLabelElement>,
) => (
  <StyledLabel
    ref={ref}
    id={id}
    style={styles}
    htmlFor={forField}
  >
    <StyledLabelText>{text}</StyledLabelText>
    {children}
  </StyledLabel>
);

Label.displayName = 'Label';

export default React.forwardRef(Label);
