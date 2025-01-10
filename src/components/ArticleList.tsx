import { GET_ARTICLES } from "@/graphql/queries/articles";
import { query } from "@/lib/apollo-client";
import ComponentSharedMedia from "./ComponentSharedMedia";
import MarkdownCode from "./Markdown";

async function ArticleList() {
    const { data, error } = await query({ query: GET_ARTICLES });
    console.log(data.articles);
    if (error) {
        return <div>Error loading posts</div>
    }
    // @todo: fix types
    return <div className="max-w-2xl mx-auto">
        {/* eslint-disable  @typescript-eslint/no-explicit-any */}
        { data.articles.map((article: any) => (
            <div key={article.documentId} data-id={article.documentId} className="my-4">
                <h2 className="text-xl font-bold">{article.title}</h2>
                { /* eslint-disable  @typescript-eslint/no-explicit-any */ }
                { article.blocks.map((block: any) => (
                    <div key={block.id }>
                        { block.__typename === "ComponentSharedMedia" && <ComponentSharedMedia file={block.file} /> }
                        <MarkdownCode content={block.body} />
                    </div>
                ))} 
            </div>
        ))}
    </div>
}

export default ArticleList;