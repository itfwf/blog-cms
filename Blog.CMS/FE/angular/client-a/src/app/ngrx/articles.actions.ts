import { createAction, props } from '@ngrx/store';
import { IArticleThumb } from '../shared/entities/article-thumb.entity';

const article = '[Client-Article]';
const get = 'GET';

export const refreshArticlesRequest = createAction(`${article} ${get} articles`);
export const refreshArticlesDone = createAction(`${article} ${get} articles loaded`, props<{ articles: IArticleThumb[] }>());
