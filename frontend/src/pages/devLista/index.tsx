import { canSSRGuest } from "@/utils/canSSRGuest";
import Head from "next/head";
import styles from "./styles.module.scss";
import { Header } from "@/components/Header";
import React, { useEffect, useState } from "react";
import { setupAPIClient } from "@/services/api";
import Modal from "react-modal";

interface Nivel {
  id_nivel: string;
  name: string;
}

interface Dev {
  id_devs: number;
  nome: string;
  sexo: string;
  datanascimento: string;
  idade: string;
  hobby: string;
  niveis: Nivel;
}

export default function DevLista() {
  const [niveis, setNiveis] = useState<Nivel[]>([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [devs, setDevs] = useState<Dev[]>([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [hobby, setHobby] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [nivel_id, setNivel] = useState("");
  const [id_devs, setDev] = useState(0);
  const customStyles = {
    content: {
      width: "1000px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "50px",
      paddingBottom: "50px",
      margin: "20px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1D1D2E",
      color: "#fff",
      borderRadius: "50px",

    },
  };

  Modal.setAppElement("#yourAppElement");

  const fetchDevs = async () => {
    const apiClient = setupAPIClient();

    try {
      const response = await apiClient.get("/devs");
      setDevs(response.data);
    } catch (error) {
      console.error("Error fetching devs:", error);
    }
  };
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
    fetchDevs();
  }, []);

  const deleteDev = async (id_devs: number) => {
    try {
      const apiClient = setupAPIClient();
      const response = await apiClient.delete(`/devs/remove`, {
        params: { id_devs },
      });
      alert("Dev. excluido!");
      fetchDevs();
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  };

  const handleRegister = async () => {
    const data = {
      nome,
      idade,
      hobby,
      datanascimento: dataNascimento,
      sexo,
      nivel_id,
      id_devs,
    };

    try {
      const apiClient = setupAPIClient();
      const response = await apiClient.put("/devs", data);
      alert("Dev atualizado!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  function openModal(dev: Dev) {
    setNome(dev.nome);
    setIdade(dev.idade);
    setHobby(dev.hobby);
    setDataNascimento(dev.datanascimento);
    setSexo(dev.sexo);
    setNivel(dev.niveis.id_nivel);
    setDev(dev.id_devs);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>Lista de Devs</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Lista de Devs</h1>
          </div>

          {devs.map((dev) => (
            <article className={styles.ListDevs}>
              <div className={styles.DevsItem}>
                <div className={styles.tag}>
                  <p>Nome: {dev.nome}</p>
                  <p>idade: {dev.idade}</p>
                  <p>Genero: {dev.sexo}</p>
                  <p>data de nascimento: {dev.datanascimento}</p>
                  <p>Hobby: {dev.hobby}</p>
                  <p>Nivel: {dev.niveis.name}</p>

                  <button onClick={() => deleteDev(dev.id_devs)}>
                    Deletar
                  </button>
                  <button onClick={() => openModal(dev)}>Editar</button>
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
              <select
                name="nivel_id"
                value={nivel_id}
                onChange={(e) => setNivel(e.target.value)}
              >
                <option value="">Selecione o Nível</option>
                {niveis.map((nivel) => (
                  <option selected key={nivel.id_nivel} value={nivel.id_nivel}>
                    {nivel.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={styles.input}
              />
              <input
                type="number"
                placeholder="Idade"
                name="idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Hobby"
                name="hobby"
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
                className={styles.input}
              />
              <input
                type="date"
                placeholder="Data de Nascimento"
                name="datanascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className={styles.input}
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
