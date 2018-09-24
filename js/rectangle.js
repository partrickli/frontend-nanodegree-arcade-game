class Rectangle {
  constructor({ left, top, width, height }) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  get right() {
    return this.left + this.width;
  }
  get bottom() {
    return this.top + this.height;
  }

  /**
   * @description check rectangle confliction
   * @param {Rectangle} rect - another rectangle
   */
  checkConflict(rect) {
    if (
      this.right < rect.left ||
      this.left > rect.right ||
      this.top > rect.bottom ||
      this.bottom < rect.top
    ) {
      return false;
    } else {
      return true;
    }
  }
}

export default Rectangle;

// Test
// let rect1 = new Rectangle({
//   left: 0,
//   top: 0,
//   width: 20,
//   height: 20,
// });

// let rect2 = new Rectangle({
//   left: 10,
//   top: 10,
//   width: 20,
//   height: 20,
// });

// console.log(`conflict: ${rect1.checkConflict(rect2)}`);
