import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { BookType } from "@/types/commons";
import { useRouter } from "next/navigation";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  book: BookType;
  imageURL?: string;
}

const BookCard = (props: Props) => {
  const router = useRouter();
  return (
    <Card
      className="transition ease-in-out delay-125 hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl  duration-200 hover:cursor-pointer"
      onClick={() => router.push(`/books/${props.book.id}`)}>
      <div className="grid grid-cols-6 gap-4 place-content-center place-items-center">
        <div className=" col-span-6 xs:col-span-2">
          <div className="relative w-72 h-40">
            <Image
              className="rounded-lg mt-2"
              src="/images/book1.jpg"
              fill
              style={{
                objectFit: "contain",
              }}
              alt="Book"
            />
          </div>
        </div>
        <div className="col-span-6 xs:col-span-4">
          <CardHeader className="">
            <CardTitle>{props.book.title}</CardTitle>
            <CardDescription>{props.book.author}</CardDescription>
          </CardHeader>
          <CardContent className="">
            <p>{props.book.description}</p>
          </CardContent>
          <CardFooter>
            <p>${props.book.price}</p>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
