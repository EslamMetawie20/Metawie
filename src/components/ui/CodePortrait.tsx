"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/i18n/context/LanguageContext";

// A long string of actual code/keywords used to render the portrait
const CODE_STREAM = [
  "const Metawie = new SoftwareEngineer();",
  "git add . && git commit -m 'deploy pipelines' && git push",
  "docker run -d -p 8080:80 --name darsio darsio/app:latest",
  "name: CI/CD Pipeline on: push branches: [main]",
  "npm run build && npm run test && npm run deploy",
  "const build = (code) => test(code) && deploy(code);",
  "return { status: 200, body: 'Release Stable' };",
  "kubectl apply -f k8s/deployment.yaml -n production",
  "chocolatey upgrade ggu-desktop-app --yes --verbose",
  "const [theme, setTheme] = useState('dark');",
  "import { useLanguage } from '@/i18n/context/LanguageContext';",
  "const darsio = { type: 'SaaS', tech: ['React', 'Spring Boot'] };",
  "const bedaya = { type: 'Architect Corporate', rtl: true };",
  "const cafeZeitlos = { location: 'Braunschweig', menu: 'halal' };",
  "const Ostfalia = { studies: 'Bachelor Informatik', semester: 5 };",
  "const GGU = { role: 'DevOps Automation', Chocolatey: true };",
  "// Reducing repetitive manual release work on Windows desktop apps",
  "// Maintaining Azure-based servers and Docker environments",
  "// Improving software delivery reliability and automation pipelines",
  "docker-compose up --build -d database service-api nginx-proxy",
  "const deploy = async () => azure.virtualMachines.createOrUpdate()",
  "if (build.success) { release.publish(Chocolatey) } else { notify() }",
  "import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';",
  "console.log('METAWIE: Software & DevOps Engineering Portfolio');"
].join(" ");

interface CellStyle {
  color: string;
  pulseColor?: string;
  alpha: number;
  bold: boolean;
  glow?: string;
}

// Same brightness -> style thresholds as the original span-based renderer.
// Dark theme: high brightness = visible text; light theme: low brightness = visible text.
function getCellStyle(brightness: number, isDark: boolean): CellStyle {
  if (isDark) {
    if (brightness > 0.7) {
      return { alpha: 1, bold: true, color: "#dee2e6", pulseColor: "#f8f9fa", glow: "rgba(248, 249, 250, 0.4)" };
    } else if (brightness > 0.5) {
      return { alpha: 0.9, bold: false, color: "#e5e7eb", pulseColor: "#ffffff" };
    } else if (brightness > 0.35) {
      return { alpha: 0.5, bold: false, color: "#9ca3af" };
    } else if (brightness > 0.22) {
      return { alpha: 0.25, bold: false, color: "#6b7280" };
    }
    return { alpha: 0.06, bold: false, color: "#4b5563" };
  }
  if (brightness < 0.3) {
    return { alpha: 1, bold: true, color: "#495057", pulseColor: "#212529", glow: "rgba(33, 37, 41, 0.15)" };
  } else if (brightness < 0.5) {
    return { alpha: 0.9, bold: false, color: "#1f2937", pulseColor: "#000000" };
  } else if (brightness < 0.65) {
    return { alpha: 0.5, bold: false, color: "#4b5563" };
  } else if (brightness < 0.78) {
    return { alpha: 0.25, bold: false, color: "#9ca3af" };
  }
  return { alpha: 0.06, bold: false, color: "#d1d5db" };
}

const MONO_FONT = 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function mixColor(a: string, b: string, p: number): string {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  return `rgb(${Math.round(ar + (br - ar) * p)}, ${Math.round(ag + (bg - ag) * p)}, ${Math.round(ab + (bb - ab) * p)})`;
}

export const CodePortrait: React.FC = () => {
  const { theme, mounted: themeMounted } = useTheme();
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isDark = themeMounted && theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let matrix: number[][] | null = null;
    let cellW = 0;
    let cellH = 0;
    let cssWidth = 0;
    let cssHeight = 0;
    let dpr = 1;
    let rafId = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let inView = true;

    const base = document.createElement("canvas");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const drawChar = (ctx: CanvasRenderingContext2D, x: number, y: number, color?: string) => {
      if (!matrix) return;
      const style = getCellStyle(matrix[y][x], isDark);
      const idx = y * matrix[0].length + x;
      ctx.globalAlpha = style.alpha;
      ctx.fillStyle = color ?? style.color;
      ctx.font = `${style.bold ? "700 " : ""}${cellH}px ${MONO_FONT}`;
      if (style.glow) {
        ctx.shadowColor = style.glow;
        ctx.shadowBlur = 3;
      }
      ctx.fillText(CODE_STREAM[idx % CODE_STREAM.length], x * cellW, y * cellH);
      ctx.shadowBlur = 0;
    };

    const drawAll = () => {
      if (!matrix) return;
      const ctx = canvas.getContext("2d");
      const baseCtx = base.getContext("2d");
      if (!ctx || !baseCtx) return;
      const cols = matrix[0].length;
      const rows = matrix.length;
      cssWidth = canvas.clientWidth;
      if (!cssWidth) return;
      // Cell geometry mirrors the old span grid: line-height 1, tight tracking.
      cellW = cssWidth / cols;
      cellH = cellW / 0.55;
      cssHeight = rows * cellH;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      base.width = Math.round(cssWidth * dpr);
      base.height = Math.round(cssHeight * dpr);
      canvas.width = base.width;
      canvas.height = base.height;
      canvas.style.height = `${cssHeight}px`;

      baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      baseCtx.clearRect(0, 0, cssWidth, cssHeight);
      baseCtx.textBaseline = "top";
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          drawChar(baseCtx, x, y);
        }
      }
      baseCtx.globalAlpha = 1;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(base, 0, 0);
    };

    // Gently pulse a small random set of bright characters, fading in and out.
    const startPulse = () => {
      if (reduceMotion || intervalId) return;
      intervalId = setInterval(() => {
        if (!matrix || !inView || document.hidden) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const cols = matrix[0].length;
        const rows = matrix.length;
        const cells: { x: number; y: number; base: string; pulse: string }[] = [];
        for (let i = 0; i < 35; i++) {
          const x = Math.floor(Math.random() * cols);
          const y = Math.floor(Math.random() * rows);
          const style = getCellStyle(matrix[y][x], isDark);
          if (style.pulseColor) {
            cells.push({ x, y, base: style.color, pulse: style.pulseColor });
          }
        }
        if (!cells.length) return;
        const started = performance.now();
        const DURATION = 1000;
        cancelAnimationFrame(rafId);
        const step = (now: number) => {
          if (disposed || !matrix) return;
          const t = Math.min((now - started) / DURATION, 1);
          // Ease in then out: peak pulse color at t = 0.5
          const p = 1 - Math.abs(t * 2 - 1);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(base, 0, 0);
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.textBaseline = "top";
          for (const c of cells) {
            drawChar(ctx, c.x, c.y, mixColor(c.base, c.pulse, p));
          }
          ctx.globalAlpha = 1;
          if (t < 1) rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
      }, 2000);
    };

    // Lazy-load the matrix data so it stays out of the route's main chunk
    import("@/data/portraitMatrix").then(({ portraitMatrix }) => {
      if (disposed) return;
      matrix = portraitMatrix;
      drawAll();
      startPulse();
    });

    const ro = new ResizeObserver(() => drawAll());
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    io.observe(canvas);

    return () => {
      disposed = true;
      ro.disconnect();
      io.disconnect();
      if (intervalId) clearInterval(intervalId);
      cancelAnimationFrame(rafId);
    };
  }, [isDark]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border-main bg-bg-card p-4 shadow-xl group">
      {/* Decorative details */}
      <div className="absolute top-2 left-2 flex gap-1 z-10">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
      </div>
      <div className="absolute top-2 right-4 font-mono text-[8px] text-text-muted z-10 select-none">
        MET_PORTRAIT_GEN_v1.0
      </div>

      {/* Canvas container */}
      <div
        className="flex flex-col items-center justify-center bg-bg-main/20 p-2 rounded-xl border border-border-main/60 min-h-[300px] sm:min-h-[360px]"
        dir="ltr"
      >
        <canvas
          ref={canvasRef}
          className="block w-full"
          role="img"
          aria-label={t("common.portrait_alt")}
        />
      </div>
    </div>
  );
};
export default CodePortrait;
