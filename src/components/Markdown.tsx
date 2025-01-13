import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MarkdownProps {
    content: string
}

function MarkdownCode({ content }: MarkdownProps) {
    return (
        <Markdown
            className="max-w-2xl py-12 px-4 rounded-4xl bg-gray-25 w-full rounded-xl"
            components={{
                code({ className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                        <div className="relative my-4 rounded-lg shadow-lg bg-gray-900">
                            {/* MacBook-like Toolbar */}
                            <div className="flex items-center h-8 px-3 space-x-2 bg-gray-800 rounded-t-lg">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <SyntaxHighlighter
                                style={oneDark}
                                language={match[1]}
                                showLineNumbers={true}
                                wrapLines={true}
                                wrapLongLines={true}
                                customStyle={{ margin: 0, borderRadius: '0 0 8px 8px' }}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        </div>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                }
            }}
        >
            {content}
        </Markdown>
    );
}

export default MarkdownCode;