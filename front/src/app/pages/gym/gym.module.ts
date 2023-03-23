import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { GymComponent } from './gym.component';
import { TimerComponent } from 'src/app/components/timer/timer.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ExercisesComponent } from 'src/app/components/exercises/exercises.component';



@NgModule({
  declarations: [
    GymComponent,
    TimerComponent,
    NavComponent,
    ExercisesComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule,
    FormsModule
  ]
})
export class GymModule { }
