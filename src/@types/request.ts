type Posts = '/posts' | `/posts/${string}` | `/posts/${string}/comments`;

type Comments = '/comments' | `/comments?postId=${number}`;

export type Path = Posts | Comments | '';

export interface IRequest<T> {
  path: Path;
  query?: string;
  data?: T;
}
