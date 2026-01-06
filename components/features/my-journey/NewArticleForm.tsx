"use client";
import * as z from "zod"

export const formSchema = z.object({
  title: z
    .string()
    .min(2, "Title is Required.")
    .max(32, "Title must be at most 32 characters."),
  subtitle: z
    .string()
    .min(3, "Subtitle must be at least 3 characters.")
    .max(50, "Subtitle must be at most 50 characters."),
  description: z
    .string()
    .min(20, "Description is Required.")
    .max(200, "Description must be at most 200 characters."),
    topic: z.string().min(1, { message: 'Topic is required.'}),
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
import { Select, SelectItem, SelectTrigger, SelectValue,SelectContent } from "@/components/ui/select";
import { topics } from "@/constans";
import { redirect } from "next/navigation";
import { createArticle } from "@/lib/actions/blog.actions";



const NewArticleForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      topic:"",
    },
  })

   const onSubmit = async(values: z.infer<typeof formSchema>) => {
            const article = await createArticle(values);
          }

  return (
    <section className="section-gap conatiner">
      <form id="new-article-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mx-auto max-w-2xl">
        <FieldGroup>
          {/* Topic */}
          <Field data-invalid={!!form.formState.errors.topic}>
            <FieldLabel htmlFor="topic">Topic</FieldLabel>
            <Select value={form.watch("topic")}
  onValueChange={(value) => form.setValue("topic", value)}>
              <SelectTrigger id="topic" className="w-[180px]">
                <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem 
                  value={topic} 
                  key={topic}
                  className=" capitalize"
                  >
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

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
          Creat Article
        </Button>
      </Field>
      </form>
    </section>
  )
}

export default NewArticleForm
