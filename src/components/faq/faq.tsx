"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import styles from "./faq.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className={styles.root}>
      {items.map((item, i) => (
        <AccordionPrimitive.Item key={i} value={`item-${i}`} className={styles.item}>
          <AccordionPrimitive.Header className={styles.header}>
            <AccordionPrimitive.Trigger className={styles.trigger}>
              {item.question}
              <ChevronDown />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className={styles.content}>
            <div className={styles.contentText}>{item.answer}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

function ChevronDown() {
  return (
    <svg
      className={styles.chevron}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
