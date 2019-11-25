import * as React from 'react';

import Label from 'components/Label';
import TextField from 'components/TextField';
import Button from 'components/Button';

function SignIn() {

  return (
    <>
      <h1>Sign In</h1>
      <>
        <Label text="Some field">
          <TextField
            onChange={v => console.log(v)}
            type="email"
            defaultValue="hello"
            placeholder="typeValue"
          />
        </Label>
        <br />
        <Button
          type="primary"
          onClick={() => console.log('Some button click!')}
        >
          Some button
        </Button>
      </>
    </>
  );
}

export default SignIn;
