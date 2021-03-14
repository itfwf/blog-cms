import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticlesService } from '../services/articles.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleGuard implements CanActivate {

  private article = 'article';
  constructor(private articleService: ArticlesService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.articleService.articleExists(route.params[this.article]);
  }

}
