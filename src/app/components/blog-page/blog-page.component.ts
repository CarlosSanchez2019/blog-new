import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog-i';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  items: Observable<BlogI[]>
  private itemsCollections: AngularFirestoreCollection<BlogI>

  constructor(private afs: AngularFirestore) { 
    this.itemsCollections = afs.collection<BlogI>("New-Blog")
    this.items = this.itemsCollections.valueChanges()
  }

  ngOnInit() {
  }

}
