import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guard/auth.guard';
import { OnlyBlogViewComponent } from './components/pages/page/only-blog-view/only-blog-view.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "blog",
    component: BlogPageComponent,
  },
  {
    path: "blog/:router",
    component: OnlyBlogViewComponent
  },
  {
    path:"sign-up",
    component:SignupComponent
  },
  {
    path:"sign-in",
    component: SigninComponent
  },
  {
    path:"admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  { path: 'new-blog', loadChildren: () => import('./components/pages/new-blog/new-blog.module').then(m => m.NewBlogModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
