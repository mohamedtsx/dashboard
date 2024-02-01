import DashboardHeader from "@/components/dashboard-header";
import DashboardShell from "@/components/shell";
import { Progress } from "@/components/ui/progress";
import { customersData } from "@/lib/data";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";

export default function Customers() {
  return (
    <DashboardShell>
      <DashboardHeader title="Users" />
      <div className="px-5">
        <Card className="rounded-lg">
          <div className="flex items-center justify-center ">
            قريباً إن شاء الله
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}
