import * as $axios from "../utils/axiosUtils";
import { useAppSWR } from "../hooks/useAppSWR";

export const fetchAvailablePets = () =>
  $axios.request({
    url: "/pet/findByTags",
    method: "get",
    params: {
      tags: ["available"],
    },
  });

const postPet = (name: string, photoUrls: string[]) =>
  $axios.request({
    url: "/pet",
    method: "post",
    data: {
      name,
      photoUrls,
    },
  });

const { data, error } = useAppSWR({
  url: "/pet/findByStatus",
  method: "get",
  params: { status: ["pending"] },
});
