import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import getIcon from "../components/icons"

export default function Navbar({ siteTitle, items, menuOpen }) {
  const [isOpen, setOpen] = React.useState(menuOpen)

  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? {
          className:
            "block lg:scale-110 rounded-lg border-2 border-white/30 bg-white/30 p-2 text-sm font-bold",
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
                  "BigSword"
                  "BoardTheTrain"
                  "FireTheGun"
                  "MergeGuns3D"
                  "FeverRacing"
                  "ColorBall3D"
                  "ZombieSurvival"
                  "CrazyMoto"
                  "CrazyKart3D"
                  "LetMeIn"
                  "BumbleShooter"
                  "Knife"
                  "HiTaxi"
                  "TrafficRun"
                  "BulletMaster3D"
                  "MrRacer"
                  "MagicParkour"
                  "FrozenMagic"
                  "MrBullet"
                  "JumpSmash"
                  "CrazyKnife"
                  "TrafficPassing"
                  "SuperThrow"
                  "AceMan"
                  "BatterKing"
                  "GoldenGlove"
                  "KnockBalls"
                  "CrashTower3D"
                  "DragonCrush"
                  "HungryAnimals"
                  "SnakeGo"
                  "DessertConnect"
                  "SwiftRider"
                  "CrackShot"
                  "CrazyGunfight"
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
                  "BlockGun3D"
                  "FruitMonster"
                  "FierceCity"
                  "IronAttack"
                  "AirBrawl"
                  "AmazingRoad"
                  "RainbowSplash"
                  "CrazyDrift"
                  "FruitsFall"
                  "RocketJump"
                  "MagicPaint"
                  "GlidingCharger"
                  "RoadCharger"
                  "ArcheryMaster"
                  "UltraDrift"
                  "SharkIsComing"
                  "PuppyRun"
                  "PenguinDash"
                  "MonsterCrash"
                  "DeathJump"
                  "HungryMonster"
                  "JumpingMonkey"
                  "MergeKill"
                  "CrazyTrain3D"
                  "CrazyHammer"
                  "VirusWar"
                  "TrappedPirate"
                  "StickmanVsZombies"
                  "FingerCannon"
                  "BulletMan"
                  "GunShooter"
                  "TowerBlast3D"
                  "ShootSmash"
                  "ShootingCubes"
                  "BubbleBlast"
                  "FlyPass"
                  "KillAllZombies"
                  "CollectColorfulBalls"
                  "KimbapRun"
                  "AnipopLink"
                  "PetsMatch"
                  "HappyBilliards"
                  "CrazyBomb"
                  "HelpTheZombie"
                  "SaveThePets"
                  "SoccerHero"
                  "TableTennisChampionship"
                  "MagicDonuts"
                  "SolitaireClassic"
                  "DeathRun"
                  "IdleRestaurantTycoon"
                  "ImEmpire"
                  "MahjongConnect"
                  "MiningMaster"
                  "Transform"
                  "DefenseTower"
                  "TwistyRoad"
                  "ZooBlast"
                  "ZumaMarbles"
                  "BlockPuzzle"
                  "CrazyPortal"
                  "DressQueen"
                  "MahjongLink3D"
                  "MergeAndDefense"
                  "MergeMagicJewellery"
                  "PetRun"
                  "SkyRunning3D"
                  "SuperGolf"
                  "TowerDefenseX"
                  "PandaRescue"
                  "FillTheGlass"
                  "MagicNumber"
                  "PlantBeatZombies"
                  "AirHockey3D"
                  "MyBowling3D"
                  "Chess3D"
                  "8BallKing"
                  "MyUnicorn"
                  "MagicJigsaw"
                  "FairyTalesPuzzle"
                  "PipePuzzle"
                  "SplittingCells"
                  "FeedMaster"
                  "FinalBattle"
                  "SuperDefense"
                  "Super2048"
                  "BubblePop"
                  "RelivedLife"
                  "CandyHit"
                  "MergeCat"
                  "MelodyLink"
                  "PuzzleVenture"
                  "BrainMaster"
                  "AntRun"
                  "BombingTime"
                  "BlockMaze"
                  "HappyTetris"
                  "MagicPainter"
                  "MatchingCook"
                  "ColorBead"
                  "ColorSplash"
                  "RollingAgent"
                  "RushingRover"
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
    <header className="container mx-auto px-3 pt-6 lg:pt-0">
      <nav className="relative my-4 rounded-3xl bg-gradient-to-b from-yellow-500 to-amber-500 shadow-lg shadow-black/20 lg:my-6 lg:rounded-full">
        <Link
          to="/"
          title={siteTitle}
          className="absolute -left-3 -top-10 z-10 flex h-10 w-10 transform items-center justify-center rounded-full duration-300 lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:bg-white lg:hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-300 lg:h-5 lg:w-5"
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
            className={`absolute top-1/2 left-1/2 block h-[2px] w-5 origin-center -translate-y-1/2 -translate-x-1/2 transform bg-yellow-300 duration-300 ${
              isOpen
                ? `translate-y-[-1px] -rotate-45`
                : `-translate-y-[5px] rotate-0`
            }`}
          ></span>
          <span
            className={`absolute top-1/2 left-1/2 block h-[2px] w-5 origin-center -translate-x-1/2 transform bg-yellow-300 duration-300 ${
              isOpen
                ? `translate-y-[-1px] rotate-45`
                : `translate-y-[3px] rotate-0`
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
                  className={`animated block transform rounded-lg border-2 border-white/10 bg-white/10 p-2 text-sm font-bold text-white duration-300 ease-in-out lg:border-transparent lg:bg-transparent lg:hover:scale-125 lg:hover:bg-white/20`}
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
