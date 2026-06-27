'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact request');
      }

      setStatus('success');
      reset();
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred');
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl backdrop-blur-md">
      <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

      {status === 'success' ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-300">
          <CheckCircle className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white mb-1">Message Sent Successfully!</h4>
          <p className="text-sm text-emerald-200/80 mb-4">
            Thank you for reaching out. I will get back to you within 24 hours.
          </p>
          <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {status === 'error' && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Your Name
              </label>
              <Input
                placeholder="John Doe"
                {...register('name')}
                disabled={status === 'submitting'}
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Your Email
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                {...register('email')}
                disabled={status === 'submitting'}
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Subject
            </label>
            <Input
              placeholder="System Architecture Consultation"
              {...register('subject')}
              disabled={status === 'submitting'}
            />
            {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Message
            </label>
            <Textarea
              placeholder="Tell me about your project or technical challenge..."
              {...register('message')}
              disabled={status === 'submitting'}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            disabled={status === 'submitting'}
            className="w-full mt-2"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Inquiry
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
