import Image from "next/image";
import Link from "next/link";
import styles from "./fiestas.module.css";

const actividades = [
  {
    numero: "01",
    imagen: "/images/fiestas/carnaval.jpg",
    titulo: "Carnavales",
    descripcion:
      "Celebración llena de música, comparsas, juegos con agua, concursos y danzas tradicionales.",
  },
  {
    numero: "02",
    imagen: "/images/fiestas/fiestaspatronales.jpg",
    titulo: "Fiestas Patronales",
    descripcion:
      "Festividad religiosa dedicada a la Virgen del Carmen con procesiones, actividades culturales y reuniones familiares.",
  },
  {
    numero: "03",
    imagen: "/images/fiestas/aniversarioCelendin.jpg",
    titulo: "aniversario celendin",
    descripcion:
      "Celebración de la historia de la provincia mediante desfiles, actividades culturales y eventos protocolares.",
  },
  {
    numero: "04",
    imagen: "/images/fiestas/corrida.jpg",
    titulo: "corrida de toros",
    descripcion:
      "Se torea más bonito que nunca y el toro de hoy es más noble que nunca. Eso no quiere decir que se toree mejor que nunca, ni que el toro sea más bravo que nunca ",
  },
  {
    numero: "05",
    imagen: "/images/fiestas/feriasArtesanales.jpg",
    titulo: "Ferias artesanales",
    descripcion:
      "Exposición de sombreros, tejidos, artesanías y productos elaborados por emprendedores locales.",
  },
  {
    numero: "06",
    imagen: "/images/fiestas/caldo.jpg",
    titulo: "Gastronomía",
    descripcion:
      "Platos típicos, dulces y bebidas tradicionales preparados durante los días de celebración.",
  },
];

const momentos = [
  {
    titulo: "Preparación de la fiesta",
    descripcion:
      "Los barrios, instituciones y familias organizan sus actividades y decoraciones.",
  },
  {
    titulo: "Actividades religiosas",
    descripcion:
      "La comunidad participa en misas, homenajes, novenas y encuentros de oración.",
  },
  {
    titulo: "Procesión principal",
    descripcion:
      "La imagen religiosa recorre las calles acompañada por devotos, bandas y delegaciones.",
  },
  {
    titulo: "Celebración cultural",
    descripcion:
      "Música, danzas, gastronomía, artesanía y actividades para todas las familias.",
  },
];

export const metadata = {
  title: "Fiestas Patronales de Celendín",
  description:
    "Conoce las tradiciones, actividades religiosas y celebraciones culturales de las Fiestas Patronales de Celendín.",
};

