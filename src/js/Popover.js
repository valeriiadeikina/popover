export default class Popover {
  constructor() {
    this._popover = null;
  }
  showPopover(title, message, element) {
    const popoverElement = document.createElement("div");
    popoverElement.classList.add("popover");

    const popoverTitle = document.createElement("h3");
    popoverTitle.classList.add("popover-title");
    popoverTitle.textContent = title;

    const popoverMessage = document.createElement("span");
    popoverMessage.classList.add("popover-message");
    popoverMessage.textContent = message;

    popoverElement.appendChild(popoverTitle);
    popoverElement.appendChild(popoverMessage);

    this._popover = popoverElement;

    element.appendChild(popoverElement);

    popoverElement.style.top = -5 - popoverElement.offsetHeight + "px";
    popoverElement.style.left =
      (element.offsetWidth / 2 - popoverElement.offsetWidth / 2) / 2 + "px";

    return;
  }

  removePopover() {
    if (this._popover) {
      this._popover.remove();
    }
    return;
  }
}
