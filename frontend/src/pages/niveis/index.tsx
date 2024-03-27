import { useState, FormEvent } from "react"
import Head from "next/head"
import {Header} from '../../components/Header'
import styles from './styles.module.scss'
import { setupAPIClient } from "@/services/api"




export default function Nivel(){

    const [name, setName] = useState('')

    async function handleRegister(event: FormEvent){
        event.preventDefault();

        if(name === ''){
            return;
        }

        const apiClient = setupAPIClient();
        await apiClient.post('/nivel', {
            name: name
        })
        alert('Enviado com sucesso')
        setName('')
    
    }

    return(
    <>
    <Head>
        <title>Novos niveis - DevCreator</title>
    </Head>
        <div>
            <Header/>
            <main className={styles.container}>
               <h1>Cadastrar niveis</h1> 

               <form action="" className={styles.form} onSubmit={handleRegister}>

                <input type="text" placeholder="Digite o nome da categoria" className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <button type="submit" className={styles.buttonAdd}>Cadastrar</button>
               </form>
            </main>
        </div>
    </>
    )
}