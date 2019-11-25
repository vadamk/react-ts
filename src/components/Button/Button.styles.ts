import sty from 'styled-components';

interface ButtonProps {
  buttonType?: 'pure' | 'primary' | 'secondary' | 'link';
}

export const StyledButton = sty.button<ButtonProps>`
  padding: 0 12px;
  height: 34px;
  text-align: center;
  font-size: 15px;
  line-height: .7px;
  text-transform: uppercase;
  border: 0 none;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;

  ${(props: ButtonProps) => props.buttonType === 'pure' && `
    padding: 0;
    line-height: inherit;
    text-transform: none;
    border-radius: 0;
  `}

  ${(props: ButtonProps) => props.buttonType === 'primary' && `
    color: #fff;
    background-color: #04a2fd;
  `}

  ${(props: ButtonProps) => props.buttonType === 'secondary' && `
    color: #b7b7b7;
  `}

  ${(props: ButtonProps) => props.buttonType === 'link' && `
    padding: 0;
    line-height: inherit;
    text-transform: none;
    text-decoration: underline;
    border-radius: 0;
  `}
`;
