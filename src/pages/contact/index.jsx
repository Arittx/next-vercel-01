import { MainLayout } from "components/layouts/MainLayout";

import Link from "next/link";

//NOTA:
//ES MEJOR HACER CADA PARTE DE LA PAGINA EN UNA CARPETA TIENE MAS ORDEN COMO ESTA DE CONTAC
//PARA UNA EMPRESA DE VENTAS, SE PARTE LA PAGINA Y POR CADA PARTE UNA CARPETA CON ARCHIVO INDEX

//es obligatorio que se haga la export default en pages
//en pages debe nombrarse en minuscula sin espacios
export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{""}
        <code className={"code"}>src/pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
