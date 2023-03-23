import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timer : number = 0
  id : any

  showPlay: boolean = false;
  showPause: boolean = false;
  showReset: boolean = false;
  showStart: boolean = true;

  msg: string = 'Ready?'


  reset : number = 0

  constructor() { }

  ngOnInit(): void {
    //this.setTime(30)
  }
  setTime(time:number){
    if(this.timer > 0){
    this.msg = 'Goo!'
    this.reset = time;
    this.showStart = false
    this.showReset = true;
    this.showPause = true
    this.showPlay = false;
    this.timer = time;
    let audio = new Audio()
    audio.src = '../../../assets/bell-ringing-05.wav';
    audio.loop = false
    audio.load()
    this.id = setInterval(()=>{
      if(this.timer == 0){
        audio.play()
        this.showPause = false;
        this.showPlay = false;
        this.showStart = true
        this.msg = 'Well done!'
        clearInterval(this.id)
      }else{
        this.timer--;
        if(this.timer<10){
          this.msg = 'Almost done!'
        }
        console.log(this.timer)
      }
    },1000)
    }
  }

  play(){
    this.showPause = true;
    this.showPlay = false;
    this.showStart = false
    this.msg = 'Goo!'

    let audio = new Audio()
    audio.src = '../../../assets/bell-ringing-05.wav';
    audio.loop = false
    audio.load()
    this.id = setInterval(()=>{
      if(this.timer == 0){
        audio.play()
        this.showPause = false;
        this.showPlay = false;
        this.showStart = true
        this.msg = 'Well done!'

        clearInterval(this.id)
      }else{
        this.timer--;
        if(this.timer<10){
          this.msg = 'Almost done!'
        }
        console.log(this.timer)
      }
    },1000)
  }

  pause(){
    this.msg = 'Paused!'
    this.showPause = false;
    this.showPlay = true;
    this.showStart = false
    clearInterval(this.id)
  }

  resetTime(){
    this.setTime(this.reset)
  }


}
