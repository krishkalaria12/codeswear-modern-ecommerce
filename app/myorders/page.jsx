'use client'
import React, { useEffect, useState } from "react";
import { ReadAllOrders } from "@/lib/supabase/dbconfig";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await ReadAllOrders();
        setOrders(res); 
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Products Order
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            All products item
          </p>
        </div>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg dark:border-gray-700">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                {/* Header row */}
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 align-middle [&:has([role=checkbox])]:pr-0 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    ID
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
                {/* Dynamic rows based on orders */}
                {orders.map((order) => (
                  <tr key={order.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {/* Render order details */}
                      {order.name}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {order.products.join(", ")}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {order.qrt}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className={`inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${order.status === "Activo" ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' : 'bg-primary text-primary-foreground hover:bg-primary/80'}`}>
                        {order.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
