import { CardPricingProps } from "./types";

export const CardPricing = ({
  title,
  price,
  pricePeriod,
  features,
  ...rest
}: CardPricingProps) => {
  return (
    <div
      className={`w-full max-w-sm p-4 bg-gray-50 border rounded-lg shadow-sm sm:p-8 max-sm:min-w-[300px] ${rest.className}`}
    >
      <h5 className="mb-4 text-lg font-medium text-gray-400">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /{pricePeriod}
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        {features.map((feature, key) => {
          return (
            <li className="flex items-center" key={key}>
              <svg
                className="flex-shrink-0 w-4 h-4 text-leaf-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {feature}
              </span>
            </li>
          );
        })}
        <li className="flex line-through decoration-gray-500">
          <svg
            className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Sketch Files
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white bg-leaf-700 hover:bg-leaf-800 focus:ring-4 focus:outline-none focus:ring-leaf-200 dark:bg-leaf-600 dark:hover:bg-leaf-700 dark:focus:ring-leaf-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Saiba mais
      </button>
    </div>
  );
};
