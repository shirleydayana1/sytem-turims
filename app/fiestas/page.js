import Image from "next/image";
import Link from "next/link";
import styles from "./fiestas.module.css";

const actividades = [
  {
    numero: "01",
    imagen: "/images/fiestas/virgen1.jpg",
    titulo: "Celebraciones religiosas",
    descripcion:
      "Misas, novenas y actividades de fe que reúnen a las familias y visitantes de Celendín.",
  },
  {
    numero: "02",
    imagen: "",
    titulo: "Procesiones",
    descripcion:
      "Recorridos tradicionales por las principales calles acompañados por música, flores y devoción.",
  },
  {
    numero: "03",
    imagen: "",
    titulo: "Bandas y música",
    descripcion:
      "Presentaciones musicales, bandas tradicionales y encuentros culturales que alegran la celebración.",
  },
  {
    numero: "04",
    imagen: "",
    titulo: "Danzas tradicionales",
    descripcion:
      "Danzas, comparsas y expresiones artísticas que representan la identidad cultural de Celendín.",
  },
  {
    numero: "05",
    imagen: "",
    titulo: "Ferias artesanales",
    descripcion:
      "Exposición de sombreros, tejidos, artesanías y productos elaborados por emprendedores locales.",
  },
  {
    numero: "06",
    imagen: "",
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
          src="/images/turismo/iglesia-principal.jpg"
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
            Fe • tradición • identidad
          </span>

          <h1>
            Fiestas
            <span>Patronales</span>
          </h1>

          <p>
            Una celebración que reúne a las familias celendinas alrededor de
            la fe, la música, las costumbres y la alegría de todo un pueblo.
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

        <a href="#tradicion" className={styles.scrollButton}>
          <span>↓</span>
          Descubre la celebración
        </a>
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

            <h2>Actividades principales</h2>

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
                <div className={styles.activityTop}>
                  <span className={styles.activityIcon}>
                    {actividad.icono}
                  </span>

                  <span className={styles.activityNumber}>
                    {actividad.numero}
                  </span>
                </div>

                <h3>{actividad.titulo}</h3>
                <p>{actividad.descripcion}</p>
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