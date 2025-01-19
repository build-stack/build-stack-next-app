import Header from "@/components/Header";

// import Picture from "@/components/Picture/Picture";
import { GET_IMAGE_BY_ID } from "@/graphql/queries/images";
import { query } from "@/lib/apollo-client";
import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import Head from "next/head";
export const metadata = {
    title: 'Posts — Corneliu Iancu',
};
export default async function Posts() {
    const { data: { uploadFiles: [ image ] } } = await query({ query: GET_IMAGE_BY_ID, variables: { id: 'x2r5xkdnnskhitk3vu6yyodu' } });
    return <>
        <Head>
            <title>Posts</title>
        </Head>
        <Header navOnly={ true } />
        <main className="max-w-7xl px-4 mx-auto flex flex-col row-start-2 items-start justify-items-center font-[family-name:var(--font-geist-sans)]">
            <CategoryHeader title="Posts" description="Technology, design, work, and other topics." image={ image.url } />
        </main>
    </>
}