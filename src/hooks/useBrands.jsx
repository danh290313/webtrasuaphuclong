import { getBrands as getBrandsServices } from "@/services/brandApi";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
function useBrand() {
  const { token } = useAuth();
  const getAllBranchs = async () => {
    const { data } = await getBrandsServices();
    return data;
  };
  return { getAllBranchs };
}

export default useBrand;
