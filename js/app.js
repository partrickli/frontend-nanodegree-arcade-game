// @ts-ignore
import EnemyBug from '../images/enemy-bug.png';
// @ts-ignore
import CharBoy from '../images/char-boy.png';

/**
 * Super class of Enemy and Player
 */
class Character {
  constructor({ x = 0, y = 0, sprite }) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  render() {
    document.ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

class Enemy extends Character {
  constructor({ x = 100, y = 0 } = {}) {
    super({
      x: x,
      y: y,
      sprite: EnemyBug,
    });
  }

  update() {
    console.log('update player');
  }
}
class Player extends Character {
  constructor({ x = 0, y = 300 } = {}) {
    super({
      x: x,
      y: y,
      sprite: CharBoy,
    });
  }

  update() {
    console.log('update player');
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

let allEnemies = [];
const enemy = new Enemy();
allEnemies.push(enemy);

// Place the player object in a variable called player
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

export { allEnemies, player };
