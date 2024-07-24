import { useQuery } from "@tanstack/react-query";
import { fetchLocation } from "@/services/location-service";

function useLocation() {
  return useQuery({
    queryKey: ["location"],
    queryFn: fetchLocation,
  });
}

export { useLocation };
