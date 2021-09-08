import React from "react";
import "./header.style.css";
import { HeaderDataProps } from "./header.types";

interface HeaderProps {
  options: HeaderDataProps;
}

export default function Header({ options }: HeaderProps) {
  return (
    <header className="main-header">
      <section>
        {options.map(({ title, link }) => (
          <a key={title} href={link}>
            {title}
          </a>
        ))}
      </section>

      <h1>Social Cat</h1>
    </header>
  );
}
