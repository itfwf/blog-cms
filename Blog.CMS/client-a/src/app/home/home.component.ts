import { Component, OnInit } from '@angular/core';
import { from, Observable, of, Subscription } from 'rxjs';
import { IArticle } from '../shared/entities/article.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: IArticle[];

  constructor() { }

  ngOnInit(): void {

    this.getArticles().subscribe(arts => this.articles = arts);

  }

  getArticles(): Observable<IArticle[]> {
    return of([1, 2, 3, 4, 5].map(el => {
      return <IArticle>{
        id: el,
        title: 'Title ' + el,
        thumbnail: 'Thumbnail ' + el,
        shortDescription: 'Short description ' + el,
        author: {
          name: ' Author ' + el,
          thumbnail: 'Thumbnail ' + el,
        }
      };
    }));
  }

}
