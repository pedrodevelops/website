import { cn } from "@/lib/utils";

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardRoot({ className, ...props }: CardRootProps) {
  return (
    <div
      className={cn(
        "relative border-2 space-y-2 drop-shadow shadow-lg border-stone-900 rounded-lg p-4",
        className
      )}
      {...props}
    />
  );
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div className={cn("flex absolute bottom-4 gap-4", className)} {...props} />
  );
}

export { CardRoot, CardFooter };
