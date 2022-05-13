import * as React from "react"
import { Link } from "gatsby"
import { GAME_PATH } from "../lib/constants"
// import { GatsbyImage } from "gatsby-plugin-image"
import Image from "./image"

export default function Detail({ game, gameImg }) {
  return (
    <>
      <div className="flex origin-left scale-95 flex-row space-x-2 px-6 pb-3">
        <Link to={`/`}>Home</Link>
        <span>&gt;</span>
        <Link to={`/category/${game.category.slug}`}>{game.category.name}</Link>
        <span>&gt;</span>
        <span className="opacity-50">{game.title}</span>
      </div>
      <div className="mx-3 flex flex-col items-center rounded-[2rem] border-8 border-sky-100 bg-white p-5 text-sky-700 shadow-lg shadow-black/10 md:flex-row md:items-start">
        <div className="block h-32 w-32 shrink-0 overflow-hidden rounded-xl">
          <Image
            className="h-32 w-32 rounded-xl object-fill"
            src={game.appid}
            alt={game.title}
            width={128}
            height={128}
          />
          {/* <GatsbyImage image={gameImg} alt={game.title} width={96} /> */}
        </div>
        <div className="md:px-4">
          <h1 className="py-2 text-center text-xl font-semibold md:text-left md:text-3xl">
            {game.title}
          </h1>
          <div className="text-center md:text-left">
            <Link
              to={`/category/${game.category.slug}`}
              className="inline-block scale-90 rounded-md bg-sky-600/80 py-1 px-2 text-xs text-sky-100/90 shadow-md shadow-sky-500/30"
            >
              <span className="uppercase">{game.category.name}</span>
            </Link>
          </div>
          <div className="py-3 text-left text-xs text-sky-800/80 md:text-sm">
            {game.description}
          </div>
        </div>
      </div>
      <div className="mx-3 py-4">
        <a
          className="mx-auto block rounded-full bg-lime-500 p-3 text-center text-lg font-semibold text-white shadow-xl shadow-black/20 transition-transform duration-300 ease-in-out md:w-96 md:hover:scale-110 md:hover:shadow-2xl md:hover:shadow-black/40 md:hover:delay-100 lg:p-4 lg:text-2xl"
          href={`${GAME_PATH}${game.appid}#play`}
        >
          Play Now
        </a>
      </div>
    </>
  )
}
