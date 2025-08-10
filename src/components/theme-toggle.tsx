import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = (resolvedTheme || theme) === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <Button
      variant="secondary"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="shadow-medium"
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
