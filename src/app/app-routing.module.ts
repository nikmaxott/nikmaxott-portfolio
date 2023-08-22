import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      seo: {
        title: 'Nikolaus Zolnhofer Online CV',
        description:
          'Hi, I am a 24 year old Software Engineer that specialises in Fullstack Development using React, Ruby on Rails, Angular, Node.js',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
