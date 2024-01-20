import { useState } from "react";
import { Editor } from "./components/Editor";

import { RxClock, RxDoubleArrowLeft } from "react-icons/rx";
import {
  RiBuilding4Line,
  RiExpandUpDownLine,
  RiSchoolLine,
  RiSearchLine,
} from "react-icons/ri";

export function App() {
  const [hasActiveSidebar, setHasActiveSidebar] = useState(true);

  return (
    <div className="min-h-screen p-8 text-zinc-50 bg-gradient-to-r from-indigo-300 to-purple-400 flex flex-col">
      <div
        className={`bg-zinc-800 w-[1100px] mx-auto rounded-xl flex-1 shadow-sm border border-black/20 overflow-hidden transition-all ${
          hasActiveSidebar && "grid grid-cols-[16rem_1fr]"
        } `}
      >
        <aside
          className={`bg-zinc-900 border-r border-r-zinc-700 py-2 transition-all flex flex-col ${
            hasActiveSidebar ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex items-center justify-between px-4">
            <div className="flex gap-2 group">
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400 transition-colors" />
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400 transition-colors" />
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400 transition-colors" />
            </div>

            <button
              type="button"
              onClick={() => setHasActiveSidebar(!hasActiveSidebar)}
              className="text-zinc-400 p-1 hover:bg-zinc-800 rounded transition-colors"
            >
              <RxDoubleArrowLeft className="w-5 h-5" />
            </button>
          </div>

          <button
            type="button"
            className="flex items-center w-full mt-4 hover:bg-zinc-800 py-2 px-4 transition-all"
          >
            <img
              src="https://github.com/rafaelppereira.png"
              alt="Imagem de Rafael Pereira"
              className="w-6 h-6 rounded-md mr-[10px]"
            />

            <div className="flex items-center gap-1">
              <h1 className="text-sm">Rafael's Workspace</h1>
              <RiExpandUpDownLine className="text-zinc-500 font-bold" />
            </div>
          </button>

          <div className="overflow-auto">
            {/* Menu */}
            <div className="flex flex-col">
              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiSearchLine />
                </div>
                Pesquisar
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RxClock />
                </div>
                Atualizações
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiBuilding4Line />
                </div>
                Todos os workspaces
              </button>
            </div>

            {/* Pessoal */}

            <div className="flex flex-col">
              <div className="mt-5 px-4 mb-1">
                <h1 className="text-zinc-500 font-semibold text-xs">Pessoal</h1>
              </div>
              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiSchoolLine />
                </div>
                Escolaridade
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RxClock />
                </div>
                Experiência
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiBuilding4Line />
                </div>
                Cursos e certificados
              </button>
            </div>

            <div className="flex flex-col">
              <div className="mt-5 px-4 mb-1">
                <h1 className="text-zinc-500 font-semibold text-xs">
                  Projetos
                </h1>
              </div>
              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiSearchLine />
                </div>
                React
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RxClock />
                </div>
                Vue
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiBuilding4Line />
                </div>
                Next JS
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiBuilding4Line />
                </div>
                Node JS
              </button>
            </div>

            <div className="flex flex-col">
              <div className="mt-5 px-4 mb-1">
                <h1 className="text-zinc-500 font-semibold text-xs">Contato</h1>
              </div>
              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiSearchLine />
                </div>
                Telefone
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RxClock />
                </div>
                E-mail
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiBuilding4Line />
                </div>
                Instagram
              </button>

              <button
                type="button"
                className="flex items-center text-zinc-400 text-sm hover:bg-zinc-800 py-1 mx-1 px-3 transition-all rounded"
              >
                <div className="w-6 h-6 mr-[10px] flex items-center justify-center">
                  <RiBuilding4Line />
                </div>
                Linkedin
              </button>
            </div>
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
