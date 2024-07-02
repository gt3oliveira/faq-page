import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export function AccordionUi() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2 text-sm sm:text-base">
      <AccordionItem value="item-1" className="border-l-4 border-l-slate-300 px-2">
        <AccordionTrigger>Como eu faço para redefinir minha senha?</AccordionTrigger>
        <AccordionContent>
          Clique em configurações / credenciais e digite sua nova senha.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-l-4 border-l-slate-300 px-2">
        <AccordionTrigger>Quais são os métodos de pagamentos aceitos?</AccordionTrigger>
        <AccordionContent>
          Nós aceitamos cartões de crédito e de débito. Pagamentos em pix, aponte sua camera para o QR Code e confirme.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-l-4 border-l-slate-300 px-2">
        <AccordionTrigger>Qual a política de reembolso?</AccordionTrigger>
        <AccordionContent>
          <strong>Recarga de celular corporativa</strong>: quando um colaborador utiliza do próprio celular para afins de trabalho e precisa ser reembolsado pelas recargas.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-l-4 border-l-slate-300 px-2">
        <AccordionTrigger>Como entro em contato co o suporte?</AccordionTrigger>
        <AccordionContent>
          Acesse o suporte através do email ou nosso canal de atendimento para mais informações.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
