import React from 'react';
import { AxiosError } from 'axios';
import { IResponse } from '../@types/response';
import { request } from '../utils';
import { IRequest } from '../@types/request';

const useGet = <Res, Req>({ path, query }: IRequest<Req>) => {
  const [response, setResponse] = React.useState<IResponse<Res>>({
    loading: true,
    status: 0,
    data: null,
  });

  const getData = React.useCallback(() => {
    if (!path) return;
    console.log('getData');
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
      .catch((error: AxiosError<Res>) => {
        setResponse({
          loading: false,
          status: error.response?.status || 0,
          data: error.response?.data,
        });
      });
  }, [path, query]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return response;
};

export default useGet;
