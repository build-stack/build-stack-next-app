import Image from "next/image";
import { GET_POST_BY_SLUG } from "@/graphql/queries/posts";
import { query } from "@/lib/apollo-client";
import MarkdownCode from "@/components/Markdown";

type MarkdownBlockType = {
    id: string;
    Markdown: string;
}

type MediaBlockType = {
    id: string;
    Media: {
        documentId: string;
        name: string;
        url: string;
    };
}

type BlockType = { __typename: string } & (MarkdownBlockType | MediaBlockType);

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug

    const { data: { posts: [ post ] }, error } = await query({ query: GET_POST_BY_SLUG, variables: { slug } });

    if(!post || error) {
      return <div>Post not found</div>
    }

    return (
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            style={{ height: 'auto' }}
            priority
          />
          <h1 className="text-2xl font-bold">{post.title}</h1>
          { post.blocks?.map( renderBlock) }
        </main>
      </div>
    )
}

function renderBlock(block: BlockType) {
    if(typeof block === "object" && "Markdown" in block) {
        return <MarkdownCode key={block.id} content={block.Markdown} />
    }

    return null;
}