import colors from "tailwindcss/colors";
import { InstagramLogo, FacebookLogo, WhatsappLogo, Wallet } from "phosphor-react";

export default function BottomBar(){
  return(
    <div className="w-full items-center bg-theme-color mt-10">
      <div className="w-full items-center">
        <div className="flex justify-between pt-3 pb-5 pl-40 pr-96">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Wallet className="mr-1" color={colors.white} size={48} weight="fill" />
              <h1 className={`text-white text-4xl font-bold`}>Wallet</h1>
            </div>
            <span className="text-white">Todos os direitos reservados</span>
          </div>
          <div className="text-white flex">
            <div className="mx-5">
              <h1 className="font-bold">Sobre</h1>
              <div className="text-sm mt-2">
                <h2>Termos de Uso</h2>
                <h2>Políticas de privacidade</h2>
              </div>
            </div>
            <div>
              <h1 className="font-bold">Dúvidas</h1>
              <div className="text-sm mt-2">
                <h2>Comunidade</h2>
                <h2>Central de ajuda</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-white w-full"/>
      <div className="w-full flex pl-40 py-1">
        <InstagramLogo size={36} color={colors.white} weight="thin" />
        <FacebookLogo size={36} color={colors.white} weight="thin" />
        <WhatsappLogo size={36} color={colors.white} weight="thin" />
      </div>
    </div>
  );
}