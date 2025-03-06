"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./style.css";

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
              <Link href="/#home">
                <Image
                  src="/image.webp"
                  alt="Logo"
                  width={120}
                  height={120}
                ></Image>
              </Link>
            </div>
            <nav className={`nav ${top && "nav-fixed"}`}>
              <Link href="/#servicos" className="text-gradient">Serviços</Link>
              <Link href="/#contatos" className="text-gradient">Contatos</Link>
              <Link href="/#sobre" className="text-gradient">Sobre</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
