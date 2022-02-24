import Reel from "./Reel.js";
import Symbol from "./Symbol.js";

export default class Slot {
  constructor(domElement, config = {}) {
    Symbol.preload();

    this.currentSymbols = [
      ["Jack", "Jack", "Jack"],
      ["Jack", "Jack", "Jack"],
      ["Jack", "Jack", "Jack"],
      ["Jack", "Jack", "Jack"],
      ["Jack", "Jack", "Jack"],
    ];

    this.nextSymbols = [
      ["Jack", "Jack", "Jack"],
      ["Jack", "Jack", "Jack"],
      ["Jack", "Jack", "Jack"],
      ["Jack", "Jack", "Jack"],
      ["Jack", "Jack", "Jack"],
    ];

    this.winnings = new Map([
      ["Cailey", 0],
      ["Clara", 0],
      ["Jack", 0],
      ["Ophelia", 0],
      ["Philippe", 0],
      ["Reina", 0],
      ["Riah", 0],
      ["Shay", 0],
      ["Sunny", 0],
    ]);

    this.container = domElement;

    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );

    this.spinButton = document.getElementById("spin");
    this.spinButton.addEventListener("click", () => this.spin());

    if (config.inverted) {
      this.container.classList.add("inverted");
    }

    this.config = config;
  }

  spin() {
    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
    ];

    this.onSpinStart(this.nextSymbols);

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd(this.nextSymbols));
  }

  onSpinStart(symbols) {
    this.spinButton.disabled = true;

    this.config.onSpinStart?.(symbols);
  }

  onSpinEnd(symbols) {
    for (let i = 0; i < 3; i++) {
      if(symbols[0][i] == symbols[1][i] 
        && symbols[1][i] == symbols[2][i]
        && symbols[2][i] == symbols[3][i]
        && symbols[3][i] == symbols[4][i]) {
          this.winnings.set(symbols[0][i], (this.winnings.get(symbols[0][i]) ?? 0) + 1)
      }
    }
    this.winnings.forEach((value,key)=>{
      document.getElementById(key).innerText = value;
    })

    this.spinButton.disabled = false;

    this.config.onSpinEnd?.(symbols);

  }
}
