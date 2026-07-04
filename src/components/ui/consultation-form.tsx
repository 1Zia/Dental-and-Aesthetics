"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { submitAppointmentRequest, type AppointmentActionState } from "@/app/actions/appointment";
import { treatments } from "@/data/treatments";
import { clinic } from "@/lib/constants";
import {
  consultationFormSchema,
  treatmentCategoryOptions,
  type ConsultationFormValues
} from "@/lib/validations";
import { PremiumButton } from "@/components/ui/premium-button";

export function ConsultationForm() {
  const [serverState, setServerState] = useState<AppointmentActionState | null>(null);
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      treatmentCategory: "General consultation",
      specificTreatment: "",
      consent: false
    }
  });

  function onSubmit(values: ConsultationFormValues) {
    setServerState(null);
    startTransition(async () => {
      const result = await submitAppointmentRequest(values);
      setServerState(result);

      if (result.ok) {
        reset({
          name: "",
          phone: "",
          email: "",
          treatmentCategory: "General consultation",
          specificTreatment: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
          consent: false
        });
      }
    });
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Field label="Full name" error={errors.name?.message ?? serverState?.fields?.name}>
        <input
          {...register("name")}
          autoComplete="name"
          className="h-12 w-full border border-input bg-porcelain-white px-4 text-sm outline-none transition-colors focus:border-muted-gold"
        />
      </Field>
      <Field label="Phone / WhatsApp" error={errors.phone?.message ?? serverState?.fields?.phone}>
        <input
          {...register("phone")}
          autoComplete="tel"
          className="h-12 w-full border border-input bg-porcelain-white px-4 text-sm outline-none transition-colors focus:border-muted-gold"
        />
      </Field>
      <Field label="Email" error={errors.email?.message ?? serverState?.fields?.email}>
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          className="h-12 w-full border border-input bg-porcelain-white px-4 text-sm outline-none transition-colors focus:border-muted-gold"
        />
      </Field>
      <Field
        label="Preferred treatment category"
        error={errors.treatmentCategory?.message ?? serverState?.fields?.treatmentCategory}
      >
        <select
          {...register("treatmentCategory")}
          className="h-12 w-full border border-input bg-porcelain-white px-4 text-sm outline-none transition-colors focus:border-muted-gold"
        >
          {treatmentCategoryOptions.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </Field>
      <Field label="Specific treatment" error={errors.specificTreatment?.message ?? serverState?.fields?.specificTreatment}>
        <select
          {...register("specificTreatment")}
          className="h-12 w-full border border-input bg-porcelain-white px-4 text-sm outline-none transition-colors focus:border-muted-gold"
        >
          <option value="">Not sure yet</option>
          {treatments.map((treatment) => (
            <option key={treatment.slug}>{treatment.title}</option>
          ))}
        </select>
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred date" error={errors.preferredDate?.message ?? serverState?.fields?.preferredDate}>
          <input
            {...register("preferredDate")}
            type="date"
            className="h-12 w-full border border-input bg-porcelain-white px-4 text-sm outline-none transition-colors focus:border-muted-gold"
          />
        </Field>
        <Field label="Preferred time" error={errors.preferredTime?.message ?? serverState?.fields?.preferredTime}>
          <input
            {...register("preferredTime")}
            type="time"
            className="h-12 w-full border border-input bg-porcelain-white px-4 text-sm outline-none transition-colors focus:border-muted-gold"
          />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message ?? serverState?.fields?.message}>
        <textarea
          {...register("message")}
          className="min-h-28 w-full border border-input bg-porcelain-white px-4 py-3 text-sm outline-none transition-colors focus:border-muted-gold"
        />
      </Field>
      <label className="grid grid-cols-[auto_1fr] gap-3 border border-border bg-warm-ivory/75 p-4 text-sm leading-6 text-muted-foreground">
        <input {...register("consent")} type="checkbox" className="mt-1 size-4 accent-deep-espresso" />
        <span>
          I agree to be contacted about my enquiry. I understand this form does not provide medical or dental advice.
          {(errors.consent?.message ?? serverState?.fields?.consent) ? (
            <span className="mt-2 block font-medium text-destructive">
              {errors.consent?.message ?? serverState?.fields?.consent}
            </span>
          ) : null}
        </span>
      </label>
      <div className="border border-border bg-pearl p-4">
        <p className="text-sm font-semibold text-deep-espresso">What happens after I submit?</p>
        <p className="pretty mt-2 text-sm leading-6 text-muted-foreground">
          Our team will contact you to confirm availability. Treatment recommendations are made after assessment, and urgent dental concerns should be handled by calling {clinic.phone} directly.
        </p>
      </div>
      <PremiumButton type="submit" className="w-full" disabled={isPending}>
        <Send className="size-4" aria-hidden />
        {isPending ? "Sending enquiry" : "Request consultation"}
      </PremiumButton>
      <p className="text-center text-sm leading-6 text-muted-foreground">
        Not sure which treatment you need? Start with a consultation.
      </p>
      {serverState ? (
        <p
          className={serverState.ok ? "text-sm font-medium text-muted-gold" : "text-sm font-medium text-destructive"}
          role="status"
        >
          {serverState.message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso">{label}</span>
      {children}
      {error ? <span className="text-sm font-medium text-destructive">{error}</span> : null}
    </label>
  );
}
