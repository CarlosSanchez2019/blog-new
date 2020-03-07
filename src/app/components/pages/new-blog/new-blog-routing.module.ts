import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBlogComponent } from './new-blog.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  { path: '', 
    component: NewBlogComponent,
  },
  {
    path: 'edit-post',
    component: EditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBlogRoutingModule { }
