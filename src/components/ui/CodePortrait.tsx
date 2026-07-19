"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { portraitMatrix } from "@/data/portraitMatrix";

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

export const CodePortrait: React.FC = () => {
  const { theme, mounted: themeMounted } = useTheme();
  const [pulseIndices, setPulseIndices] = useState<Set<number>>(new Set());

  const isDark = themeMounted && theme === "dark";

  // Gently pulse a small random set of characters (keywords)
  useEffect(() => {
    const interval = setInterval(() => {
      const newPulse = new Set<number>();
      // Randomly pick ~25 indices to pulse
      const totalChars = portraitMatrix.length * portraitMatrix[0].length;
      for (let i = 0; i < 35; i++) {
        newPulse.add(Math.floor(Math.random() * totalChars));
      }
      setPulseIndices(newPulse);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getCharStyle = (brightness: number, index: number) => {
    const isPulsing = pulseIndices.has(index);
    
    if (isDark) {
      // Dark Theme: high brightness = visible text (white/blue), low brightness = dark/transparent
      if (brightness > 0.7) {
        return {
          opacity: 1,
          fontWeight: "700" as const,
          color: isPulsing ? "#60a5fa" : "#3b82f6", // Pulse to lighter blue
          textShadow: "0 0 4px rgba(59, 130, 246, 0.3)"
        };
      } else if (brightness > 0.5) {
        return {
          opacity: 0.9,
          fontWeight: "500" as const,
          color: isPulsing ? "#ffffff" : "#e5e7eb"
        };
      } else if (brightness > 0.35) {
        return {
          opacity: 0.5,
          color: "#9ca3af"
        };
      } else if (brightness > 0.22) {
        return {
          opacity: 0.25,
          color: "#6b7280"
        };
      } else {
        return {
          opacity: 0.06,
          color: "#4b5563"
        };
      }
    } else {
      // Light Theme: low brightness (shadows, hair) = visible text (dark/blue), high brightness = transparent
      if (brightness < 0.3) {
        return {
          opacity: 1,
          fontWeight: "700" as const,
          color: isPulsing ? "#1238b3" : "#1b49e0", // Pulse to darker blue
          textShadow: "0 0 2px rgba(27, 73, 224, 0.1)"
        };
      } else if (brightness < 0.5) {
        return {
          opacity: 0.9,
          fontWeight: "500" as const,
          color: isPulsing ? "#000000" : "#1f2937"
        };
      } else if (brightness < 0.65) {
        return {
          opacity: 0.5,
          color: "#4b5563"
        };
      } else if (brightness < 0.78) {
        return {
          opacity: 0.25,
          color: "#9ca3af"
        };
      } else {
        return {
          opacity: 0.06,
          color: "#d1d5db"
        };
      }
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-main bg-bg-card p-4 shadow-xl select-all group">
      {/* Decorative details */}
      <div className="absolute top-2 left-2 flex gap-1 z-10">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
      </div>
      <div className="absolute top-2 right-4 font-mono text-[8px] text-text-muted z-10 select-none">
        MET_PORTRAIT_GEN_v1.0
      </div>

      {/* Grid container */}
      <div 
        className="flex flex-col items-center justify-center bg-bg-main/20 p-2 rounded-xl border border-border-main/60 overflow-x-auto min-h-[300px] sm:min-h-[360px]"
        dir="ltr"
      >
        <pre className="font-mono text-[3.6px] xs:text-[4.2px] sm:text-[5px] md:text-[7.2px] lg:text-[8px] leading-[1.0] tracking-[-0.05em] select-all whitespace-pre text-center mx-auto transition-all duration-300">
          {portraitMatrix.map((row, y) => {
            const rowChars: React.ReactNode[] = [];
            
            for (let x = 0; x < row.length; x++) {
              const pixelIndex = y * row.length + x;
              const char = CODE_STREAM[pixelIndex % CODE_STREAM.length];
              const brightness = row[x];
              const style = getCharStyle(brightness, pixelIndex);
              
              rowChars.push(
                <span
                  key={x}
                  style={style}
                  className="transition-colors duration-1000"
                >
                  {char}
                </span>
              );
            }
            
            return (
              <div key={y} className="flex justify-center leading-none">
                {rowChars}
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};
export default CodePortrait;
