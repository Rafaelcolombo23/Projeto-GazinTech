
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../public/logoImg.png'
import styles from '../styles/home.module.scss'
import { Input } from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

export default function Home() {
  return (
    <>
<Head>
    <title>Devs-Creator - Faça seu cadastro</title>
</Head>

   <Header/>

    <div className={styles.containerCenter}>
     <h1>Seja Bem vindo</h1>
     
     <Image src={logoImg} alt='Logo Devs' width={400}
     height={300}></Image>

     <h1>Para começar escolha algum item do Header</h1>
    </div>
    </>
  );
 
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return{
    props:{
      
    }
  }
}

