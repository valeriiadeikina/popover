/**
 * @jest-environment jsdom
 */

import Popover from "../js/Popover";

describe("тесты на подсказку/тултип", () => {
  let button;
  let popover;
  let isPopoverShowed = false;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="button" class="button">Нажми меня!</button>
    `;

    button = document.querySelector("#button");
    popover = new Popover();

    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (!isPopoverShowed) {
        popover.showPopover("ой", "ты нажал меня", button);
        isPopoverShowed = true;
      } else {
        popover.removePopover();
        isPopoverShowed = false;
      }
    });
  });

  test("кнопка отображается на странице", () => {
    expect(button).not.toBeNull();
    expect(button.textContent).toBe("Нажми меня!");
  });

  test("появление подсказки после клика", () => {
    button.click();//первый клик
    const popoverElement = document.querySelector(".popover");
    expect(popoverElement).not.toBeNull();
    expect(popoverElement.querySelector(".popover-title").textContent).toBe(
      "ой"
    );
    expect(popoverElement.querySelector(".popover-message").textContent).toBe(
      "ты нажал меня"
    );
  });

  test("удаление подсказки после второго клика", () => {
    button.click();//второй клик
    const popoverElement = document.querySelector(".popover");
    expect(popoverElement).toBeNull();
  });
});
