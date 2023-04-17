import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function SignedIn(props) {
  return (
    <div>
      <Dropdown as={ButtonGroup}>
        <Button variant='success'>Enes</Button>

        <Dropdown.Toggle split variant='success' id='dropdown-split-basic' />

        <Dropdown.Menu>
          <Dropdown.Item>Bilgilerim</Dropdown.Item>
          <Dropdown.Item onClick={props.signOut}>Çıkış yap</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
