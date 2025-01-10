// "use client";
import { GET_AUTHORS } from "@/graphql/queries/authors";
import { query } from "@/lib/apollo-client";
import MarkdownCode from "./Markdown";

async function AuthorsList() {
    const { data, error } = await query({ query: GET_AUTHORS })
    if (error) {
        console.error(error)
        return <div>Error loading authors</div>
    }
    const markdownContent = `\`\`\`javascript
${JSON.stringify(data, null, 2)}
\`\`\``;

    return (
        <div className="max-w-2xl mx-auto"> {/* TODO: add higher order component for layouts of this kind of modules. */}
            <MarkdownCode content={markdownContent} />
        </div>
    );
}

export default AuthorsList;