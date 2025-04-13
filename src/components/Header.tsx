"use client";

import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Projects", href: "projects" },
    { label: "Blog", href: "blog" },
    { label: "Resume", href: "resume" },
  ];

  return (
    <header className="py-4 border border-gray-200 items-center">
      <div className="grid grid-cols-2 px-4">
        <div>
          <h5>Anya Shapiro</h5>
        </div>
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          {isOpen && (
            <div className="lg:hidden absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg p-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}

          <nav className="hidden lg:inline-block">
            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
