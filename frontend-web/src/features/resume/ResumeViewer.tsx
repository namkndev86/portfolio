'use client';

import { Download, Printer, Mail, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';
import { BIO_DATA } from '@/data/bio';
import { MOCK_EXPERIENCES } from '@/data/experiences';
import { MOCK_SKILLS } from '@/data/skills';

export function ResumeViewer() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Action Bar */}
      <div className="flex items-center justify-between gap-4 mb-8 print:hidden">
        <h1 className="text-2xl font-bold text-foreground">Curriculum Vitae</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={handlePrint} className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Print CV
          </Button>
          <Button variant="default" size="sm" onClick={handlePrint} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Structured Resume Document (Print ready) */}
      <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-card-foreground shadow-lg print:border-none print:bg-white print:text-black print:p-0">
        {/* Header */}
        <div className="border-b border-border print:border-slate-300 pb-8 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground print:text-black tracking-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-primary print:text-indigo-700 font-semibold text-lg mt-1">
              {SITE_CONFIG.role}
            </p>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm text-muted-foreground print:text-slate-700 font-mono">
            <p className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary print:text-black" />
              {SITE_CONFIG.email}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary print:text-black" />
              {SITE_CONFIG.location}
            </p>
            <p className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-primary print:text-black" />
              {SITE_CONFIG.url}
            </p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-primary print:text-indigo-700 font-bold mb-3">
            Executive Summary
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground print:text-slate-800">
            {BIO_DATA.fullBio}
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-primary print:text-indigo-700 font-bold mb-4">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {MOCK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="border-l-2 border-border print:border-slate-300 pl-4 space-y-2">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-bold text-foreground print:text-black text-base">
                    {exp.position} — <span className="text-primary print:text-indigo-700 font-semibold">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground print:text-slate-600">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground print:text-slate-600">{exp.location}</p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground print:text-slate-800 pt-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="leading-relaxed">{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Breakdown */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-primary print:text-indigo-700 font-bold mb-3">
            Core Competencies & Stack
          </h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {MOCK_SKILLS.map((skill) => (
              <span
                key={skill.id}
                className="text-xs rounded bg-secondary print:bg-slate-100 print:text-black px-2.5 py-1 text-secondary-foreground font-mono border border-border print:border-slate-300"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
