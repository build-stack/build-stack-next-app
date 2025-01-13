import { GET_POSTS } from "@/graphql/queries/posts";
import { query } from "@/lib/apollo-client";
// import ComponentSharedMedia from "./ComponentSharedMedia";
// import MarkdownCode from "./Markdown";
import Link from "next/link";

async function PostsList() {
    const { data, error } = await query({ query: GET_POSTS, variables: { page: 1, pageSize: 10 } });
    if (error) {
        return <div>Error loading posts</div>
    }
    return <div className="max-w-2xl mx-auto">
        {/* eslint-disable  @typescript-eslint/no-explicit-any */}
        { data.posts.map((article: any) => (
            <div key={article.documentId} data-id={article.documentId} className="my-4">
                <Link href={`/p/${article.slug}`}>
                    <h2 className="text-xl font-bold">{article.title}</h2>
                </Link>
                {/* eslint-disable  @typescript-eslint/no-explicit-any */}
                {/* { article.blocks?.map((block: any) => (
                    <div key={block.id }>
                        { block.__typename === "ComponentSharedShared" && <ComponentSharedMedia file={block.Media} /> }
                        <MarkdownCode content={block.Markdown} />
                    </div>
                ))}  */}
            </div>
        ))}
    </div>
}

export default PostsList;