import { FC, ReactNode } from "react";

import Head from "next/head";
import styles from "./MainLayout.module.css";
import { Navbar } from "../Navbar";

type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {/*la funcion de Head con H mayuscula es decirle que eso debe ir en el head del html sin usar html */}
      {/*siempre importar el Head */}
      <Head>
        <title>Home - Fernando</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
