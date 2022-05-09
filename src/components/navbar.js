import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import getIcon from "../components/icons"
// import iconList from "../components/icons"

export default function Navbar({ siteTitle, items }) {
  const [isOpen, setOpen] = React.useState(false)

  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? {
          className:
            "block lg:scale-110 rounded-lg border-2 border-white/30 bg-white/30 p-2 text-sm",
        }
      : {}
  }

  function toggle() {
    setOpen(!isOpen)
  }

  const categories = useStaticQuery(graphql`
    query SiteNavQuery {
      allStrapiCategory(
        filter: {
          games: {
            elemMatch: {
              appid: {
                in: [
                  "Knife"
                  "JumpSmash"
                  "CrazyMoto"
                  "CrazyKart3D"
                  "FireTheGun"
                  "FeverRacing"
                  "ColorBall3D"
                  "CrazyKnife"
                  "BoardTheTrain"
                  "MrRacer"
                  "BigSword"
                  "HiTaxi"
                  "TrafficRun"
                  "MrBullet"
                  "LetMeIn"
                  "SnakeGo"
                  "DessertConnect"
                  "SwiftRider"
                  "CrackShot"
                  "CrazyGunfight"
                  "GoldenGlove"
                  "ColorRing"
                  "PianoKeys"
                  "ArchersKing"
                  "MyBabyCare"
                  "DartsKing3D"
                  "CrazyRace"
                  "BallIsComing"
                  "HungyBunny"
                  "TheSameWorld"
                  "SuperMiner"
                  "BounceShooter"
                  "HillRacing"
                  "BatterKing"
                  "BlockGun3D"
                  "ZombieSurvival"
                  "FruitMonster"
                  "FierceCity"
                  "IronAttack"
                  "AceMan"
                  "AirBrawl"
                  "BumbleShooter"
                  "AmazingRoad"
                  "RainbowSplash"
                  "MagicParkour"
                  "CrazyDrift"
                  "FisherMan"
                  "FruitsFall"
                  "RocketJump"
                  "MagicPaint"
                  "GlidingCharger"
                  "RoadCharger"
                  "ArcheryMaster"
                  "UltraDrift"
                  "SharkisComing"
                  "PuppyRun"
                  "PenguinDash"
                  "MonsterCrash"
                  "DeathJump"
                  "HungryMonster"
                  "HungryAnimals"
                  "JumpingMonkey"
                  "MergeKill"
                  "CrazyTrain3D"
                  "CrazyHammer"
                  "VirusWar"
                  "TrappedPirate"
                  "StickmanVsZombies"
                  "FingerCannon"
                  "BulletMan"
                  "KnockBalls"
                  "GunShooter"
                  "MergeGuns3D"
                  "BulletMaster3D"
                  "CrashTower3D"
                  "TowerBlast3D"
                  "ShootSmash"
                  "ShootingCubes"
                ]
              }
            }
          }
        }
      ) {
        nodes {
          name
          slug
        }
      }
    }
  `)

  // console.log(items)
  // console.log(navItems)
  const navItems = items || categories.allStrapiCategory.nodes

  return (
    <header className="px-3 pt-6 lg:pt-0">
      <nav className="container relative mx-auto my-4 rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-500 shadow-lg shadow-black/20 lg:my-6 lg:rounded-full">
        <Link
          to="/"
          title={siteTitle}
          className="absolute -left-3 -top-10 z-10 flex h-10 w-10 transform items-center justify-center rounded-full duration-300 lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:bg-white lg:hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-lime-500 lg:h-5 lg:w-5"
            viewBox="0 0 20 20"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span className="sr-only">{siteTitle}</span>
        </Link>
        <button
          onClick={toggle}
          className="group absolute -right-3 -top-10 z-10 h-10 w-10 lg:hidden"
        >
          <span
            className={`absolute top-1/2 left-1/2 block h-[2px] w-6 -translate-y-1/2 -translate-x-1/2 transform bg-lime-500 duration-300 ${
              isOpen ? `-rotate-45` : `-translate-y-[8px] rotate-0`
            }`}
          ></span>
          <span
            className={`absolute top-1/2 left-1/2 block h-[2px] w-6 -translate-x-1/2 transform bg-lime-500 duration-300 ${
              isOpen ? `rotate-45` : `translate-y-[6px] rotate-0`
            }`}
          ></span>
          <span
            className={`absolute top-1/2 left-1/2 h-[2px] w-6 -translate-y-1/2 -translate-x-1/2 bg-lime-500 ${
              isOpen ? `rotate-45 opacity-0` : `rotate-0 opacity-100`
            }`}
          ></span>
        </button>
        <ul
          className={`${
            isOpen ? "" : "hidden "
          }grid grid-cols-2 gap-2 p-4 font-medium drop-shadow sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-nowrap lg:justify-center xl:space-x-8`}
        >
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  getProps={isActive}
                  to={`/category/${item.slug}`}
                  title={`${item.name} Games`}
                  className={`animated block transform rounded-lg border-2 border-white/10 bg-white/10 p-2 text-sm duration-300 ease-in-out lg:border-transparent lg:bg-transparent lg:hover:scale-110 lg:hover:bg-white/20`}
                >
                  <div className="flex scale-95 items-center space-x-1">
                    <span>{getIcon(item.slug)}</span>
                    <span>{item.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
