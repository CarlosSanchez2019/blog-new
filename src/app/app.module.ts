import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { SectionComponent } from './components/section/section.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './service/auth.service';
import { SigninComponent } from './components/signin/signin.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guard/auth.guard';
import { OnlyBlogViewComponent } from './components/pages/page/only-blog-view/only-blog-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    SectionComponent,
    BlogPageComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    AdminComponent,
    OnlyBlogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
