"use client";
import { BookType } from "@/types/commons";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  book: BookType;
}

const BookDetails = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="text-3xl font-semibold">{props.book.title}</div>
        </CardTitle>
        <CardDescription>Author: {props.book.author}</CardDescription>
        <CardContent className="flex">
          <span>Genre: </span>
          <div className="flex ml-4">
            <Badge variant="outline">ABC</Badge>
            <Badge variant="outline">Science</Badge>
            <Badge variant="outline">BCD</Badge>
            <Badge variant="outline">Sci-fi</Badge>
          </div>
        </CardContent>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h3 className="text-lg font-semibold">Description</h3>
            </AccordionTrigger>
            <AccordionContent>{props.book.description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      {/* <CardFooter>
        <div className="flex justify-center items-baseline">
          <span className="text-gray-500 dark:text-gray-400">$ </span>
          <span className="mr-2 text-5xl font-extrabold">
            {props.book.price}
          </span>
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default BookDetails;
