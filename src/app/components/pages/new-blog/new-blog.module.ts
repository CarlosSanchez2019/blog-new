import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NewBlogRoutingModule } from './new-blog-routing.module';
import { NewBlogComponent } from './new-blog.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [NewBlogComponent, EditPageComponent],
  imports: [
    CommonModule,
    NewBlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers:[AngularFirestore]
})
export class NewBlogModule { }
