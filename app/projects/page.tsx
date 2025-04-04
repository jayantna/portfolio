import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import { genPageMetadata } from 'app/seo';
import Link from '../../components/Link';

export const metadata = genPageMetadata({ title: 'Projects' });

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                blog={d.blog}
              />
            ))}
          </div>
        </div>
      </div>
      <Link href="/contact" className="my-3 font-handwriting text-2xl text-primary-500">
        Drop a message if you liked my work.
      </Link>
    </>
  );
}
