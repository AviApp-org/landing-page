import { AnalyticsIcon } from "@/icons/AnalyticsIcon";
import { CloudBackupIcon } from "@/icons/CloudBackupIcon";
import { ReportsIcon } from "@/icons/ReportsIcon";
import { HTMLAttributes } from "react";

export const features = {
  analytics: {
    title: "Consistência de dados",
    description:
      "Nosso aplicativo garante dados sólidos e confiáveis sobre o desempenho da sua granja.",
    icon: <AnalyticsIcon />,
  },
  reports: {
    title: "Relatórios automatizados",
    description: "Gere e envie seus relatórios de forma automatizada e sem estresse.",
    icon: <ReportsIcon />
  },
  backup: {
    title: "Backup em nuvem",
    description: "Série de backups automatizados para garantir a integridade dos seus dados.",
    icon: <CloudBackupIcon />
  }
};

export interface CardFeatureProps extends HTMLAttributes<HTMLDivElement> {
  type: keyof typeof features;
}
