import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Experience' });

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Testimonials
          </h1>
        </div>
        <div className="py-5"></div>
      </div>
    </>
  );
}
