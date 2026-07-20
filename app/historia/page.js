import Image from "next/image";
import styles from "./historia.module.css";

export default function Historia() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <Image
          src="/fondocelendin.png"
          alt="Tierra del Sombrero y del Cielo Azul"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <h1>Tierra del Sombrero y del Cielo Azul.</h1>
          <p>
            Descubre los orígenes de una de las provincias más importantes de
            Cajamarca, reconocida por su riqueza histórica, cultural y el
            espíritu trabajador de su gente.         
          </p>
        </div>
      </section>


      <section className={styles.container}>

        <div className={styles.grid}>

          <div>
            <h2>Los Orígenes de Celendín</h2>
            <p>
              Durante la colonia, lo que hoy es la ciudad no existía como tal; era una enorme llanura llamada la Hacienda Pampa del Estero, de propiedad de la orden religiosa de los Jesuitas. Tras la expulsión de esta orden en 1767, las tierras pasaron a manos de la Corona española y luego a propietarios particulares.
              Para finales del siglo XVIII, la zona empezó a poblarse de familias españolas, criollas y un importante contingente de descendientes de judíos conversos (sefardíes) y portugueses que buscaban refugio en zonas apartadas de la sierra para escapar del control estricto de la Santa Inquisición de Lima.
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
                src="/images/historia/images.jpg"
                alt="Fundación de Celendín"
                width={600}
                height={450}
              />

            </div>

            <div>
              
              <h2>Fundación de la ciudad</h2>
              <p>
                El verdadero nacimiento de Celendín ocurre gracias a la unión de sus pobladores y a la guía de un personaje clave: el obispo de Trujillo, Baltasar Jaime Martínez Compañón.
                1780s El obispo Martínez Compañón visita la zona, ve el potencial del valle y diseña los primeros planos de una ciudad perfectamente simétrica, al estilo damero (como un tablero de ajedrez).
              </p>

              <p>
                1796: Los pobladores locales, liderados por el capitán Juan de Dios Burga, se organizan y logran comprar la Hacienda Pampa del Estero por 11,000 pesos para fundar formalmente su propia villa.
                1802: El 19 de diciembre de 1802, el Rey Carlos IV de España firma la Real Cédula que aprueba oficialmente la fundación de la villa bajo el nombre de Amalia de Celendín.
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
              src="/images/historia/sombreros.jpg"
              alt="Sombrero"
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
              src="/images/historia/danza.jpg"
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
              src="/images/historia/iglesia.jpg"
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


    </>
  );
}