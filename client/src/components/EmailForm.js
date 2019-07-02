import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const EmailForm = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Please insert Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email@provider.com"
          />
        </FormGroup>
        <Button>Complete Order</Button>
      </Form>
    </div>
  );
};

export default EmailForm;
