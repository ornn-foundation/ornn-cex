import React from 'react';
import { AxiosError } from 'axios';
import { IRequest } from '../@types/request';
import { IResponse } from '../@types/response';
import { request } from '../utils';

const usePost = <Res, Req>({ path, query, data }: IRequest<Req>) => {
  const [response, setResponse] = React.useState<IResponse<Res>>({
    loading: true,
    status: 0,
    data: null,
  });

  const postData = React.useCallback(() => {
    if (!path) return;
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
  }, [path, query, data]);

  React.useEffect(() => {
    postData();
  }, [postData]);

  return response;
};

export default usePost;
