import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Experience' });

export default function Page() {
  const timelineData = [
    {
      date: 'Dec 2021 - Current',
      title: 'TATA Consultancy Services',
      role: 'System Engineer',
      location: 'Pune, India',
      description: (
        <ul className="list-disc px-4">
          <li>
            Experienced in developing scalable and performant applications, specializing in React
            front-end development with expertise in state management, responsive design, and
            testing, alongside backend development skills in API design, database management, and
            microservices architecture.
          </li>
          <li>
            Participated in change management process by evaluating proposed changes before they
            were implemented into production environment.
          </li>
          <li>
            Performed project upgrades and resolved bugs, while also contributing to enhancing
            customer experience by providing insights on best practices for product usage to
            customers.
          </li>
          <li>
            Assisted in enhancing product capabilities by delivering new features and upgrading
            functionality.
          </li>
        </ul>
      ),
    },
    {
      date: 'Feb 2021 - Nov 2021',
      title: 'TATA Consultancy Services',
      role: 'Assistant System Engineer',
      location: 'Pune, India',
      description: (
        <ul className="list-disc px-4">
          <li>
            Assisted developer team in managing application incidents and ensuring uninterrupted
            business operations under transportation domain
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Experience
          </h1>
        </div>
        <div className="py-5">
          {timelineData.map((event, index) => (
            <div
              className="relative mb-8 flex before:absolute before:bottom-0 before:left-2.5 before:top-5 before:w-[1px] before:bg-gray-500 before:content-['']"
              key={index}
            >
              {/* Timeline Dot */}
              <div className="h-5 w-5 flex-shrink-0 rounded-full bg-primary-500"></div>

              {/* Timeline Content */}
              <div className="ml-6 w-full">
                <p className="text-gray-500 dark:text-gray-400">{event.date}</p>
                <div className="flex flex-row items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <h6 className="text-md text-gray-500 dark:text-gray-400">{event.location}</h6>
                </div>
                <p className="text-primary-500">{event.role}</p>
                <div className="text-gray-700 dark:text-gray-100">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
