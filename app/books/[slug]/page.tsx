"use client";
import { api } from "@/services/fetch";
import { BookType } from "@/types/commons";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import BookCard from "@/components/bookList/bookCard";
import BookDetails from "@/components/bookDetail";
import CommentsArea from "@/components/commentsArea";
import generateComments from "@/utils/comments";
import { Badge } from "@/components/ui/badge";
type Props = {};

const BookDetailPage = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading, isError } = useQuery<BookType>(
    ["book", params.slug],
    async () => {
      const { data } = await api.get<BookType, any>(`books/${params.slug}`);
      return data;
    },
    { suspense: true }
  );
  const { data: commentList } = generateComments();
  const comments = commentList.filter((comment) => comment.bookId === data?.id);

  if (isError) return <main>Something went wrong</main>;
  return (
    <main className="flex min-h-screen items-start justify-center">
      <Suspense fallback={<Skeleton />}>
        <div className="container grid grid-cols-3 my-8">
          <div className="col-span-1 flex flex-col justify-start items-center p-8">
            <Image
              src="/images/cover.jpg"
              alt="Cover"
              width={200}
              height={300}
            />
            <div className="flex w-full my-4 align-middle justify-center">
              <div className="text-xl font-semibold">Price: </div>
              <Badge variant="outline">${data?.price}</Badge>
            </div>
          </div>
          <div className="col-span-2 my-4">
            <BookDetails book={data as BookType} />
            <CommentsArea comments={comments} />
          </div>
        </div>
      </Suspense>
    </main>
  );
};

export default BookDetailPage;
