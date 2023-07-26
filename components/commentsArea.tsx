"use client";
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
import { toast, useToast } from "@/components/ui/use-toast";
import generateComments, { Comment } from "@/utils/comments";
import { faker } from "@faker-js/faker";

type Props = {
  comments: Comment[];
};
const FormSchema = z.object({
  comment: z.string().min(2, {
    message: "User must enter at least 2 characters to comment",
  }),
});

const altFormSchema = z.object({
  comment: z.string().min(2, {
    message: "User must enter at least 2 characters to comment",
  }),
  commentId: z.number(),
});

const CommentsArea = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const form2 = useForm<z.infer<typeof altFormSchema>>({
    resolver: zodResolver(altFormSchema),
  });
  const [comments, setComments] = React.useState<Comment[]>(props.comments);
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newComment: Comment = {
      id: comments.length + 1,
      bookId: props.comments[0].bookId,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      content: data.comment,
    };
    setComments([...comments, newComment]);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  function onSubmit2(data: z.infer<typeof altFormSchema>) {
    const newComment: Comment = {
      id: comments.length + 1,
      bookId: props.comments[0].bookId,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      content: data.comment,
    };
    const id = data.commentId;
    // comments[id as number].subComment = newComment;
    const newComments = comments.slice();
    newComments[id as number].subComment = newComment;
    setComments(newComments);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  React.useEffect(() => {
    form.reset({
      comment: "",
    });
  }, [form.formState.isSubmitSuccessful, form]);
  return (
    <Card className="my-2">
      <CardHeader>
        <CardTitle>
          <div className="text-3xl font-semibold">Rating and Comments</div>
        </CardTitle>
        <CardContent>
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
              onClick={() => setOpen(!open)}>
              Add a comment
            </Button>
          </div>
          {open && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full space-y-6 justify-center align-middle">
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem className="w-full flex">
                      <div className="w-full">
                        <FormLabel>Place a comment</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Add any comments here"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter at least 2 characters
                        </FormDescription>
                        <FormMessage />
                      </div>
                      <Button type="submit" className="self-center mt-0 py-0">
                        Send
                      </Button>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          )}
        </CardContent>
      </CardHeader>
      <Separator />
      <CardContent>
        {comments.map((cmt) => (
          <Card key={cmt.id} className="m-2 p-3">
            <div className="flex w-full justify-start items-center">
              <Avatar className="mr-8 rounded-full bg-slate-600">
                <AvatarImage src="/person.svg" />
                <AvatarFallback>PN</AvatarFallback>
              </Avatar>
              <CardTitle>
                {cmt.firstName} {cmt.lastName} commented:
              </CardTitle>
            </div>
            <CardContent className="m-2 p-3">
              <CardDescription>{cmt.content}</CardDescription>
              {cmt.subComment && (
                <div className="flex w-full justify-start items-center">
                  <Avatar className="mr-8 rounded-full bg-slate-600">
                    <AvatarImage src="/person.svg" />
                    <AvatarFallback>PN</AvatarFallback>
                  </Avatar>
                  <CardTitle>
                    {cmt.subComment.firstName} {cmt.subComment.lastName}{" "}
                    commented:
                  </CardTitle>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default CommentsArea;
