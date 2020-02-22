import { Tilemaps } from "phaser";

let MyPlatform;
let player;
var cursors;
class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  preload() {
    this.load.image("logo", "src/assets/logo.png");
    this.load.spritesheet("player", "src/assets/dude.png", {
      frameWidth: 20,
      frameHeight: 20
    });
    this.load.image("pacman", "src/assets/spr_all5_4A2.png");
    this.load.spritesheet("playersprite","src/assets/pacmansprites.png",{frameWidth:20,frameHeight:20,spacing:1,margin:0});
    this.load.tilemapTiledJSON("level", "src/assets/pacmanfixed.json");
    this.load.sprite("EnmySprite","src/assets/ennemiesSprite.png",{frameWidth:20,frameHeight:20,spacing:1,margin:0})
  }

  create() {
    //platform place
    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNames("playersprite", { start: 4, end: 7 }),
      repeat: -1,
      frameRate: 10
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNames("playersprite", { start: 0, end: 3 }),
      repeat: -1,
      frameRate: 10
    });

    this.anims.create({
      key:"up",
      frames:this.anims.generateFrameNumbers("playersprite",{start:12,end:15}),
      repeat:-1,
      frameRate:10
    })
    this.anims.create({
      key:"down",
      frames:this.anims.generateFrameNumbers("playersprite",{start:8,end:11}),
      repeat:-1,
      frameRate:10
    })
    let tilemap = this.add.tilemap("level");
    let terrain = tilemap.addTilesetImage("spr_all5_4A2", "pacman");
    let myLayer = tilemap.createStaticLayer("Walls", [terrain], 0);
    player = this.physics.add.sprite(40, 100, "playersprite",8 );

        //enemy




    //Collision part
    player.setCollideWorldBounds(true);
    myLayer.setCollisionByProperty({Collides:true})
    this.physics.add.collider(player,myLayer);
  }
  update() {
    if (cursors.left.isDown) {
      player.setVelocityY(0);

      player.setVelocityX(-160);
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityY(0);
      player.setVelocityX(160);
      player.anims.play("right", true);
    } else if (cursors.up.isDown) {
      player.setVelocityX(0);
      player.setVelocityY(-160);
      player.anims.play("up",true);
    } else if (cursors.down.isDown) {
      player.setVelocityX(0);

      player.setVelocityY(160);
      player.anims.play("down",true);
    }
  }
}
export default GameScene;
