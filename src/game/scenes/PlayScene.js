import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    this.add.image(400, 300, 'sky')

    const bomb = this.physics.add.image(400, 200, 'bomb')
    bomb.setCollideWorldBounds(true)
    bomb.body.onWorldBounds = true // enable worldbounds collision event
    bomb.setBounce(1)
    bomb.setVelocity(100, 20)

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.75 });
      // const emitter = new Phaser.Events.EventEmitter();
      // emitter.emit("hmm");
    });

    this.input.keyboard.on('keydown_D', event => {
      bomb.setVelocityX( bomb.body.velocity.x + 50 );
    });

    this.input.keyboard.on('keydown_A', event => {
      bomb.setVelocityX( bomb.body.velocity.x - 50 );
    });
  }

  update () {
  }
}
