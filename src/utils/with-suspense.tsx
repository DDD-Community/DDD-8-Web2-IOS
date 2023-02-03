import { FC, Suspense } from "react";

export const withSuspense =
  (Component: FC<any>) =>
  (...args: any) => {
    return (
      <Suspense>
        <Component {...args} />
      </Suspense>
    );
  };
