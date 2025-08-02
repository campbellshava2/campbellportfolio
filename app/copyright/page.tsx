import { Lock } from "lucide-react";
import Link from "next/link";

export default function CopyrightPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <div className="bg-card/80 border border-primary/20 rounded-xl shadow-lg p-10 max-w-lg w-full animate-fade-in">
        <Lock className="mx-auto mb-6 h-16 w-16 text-primary animate-pulse" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Resource Restricted</h1>
        <p className="text-lg text-foreground/80 mb-6 font-mono">
          Sorry, you can't view this resource due to copyright restrictions. This is because i dont own the rights to The system but i Developed it<br />
          Please contact me if you need more information or access.
        </p>
        <Link href="/" legacyBehavior>
          <a className="inline-block px-6 py-3 rounded-md bg-primary text-background font-bold shadow hover:bg-primary/80 transition-all">Return Home</a>
        </Link>
      </div>
    </div>
  );
}
