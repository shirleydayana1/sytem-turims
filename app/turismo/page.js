"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./turismo.module.css";
const experiencias = [
  {
    icono: "/iconos/caminata-nordica.png",
    titulo: "Caminatas",
    texto:
      "Recorre miradores, calles históricas, caminos rurales y espacios naturales.",
  },
  {
    icono: "/iconos/fotografo.png",
    titulo: "Fotografía",
    texto:
      "Captura paisajes, arquitectura, plazas y momentos de la vida celendina.",
  },
  {
    icono: "/iconos/muneca.png",
    titulo: "Artesanía",
    texto:
      "Conoce el trabajo de los artesanos y los tradicionales sombreros celendinos.",
  },
  {
    icono: "/iconos/dia-de-la-madre-tierra.png",
    titulo: "Naturaleza",
    texto:
      "Disfruta cascadas, montañas, valles y zonas ideales para descansar.",
  },
];

const lugares = [
  {
    nombre: "Plaza de Armas de Celendín",
    zona: "Plaza de Armas de Celendín",
    tipo: "Arquitectura",
    distancia: "Centro de la ciudad",
    imagen: "/turismo/01-plaza-de-armas.jpg",
    descripcion:
      "El corazón de Celendín, rodeado de jardines, árboles, construcciones tradicionales y espacios de encuentro.",
  },
  {
    nombre:"Iglesia Virgen del Carmen",
    zona: "Iglesia Virgen del Carmen",
    tipo: "Patrimonio",
    distancia: "Centro de la ciudad",
    imagen: "/turismo/02-iglesia-virgen-carmen.jpg",
    descripcion:
      "Uno de los edificios más representativos de Celendín por su arquitectura, historia e importancia religiosa.",
  },
  {
    nombre:"Mirador San Isidro",
    zona: "Mirador San Isidro",
    tipo: "Mirador",
    distancia: "Aproximadamente 1 km",
    imagen: "/turismo/03-mirador-san-isidro.jpg",
    descripcion:
     "Un espacio elevado desde donde se puede contemplar la ciudad, sus calles y las montañas que la rodean.",
  },
  {
    nombre: "Cerro Jelij",
    zona: "Cerro Jelij",
    tipo: "Naturaleza",
    distancia: "Aproximadamente 10 km",
    imagen: "/turismo/04-cerro-jelij.jpg",
    descripcion:
      "Elevación natural con impresionantes vistas de Celendín, sus valles y los paisajes cercanos al río Marañón.",
  },
  {
    nombre: "Cascada La Novia",
    zona: "Cascada La Novia",
    tipo: "Cascada",
    distancia: "Aproximadamente 5 km",
    imagen: "/turismo/05-cascada-la-novia.jpg",
    descripcion:
     "Una caída de agua cuyo movimiento recuerda la forma del vestido de una novia, especialmente en época de lluvias.",
  },
  {
    nombre: "Caídas de Agua Langascocha",
    zona: "Caídas de Agua Langascocha",
    tipo: "Aventura",
    distancia: "Aproximadamente 8 km",
    imagen: "/turismo/06-langascocha.jpg",
    descripcion:
      "hermosas caidas de agua rodeadas de abundante vegetacion, ideales para caminatas, fotografia y disfrutar de la naturaleza"
  },
];

