/**
 * Application configuration
 * Update these values in one place to change them across the entire application
 */

export const config = {
    siteUrl: "https://comfurtablepets.com",
    businessName: "Comfurtable",
    doctorName: "Dr. Missy Weaver",
    phoneDisplay: "(912) 357-3329",
    phoneHref: "tel:+1-912-357-3329",
    smsHref: "sms:+1-912-357-3329",
    email: "comfurtablepets@gmail.com",
    serviceAreaLabel: "Brunswick, St. Simons Island, Jekyll Island, Sea Island, and the Golden Isles",
    serviceAreas: [
        "Brunswick",
        "St. Simons Island",
        "Jekyll Island",
        "Sea Island",
    ],
    /**
     * Cal.com booking link
     * Format: "username/event-name" (without "cal.com/" prefix)
     * Example: "comfurtable-pets/in-home-euthanasia"
     */
    calComLink: "comfurtable-pets/in-home-euthanasia",
} as const;
