"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./style.css";
import Image from "next/image";

export function Header() {
  const [top, setTop] = useState(true);

  const handleScroll = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);

  return (
    <>
      <header className={`header ${top ? "background" : "header-fixed"}`}>
        <div className="container">
          <div className="content">
            <div className="content-logo">
              <Link href="/">
                <Image
                  src="/image.webp"
                  alt="Logo"
                  width={85}
                  height={85}
                ></Image>
              </Link>
            </div>
            <nav className={`nav ${top && "nav-fixed"}`}>
              <Link href="/">Home</Link>
              <Link href="/#servicos">Serviços</Link>
              <Link href="/#contatos">Contatos</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
