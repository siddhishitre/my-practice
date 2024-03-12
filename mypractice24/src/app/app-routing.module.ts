import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path : '',component : LandingComponent},
  {path : 'home',component : HomeComponent},
  {path : 'landing',component : LandingComponent},
  {path :'test',component : TestComponent},
  {path :'student',component : StudentComponent},

  //{
  // path : 'studentModule',
  //loadChildren : ( -> import('./item/item.module').then (m =>m.ItemsModule))
  // },
  {path : 'studentModule', loadChildren:()=>import('./student/student.module').then(m =>m.StudentModule)},
  {path :'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
