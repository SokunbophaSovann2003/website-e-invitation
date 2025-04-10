<template>
    <div class="max-w-4xl mx-auto px-4 py-16">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Terms & Conditions</h1>
      <p class="text-gray-600 mb-8">Effective: {{ new Date().toLocaleDateString() }}</p>
  
      <!-- Introduction -->
      <section class="mb-10">
        <p class="text-gray-600">
          These Terms govern your use of [Website Name] (the "Service"), operated by [Your Company Name]. 
          By accessing or using our e-invitation platform, you agree to these legally binding terms.
        </p>
      </section>
  
      <!-- Accounts -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">1. Account Registration</h2>
        <ul class="list-disc pl-6 text-gray-600 space-y-2">
          <li>
            <strong>Eligibility:</strong> You must be at least 16 years old (or 13 with parental consent 
            under COPPA regulations).
          </li>
          <li>
            <strong>Accuracy:</strong> Provide truthful information. Fake accounts will be terminated.
          </li>
          <li>
            <strong>Security:</strong> You're responsible for maintaining login credentials. Notify us 
            immediately of unauthorized access.
          </li>
        </ul>
      </section>
  
      <!-- Content Rules -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">2. Prohibited Content</h2>
        <p class="text-gray-600 mb-2">
          You may not use our Service to create invitations containing:
        </p>
        <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <ul class="list-disc pl-6 text-gray-600 space-y-1">
            <li>Hate speech, harassment, or discriminatory content</li>
            <li>Adult or sexually explicit material</li>
            <li>Malware, phishing attempts, or illegal activities</li>
            <li>Copyrighted material without authorization</li>
          </ul>
        </div>
        <p class="text-gray-600">
          <strong>Consequences:</strong> Immediate account suspension and reporting to authorities if applicable.
        </p>
      </section>
  
      <!-- Payments -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">3. Payments & Refunds</h2>
        <h3 class="font-medium text-gray-700 mb-2">A. Pricing</h3>
        <ul class="list-disc pl-6 text-gray-600 space-y-1 mb-4">
          <li>All prices are in USD and exclude applicable taxes</li>
          <li>We reserve the right to change prices with 30 days' notice</li>
        </ul>
  
        <h3 class="font-medium text-gray-700 mb-2">B. Refund Policy</h3>
        <ul class="list-disc pl-6 text-gray-600 space-y-1">
          <li>
            <strong>Digital Products:</strong> No refunds after invitation delivery due to the 
            nature of instant digital access.
          </li>
          <li>
            <strong>Service Issues:</strong> If our platform fails to deliver invitations as 
            promised, we'll issue credits or partial refunds.
          </li>
        </ul>
      </section>
  
      <!-- Intellectual Property -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Your Content</h3>
            <p class="text-sm text-gray-600">
              You retain ownership of custom text/images uploaded. You grant us a 
              <strong>non-exclusive license</strong> to display and transmit this content 
              for invitation delivery.
            </p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Our Platform</h3>
            <p class="text-sm text-gray-600">
              All software, designs, and template libraries are our proprietary property. 
              Reverse engineering or unauthorized use is prohibited.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Termination -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">5. Termination</h2>
        <ul class="list-disc pl-6 text-gray-600 space-y-2">
          <li>
            <strong>By You:</strong> May delete your account at any time. Outstanding payments 
            remain due.
          </li>
          <li>
            <strong>By Us:</strong> We may suspend accounts for violations with or without notice.
          </li>
          <li>
            <strong>Effect:</strong> Upon termination, all invitation data will be 
            anonymized within 90 days except for legal records.
          </li>
        </ul>
      </section>
  
      <!-- Dispute Resolution -->
      <section>
        <h2 class="text-xl font-semibold text-gray-800 mb-4">6. Dispute Resolution</h2>
        <p class="text-gray-600 mb-2">
          <strong>Governing Law:</strong> These Terms are governed by the laws of [Your State/Country].
        </p>
        <p class="text-gray-600">
          <strong>Arbitration:</strong> Any disputes will first attempt resolution through 
          mediation. If unsuccessful, binding arbitration will occur in [City, State] 
          under the rules of the [Arbitration Association].
        </p>
      </section>
    </div>
  </template>