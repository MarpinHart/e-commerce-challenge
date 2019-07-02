import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const EmailForm = ({ email, handleInputChange, handleCompleteOrder}) => {
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
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button onClick={handleCompleteOrder}> Complete Order</Button>
      </Form>
    </div>
  );
};

export default EmailForm;
