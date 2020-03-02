class SpriteCreator {
  constructor(anims) {
    this.anims = anims;
  }
  createSprites() {
    this.anims.create({
      key: "leftblue",
      frames: this.anims.generateFrameNumbers("EnmySprite", {
        start: 0,
        end: 0
      }),
      repeat: 0,
      frameRate: 10
    });

    this.anims.create({
      key: "rightblue",
      frames: this.anims.generateFrameNumbers("EnmySprite", {
        start: 1,
        end: 1
      }),
      repeat: 0,
      frameRate: 10
    });
    this.anims.create({
        key: "downblue",
        frames: this.anims.generateFrameNumbers("EnmySprite", {
          start: 2,
          end: 2
        }),
        repeat: 0,
        frameRate: 10
      });
      this.anims.create({
        key: "upblue",
        frames: this.anims.generateFrameNumbers("EnmySprite", {
          start: 3,
          end: 3
        }),
        repeat: 0,
        frameRate: 10
      });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNames("playersprite", {
        start: 4,
        end: 7
      }),
      repeat: -1,
      frameRate: 10
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNames("playersprite", {
        start: 0,
        end: 3
      }),
      repeat: -1,
      frameRate: 10
    });

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("playersprite", {
        start: 12,
        end: 15
      }),
      repeat: -1,
      frameRate: 10
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("playersprite", {
        start: 8,
        end: 11
      }),
      repeat: -1,
      frameRate: 10
    });
  }
}

export default SpriteCreator;