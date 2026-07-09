"use client";

import styles from "./turismo.module.css";

const lugares = [
  {
    id: 1,
    nombre: "Catarata de Cornelio",
    imagen: "/imagenes/cornelio.jpg",
    descripcion:
      "Una impresionante caída de agua rodeada de naturaleza, ideal para caminatas y fotografía.",
  },
  {
    id: 2,
    nombre: "Plaza de Armas de Celendín",
    imagen: "/imagenes/plaza.jpg",
    descripcion:
      "El corazón de la ciudad, donde destacan su arquitectura y ambiente tradicional.",
  },
  {
    id: 3,
    nombre: "Iglesia Matriz",
    imagen: "/imagenes/iglesia.jpg",
    descripcion:
      "Uno de los principales monumentos históricos y religiosos de Celendín.",
  },
  {
    id: 4,
    nombre: "Mirador Natural",
    imagen: "/imagenes/mirador.jpg",
    descripcion:
      "Hermosa vista panorámica de todo Celendín.",
  },
  {
    id: 5,
    nombre: "Laguna El Milagro",
    imagen: "/imagenes/laguna.jpg",
    descripcion:
      "Un paisaje natural perfecto para descansar y disfrutar.",
  },
  {
    id: 6,
    nombre: "Campo Celendino",
    imagen: "/imagenes/campo.jpg",
    descripcion:
      "Tradición, naturaleza y paisajes únicos.",
  },
];

export default function Turismo() {
  return (
    <section className={styles.turismo}>
      <div className={styles.titulo}>
        <h1>Turismo en Celendín</h1>
        <p>
          Descubre los principales atractivos turísticos de la provincia de
          Celendín.
        </p>
      </div>

      <div className={styles.grid}>
        {lugares.map((lugar) => (
          <div className={styles.card} key={lugar.id}>
            <imge
              src={lugar.imagen}
              alt={lugar.nombre}
              className={styles.imagen}
            />

            <div className={styles.contenido}>
              <h2>{lugar.nombre}</h2>

              <p>{lugar.descripcion}</p>

              <button className={styles.boton}>
                Conocer más
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}