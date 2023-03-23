import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from 'src/app/components/exercises/exercises.component';
import { GymComponent } from './gym.component';

const routes: Routes = [{ path: '', component: GymComponent ,children:[{path:'exercise',component:ExercisesComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }
