import React from 'react';
import { AxiosError } from 'axios';
import { IRequest } from '../@types/request';
import { IResponse } from '../@types/response';
import { request } from '../utils';

const usePost = <T>(req: IRequest) => {
  const [response, setResponse] = React.useState<IResponse<T | unknown>>({
    loading: true,
    status: 0,
    data: null,
  });

  const postData = ({ path, query, data }: IRequest) => {
    let url = path;
    if (query) url += query;
    const res = request.post(url, data);
    res
      .then((res) => {
        setResponse({
          loading: false,
          status: res.status,
          data: res.data,
        });
      })
      .catch((error: AxiosError) => {
        setResponse({
          loading: false,
          status: error.response?.status || 0,
          data: error.response?.data,
        });
      });
  };

  React.useEffect(() => {
    if (!req.path) return;
    postData(req);
  }, [req]);

  return response;
};

export default usePost;
