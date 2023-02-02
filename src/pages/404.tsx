import { useLayoutEffect } from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const useClientOnlyLayoutEffect = typeof window === "undefined" ? () => {} : useLayoutEffect;

export default function Page404() {
  const router = useRouter();
  useClientOnlyLayoutEffect(() => {
    router.push("/");
  });
  return <></>;
}
