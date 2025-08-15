"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("2a3e46f8-8dbc-4e62-a619-b8a808fde6e9");
  }, []);

  return null;
}
