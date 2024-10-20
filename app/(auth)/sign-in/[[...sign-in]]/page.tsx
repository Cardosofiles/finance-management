import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";

import { FinanceLogoSVG } from "@/components/icons/finance";

export default function signInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">
            Bem-vindo de Volta!
          </h1>
          <p className="text-base text-[#7e8ca0] ">
            Faça login ou crie uma conta para retornar ao seu dashboard!
          </p>
        </div>

        <div className="w-full flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>

      <div className="h-full bg-slate-600 hidden lg:flex items-center justify-center">
        <Link href={"/"}>
          <FinanceLogoSVG />
        </Link>
      </div>
    </div>
  );
}
