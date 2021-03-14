import { Component, OnInit } from '@angular/core';
import { from, Observable, of, Subscription } from 'rxjs';
import { IArticleThumb } from '../shared/entities/article-thumb.entity';
import { ArticlesService } from '../core/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: IArticleThumb[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {

    this.articleService.getArticles().subscribe(arts => this.articles = arts);

  }

}
