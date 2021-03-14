import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IArticleThumb } from '../../shared/entities/article-thumb.entity';
import { HttpClient } from '@angular/common/http';
import { IArticle } from '../entities/article.entity';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private ARTICLES = 'articles';
  private ARTICLE_ROUTES = 'article_routes';

  private cache = {};
  constructor(private http: HttpClient) { }

  getArticles(): Observable<IArticleThumb[]> {
    if (!this.cache[this.ARTICLES]) {
      this.cache[this.ARTICLES] = of([1, 2, 3, 4, 5].map(el => {
        return {
          id: el,
          title: 'Title ' + el,
          thumbnail: 'Thumbnail ' + el,
          shortDescription: 'Short description ' + el,
          author: {
            name: ' Author ' + el,
            thumbnail: 'Thumbnail ' + el,
          },
          url: '/net-api-' + el
        } as IArticleThumb;
      }));
    }
    return this.cache[this.ARTICLES];
  }

  articleExists(articleUrl: string): boolean {
    return true;
  }

  getArticle(articleUrl: string): Observable<IArticle> {
    if (!this.cache[articleUrl]) {
      this.cache[articleUrl] = of({
        title: '.NET Core API',
        body: '<b>This is a temp body</b>',
        date: new Date(),
      });
    }
    return this.cache[articleUrl];
  }
}
