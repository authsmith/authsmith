import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@authsmith/ui/dialog";
import { Button } from "@authsmith/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@authsmith/ui/form";
import { Input } from "@authsmith/ui/input";

const formSchema = z.object({
  name: z.string().refine((v) => v, { message: "Invalid name" }),
  email: z.string().email(),
  twitterHandle: z.string().optional(),
  website: z.string().optional(),
});

const JoinWaitlist = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      twitterHandle: "",
      website: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const headers = new Headers();
    // @ts-expect-error NOTE: window has no ENV property
    headers.append("Authorization", `Bearer ${window.ENV.AIRTABLE_SECRET}`);
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      records: [
        {
          fields: {
            Name: values.name,
            Email: values.email,
            "Twitter Handle": values.twitterHandle,
            Website: values.website,
          },
        },
      ],
    });

    try {
      await fetch(
        // @ts-expect-error NOTE: window has no ENV property
        `https://api.airtable.com/v0/${window.ENV.AIRTBALE_BETA_WAITLIST_ENDPOINT}`,
        {
          method: "POST",
          headers: headers,
          body: raw,
          redirect: "follow",
        },
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Join the waitlist</Button>
      </DialogTrigger>
      <DialogContent className="text-light bg-dark border border-light/30 rounded-[1.5px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Sign up to join the beta waitlist
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4">
              <FormField
                control={form.control}
                name="twitterHandle"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Twitter Handle</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your twitter handle"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="Website URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default JoinWaitlist;
