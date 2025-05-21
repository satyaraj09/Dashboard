import { useEffect, useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { data } from "@/data/articles";
import { Button } from "./ui/button";
import { ChevronsUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const headings = [
  { label: "Article Title", key: "title", sortable: false },
  { label: "Keywords [Traffic]", key: "keyword", sortable: true },
  { label: "Words", key: "words", sortable: true },
  { label: "Created On", key: "created", sortable: true },
  { label: "Action", key: "action", sortable: false },
  { label: "Publish", key: "publish", sortable: false },
];

const DataTable = () => {
  const [value, setValue] = useState("generated-articles");
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const tabs = [
    { value: "generated-articles", label: "Generated Articles" },
    { value: "published-articles", label: "Published Articles" },
    { value: "scheduled-articles", label: "Scheduled Articles" },
    { value: "archived-articles", label: "Archived Articles" },
  ];

  const rawData = data[value] || [];

  const filteredData = useMemo(() => {
    let result = [...rawData];
    if (search) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.keyword.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sortKey) {
      result.sort((a, b) => {
        const valA = a[sortKey as keyof typeof a];
        const valB = b[sortKey as keyof typeof b];
        if (typeof valA === "number" && typeof valB === "number") {
          return sortAsc ? valA - valB : valB - valA;
        }
        return sortAsc
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }
    return result;
  }, [rawData, search, sortKey, sortAsc]);

  const totalPages = Math.ceil(filteredData.length / Number(entriesPerPage));

  const paginatedData = filteredData.slice(
    (currentPage - 1) * Number(entriesPerPage),
    currentPage * Number(entriesPerPage)
  );

  const isAllSelected =
    selectedRows.length === paginatedData.length &&
    paginatedData.length !== 0;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([]);
    } else {
      const newSelected = paginatedData.map((_, idx) => idx);
      setSelectedRows(newSelected);
    }
  };

  const handleSort = (key: string) => {
    if (key === sortKey) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setSelectedRows([]);
  }, [value, entriesPerPage, search]);

  return (
    <div className="w-full px-4 space-y-4">
      {/* Responsive Tabs */}
      <div className="block sm:hidden w-full">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Article Type" />
          </SelectTrigger>
          <SelectContent>
            {tabs.map((tab) => (
              <SelectItem key={tab.value} value={tab.value}>
                {tab.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden sm:block w-full justify-center">
        <Tabs
          value={value}
          onValueChange={setValue}
          className="flex justify-center"
        >
          <TabsList className="flex flex-wrap bg-gray-100 rounded-md gap-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-4 py-2 rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-2 md:mt-10">
        <Input
          placeholder="Search for Title & Keywords..."
          className="w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <Table>
          <TableHeader className="font-black text-base">
            <TableRow>
              {headings.map((head, index) => (
                <TableHead key={head.key || index}>
                  <div
                    className={`flex items-center gap-2 cursor-pointer ${
                      head.sortable ? "hover:text-blue-600" : ""
                    }`}
                    onClick={() => head.sortable && handleSort(head.key)}
                  >
                    {index === 0 ? (
                      <>
                        <Checkbox
                          className="border-gray-500"
                          checked={isAllSelected}
                          onCheckedChange={handleSelectAll}
                        />
                        {head.label}
                      </>
                    ) : (
                      <>
                        {head.sortable && <ChevronsUpDown size={16} />}
                        {head.label}
                      </>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Checkbox
                      className="border-gray-500"
                      checked={selectedRows.includes(index)}
                      onCheckedChange={() =>
                        setSelectedRows((prev) =>
                          prev.includes(index)
                            ? prev.filter((i) => i !== index)
                            : [...prev, index]
                        )
                      }
                    />
                    {item.title}
                  </div>
                </TableCell>
                <TableCell>{item.keyword}</TableCell>
                <TableCell>{item.words}</TableCell>
                <TableCell>{item.created}</TableCell>
                <TableCell>
                  <Button className="px-4 py-2 rounded-md bg-transparent text-blue-600 border-blue-600 border hover:text-white hover:bg-blue-600">
                    {item.action}
                  </Button>
                </TableCell>
                <TableCell>{item.publish}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="flex gap-3 items-center">
                Total
                <span className="font-bold">{filteredData.length}</span>
                Articles | Show
                <Select
                  value={entriesPerPage}
                  onValueChange={(val) => setEntriesPerPage(val)}
                >
                  <SelectTrigger className="w-16">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                  </SelectContent>
                </Select>
                entries per page
              </TableCell>
              <TableCell colSpan={6} className="text-right">
                Page {currentPage} / {totalPages}
                <div className="inline-flex ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((p) =>
                        p < totalPages ? p + 1 : totalPages
                      )
                    }
                    disabled={currentPage === totalPages}
                    className="ml-2"
                  >
                    Next
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
