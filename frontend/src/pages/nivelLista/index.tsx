import { canSSRGuest } from "@/utils/canSSRGuest";
import Head from "next/head";
import styles from "./styles.module.scss";
import { Header } from "@/components/Header";
import { FormEvent, useEffect, useState } from "react";
import { setupAPIClient } from "@/services/api";
import Modal from "react-modal";
import React from "react";

interface Nivel {
  id_nivel: number;
  name: string;
}

export default function nivelLista() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [id_nivel, setNivel] = useState(0);
  const [name, setName] = useState("");

  const [niveis, setNiveis] = useState<Nivel[]>([]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1D1D2E",
      color: "#fff",
    },
  };

  Modal.setAppElement("#yourAppElement");

  const fetchNiveis = async () => {
    const apiClient = setupAPIClient();

    try {
      const response = await apiClient.get("/nivel");
      setNiveis(response.data);
    } catch (error) {
      console.error("Error fetching níveis:", error);
    }
  };
  useEffect(() => {
    fetchNiveis();
  }, []);

  const deleteNivel = async (id_nivel: number) => {
    try {
      const apiClient = setupAPIClient();
      const response = await apiClient.delete(`/nivel/remove`, {
        params: { id_nivel },
      });
      alert("Nível excluido!");
      fetchNiveis();
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  };

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (name === "") {
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.put(`/nivel`, {
      name: name,
      id_nivel: id_nivel,
    });
    alert("Atualizado!");
    setName("");
    setNivel(0);
    fetchNiveis();
    closeModal();
  }

  function openModal(nivel: Nivel) {
    setNivel(nivel.id_nivel);
    setName(nivel.name);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>Lista de Niveis</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Lista de Niveis</h1>
            <button>Recarregar</button>
          </div>

          {niveis.map((nivel) => (
            <article className={styles.ListNivel}>
              <div className={styles.NivelItem}>
                <div className={styles.tag}>
                  <p>Descrição: {nivel.name}.</p>

                  <button onClick={() => deleteNivel(nivel.id_nivel)}>
                    Deletar
                  </button>
                  <button onClick={() => openModal(nivel)}>Editar</button>
                </div>
              </div>
            </article>
          ))}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Edição"
          >
            <h2>Editando</h2>
            <button onClick={closeModal}>Fechar</button>
            <form action="" className={styles.form} onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Digite o nome da categoria"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" className={styles.buttonAdd}>
                Cadastrar
              </button>
            </form>
          </Modal>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
