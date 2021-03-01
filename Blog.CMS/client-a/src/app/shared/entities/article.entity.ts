import { IAuthor } from "./author.entity";

export interface IArticle {
    id: number,
    title: string,
    thumbnail: string,
    shortDescription: string,
    author: IAuthor
}