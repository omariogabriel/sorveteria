import Image from "next/image";
import styles from "./page.module.css";
import imgsabores from "../../public/banner-sabores.jpg";
import eventsImage from "../../public/eventos-image.jpg";
import aboutImage from "../../public/sobre-image.jpg";

export default function Home() {
  return (
    <main className={styles.main_container}>
      <section className={styles.banner_section}>
        <div className={styles.banner_section_title}>
          <h1>Sorveteria Artesanal</h1>
        </div>
      </section>

      <section className={styles.sabores_section}>
        <Image className={styles.image_card} src={imgsabores}/>
        <div className={styles.container_text}>
          <h2>Nossos Sabores</h2>
          <span>Novos e deliciosos!</span>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
            gelateria todos os nossos produtos são naturais, à base de frutas
            e sem nenhum conservante! Também temos opções sem lactose e sem
            açúcar. Venha conhecer e perceber que tem como o sorvete ser
            delicioso e saudável ao mesmo tempo!
          </p>
        </div>
      </section>

      <section className={styles.events_section}>
        <div className={styles.container_text}>
          <h2>Nossos Eventos</h2>
          <span>Delícias com Sorvete!</span>
          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
            prontinhos para te atender e oferecer os melhores eventos com os
            melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
            aqui com a gente.
          </p>
        </div>
        <Image className={styles.image_card} src={eventsImage}/>
      </section>

      <section className={styles.about_section}>
        <Image className={styles.image_card} src={aboutImage}/>
        <div className={styles.container_text}>
          <h2>Sobre Nós</h2>
          <span>Alegria em cada casquinha!</span>
          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós
            estamos há anos no mercado produzindo o que tem de melhor para o
            nosso cliente e você não pode ficar fora dessa. Venha nos fazer
            uma visita e aproveite o melhor atendimento e o melhor sorvete da
            cidade.
          </p>
        </div>
      </section>
    </main>
  );
}
