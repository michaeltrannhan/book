"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BookList from "@/components/bookList/bookList";
import BookCard from "@/components/bookList/bookCard";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="container w-full h-full">
        <CardHeader className="text-center">
          <CardTitle>Book List</CardTitle>
          <CardDescription>Book List</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
          Explore all books from our library
        </CardContent>
        <CardFooter className="flex align-middle justify-center text-center">
          <Button onClick={() => router.push("/books")}>View All Books</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
