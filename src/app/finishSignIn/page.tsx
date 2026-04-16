"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function FinishSignInPage() {
  const router = useRouter();

  useEffect(() => {
    const completeLogin = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        const email = localStorage.getItem("emailForSignIn");

        if (!email) return;

        await signInWithEmailLink(auth, email, window.location.href);

        localStorage.removeItem("emailForSignIn");

        router.push("/");
      }
    };

    completeLogin();
  }, []);

  return <div className="p-10 text-center">Signing you in...</div>;
}