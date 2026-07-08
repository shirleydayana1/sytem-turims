"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const enlacesIzquierda = [
  { nombre: "Inicio", href: "/" },
  { nombre: "Historia", href: "/historia" },
  { nombre: "Turismo", href: "/turismo" },
  { nombre: "Carnavales", href: "/carnavales" },
];

const enlacesDerecha = [
  { nombre: "Fiestas Patronales", href: "/fiestas-patronales" },
  { nombre: "Gastronom\u00eda", href: "/gastronomia" },
  { nombre: "Galer\u00eda", href: "/galeria" },
  { nombre: "Cont\u00e1ctanos", href: "/contactanos" },
];

function EnlaceMenu({ enlace, pathname, cerrarMenu }) {
  const activo =
    pathname === enlace.href ||
    (enlace.href !== "/" && pathname.startsWith(`${enlace.href}/`));

  return (
    <Link
      href={enlace.href}
      className={`${styles.enlace} ${activo ? styles.activo : ""}`}
      onClick={cerrarMenu}
    >
      {enlace.nombre}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    setAbierto(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <nav className={`${styles.menuEscritorio} ${styles.menuIzquierdo}`}>
          {enlacesIzquierda.map((enlace) => (
            <EnlaceMenu
              key={enlace.href}
              enlace={enlace}
              pathname={pathname}
              cerrarMenu={() => setAbierto(false)}
            />
          ))}
        </nav>

        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Ir al inicio"
          onClick={() => setAbierto(false)}
        >
          <Image
            src="/logo.png"
            alt="Logo Turismo Celendin"
            width={190}
            height={150}
            priority
            className={styles.logoImagen}
          />
        </Link>

        <nav className={`${styles.menuEscritorio} ${styles.menuDerecho}`}>
          {enlacesDerecha.map((enlace) => (
            <EnlaceMenu
              key={enlace.href}
              enlace={enlace}
              pathname={pathname}
              cerrarMenu={() => setAbierto(false)}
            />
          ))}
        </nav>

        <button
          type="button"
          className={`${styles.botonMenu} ${
            abierto ? styles.botonMenuAbierto : ""
          }`}
          onClick={() => setAbierto((valor) => !valor)}
          aria-label="Abrir menu"
          aria-expanded={abierto}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`${styles.menuMovil} ${
          abierto ? styles.menuMovilAbierto : ""
        }`}
      >
        {[...enlacesIzquierda, ...enlacesDerecha].map((enlace) => (
          <EnlaceMenu
            key={enlace.href}
            enlace={enlace}
            pathname={pathname}
            cerrarMenu={() => setAbierto(false)}
          />
        ))}
      </nav>
    </header>
  );
}