export interface BookListType {
  books: BookType[];
  total: number;
}

export interface BookType {
  id: string;
  author: string;
  publishedDate: string;
  title: string;
  description: string;
  price: number;
}
