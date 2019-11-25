import * as React from 'react';
import faker from 'faker';

import { InputWrap, Input } from './TextField.styles';

interface Props {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  type?: 'text' | 'email' | 'password';
  onChange?: (v: string) => void;
  styles?: React.CSSProperties;
}

const TextField = (
  {
    value: propValue,
    defaultValue = '',
    placeholder = '',
    name = faker.random.uuid(),
    type = 'text',
    onChange = () => { },
    styles = {},
  }: React.PropsWithChildren<Props>,
  ref: React.Ref<HTMLInputElement>,
) => {

  const [value, setValue] = React.useState(defaultValue);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <InputWrap>
      <Input
        ref={ref}
        id={name}
        name={name}
        type={type}
        value={propValue || value}
        placeholder={placeholder}
        onChange={handleChange}
        style={styles}
      />
    </InputWrap>
  );
};

TextField.displayName = 'TextField';

export default React.forwardRef(TextField);
