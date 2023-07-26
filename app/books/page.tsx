"use client";
import BookList from "@/components/bookList/bookList";

import { Books } from "@/sampleResponse";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { BookType } from "@/types/commons";
import { api } from "@/services/fetch";
import { Skeleton } from "@/components/ui/skeleton";
type Props = {};

const Page = (props: Props) => {
  const { data, isLoading, isError } = useQuery<BookType[]>(
    ["books"],
    async () => {
      const { data } = await api.get<BookType[], any>(`books`);
      return data;
    },
    {
      suspense: true,
    }
  );
  if (isError) return <main>404 Error loading page...</main>;
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <BookList books={data as BookType[]} total={data?.length} />
        )}
      </Suspense>
    </main>
  );
};

export default Page;
