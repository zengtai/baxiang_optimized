const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allCategories = await graphql(`
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

  const games = await graphql(`
    query SiteNavQuery {
      allStrapiGame(
        sort: { fields: creation_date, order: DESC }
        filter: {
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
      ) {
        nodes {
          game_url
          icon_url
          title
          description
          slug
          gid
          category {
            slug
            name
          }
        }
      }
    }
  `)

  const gamesDataDetail = await graphql(`
    query SiteNavQuery {
      allStrapiGame(
        sort: { fields: creation_date, order: DESC }
        filter: {
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
      ) {
        nodes {
          slug
          gid
        }
      }
    }
  `)

  const gamesDataCategory = await graphql(`
    query SiteNavQuery {
      allStrapiGame(
        sort: { fields: creation_date, order: DESC }
        filter: {
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
      ) {
        nodes {
          icon_url
          title
          slug
          gid
          category {
            slug
            name
          }
        }
      }
    }
  `)

  const gamesDataHome = await graphql(`
    query SiteNavQuery {
      allStrapiGame(
        sort: { fields: creation_date, order: DESC }
        filter: {
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
      ) {
        nodes {
          icon_url
          title
          slug
        }
      }
    }
  `)

  const homeTemplatePath = path.resolve(`./src/templates/home.js`)
  const gameTemplatePath = path.resolve(`./src/templates/game.js`)
  const categoryTemplatePath = path.resolve(`./src/templates/category.js`)

  const allGames = games.data.allStrapiGame.nodes
  const categories = allCategories.data.allStrapiCategory.nodes
  const dataHome = gamesDataHome.data.allStrapiGame.nodes
  const dataCategory = gamesDataCategory.data.allStrapiGame.nodes
  const dataDetail = gamesDataDetail.data.allStrapiGame.nodes

  // Home page
  createPage({
    path: `/`,
    component: homeTemplatePath,
    context: {
      dataHome,
      categories,
    },
  })

  // Game Detail
  dataDetail.map(game => {
    createPage({
      path: `/game/${game.slug}`,
      component: gameTemplatePath,
      context: {
        gid: game.gid,
      },
    })
  })

  // Category
  categories.map(category => {
    createPage({
      path: `/category/${category.slug}`,
      component: categoryTemplatePath,
      context: {
        category: category,
        games: dataCategory,
        categories: categories,
      },
    })
  })
}
