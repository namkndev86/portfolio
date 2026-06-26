"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Monitor,
  Cpu,
  ShieldAlert,
  BarChart,
} from "lucide-react";

// Dynamically import Canvas component with SSR disabled to prevent hydration errors
const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center text-text-light">
      Loading 3D Engine...
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col justify-between overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-error/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="w-full px-8 py-6 flex items-center justify-between border-b border-border-color backdrop-blur-md bg-background-primary/80 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center font-bold text-text-main shadow-md">
            P
          </div>
          <span className="font-semibold text-lg tracking-wide bg-gradient-to-r from-text-main to-text-light bg-clip-text text-transparent">
            PORTFOLIO PLATFORM
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#architecture"
            className="text-sm text-text-light hover:text-primary transition-colors"
          >
            Architecture
          </a>
          <a
            href="#services"
            className="text-sm text-text-light hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="/docs"
            target="_blank"
            className="text-sm text-text-light hover:text-primary transition-colors"
          >
            Swagger API
          </a>
        </div>
      </header>

      {/* Main Hero & 3D Canvas */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 max-w-7xl mx-auto w-full py-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="w-fit px-4 py-1.5 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20 tracking-wider">
            ENTERPRISE DEPLOYABLE ARCHITECTURE
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Decoupled Services. <br />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              High Performance.
            </span>
          </h1>
          <p className="text-text-light text-lg leading-relaxed max-w-lg">
            A production-ready platform built with Next.js 15, NestJS, and
            multi-tier databases. Demonstrates standard configurations for
            horizontal scalability, continuous deployment, and telemetry
            scraping.
          </p>

          <div className="flex gap-4 items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-tr from-primary to-primary-light hover:brightness-110 text-text-main font-medium shadow-lg hover:shadow-primary/20 transition-all"
            >
              {/* <Github size={18} /> */}
              View Source Code
            </a>
            <a
              href="#architecture"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border-color hover:bg-background-secondary text-text-light hover:text-text-main font-medium transition-all"
            >
              Explore Topology
            </a>
          </div>
        </motion.div>

        {/* 3D Scene Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full min-h-[400px] border border-border-color bg-background-card backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl"
        >
          <ThreeCanvas />
        </motion.div>
      </div>

      {/* Infrastructure Details Section */}
      <section
        id="services"
        className="w-full bg-background-secondary/40 border-t border-border-color py-16 px-8 z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Platform Services</h2>
            <p className="text-text-light">
              Independently deployable stack nodes routed through Nginx Gateway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-background-card border border-border-color hover:border-primary/30 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Monitor size={24} />
              </div>
              <h3 className="font-semibold text-lg">NextJS Frontend</h3>
              <p className="text-sm text-text-light">
                Static generation, React Server Components (RSC), Zustand UI
                state models.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-background-card border border-border-color hover:border-primary/30 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success">
                <Cpu size={24} />
              </div>
              <h3 className="font-semibold text-lg">NestJS API Core</h3>
              <p className="text-sm text-text-light">
                REST APIs, JWT validation, cache controls, analytics ingestion
                routes.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-background-card border border-border-color hover:border-primary/30 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center text-warning">
                <BarChart size={24} />
              </div>
              <h3 className="font-semibold text-lg">Dual DB Schema</h3>
              <p className="text-sm text-text-light">
                PostgreSQL Prisma schemas alongside MongoDB document analytics
                models.
              </p>
            </div>
            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-background-card border border-border-color hover:border-primary/30 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error">
                <ShieldAlert size={24} />
              </div>
              <h3 className="font-semibold text-lg">Devops Observability</h3>
              <p className="text-sm text-text-light">
                Prometheus scraper configurations with Grafana performance
                metrics graphs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-8 py-6 border-t border-border-color flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted z-10">
        <span>&copy; 2026 Portfolio Platform. All Rights Reserved.</span>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            {/* <Linkedin size={12} /> LinkedIn */}
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            {/* <Github size={12} /> GitHub */}
          </a>
        </div>
      </footer>
    </main>
  );
}
