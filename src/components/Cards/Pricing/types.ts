import { HTMLAttributes } from "react";

type PricePeriod = "month" | "year";

export interface CardPricingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  price: string;
  pricePeriod: PricePeriod;
  features: string[];
}
