import styles from "./sabores.module.css"
import Image from "next/image"
import pistache from "../../../public/sabor-pistache.png"
import kiwi from "../../../public/sorbet-kiwi.png"
import morango from "../../../public/sorbet-morango.png"
import limao from "../../../public/sorbet-limao.png"
import oreo from "../../../public/sabor-oreo.png"
import cookies from "../../../public/sabor-cookies-avela.png"


export default function Sabores() {
    return (
        <main>
            <section className={styles.banner_section}>
                <div className={styles.banner_section_title}>
                    <h1>Nossos Sabores</h1>
                </div>
            </section>
            <section className={styles.sabores_section}>
                <h1>Sabores de Sorvete</h1>
                <div className={styles.sabores_container}>
                    <div className={styles.card}>
                        <Image src={oreo} className={styles.image_card}/>
                        <h2>Sorvete de Oreo</h2>
                        <p>Delicioso sorvete de Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src={pistache} className={styles.image_card}/>
                        <h2>Sorvete de Pistache</h2>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src={cookies} className={styles.image_card}/>
                        <h2>Sorvete de Cookies e Avelã</h2>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src={kiwi} className={styles.image_card}/>
                        <h2>Sorvete de Kiwi</h2>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src={morango} className={styles.image_card}/>
                        <h2>Sorvete de Morango</h2>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className={styles.card}>
                        <Image src={limao} className={styles.image_card}/>
                        <h2>Sorvete de Limão</h2>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}