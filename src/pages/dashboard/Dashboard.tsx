import { BasePageLayout } from "../../shared/layouts/BasePageLayout";

interface IDashboardProps {
  children?: React.ReactNode;
}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return <BasePageLayout title="Dashboard">Dashboard</BasePageLayout>;
};
