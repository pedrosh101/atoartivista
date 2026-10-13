import { cn } from "@/lib/utils";

/**
 * Largura padrão de conteúdo de todas as páginas internas.
 * Para mudar em todo o site, ajuste `--container-page` no globals.css.
 */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-page px-6 md:px-16", className)}
      {...props}
    />
  );
}
