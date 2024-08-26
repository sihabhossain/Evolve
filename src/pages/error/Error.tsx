import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const ErrorPage = () => {
  return (
    <div
      className=" flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/retro-error-text-with-layers_53876-99637.jpg?t=st=1724649651~exp=1724653251~hmac=0decbff1fd591fe8263f53f50953815fc5b459f4d1c7548c23d1b47d9d5d33e4&w=1380')",
      }}
    >
      <div className="rounded-lg bg-white bg-opacity-80 p-6 text-center shadow-lg">
        <ExclamationCircleIcon className="mb-4 h-24 w-24 text-red-600" />
        <h1 className="text-5xl font-bold text-gray-800">Oops!</h1>
        <p className="mt-2 text-lg text-gray-600">
          It looks like the page you're looking for doesn't exist or something
          went wrong.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
