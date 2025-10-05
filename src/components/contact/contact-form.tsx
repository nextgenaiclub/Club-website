"use client";

import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission triggered");
    if (!name || !email || !message) {
      toast.error("Please fill all fields"); // Use toast.error for better UX
      return;
    }

    try {
      setSubmitting(true);
      console.log("Started");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      console.log("Response received");
      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Thanks! We’ll get back to you soon."); // Use toast.success
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-border bg-card/80 p-5 md:p-6"
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title" className="sr-only">
        Contact form
      </h3>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <Input
            id="name"
            placeholder="What's your name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-muted/60 border-border/60 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent/60"
            disabled={submitting}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="sr-only">
            Your email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-muted/60 border-border/60 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent/60"
            disabled={submitting}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="bg-muted/60 border-border/60 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent/60"
            disabled={submitting}
          />
        </div>

        <div className="pt-2">
          <Button
            // Remove onClick={onSubmit} -- let type="submit" handle it
            type="submit"
            disabled={submitting}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>
    </form>
  );
}