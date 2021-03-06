import { Injectable } from '@angular/core';
import Timer = NodeJS.Timer;

@Injectable()
export class SpinnerService {

  block = document.createElement('div');
  timerId!: Timer;

  start(){
    this.block.style.zIndex = '10';
    this.block.style.position = 'fixed';
    this.block.style.background = 'rgba(215, 215, 215, .55)';
    this.block.style.height = '100vh';
    this.block.style.width = '100vw';
    this.block.style.color = 'white';
    this.block.style.fontSize = '2rem';
    this.block.style.textAlign = 'center';
    this.block.style.lineHeight = '100vh';
    this.block.style.textShadow = '1px 1px 3px black';
    this.timerId = setInterval(() => {
      this.block.innerHTML += '.';
    }, 100);
    document.body.appendChild(this.block);
  };

  stop(){
    document.body.removeChild(this.block);
    clearInterval(this.timerId);
    this.block.innerHTML = ''
  }
}
