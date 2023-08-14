import styles from '@/app/page.module.css';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technikerwohnung an der alten Mühle',
  description: 'Erstellt von Dani-Line',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={styles.body}>        
        {children}
      </body>
    </html>
  )
}
