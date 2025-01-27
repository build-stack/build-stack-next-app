import { query } from "@/lib/apollo-client";
import { GET_POSTS } from "@/graphql/queries/posts";
import Link from "next/link";
import PostLink from "./PostLink";

export default async function RecentPosts() {
    const { data } = await query({ query: GET_POSTS, variables: { page: 1, pageSize: 10 } });
    const { posts } = data;
    return (
        <div style={{ gridColumn:"m1-end / m2-start" }} className="flex flex-col items-start justify-items-center mb-16 w-full">
            <h2 className="text-4xl font-light mb-4">{'Recent posts'}</h2>
            { posts.map((post: { documentId: string, title: string, slug: string, description: string }) => (
                <PostLink key={post.documentId} title={post.title} slug={post.slug} description={post.description} />
            ))}
            <Link href="/posts" className="border-2 border-black rounded-3xl px-8 py-3 hover:border-slate-500 hover:text-slate-500">
                {'View all posts'}
            </Link>
        </div>
    )
}

