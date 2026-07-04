"use server";

import { consultationFormSchema, type ConsultationFormValues } from "@/lib/validations";

export type AppointmentActionState = {
  ok: boolean;
  message: string;
  fields?: Partial<Record<keyof ConsultationFormValues, string>>;
};

export async function submitAppointmentRequest(
  input: ConsultationFormValues
): Promise<AppointmentActionState> {
  const parsed = consultationFormSchema.safeParse(input);

  if (!parsed.success) {
    const fields: AppointmentActionState["fields"] = {};

    parsed.error.issues.forEach((issue) => {
      const key = issue.path[0] as keyof ConsultationFormValues | undefined;
      if (key && !fields[key]) {
        fields[key] = issue.message;
      }
    });

    return {
      ok: false,
      message: "Please check the form details and try again.",
      fields
    };
  }

  // Placeholder for Resend/Nodemailer integration.
  // Keep API keys in environment variables such as RESEND_API_KEY; never expose secrets to the client.
  console.info("Appointment enquiry received", {
    ...parsed.data,
    submittedAt: new Date().toISOString()
  });

  return {
    ok: true,
    message: "Thank you. Your enquiry has been received. Our team will contact you to confirm availability."
  };
}