export default function Turismo() {
  return (

    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/images/portadas/portadaTurismo.jpg"
          alt="Vista turística de Celendín"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />
        <div className={styles.heroLight} />

        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Cielo azul del Edén</span>

          <h1>
            Descubre
            <span>Celendín</span>
          </h1>

          <p>
            Explora plazas, iglesias, miradores, cascadas, montañas,
            tradiciones y paisajes llenos de historia.
          </p>

          <div className={styles.heroButtons}>
            <a href="#lugares" className={styles.primaryButton}>
              Ver lugares turísticos
            </a>

            <Link href="/galeria" className={styles.secondaryButton}>
              Explorar galería
            </Link>
          </div>
        </div>
      </section>

      <section id="presentacion" className={styles.presentation}>
        <div className={styles.container}>
          <div className={styles.presentationGrid}>
            <div className={styles.presentationText}>
              <span className={styles.eyebrow}>
                Turismo, cultura y naturaleza
              </span>

              <h2>Una Provincia Llena de Lugares por Descubrir</h2>

              <p>
                Celendín ofrece recorridos por su centro histórico, paisajes
                naturales, cascadas, miradores y comunidades que mantienen
                vivas sus costumbres.
              </p>

              <p>
                Sus calles, templos, construcciones tradicionales y espacios
                naturales convierten cada visita en una experiencia llena de
                identidad, tranquilidad y aventura.
              </p>

              <div className={styles.presentationStats}>

                <div>
                  <strong>12+</strong>
                  <span>Lugares destacados</span>
                </div>

                <div>
                  <strong>4</strong>
                  <span>Experiencias principales</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Cultura celendina</span>
                </div>
              </div>
            </div>

            <div className={styles.presentationImage}>
              <Image
                src="/turismo/zelendin.jpg"
                alt="Paisaje panorámico de Celendín"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                className={styles.coverImage}
              />

              <div className={styles.imageBadge}>
                <span></span>
                <div>
                  <small>Destino</small>
                  <strong>Celendín, Cajamarca</strong>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.experienceGrid}>
            {experiencias.map((experiencia) => (
              <article
                className={styles.experienceCard}
                key={experiencia.titulo}
              >
              <div className={styles.experienceIcon}>
                <Image
                  src={experiencia.icono}
                  alt={experiencia.titulo}
                  width={30}
                  height={30}
                />
              </div>

                <div>
                  <h3>{experiencia.titulo}</h3>
                  <p>{experiencia.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lugares" className={styles.placesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>
                Lugares reales de la provincia
              </span>

              <h2>Lugares Turísticos Destacados</h2>
            </div>
          </div>

          <div className={styles.placesGrid}>
            {lugares.map((lugar, index) => (
              <article className={styles.placeCard} key={lugar.nombre}>
                <div className={styles.cardImage}>
                  <Image
                    src={lugar.imagen}
                    alt={lugar.nombre}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    className={styles.coverImage}
                  />

                  <span className={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.cardType}>{lugar.tipo}</span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardZone}> {lugar.zona}</span>

                  <h3>{lugar.nombre}</h3>

                  <p>{lugar.descripcion}</p>

                  <div className={styles.cardFooter}>
                    <span> {lugar.distancia}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.tipsSection}>
        <div className={styles.container}>
          <div className={styles.tipsGrid}>
            <div className={styles.tipsImage}>
              <Image
                src="/turismo/cerro.jpg"
                alt="Montañas y naturaleza de Celendín"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.coverImage}
              />
            </div>

            <div className={styles.tipsContent}>
              <span className={styles.eyebrow}>Prepara tu recorrido</span>
              <h2>Disfruta Celendín de forma segura</h2>

              <p>
                Antes de salir, prepara lo necesario para recorrer la ciudad,
                sus comunidades y sus espacios naturales.
              </p>

              <div className={styles.tipsList}>
                <div>
                  <span>01</span>
                  <p>Lleva ropa cómoda y abrigo para los cambios de clima.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Usa protector solar, gorra y lleva suficiente agua.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Respeta los espacios naturales, culturales y religiosos.</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Consulta las rutas y condiciones antes de cada recorrido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <Image
          src="/images/turismo/cascada-la-novia.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.ctaImage}
        />

        <div className={styles.ctaOverlay} />

        <div className={styles.ctaContent}>
          <span>Vive una experiencia inolvidable</span>

          <h2>Celendín te Espera</h2>

          <p>
            Descubre sus paisajes, comparte con su gente y conoce las
            tradiciones que hacen especial a esta provincia.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/galeria" className={styles.primaryButton}>
              Ver galería
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}