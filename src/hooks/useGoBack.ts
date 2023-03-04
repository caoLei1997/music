import { useNavigate } from "react-router";
import { useCallback } from "react";

interface UseGoBack {
  (): any[];
}

const useGoBack: UseGoBack = () => {
  const navigate = useNavigate();
  const back = useCallback(() => {
    console.log('window.history.state: ', window.history.state)

    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }, [window.history.state]);

  return [back];
};

export default useGoBack;
