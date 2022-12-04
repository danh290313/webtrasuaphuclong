import { getBrands as getBrandsServices } from "@/services/brandApi";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
function useBrand() {
  const { token } = useAuth();
  const [brands, setBrands] = useState();
  useEffect(() => {
    const contr = new AbortController();
    const { signal } = contr;
    (async () => {
      const res = await getBrandsServices(signal, token);
      setBrands(res.data);
    })();

    return () => contr.abort();
  }, []);
  return { brands };
}

export default useBrand;
