import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dieufeul — Ton conseil d\'administration personnel',
  description: '4 conseillers IA analysent tes décisions business. Pensé pour l\'entrepreneur sénégalais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
