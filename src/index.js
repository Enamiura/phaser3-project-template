import Phaser from "phaser";
import GameScene from './scenes/GameScene'
import config from "./config/config"

class Game extends Phaser.Game{
  constructor(config){
    super(config);
    this.scene.add('Game',GameScene);
    this.scene.start('Game');
  }
}
window.onload=function(){
  let game=new Game(config);
}