export default function FiestasPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/images/portadas/fiestas-portada.jpg"
          alt="Iglesia principal de Celendín"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <span className={styles.heroTag}>
            Tradición • Cultura • Celebración
          </span>

          <h1>
            Fiestas
          </h1>

          <p>
            Celendín celebra durante todo el año festividades religiosas,
            carnavales, ferias y eventos culturales que mantienen vivas sus
            tradiciones y reúnen a toda la comunidad.
          </p>

          <div className={styles.heroButtons}>
            <a href="#tradicion" className={styles.primaryButton}>
              Conocer la tradición
            </a>

            <Link href="/galeria" className={styles.secondaryButton}>
              Ver galería
            </Link>
          </div>
        </div>

      </section>

      <section id="tradicion" className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introductionGrid}>
            <div className={styles.introductionContent}>
              <span className={styles.eyebrow}>
                Tradición celendina
              </span>

              <h2>Una celebración que une generaciones</h2>

              <p>
                Las Fiestas Patronales de Celendín representan uno de los
                encuentros religiosos y culturales más importantes de la
                provincia. Durante estas fechas, las calles reciben a
                visitantes, familias y comunidades que participan en las
                diferentes actividades.
              </p>

              <p>
                Las procesiones, las bandas musicales, la gastronomía, las
                ferias y las presentaciones artísticas convierten la
                celebración en una muestra viva de la identidad celendina.
              </p>

              <div className={styles.features}>
                <div>
                  <strong>Fe</strong>
                  <span>Devoción y encuentro</span>
                </div>

                <div>
                  <strong>Cultura</strong>
                  <span>Música y tradición</span>
                </div>

                <div>
                  <strong>Familia</strong>
                  <span>Unión de la comunidad</span>
                </div>
              </div>
            </div>

            <div className={styles.introductionImage}>
              <Image
                src="/images/fiestas/cristi.jpg"
                alt="Plaza de Armas de Celendín"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.coverImage}
              />

              <div className={styles.imageInformation}>
                <span></span>

                <div>
                  <small>Celebración</small>
                  <strong>Celendín, Cajamarca</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.activitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              Vive la experiencia
            </span>

            <h2>Fiestas tradicionales de Celendín</h2>

            <p>
              Conoce algunas de las actividades religiosas, culturales y
              tradicionales que forman parte de las fiestas.
            </p>
          </div>

          <div className={styles.activitiesGrid}>
            {actividades.map((actividad) => (
              <article
               className={styles.activityCard}
               key={actividad.titulo}
              >

              <div className={styles.activityImage}>
              <Image
                src={actividad.imagen}
                alt={actividad.titulo}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className={styles.coverImage}
              />
                </div>

                <div className={styles.activityContent}>

                  <div className={styles.activityTop}>
                    <span className={styles.activityNumber}>
                      {actividad.numero}
                    </span>
                  </div>

                  <h3>{actividad.titulo}</h3>

                  <p>{actividad.descripcion}</p>

                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.timelineGrid}>
            <div className={styles.timelineHeading}>
              <span className={styles.eyebrow}>
                Momentos especiales
              </span>

              <h2>Así se vive la celebración</h2>

              <p>
                Cada actividad fortalece la fe, la identidad y la unión de la
                comunidad celendina.
              </p>
            </div>

            <div className={styles.timeline}>
              {momentos.map((momento, index) => (
                <article className={styles.timelineItem} key={momento.titulo}>
                  <span className={styles.timelineNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{momento.titulo}</h3>
                    <p>{momento.descripcion}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              Cultura y tradición
            </span>

            <h2>Una fiesta llena de color</h2>

            <p>
              La arquitectura, la música, la gastronomía y las costumbres se
              unen para crear momentos inolvidables.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            <div className={`${styles.galleryItem} ${styles.galleryLarge}`}>
              <Image
                src="/images/fiestas/virgen.jpg"
                alt="virgen"
                fill
                sizes="(max-width: 800px) 100vw, 60vw"
                className={styles.coverImage}
              />

              <div className={styles.galleryText}>
                <span>Identidad</span>
                <strong>Celendín y sus tradiciones</strong>
              </div>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="/images/fiestas/plazadearmas.jpg"
                alt="plaza de armas"
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
                className={styles.coverImage}
              />

              <div className={styles.galleryText}>
                <span>Historia</span>
                <strong>Arquitectura tradicional</strong>
              </div>
            </div>

            <div className={styles.galleryItem}>
              <Image
                src="/images/fiestas/castillos.jpg"
                alt="castillos"
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
                className={styles.coverImage}
              />

              <div className={styles.galleryText}>
                <span>castillos</span>
                <strong>castillos de celendin</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <Image
          src="/images/fiestas/platostipicos.jpg"
          alt="Platos típicos de Celendín"
          fill
          sizes="100vw"
          className={styles.ctaImage}
        />

        <div className={styles.ctaOverlay} />

        <div className={styles.ctaContent}>
          <span>Descubre nuestra cultura</span>

          <h2>Vive las Fiestas Patronales de Celendín</h2>

          <p>
            Comparte la tradición, conoce sus costumbres y disfruta de una
            celebración llena de identidad.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/turismo" className={styles.primaryButton}>
              Explorar turismo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}