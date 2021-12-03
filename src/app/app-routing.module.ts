import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterEditorComponent } from './components/character-editor/character-editor.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { NegateauthGuard } from './guards/negateauth/negateauth.guard';

const routes: Routes = [
  { path: 'welcome', canActivate: [NegateauthGuard], component: WelcomeComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  {
    path: 'character', children: [
      { path: 'edit', component: CharacterEditorComponent }
    ], canActivate: [AuthGuard]
  },
  { path: '**', canActivate: [AuthGuard], component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
