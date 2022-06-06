import React from 'react';
import { AxiosError } from 'axios';
import { IResponse } from '../@types/response';
import { request } from '../utils';
import { IRequest } from '../@types/request';

const useGet = <T>(req: IRequest) => {
  const [response, setResponse] = React.useState<IResponse<T | unknown>>({
    loading: true,
    status: 0,
    data: null,
  });

  const getData = ({ path, query }: IRequest) => {
    let url = path;
    if (query) url += query;
    const res = request.get(url);
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
    getData(req);
  }, [req]);

  return response;
};

export default useGet;
