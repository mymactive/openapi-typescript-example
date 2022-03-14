import useSWR from "swr";
import * as $axios from "../utils/axiosUtils";
import * as schemaHelper from "../models/schemaHelper";
import { AxiosError } from "axios";

const fetcher = <
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods
>(
  config: $axios.AxiosConfigWrapper<Path, Method>
) => {
  return $axios.request<Path, Method>(config).then((res) => res.data);
};

export const useAppSWR = <
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods
>(
  config: $axios.AxiosConfigWrapper<Path, Method>
) =>
  useSWR<schemaHelper.ResponseData<Path, Method>, AxiosError>(config, fetcher);
