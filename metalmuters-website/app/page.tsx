import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main id="main-hero" className="flex flex-1 w-full flex-col items-center justify-between bg-white">
        <div className="flex w-full flex-col items-center justify-center bg-[url(/title-card-bg-soft.png)] bg-repeat h-screen">
          <div className="flex w-full max-w-3xl flex-col items-center justify-center">
            <div className="image-stack relative">
              <Image
                src="/title-card-backcircle.png"
                alt="backcircle"
                className="absolute animate-spin-backcircle z-10"
                width={1232}
                height={706}
              />
              <Image
                src="/title-card-frontcircle.png"
                alt="backcircle"
                className="absolute opacity-75 animate-spin-frontcircle z-20"
                width={1232}
                height={706}
              />
              <Image
                src="/title-card-metals.png"
                alt="backcircle"
                className="absolute z-30"
                width={1232}
                height={706}
              />
              <Image
                src="/title-card-text-glow.png"
                alt="backcircle"
                className="absolute z-40"
                width={1232}
                height={706}
              />
              <Image
                src="/title-card-text-glow.png"
                alt="backcircle"
                className="z-40"
                width={1232}
                height={706}
              />
            </div>
            <div className="flex flex-col items-center gap-6 text-center py-8 z-100">
              <p className="max-w-sm text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Half-puzzle, half-roguelike where you turn lead into gold!
              </p>
            </div>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row z-100">
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                href="https://store.steampowered.com/app/4287050/MetalMuters/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full flex-col items-center justify-between bg-stone-100">
          <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-16">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-600">
              Academia
            </h1>
            <p className="max-w-lg text-lg leading-8 text-center text-zinc-400">
              Solve 130+ puzzles that challenges your understanding on the game mechanic.
            </p>
            <Image
              src="/gif-academia-loop.gif"
              alt="backcircle"
              className="px-4 py-8"
              width={848}
              height={480}
              unoptimized={true} 
            />
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-600">
              Venture
            </h1>
            <p className="max-w-lg text-lg leading-8 text-center text-zinc-400">
              A 28-stage roguelike experience where you produce & sell metals to earn as much coins as possible.
            </p>
            <Image
              src="/gif-ventureshop-loop.gif"
              alt="backcircle"
              className="px-4 py-8"
              width={848}
              height={480}
              unoptimized={true} 
            />
          </div>
        </div>
        <div className="flex flex-1 w-full flex-col items-center justify-between bg-[#26203e]">
          <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-16">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-200">
              Developer
            </h1>
            <p className="max-w-sm text-lg leading-8 text-center text-zinc-400 py-4">
              MetalMuters is developed by a solo developer at <strong>Big Fish Carnival</strong>
            </p>
            <div className="py-4">
              <a
                href="https://x.com/bigfishcarnival"
                target="_blank"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="mx-4 mb-2 inline-block rounded-full bg-white p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <span className="[&>svg]:h-8 [&>svg]:w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#26203e"
                    viewBox="0 0 512 512">
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.youtube.com/@BigFishCarnival"
                target="_blank"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="mx-4 mb-2 inline-block rounded-full bg-white p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                <span className="[&>svg]:h-8 [&>svg]:w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#26203e"
                    viewBox="0 0 576 512">
                    <path
                      d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full flex-col items-center justify-between bg-[#26203e]">
          <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between mb-4">
                <p>© 2026 Big Fish Carnival. All Rights Reserved</p>
          </div>
        </div>
      </main>
    </div>
  );
}
