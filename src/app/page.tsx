import Image from "next/image";
import Link from "next/link";
import { query } from "@/lib/apollo-client";
import { GET_POSTS } from "@/graphql/queries/posts";
import Header from "@/components/Header";
import Featured from "@/components/Featured";

export default async function Home() {

  const { data } = await query({ query: GET_POSTS, variables: { page: 1, pageSize: 10 } });
  const { posts } = data;
  return (
    <>
        <Header />
        <main className="max-w-7xl px-4 mx-auto flex flex-col row-start-2 items-start justify-items-center font-[family-name:var(--font-geist-sans)]">
          <h2 className="text-2xl font-bold mb-4">{'Featured posts'}</h2>
          { posts.map((post: { documentId: string, title: string, slug: string }) => (
            <Featured key={post.documentId} title={post.title} slug={post.slug} />
          )) }
        </main>
        <footer className="row-start-3 flex gap-6 py-12 flex-wrap items-center justify-center">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </Link>
          <Link 
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/subscription"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Subscription
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/posts"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Courses
          </Link>
        </footer>
    </>
  );
}
