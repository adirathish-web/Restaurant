import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-8">
      <h1 className="text-3xl font-extrabold text-stone-900 dark:text-white">Privacy Policy</h1>
      <p className="text-sm text-stone-600 dark:text-stone-300">
        Your privacy is important to us. Saffron collects only the minimum information needed — your order details, delivery address, and account contact — to process food orders and arrange delivery.
      </p>
      <h2 className="text-lg font-bold text-stone-900 dark:text-white pt-4">Data Collection & Protection</h2>
      <p className="text-sm text-stone-600 dark:text-stone-300">
        We do not store payment card data on our servers. All online transactions are processed directly by PCI-DSS compliant third-party payment providers (Stripe / Razorpay). Personal contact information is shared with fulfilling restaurants strictly for active orders and is automatically redacted for non-active historical orders.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
