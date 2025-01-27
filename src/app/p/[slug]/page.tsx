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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const { data, error } = await query({ query: GET_POST_BY_SLUG, variables: { slug } });

  if (!data?.posts?.length || error) {
    return {
      title: 'Post Not Found - Corneliu Iancu', // Fallback title if the post is not found
    };
  }

  const post = data.posts[0];

  return {
    title: `${post.title} - Corneliu Iancu`,
  };
}


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
        <main className="grid" style={{
          gridColumn: "fm1-end / fm2-start", 
          gridTemplateColumns: "var(--grid-template-columns)",
          gridRowGap: "1rem",
          gridTemplateAreas: "var(--grid-template-areas)",
        }}>
          <section className="grid" style={{
            gridColumn: 'm1/m2',
            gridTemplateColumns: 'var(--m-start)No worries. I'm wrapping the day, so I'll get on top of any change requests tomorrow morning. 1fr var(--m-end)'
          }}>
          <h1 className="mx-4 mb-8 text-3xl font-bold" style={{ gridColumn: 2}}>{post.title}</h1>
          { post.blocks?.map( renderBlock) }
          </section>
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