import { useQuery } from "@tanstack/react-query";
import { fetchQuote } from "@/services/quote-service";

function useQuote() {
  return useQuery({
    queryKey: ["quote"],
    queryFn: fetchQuote,
    refetchOnWindowFocus: false,
  });
}

export { useQuote };
