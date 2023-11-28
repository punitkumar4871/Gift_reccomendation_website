class LikeButton {
  constructor(element) {
    this.element = element;
    this.element.classList.add('like-button');
    this.element.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    this.element.classList.toggle('liked');
  }

  isLiked() {
    return this.element.classList.contains('liked');
  }
}