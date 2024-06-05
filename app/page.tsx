import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight:["600"]
})
export default async function Home() {
  console.log("what is this")
  return (
    <main className="flex h-full flex-col
    item-center justify-center
    bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-red-300 to-orange-700">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",font.className)}>
          Hi, You there! Welcome Akame-Auth 🔐
        </h1>
        <p className="text-white text-lg">
          Types of Authentication methods 
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
            Sign In
            </Button>
          </LoginButton>
        </div>
    </div>
    </main>
  );
}
