import React from "react";

function ReturnPolicy() {
  return (
    <div class="dark:text-white p-2 dark:bg-gray-800">
      <div class="container mx-auto py-8 px-2 md:px-0">
        <h1 class="text-4xl font-bold mb-6">Refund and Cancellation Policy</h1>
        <h2 class="text-2xl font-semibold mb-4">Refund Policy</h2>
        <p class="mb-4">
          At CodesWear.com, our primary focus is customer satisfaction, which is
          why we strive to provide the best products and services. Please note
          that product images on our website are for representational purposes
          only and may vary slightly due to lighting conditions or other
          factors.
        </p>
        <p class="mb-4">
          If you are unsatisfied with a product due to a major defect, we will
          review your case and provide a refund. The following conditions apply
          to our refund policy:
        </p>
        <ul class="list-disc ml-8 mb-4">
          <li>
            Items can only be returned within a 7-day window from the date of
            delivery.
          </li>
          <li>
            To initiate a return request, customers can visit{" "}
            <a href="https://codeswear.com/return" class="text-blue-500">
              codeswear.com/return
            </a>
            .
          </li>
          <li>A valid reason is required for returning an item.</li>
          <li>
            Repeatedly returning items as an abuse of our return policy may
            result in declined return requests.
          </li>
          <li>
            Customers cannot apply for a full refund if the item is part of a
            &quot;Deal of the Day&quot; offer.
          </li>
          <li>
            In some cases where there is a slight mismatch between the product
            pictures and the actual product, return requests related to such
            mismatches may be rejected.
          </li>
          <li>
            In rare cases where return pickup is not available with our courier
            partner, the customer is responsible for sending the product back to
            us for refund or replacement processing.
          </li>
        </ul>
        <h2 class="text-2xl font-semibold mb-4">Cancellation Policy</h2>
        <p class="mb-4">
          To cancel your order, please contact us using the provided contact
          link. Orders can be canceled until they are shipped from our
          warehouse. Requests received more than 7 business days prior to the
          product delivery date will not be processed.
        </p>
        <p class="mb-4">
          If you have any questions or concerns regarding our Refund and
          Cancellation Policy, please contact us at:
        </p>
        <p class="mb-4">
          Call/Whatsapp: +91 707 807 3838
          <br />
          Email:{" "}
          <a
            href="/cdn-cgi/l/email-protection"
            class="__cf_email__"
            data-cfemail="f794968592b7949893928480929685d99e99"
          >
            [email&#160;protected]
          </a>
          <br />
          Support Hours: 10 AM - 6 PM
        </p>
      </div>
    </div>
  );
}

export default ReturnPolicy;
