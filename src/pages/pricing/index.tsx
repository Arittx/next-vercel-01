import { MainLayout } from "../../../components/layouts/MainLayout";

// "components/layouts/MainLayout"
import Link from "next/link";

//NOTA:
//ES MEJOR HACER CADA PARTE DE LA PAGINA EN UNA CARPETA TIENE MAS ORDEN COMO ESTA DE CONTAC
//PARA UNA EMPRESA DE VENTAS, SE PARTE LA PAGINA Y POR CADA PARTE UNA CARPETA CON ARCHIVO INDEX

//es obligatorio que se haga la export default en pages
//en pages debe nombrarse en minuscula sin espacios
export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{""}
        <code className={"code"}>src/pages/pricing.jsx</code>
      </p>
    </MainLayout>
  );
}
