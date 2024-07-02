import { AccordionUi } from "./components/AccordionUi";
import faq from './assets/faq-img.png'

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EDF6FE]">
      <div className="flex flex-col w-full h-auto my-8 mx-6 rounded-md items-center justify-center bg-white shadow-lg shadow-black/10 div-container">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 mt-4">Perguntas frequentes</h2>
        <div className="flex flex-col items-center w-full gap-6 mb-4 px-4 div-mobile">
          <img src={faq} alt="imagem faq" className="size-[150px] sm:size-[200px]" />
          <AccordionUi />
        </div>
      </div>
    </div>
  )
}
