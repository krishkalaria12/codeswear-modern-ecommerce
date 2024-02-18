"use client";
import React, { useEffect, useState } from "react";
import { ReadAllOrders } from "@/lib/supabase/dbconfig";
import accountDetails from "@/actions/getUser";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import Link from "next/link";
import ErrorPage from "@/components/pages/error";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await accountDetails();
        if (data) {
          const id = data.$id;
          const res = await ReadAllOrders(id);
          if (res) {
            setError(false);
            setOrders(res);
            console.log(orders);
            setLoading(false);
          } else {
            setError(true);
          }
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
        setError(true);
      }
    };

    fetchOrders();
  }, []);

  console.log(orders);

  if (loading) {
    return <Loading />;
  }

  if (Error) {
    return <ErrorPage />;
  }

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
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {orders != [] &&
                  orders.map((order) => (
                    <Link href={`/order?orderid=${order.slug}`} key={order.id}>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          {order.slug}
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          {order.products.map((product) => (
                            <div key={product.item1.id}>
                              {product.item1.name}, Size: {product.item1.size},
                              Color: {product.item1.color}
                            </div>
                          ))}
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          {new Date(order.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    </Link>
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
