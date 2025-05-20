export default function Header() {
    return (
        <header className="w-full bg-transparent flex justify-center items-center h-[10vh] sm:h-[12vh] md:h-[10vh] px-4 sm:px-8 absolute">
            <div className="flex w-[60%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-[40%] sm:h-[50%] md:h-[55%] max-[500px]:hidden bg-black rounded-[2vh] sm:rounded-[3vh]">
                <ul className="text-white flex flex-wrap justify-around items-center w-full font-[Montserrat] text-[12px] sm:text-[14px] font-extralight gap-2">
                    <a href=""><li>Nosso Produto</li></a>
                    <a href=""><li>Download</li></a>
                    <a href=""><li>Contato</li></a>
                    <a href=""><li>Quem Somos</li></a>
                </ul>
            </div>
        </header>
    );
}
