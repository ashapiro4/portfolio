import { ChevronLeft, ChevronRight } from "lucide-react";

export function Header() {
  return (
    <header className="header">
      <div className="flex">
        <ChevronLeft />
        A.S.
        <ChevronRight />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Learnings</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
