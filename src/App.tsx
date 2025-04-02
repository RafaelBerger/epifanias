import {
  ArrowRight,
  InstagramLogo,
  Star,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

function App() {
  return (
    <>
      <div className="bg-[#1D1B27] w-screen min-h-screen h-full flex flex-col items-center">
        <h1 className="text-7xl text-center pt-8 bebas-neue">
          <strong>
            BANDA <br />
            EPIFANIAS
          </strong>
        </h1>

        <div className="w-screen h-auto pt-16 flex flex-col items-center">
          <div className="2xl:w-3/12 w-10/12 max-w-[480px] bg-[#6A0DAD] rounded-xl flex flex-col justify-center items-center ">
            <h2 className="text-2xl pt-2">Mídias Sociais</h2>

            <div className=" flex flex-col 2xl:w-11/12 w-11/12 items-center pt-6 pb-4 gap-3 ">
              <a
                href="https://www.instagram.com/bandaepifanias/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <span className="w-full px-4 2xl:px-6 bg-[#1D1B27]  hover:bg-[#322C4A] transition-colors duration-200 rounded-md p-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <InstagramLogo size={18} />
                    Instagram
                  </div>
                  <div className="">
                    <ArrowRight size={18} />
                  </div>
                </span>
              </a>

              <a
                href="https://www.tiktok.com/@bandaepifanias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <span className="w-full px-4 2xl:px-6 bg-[#1D1B27]  hover:bg-[#322C4A] transition-colors duration-200 rounded-md p-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <TiktokLogo size={18} />
                    Tik tok
                  </div>
                  <div className="">
                    <ArrowRight size={18} />
                  </div>
                </span>
              </a>

              <a
                href="https://www.youtube.com/@BandaEpifanias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <span className="w-full px-4 2xl:px-6 bg-[#1D1B27]  hover:bg-[#322C4A] transition-colors duration-200 rounded-md p-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <YoutubeLogo size={18} />
                    Youtube
                  </div>
                  <div className="">
                    <ArrowRight size={18} />
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-screen h-auto pt-16 flex flex-col items-center">
          <div className="2xl:w-3/12 w-10/12 max-w-[480px] bg-[#6A0DAD] rounded-xl flex flex-col justify-center items-center">
            <h2 className="text-2xl pt-2">Integrantes</h2>

            <div className="flex flex-col 2xl:w-11/12 w-11/12 items-center pt-6 pb-4 gap-3">
              <a
                href="https://www.instagram.com/lelecore.atelie/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <span className="w-full px-4 2xl:px-6 bg-[#1D1B27]  hover:bg-[#322C4A]  transition-colors duration-200 rounded-md p-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Star size={18} weight="fill" />
                    Lelê
                  </div>
                  <div className="">
                    <ArrowRight size={18} />
                  </div>
                </span>
              </a>
              <a
                href="https://www.instagram.com/meirelonho/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <span className="w-full px-4 2xl:px-6 bg-[#1D1B27]  hover:bg-[#322C4A]  transition-colors duration-200 rounded-md p-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Star size={18} weight="fill" />
                    Victor
                  </div>
                  <div className="">
                    <ArrowRight size={18} />
                  </div>
                </span>
              </a>
              <a
                href="https://www.instagram.com/feliltpe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <span className="w-full px-4 2xl:px-6 bg-[#1D1B27]  hover:bg-[#322C4A]  transition-colors duration-200 rounded-md p-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Star size={18} weight="fill" />
                    Japa
                  </div>
                  <div className="">
                    <ArrowRight size={18} />
                  </div>
                </span>
              </a>
              <a
                href="https://www.instagram.com/_bardinho_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <span className="w-full px-4 2xl:px-6 bg-[#1D1B27]  hover:bg-[#322C4A]  transition-colors duration-200 rounded-md p-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Star size={18} weight="fill" />
                    Luan
                  </div>
                  <div className="">
                    <ArrowRight size={18} />
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-screen h-auto flex flex-col pt-10 items-center">
          <h2 className="text-2xl">Siga nossas redes sociais</h2>
          <div className="flex gap-2 pt-4 pb-8">
            <a
              href="https://www.instagram.com/bandaepifanias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={28} />
            </a>
            <a
              href="https://www.tiktok.com/@bandaepifanias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiktokLogo size={28} />
            </a>
            <a
              href="https://www.youtube.com/@BandaEpifanias-p9i"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
