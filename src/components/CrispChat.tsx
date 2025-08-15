"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("cd3063a4-b86c-4dc2-bf93-04343da3e8f1");
  }, []);

  return null;
}
