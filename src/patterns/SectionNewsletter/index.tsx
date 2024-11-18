"use client";
import { EmailService } from "@/api/services/email-service";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { FormEvent, useState } from "react";
import { SectionNewsletterProps } from "./types";

export const SectionNewsletter = ({ }: SectionNewsletterProps) => {
  const [contact, setContact] = useState({ email: "", content: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (contact.email == "") {
      alert("Informe um e-mail válido");
      return;
    }

    try {
      await EmailService.signToNewsletter(contact.email, contact.content);
      alert("Agora você faz parte do nosso newsletter!");
    } catch (error) {
      console.log(error);
      alert("Não foi possível fazer seu cadastro, tente novamente mais tarde");
    }
  };

  return (
    <section className="w-full p-12 max-sm:p-8 flex content-center justify-center">
      <div className="w-full max-w-screen-xl p-8 bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-center items-center gap-3">
        <h3 className="text-4xl max-sm:text-2xl font-bold text-gray-800">
          Está interessado?
        </h3>
        <p className="text-gray-500 font-sans max-sm:text-sm">
          Entre contato com nossa equipe para mais detalhes sobre nossos produtos.
        </p>
        <form className="max-w-2xl gap-2" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col gap-3 justify-center items-end max-sm:flex-col">
            <Input
              type="email"
              label="Seu e-mail"
              className="w-full"
              placeholder="seuemail@provedor.com"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Digite aqui sua mensagem"
              className="w-full"
              value={contact.content}
              onChange={(e) =>
                setContact({ ...contact, content: e.target.value })
              }
            />
            <Button
              text="Cadastrar"
              type="submit"
              className="h-12 w-full"
            />
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
