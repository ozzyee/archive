import * as React from "react";
import { Button } from "../button/button.component";
import { Headers } from "../section-header/section-header.style";
import { TContactFormProps } from "./contact-form.definition";
import { Input, Message, Form, ButtonHolder, Div } from "./contact-form.style";

export function ContactForm({ className }: TContactFormProps) {
  return (
    <Div>
      <Form action="https://formspree.io/f/mrgovejn" method="POST">
        <Headers>Contact</Headers>
        <Input type="text" name="Name" placeholder="Name" />

        <Input type="text" name="Email" placeholder="Email" />

        <Message name="Message" placeholder="Message"></Message>

        <ButtonHolder>
          <Button type="submit" color="white">send</Button>
        </ButtonHolder>
      </Form>
    </Div>
  );
}
