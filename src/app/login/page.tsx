"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MoveRight } from "lucide-react"
import Link from "next/link"


const formSchema = z.object({
  email: z.string().toLowerCase().email({
    message: "Invalid email",
  }),
  userName: z.string().toLowerCase().min(5),
  password: z
    .string()
    .min(8, { message: "Min 8 Char" })
    .max(20, { message: "Max 20" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Uppercase required ",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Lowercase Required",
    })
    .refine((password) => /[0-9]/.test(password), { message: "Number Error Message" })
})

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          userName: "",
          password: ""
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      return (
        <div className="h-screen flex justify-center items-center">
          <div className="w-1/3">
            <div>
              <h1 className="text-center text-5xl font-serif mb-5 font-semibold">Welcome to Pull App</h1>
              <h1 className="text-center text-3xl font-serif mb-5 font-semibold">Login</h1>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Type your Username" {...field} />
                        </FormControl>
                        <FormDescription>
                          <FormMessage />
                        </FormDescription>
    
    
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="Type your Password" {...field} />
                        </FormControl>
                        <FormDescription>
                          <FormMessage />
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  <div>
                    <Button type="submit">Submit</Button>
                    <Link href={"/signup"}><Button variant="link" className="ml-2">Create an Account <MoveRight /> </Button></Link>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      )
}
