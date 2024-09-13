import { CardFeatureProps, features } from "./types";

export const CardFeature = ({ type }: CardFeatureProps) => {
  const feature = features[type];
  return (
    <div className="max-w-sm p-6 bg-gray-50 rounded-lg shadow-sm flex flex-col gap-3 max-sm:min-w-[300px]">
      <div className="bg-leaf-200 p-3 rounded-full w-fit">{feature.icon}</div>
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          {feature.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  );
};
