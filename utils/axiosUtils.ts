import axios, { AxiosResponse } from "axios";
import * as schemaHelper from "../models/schemaHelper";

export type AxiosConfigWrapper<
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods
> = {
  url: Path;
  method: Method & schemaHelper.HttpMethodsFilterdByPath<Path>;
  params?: schemaHelper.RequestParameters<Path, Method>;
  data?: schemaHelper.RequestData<Path, Method>;
};

export function request<
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods
>(config: AxiosConfigWrapper<Path, Method>) {
  return axios.request<
    schemaHelper.ResponseData<Path, Method>,
    AxiosResponse<schemaHelper.ResponseData<Path, Method>>,
    AxiosConfigWrapper<Path, Method>["data"]
  >(config);
}
