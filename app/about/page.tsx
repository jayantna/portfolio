import { Authors, allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import AuthorLayout from '@/layouts/AuthorLayout';
import { coreContent } from 'pliny/utils/contentlayer';
import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'About' });

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors;
  const mainContent = coreContent(author);

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="text-4xl">Hey! I am Jayant👋</div>
        <div className="my-3 text-2xl text-primary-600">A Software Engineer based in India 🇮🇳</div>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 pt-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Experience</h2>
        </div>
      </div>
    </>
  );
}
