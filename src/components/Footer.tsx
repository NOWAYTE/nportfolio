"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-10 text-xs text-neutral-500 border-t border-neutral-200">
  <h1 className="text-xl font-bold mx-auto text-neutral-400">Nowayte</h1>
  <p className="text-neutral-600">Developer & Entrepreneur</p>
  <p className="mt-2 text-neutral-600">
    Inspired by{" "}
    <a
      href="https://amctrld.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Konscept
    </a>{" "}
    and{" "}
    <a
      href="https://kayiindi.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Kayiindi
    </a>
    . Cheers! to Continet
  </p>
</div>

  );
};
