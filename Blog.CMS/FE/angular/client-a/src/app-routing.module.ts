import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleViewerComponent } from './app/components/article-viewer/article-viewer.component';
import { ArticleGuard } from './app/core/guards/article.guard';
import { HomeComponent } from './app/home/home.component';

const routes: Routes = [
  { path: 'article/:article', component: ArticleViewerComponent, canActivate: [ArticleGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }