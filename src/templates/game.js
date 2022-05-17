import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Detail from "../components/detail"
import List from "../components/list"
import Banner from "../components/banner"
import { ADS_SLOT_ID } from "../lib/constants"
import getIcon from "../components/icons"

import { graphql } from "gatsby"

export default function GameTemplate({ data }) {
  const game = data.strapiGame
  const relatedGames = data.allStrapiGame.nodes

  return (
    <Layout>
      <Seo title={game.title} />

      <Banner
        className={`banner`}
        style={{ display: "block" }}
        slot={ADS_SLOT_ID.game}
        responsive="false"
      />

      <div className="container mx-auto">
        <Detail game={game} />
        <Banner
          className={`banner mb-6`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.game}
          responsive="false"
        />
        <h2 className="mt-5 flex items-center space-x-2 px-4 text-lg font-bold">
          <span className="text-yellow-500">{getIcon(`related`)}</span>
          <span>You May Also Like</span>
        </h2>
        <List items={relatedGames} type="grid" cols="4" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($appid: String) {
    file(relativeDirectory: { eq: "games" }, name: { eq: $appid }) {
      name
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF])
        fluid {
          sizes
          src
          srcSet
        }
      }
    }
    allFile(
      filter: { relativeDirectory: { eq: "games" } }
      sort: { fields: name }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
        name
      }
      totalCount
    }
    strapiGame(appid: { eq: $appid }) {
      description
      icon_url
      appid
      title
      category {
        name
        slug
      }
    }
    allStrapiGame(
      filter: {
        appid: {
          ne: $appid
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
      sort: { fields: creation_date, order: DESC }
      limit: 12
    ) {
      nodes {
        title
        icon_url
        slug
        appid
      }
    }
  }
`
