export interface IRequest<T> {
  path: string;
  query?: string;
  data?: T;
}
