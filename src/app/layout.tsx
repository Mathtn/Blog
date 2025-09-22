import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Container from "@/components/container";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The blog - Este é um blog com Next.js",
    template: "%s | The Blog",
  },
  description: "Essa seria a descrição da página",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
