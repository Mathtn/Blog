import ErrorMessage from "@/components/ErrorMessage";

export const metadata = {
  title: "Página não encontrada",
  description: "Erro 404 - Página não existe",
};

export default function NotFound() {
  return (
    <>
      <ErrorMessage
        contentTitle="404"
        content="Erro 404 - A página que você está tentando acessar não existe neste
            site!"
      />
    </>
  );
}
