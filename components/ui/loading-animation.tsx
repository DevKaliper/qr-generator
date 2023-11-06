
"use client"
import React from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";


export default function Loader() {
  const { theme } = useTheme();
  useEffect(() => {
    async function getLoader() {
      const { grid } = await import("ldrs");
      grid.register();
    }
    getLoader();
  }, []);
  return (
    <l-grid
      size="60"
      speed="1.5"
      color={
        theme === "dark" ? "white" : theme === "light" ? "black" : "gray"
      }></l-grid>
  );
}
