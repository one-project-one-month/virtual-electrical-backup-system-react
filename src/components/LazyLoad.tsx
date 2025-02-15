import { ComponentProps, ElementType, Suspense } from "react";

type LazyLoadProps<T extends ElementType> = {
  component: ElementType;
} & ComponentProps<T>;

const LazyLoad = <T extends ElementType>({
  component: Component,
  ...props
}: LazyLoadProps<T>) => {
  return (
    <Suspense fallback={<div> loading... </div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyLoad;
