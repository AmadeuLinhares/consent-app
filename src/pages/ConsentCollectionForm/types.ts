import { z } from 'zod'
export const cosentCollectionFormSchema = z
  .object({
    name: z
      .string()
      .min(10, {
        message: `Need have name and last name`,
      })
      .transform((name) => name.toLowerCase()),
    email: z
      .string()
      .email()
      .transform((email) => email.toLowerCase()),
    ads: z.boolean().optional(),
    newsletter: z.boolean().optional(),
    statistics: z.boolean().optional(),
    checkboxGroup: z.boolean().optional(),
  })
  .superRefine(({ ads, newsletter, statistics }, refinementContext) => {
    if (!ads && !newsletter && !statistics) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: `At leat one checkbox should be check`,
        path: [`checkboxGroup`],
      })
    }
  })

export type Form = z.infer<typeof cosentCollectionFormSchema>

export type checkBoxItemsProps = {
  label: string
  value: `newsletter` | `ads` | `statistics`
  id: string
}
