
  

  export default  {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    physics:{default:'arcade',
      arcade:{
        gravity:new Phaser.Math.Vector2(0,0),
        debug:false
      
    }
  }
  };
