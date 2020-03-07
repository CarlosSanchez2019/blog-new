import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BlogI } from 'src/app/models/blog-i';

import { AngularFireStorage } from '@angular/fire/storage'
import 'firebase/storage'
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  loginForm = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    fileUrl: new FormControl("", Validators.required),
    redirectUrl: new FormControl("", Validators.required),
    fileUrlImg: new FormControl("", Validators.required)  
  })
  // VARIABLE PARA SUBIR UNA ENTRADA AL BLOG
  private itemDoc: AngularFirestoreCollection

  // ------------------------
  downloadUrl:Observable<string>

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
    this.loginForm.get('title').valueChanges
      .subscribe(data => {
        const trimData = data.replace(/ /g ,"-").toLowerCase()
        this.loginForm.get('redirectUrl').setValue(trimData)
        
      })
      // SUBIR UNA NUEVA COLECCION
      this.itemDoc = afs.collection<BlogI>('New-Blog')

    
     
   }

  ngOnInit() {
  }

  onSubmitNewNote(form){
    // console.log("fotm",form)
    this.itemDoc.add(form)

  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = Date();
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges()
      .pipe(
        finalize(() =>{
          this.downloadUrl = fileRef.getDownloadURL()
          this.downloadUrl.subscribe(data => {
            this.loginForm.get('fileUrl').setValue(data)
          })
        })
      ).subscribe()
  }
}
