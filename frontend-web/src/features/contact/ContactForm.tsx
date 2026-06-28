'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/forms/FormWrapper';
import { FormInput } from '@/components/forms/FormInput';
import { FormTextarea } from '@/components/forms/FormTextarea';
import { FormSubmitButton } from '@/components/forms/FormSubmitButton';
import { useContactMutation } from '@/hooks/queries/useContactMutation';
import { useTranslation } from '@/core/i18n/i18n-context';
import { commonSchemas } from '@/core/forms/schemas';

const contactSchema = z.object({
  name: commonSchemas.name,
  email: commonSchemas.email,
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const contactMutation = useContactMutation();
  const { t } = useTranslation();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await contactMutation.mutateAsync(data);
      setIsSuccess(true);
      form.reset();
    } catch (err: unknown) {
      // Error handled via mutation state
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl backdrop-blur-md text-card-foreground">
      <h3 className="text-xl font-bold text-foreground mb-6">{t('pages.contactTitle')}</h3>

      {isSuccess ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-300">
          <CheckCircle className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-foreground mb-1">Message Sent Successfully!</h4>
          <p className="text-sm text-emerald-200/80 mb-4">
            Thank you for reaching out. I will get back to you within 24 hours.
          </p>
          <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <FormWrapper form={form} onSubmit={onSubmit} className="space-y-4">
          {contactMutation.isError && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
              <span>
                {(contactMutation.error as Error)?.message || 'Failed to submit contact request'}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              label={t('forms.nameLabel')}
              placeholder={t('forms.namePlaceholder')}
              registration={form.register('name')}
              error={form.formState.errors.name}
              disabled={contactMutation.isPending}
            />

            <FormInput
              label={t('forms.emailLabel')}
              type="email"
              placeholder={t('forms.emailPlaceholder')}
              registration={form.register('email')}
              error={form.formState.errors.email}
              disabled={contactMutation.isPending}
            />
          </div>

          <FormInput
            label="Subject"
            placeholder="System Architecture Consultation"
            registration={form.register('subject')}
            error={form.formState.errors.subject}
            disabled={contactMutation.isPending}
          />

          <FormTextarea
            label={t('forms.messageLabel')}
            placeholder={t('forms.messagePlaceholder')}
            registration={form.register('message')}
            error={form.formState.errors.message}
            disabled={contactMutation.isPending}
          />

          <FormSubmitButton
            isLoading={contactMutation.isPending}
            loadingText="Submitting Message..."
            className="w-full mt-2"
          >
            {t('common.submit')}
          </FormSubmitButton>
        </FormWrapper>
      )}
    </div>
  );
}
