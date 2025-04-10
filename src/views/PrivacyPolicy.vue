<template>
    <div class="max-w-4xl mx-auto px-4 py-16">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
      <p class="text-gray-600 mb-8">Last Updated: {{ new Date().toLocaleDateString() }}</p>
  
      <!-- Introduction -->
      <section class="mb-10">
        <p class="text-gray-600 mb-4">
          [Your Company Name] ("we," "our," or "us") operates the [Website Name] e-invitation platform. 
          This policy outlines how we collect, use, and protect your information when you create, send, 
          or manage digital invitations through our service.
        </p>
      </section>
  
      <!-- Data Collection -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
        <h3 class="font-medium text-gray-700 mb-2">A. Personal Data</h3>
        <ul class="list-disc pl-6 text-gray-600 space-y-1 mb-4">
          <li><strong>Account Information:</strong> Name, email, phone number when registering</li>
          <li><strong>Event Details:</strong> Event type, date, venue, and custom messages</li>
          <li><strong>Recipient Data:</strong> Guest names, email addresses, RSVP responses</li>
          <li><strong>Payment Information:</strong> Billing address, card details (processed via Stripe/PayPal)</li>
        </ul>
  
        <h3 class="font-medium text-gray-700 mb-2">B. Technical Data</h3>
        <ul class="list-disc pl-6 text-gray-600 space-y-1">
          <li>IP addresses, browser type, device information</li>
          <li>Cookies (see our <a href="#cookie-policy" class="text-teal-600 hover:underline">Cookie Policy</a>)</li>
          <li>Analytics data (Google Analytics with anonymized IPs)</li>
        </ul>
      </section>
  
      <!-- Data Usage -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Data</h2>
        <table class="min-w-full border border-gray-200 mb-4">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Purpose</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-200">
              <td class="px-4 py-2 text-sm text-gray-600">Delivering invitations to recipients</td>
              <td class="px-4 py-2 text-sm text-gray-600">Contractual necessity</td>
            </tr>
            <tr class="bg-gray-50 border-t border-gray-200">
              <td class="px-4 py-2 text-sm text-gray-600">Processing payments</td>
              <td class="px-4 py-2 text-sm text-gray-600">Legal obligation</td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="px-4 py-2 text-sm text-gray-600">Improving service functionality</td>
              <td class="px-4 py-2 text-sm text-gray-600">Legitimate interest</td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <!-- Data Sharing -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">3. Data Sharing & Third Parties</h2>
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 class="font-medium text-gray-700 mb-2">Service Providers</h3>
          <ul class="list-disc pl-6 text-gray-600 space-y-1">
            <li><strong>Email Services:</strong> SendGrid (for delivering invitations)</li>
            <li><strong>Payment Processors:</strong> Stripe, PayPal (we never store card details)</li>
            <li><strong>Hosting:</strong> AWS (data encrypted in transit and at rest)</li>
          </ul>
        </div>
        <p class="text-gray-600">
          We require all third parties to comply with GDPR and sign Data Processing Agreements (DPAs).
        </p>
      </section>
  
      <!-- User Rights -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">4. Your Rights (GDPR/CCPA)</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Access & Portability</h3>
            <p class="text-sm text-gray-600">
              Request a copy of your data in machine-readable format.
            </p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Rectification</h3>
            <p class="text-sm text-gray-600">
              Update inaccurate information via your account dashboard.
            </p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Erasure</h3>
            <p class="text-sm text-gray-600">
              Delete your account (excludes transactional records we must retain).
            </p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Opt-Out (CCPA)</h3>
            <p class="text-sm text-gray-600">
              Email <strong>privacy@example.com</strong> to opt out of data sales.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Security -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">5. Data Security Measures</h2>
        <ul class="list-disc pl-6 text-gray-600 space-y-2">
          <li>End-to-end encryption for invitation delivery</li>
          <li>Regular security audits and penetration testing</li>
          <li>Employee training on data protection (ISO 27001 standards)</li>
          <li>Automated data backups with 30-day retention</li>
        </ul>
      </section>
  
      <!-- Contact -->
      <section>
        <h2 class="text-xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
        <p class="text-gray-600">
          For privacy requests or questions:<br>
          Email: <a href="mailto:privacy@example.com" class="text-teal-600 hover:underline">privacy@example.com</a><br>
          Postal: [Your Company Address]<br>
          Response time: Within 30 days (GDPR requirement)
        </p>
      </section>
    </div>
  </template>