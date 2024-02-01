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

function BooksLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardShell>
      <DashboardHeader title="Books" />
      <div className="px-5">
        <Card className="rounded-xl">
          <div className="py-5 flex w-fit gap-4">
            <Link href="/dashboard/books">queue</Link>
            <Link href="/dashboard/books/accepted">accepted</Link>
            <Link href="/dashboard/books/rejected">rejected</Link>
          </div>
          <div>{children}</div>
        </Card>
      </div>
    </DashboardShell>
  );
}

export default BooksLayout;
