import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/shared/entities/article.entity';

@Component({
  selector: 'app-article-thumb',
  templateUrl: './article-thumb.component.html',
  styleUrls: ['./article-thumb.component.scss']
})
export class ArticleThumbComponent implements OnInit {

  @Input() article: IArticle;
  constructor() { }

  ngOnInit(): void {
  }

}
