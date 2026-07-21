"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";


/* Enlaces del menú derecho */
const enlacesDerecha = [
  { nombre: "Historia", href: "/historia" },
  { nombre: "Turismo", href: "/turismo" },
  { nombre: "Fiestas", href: "/fiestas" },
  { nombre: "Gastronomia", href: "/gastronomia" },
  { nombre: "Galeria", href: "/galeria" },
];

/*componente enlacemenu*/ 
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

/*componente navbar*/ 
export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
  <Link
    href="/"
    className={styles.logoLink}
    aria-label="Ir al inicio"
    onClick={() => setAbierto(false)}
  >
    <Image
      src="/images/logo/logocelendin.png"
      alt="Logo Turismo Celendín"
      width={170}
      height={130}
      priority
      className={styles.logoImagen}
    />
  </Link>
</div>

<nav className={styles.menuEscritorio}>
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
  {enlacesDerecha.map((enlace) => (
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