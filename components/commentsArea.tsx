import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
type Props = {};
const FormSchema = z.object({
  comment: z.string().min(2, {
    message: "User must enter at least 2 characters to comment",
  }),
});

const CommentsArea = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Card className="my-2">
      <CardHeader>
        <CardTitle>
          <h3 className="text-3xl font-semibold">Rating and Comments</h3>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center justify-center my-4">
            <Avatar className="rounded-full bg-slate-600">
              <AvatarImage src="/person.svg" />
              <AvatarFallback>PN</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-2xl font-serif italic font-medium text-center">
            What do you think?
          </div>
          <div className="flex justify-center items-center my-4">
            <Button
              className="rounded-2xl"
              variant="outline"
              onClick={() => setOpen(true)}>
              Add a comment
            </Button>
          </div>
          {open && <Input />}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex justify-between items-center"></div>
      </CardContent>
    </Card>
  );
};

export default CommentsArea;
