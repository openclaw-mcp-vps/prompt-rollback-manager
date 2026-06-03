import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Rollback Manager — Git-like versioning for AI prompts',
  description: 'Version control system for AI prompts with rollback and branching capabilities. Built for AI product teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a3a28e18-2e9a-4055-a728-1c6cb2faf6f8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
