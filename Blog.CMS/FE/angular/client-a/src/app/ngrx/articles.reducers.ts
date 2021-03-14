import { createReducer, on } from '@ngrx/store';
import { IArticleThumb } from '../shared/entities/article-thumb.entity';
import { refreshArticlesDone } from './articles.actions';

export const articlesReducer = createReducer<IArticleThumb[]>([],
    on(refreshArticlesDone, (state, action) => action.articles));