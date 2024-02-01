import DashboardHeader from "@/components/dashboard-header";
import DashboardShell from "@/components/shell";
import { ReactNode } from "react";

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
import Link from "next/link";
import BooksNav from "@/components/BooksNav";

function BooksLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell>
      <DashboardHeader title="Books" />
      <div className="px-5">
        <Card className="rounded-xl">
          <BooksNav />
          <div>{children}</div>
        </Card>
      </div>
    </DashboardShell>
  );
}

export default BooksLayout;
