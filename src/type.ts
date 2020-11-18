import "webrtc";

export interface IArticle {
		id: number
		title: string
		body: string
}

export type ArticleState = {
	ariticles: IArticle[]
}

export type ArticleAction = {
	type: string
	article: IArticle
}

export type DispatchType = (arg: ArticleAction) => ArticleAction