import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Função que define as variantes de estilo do componente Button.
 * Utiliza `class-variance-authority` para gerenciar as diferentes variações de estilo e tamanho.
 * As classes CSS configuradas aqui definem o comportamento visual e a responsividade dos botões.
 *
 * Variantes de estilo:
 * - `default`: Estilo padrão do botão.
 * - `destructive`: Estilo para ações destrutivas, como deletar.
 * - `outline`: Botão com contorno.
 * - `secondary`: Botão secundário com uma cor alternativa.
 * - `ghost`: Botão "ghost" sem bordas visíveis.
 * - `link`: Botão que parece um link com sublinhado.
 *
 * Variantes de tamanho:
 * - `default`: Tamanho padrão.
 * - `sm`: Botão pequeno.
 * - `lg`: Botão grande.
 * - `icon`: Botão de tamanho fixo para ícones.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Interface das propriedades do componente Button.
 * Estende as propriedades padrões do elemento HTML `<button>`, adicionando suporte para variantes e
 * a capacidade de renderizar como um elemento filho personalizado.
 *
 * @property {boolean} asChild - Se verdadeiro, o botão será renderizado como um componente filho (via Slot do Radix).
 * @property {string} variant - Variante de estilo do botão.
 * @property {string} size - Tamanho do botão.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Componente Button.
 * Um componente de botão reutilizável com suporte a várias variantes de estilo e tamanho.
 * O botão pode ser renderizado como um elemento padrão <button> ou como um componente filho (via Slot).
 *
 * @param {ButtonProps} props - Propriedades do componente, incluindo `variant`, `size` e `asChild`.
 * @returns {JSX.Element} O componente Button renderizado.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Define se o componente será renderizado como um botão ou como um componente personalizado via Slot.
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props} // Propaga as propriedades adicionais para o componente.
      />
    );
  }
);

// Define um nome de exibição para o componente Button, útil para debugging.
Button.displayName = "Button";

// Exporta o componente Button e suas variantes para reutilização em outros lugares da aplicação.
export { Button, buttonVariants };
