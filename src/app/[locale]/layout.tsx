import type { Metadata } from "next";
import "@/app/globals.css";
import { geist } from "../fonts";
import Header from "@/components/header";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "CarlosEduJS",
  description: "Uma vitrine dos meus melhores projetos, demonstrando minhas habilidades em desenvolvimento web.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geist.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="mt-28">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}