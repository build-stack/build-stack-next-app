import { GET_POST_BY_SLUG } from "@/graphql/queries/posts";
import { query } from "@/lib/apollo-client";
import MarkdownCode from "@/components/Markdown";
import Header from "@/components/Header";

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
      <>
        <Header navOnly={true} />
        <main className="max-w-7xl mx-auto flex flex-col gap-4 row-start-2 justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <h1 className="mx-4 mb-8 text-3xl font-bold">{post.title}</h1>
          { post.blocks?.map( renderBlock) }
        </main>
      </>
    )
}

function renderBlock(block: BlockType) {
    if(typeof block === "object" && "Markdown" in block) {
        return <MarkdownCode key={block.id} content={block.Markdown} />
    }

    return null;
}