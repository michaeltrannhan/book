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
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/bookList/bookCard";
import { BookListType, BookType } from "@/types/commons";

// const Books: BookType[] = [
//   {
//     id: "1",
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     publishedDate: "1960-07-11",
//     description:
//       "The story of racial injustice and the loss of innocence in the American South during the Great Depression.",
//     price: 12.99,
//   },
//   {
//     id: "2",
//     title: "1984",
//     author: "George Orwell",
//     publishedDate: "1949-06-08",
//     description:
//       "A dystopian novel set in a totalitarian society ruled by the Party, which has total control over every aspect of people's lives.",
//     price: 10.99,
//   },
//   {
//     id: "3",
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     publishedDate: "1951-07-16",
//     description:
//       "The story of Holden Caulfield, a teenage boy who struggles with alienation and loss after being expelled from his prep school.",
//     price: 9.99,
//   },
//   {
//     id: "4",
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     publishedDate: "1813-01-28",
//     description:
//       "A romantic novel that follows the emotional development of Elizabeth Bennet, who learns the error of making hasty judgments.",
//     price: 8.99,
//   },
//   {
//     id: "5",
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     publishedDate: "1937-09-21",
//     description:
//       "A fantasy novel about the adventures of hobbit Bilbo Baggins, who is hired by the wizard Gandalf to help a group of dwarves reclaim their treasure from a dragon.",
//     price: 11.99,
//   },
//   {
//     id: "6",
//     title: "The Adventures of Huckleberry Finn",
//     author: "Mark Twain",
//     publishedDate: "1884-12-10",
//     description:
//       "A novel about the adventures of a young boy named Huck Finn and his friend Jim, a runaway slave, as they travel down the Mississippi River.",
//     price: 7.99,
//   },
//   {
//     id: "7",
//     title: "The Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     publishedDate: "1954-07-29",
//     description:
//       "A high fantasy novel that follows the quest of hobbit Frodo Baggins to destroy the One Ring, which was created by the Dark Lord Sauron.",
//     price: 14.99,
//   },
//   {
//     id: "8",
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedDate: "1925-04-10",
//     description:
//       "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
//     price: 9.99,
//   },
// ];

interface Props extends BookListType {}
const BookList = (props: Props) => {
  const books = props.books;
  const router = useRouter();
  return (
    <Card className="container w-full h-full mt-4">
      <CardHeader className="text-center">
        <CardTitle>Book List</CardTitle>
        <CardDescription>Book List</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {books.map((book, idx) => (
          <BookCard book={book} key={idx} />
        ))}
      </CardContent>
      <CardFooter className="w-full flex justify-center">
        <div className="flex flex-col items-center my-12">
          <div className="flex text-gray-700">
            <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left w-6 h-6">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
            <div className="flex h-12 font-medium rounded-full bg-gray-200">
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                1
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">
                2
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                3
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                ...
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                13
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                14
              </div>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                15
              </div>
              <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">
                2
              </div>
            </div>
            <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right w-6 h-6">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookList;
