import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import { Inter } from 'next/font/google'
import BootstrapClient from './components/BootstrapClient.js'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (

    <html lang="en">
          <Head> 
      <title> Projeto Final JAMstack + NextJS </title>
    </Head>
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}