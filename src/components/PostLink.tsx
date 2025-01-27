import Link from 'next/link';

export default function PostLink({ slug, title, description }: { slug: string, title: string, description: string }) {
  return (
    <Link
      href={`/p/${slug}`}
      style={{ display: 'block' }}
      className="w-full md:w-1/2 lg:w-1/3 mb-4 bg-slate-100 rounded-lg"
    >
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-light">{title}</h2>
        <p className="text-sm text-slate-500">
          {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>
      </div>
    </Link>
  );
}
