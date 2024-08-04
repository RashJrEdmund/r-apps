import { ComponentProps } from "react";
import { cn } from "../../lib/tw";

interface Props extends ComponentProps<"h2"> {
  //
}

function SectionHeader({ className, ...restProps }: Props) {
  return (
    <h2
      {...restProps}
      className={cn("font-semibold text-2xl w-fit mx-auto", className)}
    />
  );
};

export {
  SectionHeader,
};
