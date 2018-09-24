/**
 * @class helper class for check collision of enemy and player
 */
class Rectangle {
  constructor({ left, top, width, height }) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  /**
   * @description right edge of rectangle
   */
  get right() {
    return this.left + this.width;
  }

  /**
   * @description bottom edge of rectangle
   */
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
