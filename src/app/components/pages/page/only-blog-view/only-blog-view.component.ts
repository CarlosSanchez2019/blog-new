import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog-i';


@Component({
  selector: 'app-only-blog-view',
  templateUrl: './only-blog-view.component.html',
  styleUrls: ['./only-blog-view.component.css']
})
export class OnlyBlogViewComponent implements OnInit {

  url:string;
  blog:any

  constructor(private activateRouter: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {

    this.url = this.activateRouter.snapshot.params['router']
    this.afs.collection("New-Blog", ref => ref.where("redirectUrl", "==", this.url)).valueChanges()
    .subscribe(data => this.blog = data[0])
  }

}
