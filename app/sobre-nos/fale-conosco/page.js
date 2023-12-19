import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import "../../styles/global.css";
import Head from "next/head";

export default function About() {
  return (
    <main>
      <Head>
        <title>Projeto Final JAMstack + NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="indexMain">
        <h1> FAQ </h1>
        <h3> Módulo 4 - Pós Graduação em Desenvolvimento Full-Stack Infnet </h3>
        <p>Aluna: Mariana Sá Ribas</p>
      </main>
      <Footer />
    </main>
  );
}
