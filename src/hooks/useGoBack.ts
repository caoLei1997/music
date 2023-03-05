import { useNavigate } from "react-router";
import { useCallback } from "react";

interface UseGoBack {
  (index?: number): any[];
}

const useGoBack: UseGoBack = (index = -1) => {
  const navigate = useNavigate();
  const back = useCallback(() => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(index);
    } else {
      navigate("/", { replace: true });
    }
  }, [window.history.state, index]);

  return [back];
};

export default useGoBack;
