// @ts-ignore
import EnemyBug from '../images/enemy-bug.png';
// @ts-ignore
import CharBoy from '../images/char-boy.png';
import Rectangle from './rectangle';

const boundary = { left: 0, right: 505, up: -50, down: 450 };
/**
 * @class Super class of Enemy and Player
 */
class Character {
  /**
   * @constructor intialize position and sprite
   */
  constructor({ x = 0, y = 0, sprite }) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  /**
   * @description render character
   */
  render() {
    document.ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

/**
 * @class Enemy class
 */
class Enemy extends Character {
  constructor({ x = 0, y = 80 } = {}) {
    super({
      x: x,
      y: y,
      sprite: EnemyBug,
    });
  }

  /**
   * @description visible size of enemy is smaller than image size
   */
  get visibleRect() {
    return new Rectangle({
      left: this.x,
      top: this.y + 75,
      width: 101,
      height: 70,
    });
  }

  /**
   * @description set enemy moving speed
   */
  setRandomSpeed() {
    this.speed = 30 + Math.random() * 120;
  }

  /**
   * @description set enemy vertical position
   */
  setRandomY() {
    this.y = randomInteger({ lower: 1, upper: 4 }) * 80 - 20;
  }

  /**
   * @description update enemy position, if move out boundary, reset to initial position
   */
  update(dt) {
    this.x += dt * this.speed;
    // Reset if out of bounds
    if (this.x > boundary.right) {
      this.x = 0;
      this.setRandomSpeed();
      this.setRandomY();
    }
  }
}

/**
 * @class Player class
 */
class Player extends Character {
  constructor({ x = 0, y = 400 } = {}) {
    super({
      x: x,
      y: y,
      sprite: CharBoy,
    });
  }

  /**
   * Reset player when lose game
   */
  reset() {
    setTimeout(() => {
      [this.x, this.y] = [0, 400];
    }, 200);
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

  /**
   * @description show win alert when player reaches river block
   */
  update() {
    const winLabel = document.querySelector('h1');
    winLabel.innerHTML = this.y < 10 ? 'You Win！' : '';
  }

  /**
   * @description move player according to key board direction
   * @param {string} direction
   */
  handleInput(direction) {
    const dx = 101;
    const dy = 83;
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

let allEnemies = [...Array(5)].map(() => {
  const enemy = new Enemy();
  enemy.setRandomY();
  enemy.setRandomSpeed();
  return enemy;
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
