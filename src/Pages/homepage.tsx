import Header from '../Components/Header/index.tsx';
import backgroundImage from '../assets/BackgroundHome.png';
export default function HomePage() {
    return (
        <>
            <div className="w-full h-[100vh] bg-cover bg-center z-[-10] absolute" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <Header></Header>
            <div className='flex w-full h-[100vh] z-[-1] absolute items-center ml-[12%]'>
                <div className='w-[33%] h-[42vh] flex-col md:w-[40%]'>
                    <h1 className="font-[Montserrat] font-light text-[28px] sm:text-[30px] md:text-[42px] text-white leading-tight">
                        A rede social feita para quem vive, respira e conquista através do esporte
                    </h1>
                    <h2 className="font-[Montserrat] max-[630px]:text-[15px] font-light text-xs sm:text-[15px] md:text-[20px] py-7 text-gray-400 leading-relaxed">
                        Treine, compartilhe e evolua com uma comunidade feita para quem vive o esporte de verdade.
                    </h2>
                    <a href="#" className="inline-block px-8 py-2 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium rounded-xl bg-white text-black hover:bg-gray-300 font-[Montserrat] transition-all">
                        Conectar-se
                    </a>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <img src="/src/assets/MockupHome.png" className="w-[70%] sm:w-[66%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] max-w-full h-auto"
                        alt="" />
                </div>
            </div>
        </>
    );
}
