import { IAuthor } from './author.entity';

export interface IArticleThumb {
    id: number;
    title: string;
    thumbnail: string;
    shortDescription: string;
    author: IAuthor;
    url: string;
}