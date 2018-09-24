// @ts-ignore
import EnemyBug from '../images/enemy-bug.png';
// @ts-ignore
import CharBoy from '../images/char-boy.png';
import Rectangle from './rectangle';

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
  constructor({ x = 0, y = 80 } = {}) {
    super({
      x: x,
      y: y,
      sprite: EnemyBug,
    });
    this.speed = this.randomSpeed();
  }

  // character visible is smaller than the whole image
  get visibleRect() {
    return new Rectangle({
      left: this.x,
      top: this.y + 75,
      width: 101,
      height: 70,
    });
  }

  randomSpeed() {
    // return 30 + Math.random() * 20;
    return 0; // for test only
  }

  update(dt) {
    this.x += dt * this.speed;
  }
}
class Player extends Character {
  constructor({ x = 0, y = 0 } = {}) {
    super({
      x: x,
      y: y,
      sprite: CharBoy,
    });
  }

  // character visible is smaller than the whole image
  get visibleRect() {
    return new Rectangle({
      left: this.x + 16,
      top: this.y + 60,
      width: 70,
      height: 80,
    });
  }

  update() {
    // console.log('update player');
  }

  /**
   * @description move player according to key board direction
   * @param {string} direction
   */
  handleInput(direction) {
    const dx = 101;
    const dy = 83;
    let boundary = { left: 0, right: 505, up: -50, down: 450 };
    switch (direction) {
      case 'left':
        if (this.x - dx >= boundary.left) {
          this.x -= dx;
        }
        break;
      case 'up':
        if (this.y - dy >= boundary.up) {
          this.y -= dy;
        }
        break;
      case 'right':
        if (this.x + dx < boundary.right) {
          this.x += dx;
        }
        break;
      case 'down':
        if (this.y + dy < boundary.down) {
          this.y += dy;
        }
        break;
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

let allEnemies = [...Array(1)].map(() => {
  return new Enemy({
    x: 0,
    // y: randomInteger({ lower: 0, upper: 6 }) * 50,
    y: 70,
  });
});

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

/**
 * @description Generate random integer
 * @param {object} option - upper and lower limit for generated integer
 */
function randomInteger({ lower = 0, upper = 100 }) {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}
