"use client";

import { useEffect, useState } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactDetails />
    </>
  );
}
