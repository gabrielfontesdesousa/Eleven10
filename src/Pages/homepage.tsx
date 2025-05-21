import Header from '../Components/Header/index.tsx';
import backgroundImage from '../assets/BackgroundHome.png';
import backgroundImage2 from '../assets/background2part.png'
import { motion } from "motion/react"
export default function HomePage() {
    return (
        <>
            <div className="w-full h-[100vh] bg-cover bg-center z-[-10] absolute " style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <Header></Header>
            <div className='flex w-full h-[100vh] z-[-1] items-center'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='w-[33%] h-[42vh] flex-col md:w-[40%] ml-[12%]'>
                    <h1 className="font-[Montserrat] font-light text-[28px] sm:text-[30px] md:text-[42px] text-white leading-tight">
                        A rede social feita para quem vive, respira e conquista através do esporte
                    </h1>
                    <h2 className="font-[Montserrat] max-[630px]:text-[15px] font-light text-xs sm:text-[15px] md:text-[20px] py-7 text-gray-400 leading-relaxed">
                        Treine, compartilhe e evolua com uma comunidade feita para quem vive o esporte de verdade.
                    </h2>
                    <a href="#" className="inline-block px-8 py-2 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium rounded-xl bg-white text-black hover:bg-gray-300 font-[Montserrat] transition-all">
                        Conectar-se
                    </a>
                </motion.div>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className='w-[50%] flex items-center justify-center'>
                    <img src="/src/assets/MockupHome.png" className="w-[70%] sm:w-[66%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] max-w-full h-auto"
                        alt="" />
                </motion.div>
            </div >
            <div className=" text-black font-sans flex flex-col" style={{ backgroundImage: `url(${backgroundImage2})` }}>
                <section className="py-[4vw] px-[4vw] max-w-[90vw] mx-auto">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ amount: 0.2 }} className="text-center mb-[3vw] px-[2vw]">
                        <h2 className="text-[3.4vw] text-[#3DB342] font-[Montserrat] font-bold sm:text-[3vw] md:text-[2.2vw] font-bold py-[2.5vw]">
                            Transforme sua jornada esportiva
                        </h2>
                        <p className="text-white text-[4vw] sm:text-[2.5vw] md:text-[1.25vw] font-[Montserrat]">
                            Conecte-se com atletas, compartilhe conquistas e eleve sua performance com a rede social feita para quem vive o esporte.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ amount: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4vw] px-[0.5vw]">
                        <div className="bg-gray-100 p-[3vw] rounded-[2vw] shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] font-semibold mb-[1vw] font-[Montserrat]">
                                    Conexões entre atletas
                                </h3>
                                <p className="text-gray-700 mb-[2vw] text-[3.5vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat]">
                                    Encontre atletas com interesses semelhantes, treine junto e troque experiências valiosas.
                                </p>
                            </div>
                            <button className="bg-[#3DB342] text-white font-bold py-[1vw] px-[2vw] rounded-full w-fit text-[3.5vw] sm:text-[2vw] md:text-[1vw] cursor-pointer hover:scale-105 hover:opacity-80 transition-transform">
                                Saiba mais
                            </button>
                        </div>

                        <div className="bg-gray-100 p-[3vw] rounded-[2vw] shadow-md flex flex-col justify-between ">
                            <div>
                                <h3 className="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] font-semibold mb-[1vw] font-[Montserrat]">
                                    Compartilhamento de conquistas
                                </h3>
                                <p className="text-gray-700 mb-[2vw] text-[3.5vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat]">
                                    Publique suas metas atingidas, treinos e medalhas. Inspire e seja inspirado.
                                </p>
                            </div>
                            <button className="bg-[#3DB342] text-white font-bold py-[1vw] px-[2vw] rounded-full w-fit text-[3.5vw] sm:text-[2vw] md:text-[1vw] cursor-pointer hover:scale-105 hover:opacity-80 transition-transform">
                                Saiba mais
                            </button>
                        </div>
                        <div className="bg-gray-100 p-[3vw] rounded-[2vw] shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] font-semibold mb-[1vw]">
                                    Desempenho em destaque
                                </h3>
                                <p className="text-gray-700 mb-[2vw] text-[3.5vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat]">
                                    Acompanhe sua evolução com gráficos, metas e feedbacks da comunidade esportiva.
                                </p>
                            </div>
                            <button className="bg-[#3DB342] text-white font-bold py-[1vw] px-[2vw] rounded-full w-fit text-[3.5vw] sm:text-[2vw] md:text-[1vw] cursor-pointer hover:scale-105 hover:opacity-80 transition-transform">
                                Saiba mais
                            </button>
                        </div>
                    </motion.div>
                </section>
                <motion.section
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ amount: 0.3 }} className="min-h-screen text-white flex flex-col lg:flex-row items-center justify-center px-[5vw] py-[15 vh] font-[Montserrat]">
                    <div className="w-full lg:w-1/2 flex justify-center   lg:mb-0">
                        <img
                            src="/src/assets/MockupAboutUs.png"
                            alt="Perfil do atleta"
                            className=" w-[60vw] max-w-[300px] lg:max-w-[400px] shadow-lg"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="text-[#3DB342] text-[3.5vw] lg:text-[1.2vw] tracking-widest mb-2 uppercase">
                            SOBRE NÓS
                        </p>
                        <h1 className="text-[7vw] lg:text-[2.8vw] font-bold leading-tight">
                            Olá, somos a <span className="text-[#3DB342]">Eleven10</span>
                        </h1>
                        <p className="text-gray-400 text-[3.8vw] lg:text-[1.1vw] max-w-[90vw] lg:max-w-[80%] mt-4 mb-6">
                            Nossa missão é conectar atletas de todo o Brasil em uma comunidade vibrante, onde cada conquista é celebrada e cada treino vira inspiração. Compartilhe seus avanços, siga atletas com os mesmos objetivos e encontre motivação todos os dias.
                        </p>
                        <p className="text-[#3DB342] font-signature text-[4vw] lg:text-[1.5vw] mb-4">
                            Equipe Eleven10
                        </p>
                    </div>
                </motion.section>
                <motion.section
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ amount: 0.3 }} className="min-h-screen  text-white py-[5vh] px-[5vw] flex flex-col items-center justify-center">
                    <div className="text-center mb-[5vh]">
                        <div className="text-4xl mb-2"></div>
                        <h2 className="text-[6vw] sm:text-[3vw] font-bold mb-2 font-[Montserrat] text-[#3DB342]">Fale com a gente</h2>
                        <p className="font-[Montserrat] text-[3.5vw] sm:text-[1.3vw] text-gray-300 max-w-[80vw] sm:max-w-[50vw] mx-auto">
                            Tem uma dúvida, sugestão ou quer saber mais sobre a rede social dos atletas? Entre em contato conosco e vamos conversar.
                        </p>

                    </div>

                    <form className=" font-[Montserrat] bg-gray-700/20 backdrop-blur-lg p-[5vw] sm:p-[2vw] rounded-2xl w-full max-w-[700px] grid grid-cols-1 sm:grid-cols-2 gap-[2vw]">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Nome</label>
                            <input type="text" className="bg-gray-800 text-white p-1 rounded-lg focus:outline-none" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Ultimo Nome</label>
                            <input type="text" className="bg-gray-800 text-white p-1 rounded-lg focus:outline-none" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Telefone</label>
                            <input type="text" className="bg-gray-800 text-white p-1 rounded-lg focus:outline-none" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm">Email</label>
                            <input type="email" className="bg-gray-800 text-white p-1 rounded-lg focus:outline-none" />
                        </div>
                        <div className="flex flex-col sm:col-span-2">
                            <label className="mb-1 text-sm">Sua Mensagem</label>
                            <textarea className="bg-gray-800 text-white p-2 rounded-lg focus:outline-none"></textarea>
                        </div>
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full py-3 bg-white text-black rounded-full font-semibold cursor-pointer hover:scale-105 hover:opacity-80 transition-transform"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-wrap justify-center gap-6 text-[3vw] sm:text-[1vw] mt-6">
                        <div className="flex items-center gap-2  font-[Montserrat]">
                            <p>11 1234-5678</p>
                        </div>
                        <div className="flex items-center gap-2  font-[Montserrat]">
                            <p>info.Eleven10@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2  font-[Montserrat]">
                            <p>Rua Guarani, Diadema</p>
                        </div>
                    </div>
                </motion.section>
            </div >
        </>
    );
}
