import { Component, Input, OnInit } from '@angular/core';
import { IArticleThumb } from 'src/app/shared/entities/article-thumb.entity';

@Component({
  selector: 'app-article-thumb',
  templateUrl: './article-thumb.component.html',
  styleUrls: ['./article-thumb.component.scss']
})
export class ArticleThumbComponent implements OnInit {

  @Input() article: IArticleThumb;
  constructor() { }

  ngOnInit(): void {
  }

}
