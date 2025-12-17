"use client";
import * as z from "zod"

export const formSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(32, "Title must be at most 32 characters."),
  subtitle: z
    .string()
    .min(3, "Subtitle must be at least 3 characters.")
    .max(50, "Subtitle must be at most 50 characters.")
    .optional(),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(200, "Description must be at most 200 characters."),
})

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field"
import { use } from "react"


const NewArticleForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  return (
    <section className="section-gap conatiner">
      <form id="new-article-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mx-auto max-w-2xl">
        <FieldGroup>
          {/* Title */}
          <Field data-invalid={!!form.formState.errors.title}>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input
              id="title"
              placeholder="Article title"
              {...form.register("title")}
            />
            {form.formState.errors.title && (
              <FieldError errors={[form.formState.errors.title]} />
            )}
          </Field>

          {/* Subtitle */}
          <Field data-invalid={!!form.formState.errors.subtitle}>
            <FieldLabel htmlFor="subtitle">Subtitle</FieldLabel>
            <Input
              id="subtitle"
              placeholder="Article subtitle"
              {...form.register("subtitle")}
            />
            {form.formState.errors.subtitle && (
              <FieldError errors={[form.formState.errors.subtitle]} />
            )}
          </Field>

          {/* Description */}
          <Field data-invalid={!!form.formState.errors.description}>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              rows={6}
              placeholder="Explain the concept in your own words..."
              {...form.register("description")}
            />
            <FieldDescription>
              Explain what you learned and why it matters.
            </FieldDescription>
            {form.formState.errors.description && (
              <FieldError errors={[form.formState.errors.description]} />
            )}
          </Field>

        </FieldGroup>
         <Field orientation="horizontal">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button type="submit" variant='outline' form="new-article-form">
          Submit
        </Button>
      </Field>
      </form>

      {/* Actions */}
     
    </section>
  )
}

export default NewArticleForm
