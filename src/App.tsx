import { FiGlobe, FiGrid, FiChevronDown, FiX, FiBarChart } from 'react-icons/fi';
import { MdLanguage, MdLocationOn, MdRestaurant } from "react-icons/md";
import { IoArrowForward, IoCarSharp, IoDocumentTextOutline, IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { SiFacebook, SiTwitter, SiYoutube, SiLinkedin, SiInstagram } from "react-icons/si";

function App() {
  return (
    <div className="flex flex-col items-start">
      <header className='bg-gray-900 w-full p-4 text-sm px-10 flex font-medium justify-between items-center'>
        <div className='flex items-center gap-4 only-of-type:p-2 only-of-type:hover:bg-gray-100/40 only-of-type:rounded-full'>
          <div className='p-2 hover:bg-gray-100/20 hover:cursor-pointer duration-300 text-3xl rounded-full'>Uber</div>
          <div className='p-2 hover:bg-gray-100/20 hover:cursor-pointer duration-300 rounded-full flex items-center gap-2'>
            Empresa 
            <FiChevronDown size={22}/>
          </div>
          <div className='p-2 hover:bg-gray-100/20 hover:cursor-pointer duration-300 rounded-full'>Segurança</div>
          <div className='p-2 hover:bg-gray-100/20 hover:cursor-pointer duration-300 rounded-full'>Ajuda</div>
        </div>

        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 items-center p-2 hover:bg-gray-100/20 hover:cursor-pointer duration-300 rounded-full'>
            <FiGlobe size={22}/>
            PT-BR
          </div>
          <div className='flex gap-2 items-center p-2 hover:bg-gray-100/20 hover:cursor-pointer duration-300 rounded-full'>
            <FiGrid size={22}/>
            Produtos
          </div>
          <div className='p-2 hover:bg-gray-100/20 hover:cursor-pointer duration-300 rounded-full'>Fazer login</div>
          <div className='p-2 hover:brightness-50 bg-gray-100 text-gray-900 hover:cursor-pointer duration-300 rounded-full'>Cadastre-se</div>
        </div>
      </header>

      <section>
        <div className='text-gray-900 flex flex-col gap-4 bg-gray-200 p-10 px-20'>
          <div className='flex justify-between font-semibold text-xl'>
            Coronavírus (COVID-19): recursos e atualizações
            <FiX size={28} className={'hover:bg-gray-800/30 rounded-full hover:cursor-pointer duration-300'}/>
          </div>
          A segurança e o bem-estar de todos os usuários da Uber são nossa prioridade. Estamos monitorando ativamente a situação do coronavírus (COVID-19) e tomando medidas para ajudar a manter todos em segurança. Acesse nosso site para mais informações.
        </div>

        <div className='relative flex '>
          <img className='z-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1349,h_675/v1653688465/assets/29/74ec2f-a727-47e1-9695-c78f8dadee5f/original/DotCom_Update_Earner_bg2x.jpg'/>
          
          <div className='z-20 absolute sm:w-[640px] left-20 top-16 rounded-md font-medium overflow-hidden flex flex-col bg-gray-100 text-gray-900'>
            
            <div className='px-16 pt-4 flex justify-between text-sm bg-gray-200 shadow-botomInset'>
              <div className='flex flex-col items-center gap-2 text-center w-24 py-4 border-b-4 border-gray-900 hover:text-gray-600 duration-200 hover:cursor-pointer'>
                <FiBarChart size={24}/>
                Faça viagens ou entregas
              </div>

              <div className='flex flex-col items-center gap-2 text-center w-24 py-4 border-b-4 border-transparent hover:text-gray-600 duration-200 hover:cursor-pointer'>
                <MdRestaurant size={24}/>
                Faça um pedido
              </div>

              <div className='flex flex-col items-center gap-2 text-center w-24 p-4 border-b-4 border-transparent hover:text-gray-600 duration-200 hover:cursor-pointer'>
                <IoCarSharp size={24}/>
                Viajar
              </div>
            </div>

            <div className='flex flex-col px-16 text-gray-600 gap-8 py-10 pb-16'>
              <text className='text-gray-900 text-5xl font-semibold'>Assuma o comando e ganhe</text>

              Dirija na plataforma com a maior rede de usuários ativos.

              <button className='p-4 px-8 bg-gray-900 text-gray-100 self-start rounded-md hover:bg-gray-800 duration-300'>Cadastre-se para dirigir</button>

              <text className='underline hover:text-gray-800 hover:cursor-pointer'>Saiba mais sobre como dirigir e fazer entrega</text>
            </div>

          </div>
        </div>

        <div className='relative flex py-14 items-center overflow-hidden'>
          <img className='-z-10 w-full bg-cover h-[320px] bg-center absolute top-0 left-0' src='https://www.uber-assets.com/image/upload/v1613106985/assets/0e/47aa71-35cb-459a-a975-78c61ea300e2/original/HP-U4B-NYC-bkg.png'/>
          
          <div className='flex z-20 flex-col text-gray-800 gap-6 ml-20'>
            <text className='text-4xl font-semibold text-gray-900'>Uber para Empresas</text>
            Transforme a forma como seus colaboradores viajam e fazem refeições.
            <button className='p-4 px-8 bg-gray-900 text-gray-100 self-start rounded-md hover:bg-gray-800 duration-300'>Cadastre-se para dirigir</button>
          </div>
          
        </div>

        <div className='px-20 py-12 text-gray-800'>
          <text className='text-4xl font-semibold leading-16'>Preocupados com a sua segurança, onde <br/>quer que você vá</text>
          
          <div className='grid grid-cols-2 py-14 gap-16'>
            <div className='flex flex-col gap-4 text-gray-600'>
              <img className='' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_550,h_366/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png'/>
              <text className='font-medium text-2xl'>Sua segurança é a nossa prioridade</text>
              Com todos os recursos de segurança e todas as normas do nosso Código da Comunidade Uber, estamos comprometidos em ajudar a criar um ambiente seguro para nossos usuários.
              <text className='underline hover:cursor-pointer text-gray-800'>Leia nosso Código da Comunidade Uber</text>
              <text className='underline hover:cursor-pointer text-gray-800'>Veja todos os recursos de segurança</text>
            </div>

            <div className='flex flex-col gap-4 text-gray-600'>
              <img className='' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_550,h_366/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png'/>
              <text className='font-medium text-2xl'>Colocamos mais de 10.000 cidades em movimento</text>
              O app está disponível em milhares de cidades no mundo todo para que você possa solicitar uma viagem mesmo longe de casa.
              <text className='underline hover:cursor-pointer text-gray-800'>Ver todas as cidades</text>
            </div>
          </div>
        </div>

        <div className='text-gray-600 grid grid-cols-3 gap-10 px-20'>
          <div className='flex flex-col gap-4'>
            <IoPeopleOutline size={36} className='text-gray-900'/>
            <text className='font-semibold text-xl'>Quem somos</text>
            Veja como começamos, o que nos move e como criamos oportunidades.
            <text className='text-gray-800 underline hover:cursor-pointer hover:text-gray-600'>Saiba mais sobre a Uber</text>
          </div>

          <div className='flex flex-col gap-4'>
            <IoDocumentTextOutline size={36} className='text-gray-900'/>
            <text className='font-semibold text-xl'>Newsroom</text>
            Confira as notícias mais recentes sobre lançamentos, iniciativas e parcerias.
            <text className='text-gray-800 underline hover:cursor-pointer hover:text-gray-600'>Acesse a Newsroom da Uber</text>
          </div>

          <div className='flex flex-col gap-4'>
            <IoHomeOutline size={36} className='text-gray-900'/>
            <text className='font-semibold text-xl'>Cidadania global</text>
            Leia sobre nosso compromisso de gerar um impacto positivo nas cidades que atendemos.
            <text className='text-gray-800 underline hover:cursor-pointer hover:text-gray-600'>Saiba mais sobre nossas iniciativas</text>
          </div>
        </div>

        <div className='bg-gray-200 flex flex-col gap-10 px-20 py-12 my-16 text-gray-800 text-5xl font-medium'>
          Confira ainda mais opções nos apps

          <div className='gap-10 grid grid-cols-2 w-full justify-between'>
            <div className='p-4 bg-gray-100 flex items-center font-medium text-2xl gap-4 shadow-box hover:shadow-boxHover duration-200 rounded-md group transition-all'>
              <img className='' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png'/>
              Baixe o app de parceiro
              <IoArrowForward size={36} className='ml-auto group-hover:translate-x-3 duration-700'/>
            </div>

            <div className='p-4 bg-gray-100 flex items-center font-medium text-2xl gap-4 shadow-box hover:shadow-boxHover duration-200 rounded-md group transition-all'>
              <img className='' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png'/>
              Baixe o app da Uber
              <IoArrowForward size={36} className='ml-auto group-hover:translate-x-3 duration-700'/>
            </div>
          </div>

        </div>

        <div className='grid grid-cols-2 gap-10 text-gray-900 font-medium text-3xl px-20 py-10'>
          <div className='flex items-center justify-between p-2 pb-6 border-b-2 hover:bg-gray-200/40 duration-300 rounded-sm border-gray-900 group hover:text-gray-600 hover:border-gray-600 hover:cursor-pointer'>
            Cadastre-se para dirigir
            <IoArrowForward size={48} className='mr-4 group-hover:translate-x-6 duration-500'/>
          </div>

          <div className='flex items-center justify-between p-2 pb-6 border-b-2 hover:bg-gray-200/40 duration-300 rounded-sm border-gray-900 group hover:text-gray-600 hover:border-gray-600 hover:cursor-pointer'>
            Cadastre-se para viajar
            <IoArrowForward size={48} className='mr-4 group-hover:translate-x-6 duration-500'/>
          </div>
        </div>
      </section>

      <footer className='bg-gray-900 p-20 w-full flex flex-col mt-6 gap-16 group'>
        <div className='flex flex-col gap-10 border-b-2 border-transparent pb-4 group-hover:border-gray-100 duration-300'>
          <text className='text-3xl'>Uber</text>
          <text className='hover:underline hover:cursor-pointer hover:brightness-75 duration-300'>Acesse a Central de Ajuda</text>
        </div>

        <div className='grid grid-cols-4 w-full gap-6'>
          <div className='flex flex-col text-sm gap-2 group-[sec]'>
            <text className='font-semibold text-2xl mb-2 group-[sec]:-hover:underline duration-1000 transition-all'>Empresa</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Quem Somos</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>O que Oferecemos</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Newsroom</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Investidores</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Blog</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Carreiras</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>AI</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Gift Cards</text>
          </div>

          <div className='flex flex-col text-sm gap-2 group'>
            <text className='font-semibold text-2xl mb-2 group-[sec]:underline duration-1000 transition-all'>Produtos</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Viajar</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Dirigir</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Fazer Entregas</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Faça um Pedido</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Uber para Empresas</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Uber Freight</text>
          </div>

          <div className='flex flex-col text-sm gap-2 group'>
            <text className='font-semibold text-2xl mb-2 group-[sec]:underline duration-1000 transition-all'>Cidadania Global</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Segurança</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Diversidade e Inclusão</text>
          </div>

          <div className='flex flex-col text-sm gap-2 group'>
            <text className='font-semibold text-2xl mb-2 group-[sec]:underline duration-1000 transition-all'>Viaje</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Aeroportos</text>
            <text className='hover:brightness-50 hover:cursor-pointer'>Cidades</text>
          </div>

        </div>

        <div className='flex items-center justify-between'>
          <div className='flex gap-12'>
            <SiFacebook size={42} className='p-2 hover:bg-gray-200/30 rounded-md duration-300 hover:cursor-pointer'/>
            <SiTwitter size={42} className='p-2 hover:bg-gray-200/30 rounded-md duration-300 hover:cursor-pointer'/>
            <SiYoutube size={42} className='p-2 hover:bg-gray-200/30 rounded-md duration-300 hover:cursor-pointer'/>
            <SiLinkedin size={42} className='p-2 hover:bg-gray-200/30 rounded-md duration-300 hover:cursor-pointer'/>
            <SiInstagram size={42} className='p-2 hover:bg-gray-200/30 rounded-md duration-300 hover:cursor-pointer'/>
          </div>

          <div className='gap-6 flex '>
            <div className='flex gap-2 items-center hover:bg-gray-200/30 rounded-full duration-300 p-2 hover:cursor-pointer'>
              <MdLanguage size={32}/>
              Português (Brasil)
            </div>

            <div className='flex gap-2 items-center hover:bg-gray-200/30 rounded-full duration-300 p-2 hover:cursor-pointer'>
              <MdLocationOn size={32}/>
              Campo Grande
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
