import styles from "./fiestas.module.css";

import Hero from "./components/Hero";
import Introduccion from "./components/Introduccion";
import Actividades from "./components/Actividades";
import Timeline from "./components/Timeline";
import Galeria from "./components/Galeria";
import Cta from "./components/Cta";

export const metadata = {
  title: "Fiestas Patronales de Celendín",
  description:
    "Conoce las tradiciones, actividades religiosas y celebraciones culturales de las Fiestas Patronales de Celendín.",
};

export default function FiestasPage() {
  return (
    <main className={styles.page}>
      <Hero />
      <Introduccion />
      <Actividades />
      <Timeline />
      <Galeria />
      <Cta />
    </main>
  );
}