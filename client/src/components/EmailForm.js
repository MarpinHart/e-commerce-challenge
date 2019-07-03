import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  FormFeedback
} from "reactstrap";

const EmailForm = ({ email, handleInputChange, handleCompleteCart, isEmailCorrect }) => {
  return (
    <div>
      <Form>
        <InputGroup>
          <Input
            type="email"
            name="email"
            value={email}
            valid={isEmailCorrect}
            invalid={email.length > 0 && !isEmailCorrect}
            placeholder="Insert Email"
            onChange={handleInputChange}
          />
          <FormFeedback> This is not a valid email </FormFeedback>
          <InputGroupAddon addonType="prepend">
            <Button onClick={handleCompleteCart}>Confirm</Button>
          </InputGroupAddon>
          <FormFeedback valid />
        </InputGroup>
      </Form>
    </div>
  );
};

export default EmailForm;
