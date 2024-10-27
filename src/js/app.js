import Popover from "./Popover.js";

const button = document.querySelector("#button");

const popover = new Popover();
let isPopoverShowed = false;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isPopoverShowed) {
    popover.showPopover("title of popover", "here we are, what next?", button);
    isPopoverShowed = true;
    return;
  } else {
    popover.removePopover();
    isPopoverShowed = false;
    return;
  }
});
