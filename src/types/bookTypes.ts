export interface IBook {
	id?: string;
	volumeInfo?: {
		imageLinks?: {
			thumbnail: string;
		}
		description?: string;
		title?: string;
		categories?: string[];
		authors?: string[];
	}
}
