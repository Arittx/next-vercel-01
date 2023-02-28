import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

//es obligatorio que se haga la export default en pages
//en pages debe nombrarse en minuscula sin espacios
export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{""}
        <code className={"code"}>src/pages/index.jsx</code>
      </p>
    </MainLayout>
  );
}
