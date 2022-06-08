export interface IResponse<T> {
  loading: boolean;
  status: number;
  data?: T;
}
