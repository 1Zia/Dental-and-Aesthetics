import { z } from "zod";

export const treatmentCategoryOptions = [
  "Dental",
  "Skin",
  "Hair",
  "Laser",
  "Botox / Fillers",
  "PRP",
  "General consultation"
] as const;

export const consultationFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  phone: z.string().trim().min(5, "Phone / WhatsApp is required."),
  email: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Please enter a valid email address."
    }),
  treatmentCategory: z.enum(treatmentCategoryOptions, {
    error: "Treatment category is required."
  }),
  specificTreatment: z.string().trim().optional(),
  preferredDate: z.string().trim().optional(),
  preferredTime: z.string().trim().optional(),
  message: z.string().trim().max(700, "Please keep your message under 700 characters.").optional(),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required."
  })
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;
