import Link from "next/link"
import Layout from "@/components/layout"

export default function Page404() {
  return (
    <Layout
        title="Página no Encontrada"
    >
        <p className="error">Página no Encontrada</p>
        <Link href="/" className="error-link">Ir a Inicio</Link>
</Layout>
  )
}
