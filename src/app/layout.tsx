import { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./styles.css"
import { Spotlight } from "@/components/ui/Spotlight";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

const barlow_Condensed = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AmberCash PH",
    template: "%s | AmberCash PH",
  },
  description: 'Your Helping Hands!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  )
}