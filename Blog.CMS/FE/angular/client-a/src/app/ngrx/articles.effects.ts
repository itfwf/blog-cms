import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArticlesService } from "../core/services/articles.service";
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { refreshArticlesRequest, refreshArticlesDone } from "./articles.actions";
import { Observable } from "rxjs";

@Injectable()
export class ArticleEffects {

    constructor(private articleService: ArticlesService, private actions$: Actions) { }


    articles$ = createEffect(() => this.actions$.pipe(
        ofType(refreshArticlesRequest),
        switchMap(() =>
            this.articleService
                .getArticles().
                pipe(
                    map(arts =>
                        refreshArticlesDone({ articles: arts })
                    )
                )
        )
    )
    );
}

