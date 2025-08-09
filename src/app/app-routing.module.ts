import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/core/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'home', component: HomeComponent, title: 'home' },
  {path:'notFound',component:NotFoundComponent,title:'Page not-Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
