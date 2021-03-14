import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/core/entities/article.entity';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.scss']
})
export class ArticleViewerComponent implements OnInit {

  article: IArticle;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    const articleUrl = this.route.snapshot.paramMap.get('article');

    this.articleService.getArticle(articleUrl).subscribe(data => this.article = data);
  }

}
