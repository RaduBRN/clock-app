import { useQuery } from "@tanstack/react-query";
import { fetchTime } from "@/services/time-service";

function useTime(timezone) {
  return useQuery({
    queryKey: ["time"],
    queryFn: () => fetchTime(timezone),
    enabled: !!timezone,
  });
}

export { useTime };
