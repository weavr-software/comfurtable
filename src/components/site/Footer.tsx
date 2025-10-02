import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useState } from "react";

export function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <footer className="border-t border-border">
      <Container id="footer" className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo/comfurtable-icon.png" alt="comfurtable logo" width={36} height={36} />
          <div>
            <Image src="/logo/comfurtable-header.png" alt="comfurtable logo" width={180} height={36} />
            <p className="text-xs text-ink-muted">Gentle goodbyes at home</p>
          </div>
        </div>
        <div className="text-sm text-ink-muted flex flex-col gap-2">
          <div>
            © {new Date().getFullYear()} comfurtable •{" "}
            <a className="underline underline-offset-4" href="mailto:confurtablepets@gmail.com">confurtablepets@gmail.com</a> •{" "}
            <a href="tel:+1-912-357-3329" className="underline underline-offset-4">
              (912)-357-3329
            </a>
          </div>
          <button
            className="underline underline-offset-4 text-xs text-brand-700 text-left"
            onClick={() => setShowPolicy((v) => !v)}
            aria-expanded={showPolicy}
          >
            Terms & Privacy Policy
          </button>
          {showPolicy && (
            <div className="mt-2 p-4 bg-brand-50 border border-brand-100 rounded text-xs text-ink-muted max-w-lg">
              <strong>comfurtable Terms and Conditions / Privacy Policy</strong>
              <br />
              Melissa R Weaver DVM, PC Comfurtable respects your privacy. By opting into our SMS messaging service, you agree to the following terms regarding how we handle your data:
              <ul className="list-disc pl-5 my-2 space-y-1">
                <li>
                  <strong>Data Collection:</strong> We will collect your name, email address, mailing address, and mobile phone number when you sign up for SMS updates. The information will be collected via the website contact form, email, rental agreement, or third-party reservation systems.
                </li>
                <li>
                  <strong>Data Usage:</strong> We use your data solely for sending reminders, booking appointments, and customer care.
                </li>
                <li>
                  <strong>Data Security:</strong> We protect your data with secure storage measures to prevent unauthorized access.
                </li>
                <li>
                  <strong>Data Retention:</strong> We retain your information as long as you are subscribed to our SMS service. You may request deletion at any time.
                </li>
                <li>
                  <strong>MESSAGE AND DATA RATES MAY APPLY.</strong> Your mobile carrier may charge fees for sending or receiving text messages, especially if you do not have an unlimited texting or data plan.
                </li>
                <li>
                  Messages are recurring, and message frequency varies.
                </li>
                <li>
                  Contact Melissa R Weaver DVM, PC Comfurtable at (912)-207-8612 or confurtablepets@gmail.com for HELP or to STOP receiving messages.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can opt out of the SMS list at any time by texting, emailing, or replying STOP or UNSUBSCRIBE to confurtablepets@gmail.com or (912)-207-8612. After unsubscribing, you will receive a final SMS to confirm you have unsubscribed and we will remove your number from our list within 24 hours.
                </li>
                <li>
                  You can send HELP for additional assistance, and you will receive a text including our phone number, email, and website. We are here to help you.
                </li>
                <li>
                  <strong>Non-Sharing Clause:</strong> We do not share your data with third parties for marketing purposes. Melissa R Weaver DVM, PC Comfurtable will not sell, rent, or share the collected mobile numbers.
                </li>
              </ul>
              <div className="mt-2">Thanks for choosing Melissa R Weaver DVM, PC Comfurtable!</div>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}