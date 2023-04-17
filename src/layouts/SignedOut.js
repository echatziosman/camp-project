import React from 'react';
import { Button } from 'reactstrap';

export default function SignedOut(props) {
  return (
    <div>
      <Button
        onClick={props.singIn}
        color='primary'
        style={{ marginLeft: '0.3em' }}
      >
        Login
      </Button>
      <Button color='primary' style={{ marginLeft: '0.3em' }}>
        Register
      </Button>
    </div>
  );
}
