"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import accountDetails from "@/actions/getUser";
import { getOrder } from "@/actions/getOrderDetails";
import Loading from "../Loading";
import NotFound from "../product/not-found";
import ErrorPage from "@/components/pages/error";

function Order() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(true);
  const [contact, setContact] = useState({});
  const [noSlug, setNoSlug] = useState(false);

  useEffect(() => {
    const orderid = searchParams.get("orderid");
    if (!orderid) {
      setLoading(false);
      setError(false);
      setNoSlug(true);
    }
    else {
      setNoSlug(false);
      const orderDetails = async () => {
        try {
          const userData = await accountDetails();

          if (userData) {
            const id = userData.$id;
            const { orderSupabase, orderAppwrite } = await getOrder(id, orderid);
            if (orderSupabase && orderAppwrite) {
              const orderAppwriteOrder = orderAppwrite.documents[0];
              setContact(orderAppwriteOrder);
              setProducts(orderSupabase);
              setError(false);
            }
            else {
              setError(true);
            }
            setLoading(false);
          } else {
            router.push("/login");
          }
        } catch (error) {
          console.error("Error fetching order details:", error);
          setError(true);
          setLoading(false);
        }
      };
      orderDetails();
    }
  }, []);

  const dateToString = (date) => {
    const dateObject = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  if (loading) {
    return <Loading />;
  }

  if (noSlug) {
    return <NotFound />
  }

  if (Error) {
    return <ErrorPage />
  }

  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-6 min-h-screen">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-lg md:text-xl">
          OrderID - #{contact.orderid} -
          <span className="font-normal text-pink-600 dark:text-pink-600">
            {contact.firstname} {contact.lastname}{" "}
          </span>
          <span className="font-normal text-pink-600 dark:text-pink-600">
            on {dateToString(contact.$createdAt)}
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
        {products.length > 0 && (
          <div
            key={products[0].id}
            className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Products {products[0].products.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] hidden md:table-cell">
                        Image
                      </TableHead>
                      <TableHead className="max-w-[150px]">Name</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products[0].products.map((productGroup, index) => {
                      return Object.values(productGroup).map(
                        (product, innerIndex) => {
                          const itemName = product.name;
                          const itemQuantity = product.quantity;
                          const itemTotal = product.discountedPrice.toFixed(2);
                          const itemImage = product.image;

                          return (
                            <TableRow key={`${index}-${innerIndex}`}>
                              <TableCell className="hidden md:table-cell">
                                <img
                                  alt="Product image"
                                  className="aspect-square rounded-md object-cover"
                                  height="64"
                                  src={itemImage}
                                  width="64"
                                />
                              </TableCell>
                              <TableCell className="font-medium">
                                {itemName}
                              </TableCell>
                              <TableCell>{itemQuantity}</TableCell>
                              <TableCell>₹ {itemTotal}</TableCell>
                              <TableCell className="hidden md:table-cell" />
                            </TableRow>
                          );
                        }
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center">
                  <div>Subtotal</div>
                  <div className="ml-auto">₹ {contact.totalPrice}</div>
                </div>
                <Separator />
                <div className="flex items-center font-medium">
                  <div>Total</div>
                  <div className="ml-auto">₹ {contact.totalPrice}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
          <Card>
            <div>
              <CardHeader className="flex flex-row items-center space-y-0">
                <CardTitle>Customer</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="grid gap-1">
                  <p className="text-pink-600 text-lg">
                    {contact.firstname} {contact.lastname}
                  </p>
                </div>
              </CardContent>
            </div>
            <Separator />
            <div>
              <CardHeader>
                <CardTitle>Contact information</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="grid gap-1">
                  <p className="text-pink-600">{contact.email}</p>
                  <div className="text-pink-600 dark:text-pink-600">
                    +91 {contact.phoneno}
                  </div>
                </div>
              </CardContent>
            </div>
            <Separator />
            <div>
              <CardHeader>
                <CardTitle>Shipping address</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div>
                  {contact.firstname} {contact.lastname}
                  <br />
                  {contact.flatno} , {contact.address}
                  <br />
                  {contact.postalCode}
                  <br />
                  {contact.state}, {contact.country}
                </div>
              </CardContent>
            </div>
            <Separator />
            <div>
              <CardHeader>
                <CardTitle>Billing address</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Same as shipping address
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Order;
