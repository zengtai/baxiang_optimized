import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Detail from "../components/detail"
import List from "../components/list"
import { useStaticQuery, graphql } from "gatsby"

export default function GameTemplate({ data }) {
  // const { game } = data.strapiGame
  const { title, description, icon_url } = data.strapiGame

  // export default function GameTemplate({ data }) {
  //   console.log(data)

  // const gid = data.gid
  // const currentRelated = allGames.filter(e => e.gid !== gid)
  // const relatedGames = currentRelated.slice(0, 12)
  // console.log(data.categories)

  // console.log(data)
  // console.log(data.gid)

  console.log(data.strapiGame)
  const game = data.strapiGame
  const relatedGames = data.allStrapiGame.nodes
  return (
    <Layout>
      <Seo title={`game.title`} />
      <div className="container mx-auto">
        <Detail game={game} />
        <h2 className="flex flex-row px-3 text-lg font-semibold text-sky-100/80">
          You May Also Like
        </h2>
        <List items={relatedGames} type="grid" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($gid: Int) {
    strapiGame(gid: { eq: $gid }) {
      description
      gid
      icon_url
      title
      category {
        name
        slug
      }
    }
    allStrapiGame(
      filter: {
        gid: { ne: $gid }
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
      sort: { fields: creation_date, order: DESC }
      limit: 12
    ) {
      nodes {
        title
        gid
        icon_url
        slug
      }
    }
  }
`

// export const query = graphql(`
//   query ($gid: Int) {
//     allStrapiGame(
//       sort: { fields: creation_date, order: DESC }
//       filter: {
//         appid: {
//           in: [
//             "Knife"
//             "JumpSmash"
//             "CrazyMoto"
//             "CrazyKart3D"
//             "FireTheGun"
//             "FeverRacing"
//             "ColorBall3D"
//             "CrazyKnife"
//             "BoardTheTrain"
//             "MrRacer"
//             "BigSword"
//             "HiTaxi"
//             "TrafficRun"
//             "MrBullet"
//             "LetMeIn"
//             "SnakeGo"
//             "DessertConnect"
//             "SwiftRider"
//             "CrackShot"
//             "CrazyGunfight"
//             "GoldenGlove"
//             "ColorRing"
//             "PianoKeys"
//             "ArchersKing"
//             "MyBabyCare"
//             "DartsKing3D"
//             "CrazyRace"
//             "BallIsComing"
//             "HungyBunny"
//             "TheSameWorld"
//             "SuperMiner"
//             "BounceShooter"
//             "HillRacing"
//             "BatterKing"
//             "BlockGun3D"
//             "ZombieSurvival"
//             "FruitMonster"
//             "FierceCity"
//             "IronAttack"
//             "AceMan"
//             "AirBrawl"
//             "BumbleShooter"
//             "AmazingRoad"
//             "RainbowSplash"
//             "MagicParkour"
//             "CrazyDrift"
//             "FisherMan"
//             "FruitsFall"
//             "RocketJump"
//             "MagicPaint"
//             "GlidingCharger"
//             "RoadCharger"
//             "ArcheryMaster"
//             "UltraDrift"
//             "SharkisComing"
//             "PuppyRun"
//             "PenguinDash"
//             "MonsterCrash"
//             "DeathJump"
//             "HungryMonster"
//             "HungryAnimals"
//             "JumpingMonkey"
//             "MergeKill"
//             "CrazyTrain3D"
//             "CrazyHammer"
//             "VirusWar"
//             "TrappedPirate"
//             "StickmanVsZombies"
//             "FingerCannon"
//             "BulletMan"
//             "KnockBalls"
//             "GunShooter"
//             "MergeGuns3D"
//             "BulletMaster3D"
//             "CrashTower3D"
//             "TowerBlast3D"
//             "ShootSmash"
//             "ShootingCubes"
//           ]
//         }
//         gid: { ne: $gid }
//       }
//       limit: 12
//     ) {
//       nodes {
//         icon_url
//         title
//         slug
//         gid
//       }
//     }
//   }
// `)
