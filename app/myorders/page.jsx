import React from "react";

function MyOrders() {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Products Oder
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            All products item
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
            placeholder="search..."
            type="search"
          />
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
            New Report
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-purple-600 text-white">
            Create
          </button>
        </div>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg dark:border-gray-700">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 align-middle [&:has([role=checkbox])]:pr-0 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    NAME
                  </th>
                  <th className="h-12 px-4 align-middle [&:has([role=checkbox])]:pr-0 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    PRODUCTS
                  </th>
                  <th className="h-12 px-4 align-middle [&:has([role=checkbox])]:pr-0 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    CREATED AT
                  </th>
                  <th className="h-12 px-4 align-middle [&:has([role=checkbox])]:pr-0 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    QRT
                  </th>
                  <th className="h-12 px-4 align-middle [&:has([role=checkbox])]:pr-0 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Vera Carpenter"
                        src="/placeholder.svg?height=40&width=40"
                      />
                    </span>{" "}
                    Vera Carpenter
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Admin
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Jan 21, 2020
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    43
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Activo
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Blake Bowman"
                        src="/placeholder.svg?height=40&width=40"
                      />
                    </span>{" "}
                    Blake Bowman
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Editor
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Jan 01, 2020
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    77
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Activo
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Dana Moore"
                        src="/placeholder.svg?height=40&width=40"
                      />
                    </span>{" "}
                    Dana Moore
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Editor
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Jan 10, 2020
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    64
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      Suspended
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Alonzo Cox"
                        src="/placeholder.svg?height=40&width=40"
                      />
                    </span>{" "}
                    Alonzo Cox
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Admin
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Jan 18, 2020
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    70
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      Inactive
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center py-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing 1 to 4 of 50 Entries
          </p>
          <div className="flex space-x-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-400">
              Prev
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-400">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
