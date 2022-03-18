import * as $axios from "../utils/axiosUtils";
import { useAppSWR } from "../hooks/useAppSWR";

const fetchAvailablePets = (name: string, photoUrls: string[]) =>
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
