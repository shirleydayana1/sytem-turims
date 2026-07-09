import Image from "next/image";
import styles from "./historia.module.css";

export default function Historia() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <Image
          src="/fondocelendin.png"
          alt="Historia de Celendín"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <h1>Historia de Celendín</h1>

          <p>
            Descubre los origenes de una de las provincias mas importantes de
            Cajamarca, reconocida por su riqueza historica, cultural y el
            espiritu trabajador de su gente.
          </p>
        </div>
      </section>

      <section className={styles.container}>

        <div className={styles.grid}>

          <div>

            <h2>Los origenes de celendin</h2>

            <p>
              Celendi­n es una provincia ubicada en el departamento de
              Cajamarca, en la sierra norte del Peru. A lo largo de los aÃ±os se
              ha convertido en un importante centro comercial, agricola,
              artesanal y turi­stico gracias a su privilegiada ubicaciÃ³n y a la
              riqueza cultural heredada de sus antiguos pobladores.
            </p>

            <p>
              Su nombre estÃ¡ ligado a diversas teorias historicas. Algunos
              investigadores sostienen que proviene de antiguos pobladores
              llegados desde EspaÃ±a, mientras que otros indican que tiene
              relacion con pueblos indigenas que ocuparon la region mucho antes
              de la llegada de los españoles.
            </p>

          </div>

          <div className={styles.imageBox}>

            <Image
              src="/images/historia/origenes-celendin.png"
              alt="Celendín antiguo"
              width={600}
              height={450}
            />

          </div>

        </div>

      </section>


      <section className={styles.sectionGray}>

        <div className={styles.container}>

          <div className={styles.gridReverse}>

            <div className={styles.imageBox}>

              <Image
                src="/images/historia/fundacion-celendin.png"
                alt="Fundación de Celendín"
                width={600}
                height={450}
              />

            </div>

            <div>

              <h2>Fundación de la ciudad</h2>

              <p>
                La ciudad de Celendin fue fundada oficialmente durante la Ã©poca
                colonial. Desde entonces se convirtiÃ³ en un importante punto de
                intercambio comercial entre la costa y la sierra, favoreciendo
                el crecimiento economico de toda la region.
              </p>

              <p>
                Durante el Virreinato del PerÃº, Celendin destaca por el trabajo
                agricola, la producciÃ³n ganadera y el desarrollo de la
                artesania, actividades que continuan siendo parte fundamental
                de su economia.
              </p>

            </div>

          </div>

        </div>

      </section>

     

      <section className={styles.timelineSection}>

        <div className={styles.container}>

          <h2 className={styles.center}>
            Línea del Tiempo
          </h2>

          <div className={styles.timeline}>

            <div className={styles.card}>

              <span>Antes del siglo XVI</span>

              <h3>Pobladores Originarios</h3>

              <p>
                Diversos pueblos ocuparon estas tierras desarrollando la
                agricultura y el comercio entre comunidades vecinas.
              </p>

            </div>

            <div className={styles.card}>

              <span>Época Colonial</span>

              <h3>Fundación</h3>

              <p>
                Celendín comienza su crecimiento como villa colonial gracias a
                su ubicación estratégica y actividad económica.
              </p>

            </div>

            <div className={styles.card}>

              <span>Siglo XIX</span>

              <h3>Desarrollo</h3>

              <p>
                La ciudad fortalece sus actividades comerciales, agrícolas y
                ganaderas convirtiéndose en una de las más importantes de la
                región.
              </p>

            </div>

            <div className={styles.card}>

              <span>Actualidad</span>

              <h3>Destino Turístico</h3>

              <p>
                Hoy Celendín es reconocido por su patrimonio histórico,
                gastronomía, naturaleza, cultura y hospitalidad.
              </p>

            </div>

          </div>

        </div>

      </section>

      
      <section className={styles.container}>

        <h2 className={styles.center}>
          Cultura y Tradiciones
        </h2>

        <div className={styles.cards}>

          <div className={styles.infoCard}>

            <Image
              src="/historia3.jpg"
              alt="Sombreros"
              width={400}
              height={250}
            />

            <h3>Sombreros de Paja</h3>

            <p>
              Celendín es reconocido a nivel nacional por la elaboración
              artesanal de sombreros de paja, una tradición transmitida de
              generación en generación.
            </p>

          </div>

          <div className={styles.infoCard}>

            <Image
              src="/historia4.jpg"
              alt="Tradiciones"
              width={400}
              height={250}
            />

            <h3>Tradiciones</h3>

            <p>
              Sus festividades religiosas, ferias patronales y expresiones
              culturales reflejan la identidad y el orgullo del pueblo
              celendino.
            </p>

          </div>

          <div className={styles.infoCard}>

            <Image
              src="/historia5.jpg"
              alt="Arquitectura"
              width={400}
              height={250}
            />

            <h3>Arquitectura Colonial</h3>

            <p>
              Las casonas, iglesias y plazas conservan una arquitectura que
              recuerda el importante legado colonial de la ciudad.
            </p>

          </div>

        </div>

      </section>


      <section className={styles.final}>

        <div className={styles.container}>

          <h2>
            Celendín: Historia, Cultura y Tradición
          </h2>

          <p>
            Conocer la historia de Celendín es comprender el esfuerzo, la
            identidad y las costumbres de un pueblo que ha sabido conservar sus
            raíces mientras continúa desarrollándose como uno de los principales
            destinos turísticos de la región Cajamarca.
          </p>

        </div>

      </section>

    </>
  );
}