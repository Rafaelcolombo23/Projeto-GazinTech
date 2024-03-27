import Head from "next/head";
import styles from "./styles.module.scss";
import { Header } from "@/components/Header";
import { setupAPIClient } from "@/services/api";
import { useState, useEffect } from "react";

interface Nivel {
  id_nivel: number;
  name: string;
}

export default function Devs() {
  const [niveis, setNiveis] = useState<Nivel[]>([]);

  useEffect(() => {
    const fetchNiveis = async () => {
      const apiClient = setupAPIClient();

      try {
        const response = await apiClient.get("/nivel");
        setNiveis(response.data);
      } catch (error) {
        console.error("Error fetching níveis:", error);
      }
    };

    fetchNiveis();
  }, []);

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [hobby, setHobby] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [nivel_id, setNivel] = useState("");

  const handleSubmit = async () => {
    const data = {
      nome,
      idade,
      hobby,
      datanascimento: dataNascimento,
      sexo,
      nivel_id
    };


    if (!/^\d+$/.test(data.idade)) {

      alert("preencha corretamente")
      return
    }

    if(nome === ''){

      alert("preencha corretamente")
      return
    }
    if(idade === ''){

      alert("preencha corretamente")
      return
    }

    if(hobby === ''){
      alert("preencha corretamente")
      return
    }   

    if(dataNascimento === ''){
      alert("preencha corretamente")
      return
    }
    if(sexo === ''){
      alert("preencha corretamente")
      return
    }
    if(nivel_id === ''){
      alert("preencha corretamente")
      return
    }   



    try {
      const apiClient = setupAPIClient();
      const response = await apiClient.post("/devs", data);
      alert("Dev cadastrado!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Novo Dev - Devs Creator</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastre um Dev</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <select name="nivel_id" onChange={(e) => setNivel(e.target.value)}>
              <option value="">Selecione o Nível</option>
              {niveis.map((nivel) => (
                <option key={nivel.id_nivel} value={nivel.id_nivel}>
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
              type="text"
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
            <select name="sexo" onChange={(e) => setSexo(e.target.value)}>
              <option value="">Selecione o seu gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
