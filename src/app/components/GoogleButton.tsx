"use client";
import { Button, ButtonProps } from "@heroui/react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function GoogleButton(props: ButtonProps) {
  return (
    //for now just for the contact form
    <Button
      {...props}
      alt="google sign in button"
      onPress={() =>
        sendGTMEvent({
          event: "contact_form_submitted",
          category: "Contact",
          label: "Contact Form",
        })
      }
    >
      {props.children}
    </Button>
  );
}
