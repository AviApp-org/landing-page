import { EmailService } from "@/api/services/email-service";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";
import { SectionNewsletterProps } from "./types";

export const SectionNewsletter = ({}: SectionNewsletterProps) => {
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    try {
      await EmailService.signToNewsletter(email)
      alert("Agora você faz parte do nosso newsletter!")
    } catch (error) {
      alert("Não foi possível fazer seu cadastro, tente novamente mais tarde")
    }
  }

  return (
    <section className="w-full p-12 max-sm:p-8">
      <div className="w-full p-8 bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-start items-start gap-3">
        <h3 className="text-4xl max-sm:text-2xl font-bold text-gray-800">Fique por dentro das novidades</h3>
        <p className="text-gray-500 font-sans max-sm:text-sm">
          Receba em primeira mão notificações sobre novas funcionalidades, novos
          produtos, políticas de privacidade e muito mais.
        </p>
        <form className="max-w-2xl">
          <div className="w-full flex flex-row gap-3 justify-center items-end max-sm:flex-col">
            <Input type="email" label="Seu e-mail" className="w-full" value={email} onChange={() => setEmail(email)}/>
            <Button text="Cadastrar" className="h-12 max-sm:w-full" onClick={handleSubmit}/>
          </div>
          <p
            id="helper-text-explanation"
            className="mt-4 text-sm text-gray-500"
          >
            Ao cadastrar seu e-mail você automaticamente aceita os{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Termos e condições
            </a>{" "}
            da plataforma
          </p>
        </form>
      </div>
    </section>
  );
};
