import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/aboutus.module.css"

export default function AboutUs() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="container">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.content}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Incidunt, officiis aliquam est vitae delectus repellat quos maxime eaque reprehenderit itaque maiores, ratione, quas minus sunt nesciunt cum! At est blanditiis porro ratione suscipit consequuntur deleniti in.
              Qui atque cum aperiam sunt nemo quos voluptates vitae earum nesciunt a perspiciatis iste rerum ipsam minima obcaecati voluptate, sed impedit natus cupiditate fugit consequuntur dignissimos! Nam inventore veniam magnam!
            </p>
            <p>
              Pellentesque odio metus, rutrum nec sagittis nec, porttitor ac arcu. Etiam blandit ante nunc, in dapibus magna mattis quis. Sed vehicula ex nisi, quis congue neque tempor quis. Donec posuere ullamcorper nisl. Integer tempor lectus eu malesuada eleifend. Sed aliquet id massa quis efficitur.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
