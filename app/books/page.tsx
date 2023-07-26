import BookList from "@/components/bookList/bookList";
import { Books } from "@/sampleResponse";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  
  return (
    <main>
      <BookList books={Books} total={Books.length} />
    </main>
  );
};

export default Page;
