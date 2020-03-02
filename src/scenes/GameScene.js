import { Tilemaps } from "phaser";
import SpriteCreator from "./SpriteCreator.js";
let MyPlatform;
let player;
var cursors;
let enemyb;
let Enemymover;
class Enemy {
  constructor(physics, name, x, y) {
    this.physics = physics;
    this.name = name;
    this.body=this.physics.add.sprite(x, y, "EnmySprite", 2);
  }
}
class EnemyHandler {
  constructor(enemy, player, staticlayer) {
    this.enemy = enemy;
    this.player = player;
    this.staticlayer = staticlayer;
  }
  calcdist(xe, ye) {
    //calculate distance to player (from point(xe,ye) to player);
    let xp = this.player.x;
    let yp = this.player.y;

    return Math.abs(Math.abs(xp - xe) + Math.abs(yp - ye));
  }
  moveEnemy() {
    
    let x = this.enemy.body.x;
    let y = this.enemy.body.y;
    let Direction = "up";
    let mindist = +Infinity;
    
    let tilex=Math.floor(x/20);
    let tiley=Math.floor((y-10)/20);
    
    console.log(x+"\t"+y);
    if (!this.staticlayer.hasTileAt(tilex, tiley - 1)) {

      let dist = this.calcdist(x, y - 1);
      if (dist < mindist) {
        Direction = "up";
        mindist = dist;
      }
    } else{
    }//up tile
    if (!this.staticlayer.hasTileAt(tilex, tiley + 1)) {
      let dist = this.calcdist(x, y + 1);
      if (dist < mindist) {
        Direction = "down";
        mindist = dist;
      }
    } //down tile
    if (!this.staticlayer.hasTileAt(tilex - 1, tiley)) {
      let dist = this.calcdist(x - 1, y);
      if (dist < mindist) {
        Direction = "left";
        mindist = dist;
      }
    } //left
    if (!this.staticlayer.hasTileAt(tilex + 1, tiley)) {
      let dist = this.calcdist(x + 1, y);
      if (dist < mindist) {
        Direction = "right";
        mindist = dist;
      }
    } //right
    console.log(Direction);
    switch (Direction) {
      case "up":
        this.enemy.body.setVelocityX(0);
        this.enemy.body.setVelocityY(-40);
        break;
      case "down":
        this.enemy.body.setVelocityX(0);
        this.enemy.body.setVelocityY(40);
        break;
      case "left":
        this.enemy.body.setVelocityY(0);
        this.enemy.body.setVelocityX(-40);
        break;
      case "right":
        this.enemy.body.setVelocityY(0);
        this.enemy.body.setVelocityX(40);
        break;
    }
  }
}
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
    this.load.spritesheet("playersprite", "src/assets/pacmansprites.png", {
      frameWidth: 20,
      frameHeight: 20,
      spacing: 1,
      margin: 0
    });
    this.load.tilemapTiledJSON("level", "src/assets/pacmanfixed.json");
    this.load.spritesheet("EnmySprite", "src/assets/ennemiesSprite.png", {
      frameWidth: 20,
      frameHeight: 20,
      spacing: 1,
      margin: 0
    });
  }

  create() {
    //platform place
    cursors = this.input.keyboard.createCursorKeys();
    let spritecreator = new SpriteCreator(this.anims);
    spritecreator.createSprites();
    let tilemap = this.add.tilemap("level");
    let terrain = tilemap.addTilesetImage("spr_all5_4A2", "pacman");
    let myLayer = tilemap.createStaticLayer("Walls", [terrain], 0);
    player = this.physics.add.sprite(40, 100, "playersprite", 8);

    // distance function

    //enemy
    enemyb = new Enemy(this.physics, "Blueboi", 300, 100);
    //EnemyHandler
    Enemymover=new EnemyHandler(enemyb,player,myLayer);
    //Collision part
    
    player.setCollideWorldBounds(true);
    myLayer.setCollisionByProperty({ Collides: true });
    this.physics.add.collider(player, myLayer);
    this.physics.add.collider(enemyb.body,myLayer);
    
  
  }
  update() {
    Enemymover.moveEnemy();
   
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
      player.anims.play("up", true);
    } else if (cursors.down.isDown) {
      player.setVelocityX(0);

      player.setVelocityY(160);
      player.anims.play("down", true);
    }
  }
}
export default GameScene;
