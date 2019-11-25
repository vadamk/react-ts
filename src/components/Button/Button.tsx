import * as React from 'react';

import { StyledButton } from './Button.styles';

interface Props {
  id?: string;
  type?: 'pure' | 'primary' | 'secondary' | 'link';
  disabled?: boolean;
  styles?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (
  {
    id,
    type = 'pure',
    disabled = false,
    styles = {},
    children,
    onClick = () => { },
  }: React.PropsWithChildren<Props>,
  ref: React.Ref<HTMLButtonElement>,
) => {

  const handleClick = () => {
    onClick();
  };

  return (
    <StyledButton
      ref={ref}
      id={id}
      buttonType={type}
      disabled={disabled}
      style={styles}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
};

Button.displayName = 'Button';

export default React.forwardRef(Button);
