import { Component, OnInit } from '@angular/core';
import contentData from '../../../assets/content.json';


interface Exercise {
  id: Number;
  title: String;
  benefits: String;
  video: String;
}

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises : Exercise[] = contentData;
  lead: string ='https://www.youtube.com/embed/'


  constructor() { }

  ngOnInit(): void {
  }

}
