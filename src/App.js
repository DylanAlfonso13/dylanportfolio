import './App.css';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96 animate-move1"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M23.1,-30.8C32.2,-30.1,43.4,-27.5,51,-20.5C58.6,-13.5,62.5,-2,63.6,11C64.6,24,62.8,38.4,56.1,51.7C49.4,65,37.8,77.1,26,73.8C14.2,70.6,2.2,52.1,-13,46.5C-28.1,41,-46.5,48.6,-58.6,45C-70.7,41.4,-76.6,26.6,-72,14.5C-67.3,2.3,-51.9,-7.2,-40.6,-12.9C-29.2,-18.7,-21.9,-20.6,-15.8,-22.7C-9.7,-24.8,-4.8,-27,1.1,-28.6C7,-30.3,14,-31.5,23.1,-30.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-primary-light dark:text-primary-dark sm:text-7xl">
              Hi! I'm Dylan Alfonso and this is my portfolio
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-secondary-light dark:text-secondary-dark sm:text-xl/8">
              I built this portfolio from scratch using Tailwind CSS and React. Below you can navigate to my different projects and learn a bit more about me :)
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] animate-move2"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M23.1,-30.8C32.2,-30.1,43.4,-27.5,51,-20.5C58.6,-13.5,62.5,-2,63.6,11C64.6,24,62.8,38.4,56.1,51.7C49.4,65,37.8,77.1,26,73.8C14.2,70.6,2.2,52.1,-13,46.5C-28.1,41,-46.5,48.6,-58.6,45C-70.7,41.4,-76.6,26.6,-72,14.5C-67.3,2.3,-51.9,-7.2,-40.6,-12.9C-29.2,-18.7,-21.9,-20.6,-15.8,-22.7C-9.7,-24.8,-4.8,-27,1.1,-28.6C7,-30.3,14,-31.5,23.1,-30.8Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
