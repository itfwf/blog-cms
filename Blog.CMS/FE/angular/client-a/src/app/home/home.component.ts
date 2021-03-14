import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticleThumb } from '../shared/entities/article-thumb.entity';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { refreshArticlesRequest } from '../ngrx/articles.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles$: Observable<IArticleThumb[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(refreshArticlesRequest());
    this.articles$ = this.store.pipe(select(state => state.articles));

  }

}
