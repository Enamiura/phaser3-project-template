class GameScene extends Phaser.Scene{
    constructor(){
        super('Game')
    
    }
    preload() {
        this.load.image("logo","src/assets/logo.png");
    }
      
    create() {
        const logo = this.add.image(400, 150, "logo");
      
      
        this.tweens.add({
          targets: logo,
          y: 450,
          duration: 2000,
          ease: "Power2",
          yoyo: false,
          loop: -1
        });
      }
}
export default GameScene;