import { LoginForm } from "@/features/login/components/login-form";
import { Logo } from "@/components/logo/logo";
import Footer from "@/components/footer/footer";

export default function LoginPage() {
  return (
    <div className="bg-muted/25 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}
