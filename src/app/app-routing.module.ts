import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path : ''              , component : PostListComponent },
  {path : 'users'     , component : UserListComponent },
  {path : 'users/edit'     , component : NewUserComponent },
  {path : 'appareils'     ,canActivate:[AuthGuard], component : AppareilViewComponent },
  {path : 'appareils/:id' ,canActivate:[AuthGuard], component : SingleAppareilComponent },
  {path : 'edit' ,canActivate:[AuthGuard], component : EditAppareilComponent},
  {path : 'posts'         , component : PostListComponent },
  {path : 'auth'          , component :AuthComponent },
  {path : 'not-found'     , component :FourOhFourComponent },
  {path : '**'            , redirectTo:'not-found' },
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
