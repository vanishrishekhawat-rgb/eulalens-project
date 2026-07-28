const categoryList = [
  ["system-requirements", "System requirements & responsibilities"],
  ["data-accuracy", "Data Accuracy Liability"],
  ["scope-exclusion", "Scope Exclusion"],
  ["authority-warranty", "Authority Warranty"],
  ["service-modification", "Service Modification"],
  ["beta-services", "Beta Services Governance"],
  ["premier-support", "Premier Support Terms"],
  ["recording-consent", "Recording Consent"],
  ["account-termination", "Account Termination"],
  ["eligibility", "Eligibility"],
  ["intended-use", "Intended Use"],
  ["proprietary-rights", "Proprietary Rights"],
  ["confidentiality-exclusions", "Confidentiality Exclusions"],
  ["confidentiality-legal", "Confidentiality Legal Exception"],
  ["copyright-infringement", "Copyright Infringement"],
  ["termination-cause", "Termination For Cause"],
  ["termination-survival", "Termination Survival"],
  ["termination-obligations", "Termination Obligations"],
  ["export-compliance", "Export Compliance"],
  ["high-risk-use", "Prohibited High Risk Use"],
  ["injunctive-relief", "Injunctive Relief"],
  ["no-warranties", "No Warranties"],
  ["indemnification", "Indemnification"],
  ["arbitration-waiver", "Arbitration Waiver"],
  ["data-processing", "Data Processing"],
  ["state-privacy", "State Privacy Addendum"],
  ["governing-law", "Governing Law Venue"],
  ["contract-modification", "Contract Modification"],
  ["terms-modification", "Terms Modification"],
  ["arbitration-mandate", "Arbitration Mandate"],
  ["statute-limitations", "Statute Of Limitations"],
  ["governing-language", "Governing Language"],
  ["incorporation-terms", "Incorporation of Terms"],
  ["arbitration-costs", "Arbitration Costs"],
  ["severability", "Severability"]
];

const categories = {};
categoryList.forEach(([key, title], index) => {
  const num = index + 1;
  categories[key] = {
    title: title,
    comic: `zoom/comics/comic${num}.png`,
    video: `zoom/videos/video${num}.mp4`,
    cuecards: []   
  };
});

categories["system-requirements"].cuecards = [
  {
    question: "Who is responsible for system requirements?",
    answer: "Access",
    frontDetail: "You are responsible for meeting system requirements.",
    backTitle: "Scope of responsibility",
    backDetail: "You must provide compatible devices, Internet access, and necessary software. You also handle any required updates or upgrades."
  },
  {
    question: "What affects my ability to use the service?",
    answer: "Access Factors",
    frontDetail: "Service access depends on hardware and internet performance.",
    backTitle: "Performance factors",
    backDetail: "Your ability to use the Services may be affected by the performance of your devices, software, and Internet access."
  },
  {
    question: "Is high-speed internet required?",
    answer: "Recommended",
    frontDetail: "High-speed Internet access is recommended for use.",
    backTitle: "Internet recommendation",
    backDetail: "While not explicitly mandated as a strict requirement, high-speed Internet access is recommended to ensure proper service performance."
  },
  {
    question: "Can system requirements change?",
    answer: "May Change",
    frontDetail: "System requirements may be updated over time.",
    backTitle: "Requirement updates",
    backDetail: "System requirements, which include devices, software, and Internet access, may be changed from time to time."
  }
];

categories["data-accuracy"].cuecards = [
    {
          "id": "data-accuracy-responsibility",
          "question": "Who is responsible for data errors?",
          "answer": "Your Duty",
          "frontDetail": "You must ensure the information you provide to Zoom is correct.",
          "backTitle": "Liability Scope",
          "backDetail": "You are solely responsible for the accuracy of Your Data. Zoom has no liability for any errors or omissions in the data you submit."
        },
        {
          "id": "zoom-liability-exclusion",
          "question": "Does Zoom cover data mistakes?",
          "answer": "No Liability",
          "frontDetail": "Zoom explicitly disclaims responsibility for data inaccuracies.",
          "backTitle": "Risk Allocation",
          "backDetail": "Zoom bears no liability whatsoever for errors or omissions found in Your Data. You assume full risk for data quality."
        },
        {
          "id": "data-definition-check",
          "question": "What counts as Your Data?",
          "answer": "Data Scope",
          "frontDetail": "Your Data includes specific details required for service access and billing.",
          "backTitle": "Included Fields",
          "backDetail": "Your Data encompasses company name, billing address, taxpayer ID, VAT registration number, and contact information provided to Zoom."
        },
        {
          "id": "error-prevention-step",
          "question": "How to avoid data issues?",
          "answer": "Verify Info",
          "frontDetail": "Double-check all submitted details before sending them to Zoom.",
          "backTitle": "User Action",
          "backDetail": "Since Zoom is not liable for mistakes, you must verify the accuracy of all provided information to fulfill the Agreement terms."
        }
];

categories["scope-exclusion"].cuecards = [
    {
          "id": "scope-boundary",
          "question": "Does this agreement cover my other purchases?",
          "answer": "Excluded",
          "frontDetail": "Transactions unrelated to Zoom Services are outside this agreement.",
          "backTitle": "Scope Limitation",
          "backDetail": "This contract does not govern extraneous agreements, such as ordering goods or services from the Reseller that are not Zoom Services."
        },
        {
          "id": "document-separation",
          "question": "Are unrelated documents part of this deal?",
          "answer": "Not Covered",
          "frontDetail": "Documents unrelated to the Services are excluded from this agreement.",
          "backTitle": "Document Boundary",
          "backDetail": "Any conditions or materials entered into by you and the Reseller that are unrelated to the Services fall outside the scope of this Reseller Customer Agreement."
        },
        {
          "id": "governance-gap",
          "question": "What rules apply to non-Zoom transactions?",
          "answer": "Other Rules",
          "frontDetail": "This agreement does not apply to extraneous transactions.",
          "backTitle": "Applicability",
          "backDetail": "This Agreement shall not govern or apply to any Extraneous Agreement, meaning separate terms control those unrelated transactions."
        },
        {
          "id": "reseller-goods",
          "question": "Is buying other Reseller goods covered here?",
          "answer": "Limits",
          "frontDetail": "Purchases of non-Zoom goods are excluded from this contract.",
          "backTitle": "Goods Exclusion",
          "backDetail": "Your ordering of Reseller goods or services other than the Zoom Services is considered an Extraneous Agreement and is outside this scope."
        }
];

categories["authority-warranty"].cuecards = [
    {
          "id": "auth-rep",
          "question": "What must I represent when accepting?",
          "answer": "Authority",
          "frontDetail": "You represent you have the power to bind yourself or your entity to the agreement.",
          "backTitle": "Representation required",
          "backDetail": "By accepting, you warrant you have the authority to bind yourself or the entity you represent to the Reseller Customer Agreement and this Agreement."
        },
        {
          "id": "no-auth-action",
          "question": "What actions are forbidden without authority?",
          "answer": "Not Allowed",
          "frontDetail": "Lacking authority, you cannot accept, order, access, or use the services.",
          "backTitle": "Prohibited actions",
          "backDetail": "If you do not have the authority to agree, you must not accept the agreement, enter any order, access the services, use the services, or authorize others to do so."
        },
        {
          "id": "proxy-bind",
          "question": "Can I bind a third party?",
          "answer": "Binding",
          "frontDetail": "Your representation covers binding yourself or the entity you represent.",
          "backTitle": "Scope of authority",
          "backDetail": "Your warranty includes the authority to bind either yourself or the entity that you represent to the terms of the agreement."
        },
        {
          "id": "acceptance-check",
          "question": "How do I verify I can sign?",
          "answer": "Access",
          "frontDetail": "Ensure you hold the power to commit your entity before accepting.",
          "backTitle": "Pre-acceptance check",
          "backDetail": "Before accepting the agreement, entering an order, or accessing services, confirm you possess the authority to bind yourself or your represented entity."
        }
];

categories["service-modification"].cuecards = [
    {
          "id": "mod-no-notice",
          "question": "Will I be told before features change?",
          "answer": "No Notice",
          "frontDetail": "Zoom can modify features without prior notice.",
          "backTitle": "Modification rule",
          "backDetail": "Zoom may change or discontinue services at its sole discretion without informing you beforehand."
        },
        {
          "id": "updates-auto",
          "question": "Are standard updates automatic?",
          "answer": "Standard Updates",
          "frontDetail": "Standard updates are provided generally available.",
          "backTitle": "Update scope",
          "backDetail": "You receive standard updates made generally available by Zoom during the term, but these are distinct from discretionary modifications."
        },
        {
          "id": "discontinue-risk",
          "question": "Can the service stop suddenly?",
          "answer": "Discontinue",
          "frontDetail": "Services may be discontinued without notice.",
          "backTitle": "Service availability",
          "backDetail": "Zoom reserves the right to discontinue the Services entirely or modify their features at any time without prior notice."
        },
        {
          "id": "sole-discretion",
          "question": "Who decides what changes happen?",
          "answer": "Sole Discretion",
          "frontDetail": "Zoom decides changes unilaterally.",
          "backTitle": "Decision power",
          "backDetail": "All decisions to modify features or discontinue services are made solely by Zoom's discretion."
        }
];

categories["beta-services"].cuecards = [
    {
          "id": "beta-governance-source",
          "question": "Where do beta terms come from?",
          "answer": "External Link",
          "frontDetail": "Beta usage is excluded from this main Agreement.",
          "backTitle": "Where to look",
          "backDetail": "If no separate signed agreement exists, the terms found at the specific Zoom URL apply instead."
        },
        {
          "id": "beta-terms-requirement",
          "question": "Do I need a signed deal for beta?",
          "answer": "Separate Deal",
          "frontDetail": "Beta products are governed by separate terms.",
          "backTitle": "Agreement status",
          "backDetail": "A separate beta agreement signed by both parties is required to override the default external terms."
        },
        {
          "id": "beta-scope-exclusion",
          "question": "Does this EULA cover beta?",
          "answer": "Not Covered",
          "frontDetail": "Beta usage is explicitly excluded from this Agreement.",
          "backTitle": "Scope check",
          "backDetail": "This document does not govern beta products; users must rely on the separate beta terms or conditions."
        },
        {
          "id": "beta-default-terms",
          "question": "What applies if I haven't signed a beta deal?",
          "answer": "Default Terms",
          "frontDetail": "Default beta terms apply without a signed agreement.",
          "backTitle": "Default rule",
          "backDetail": "In the absence of a signed separate agreement, the Beta Program – Terms of Use disclosed online apply to your use."
        }
];

categories["premier-support"].cuecards = [
    {
          "id": "premier-link",
          "question": "Where are the full Premier Support terms?",
          "answer": "Link",
          "frontDetail": "Premier Support is governed by a separate document.",
          "backTitle": "Where to find terms",
          "backDetail": "The full Premier Support Terms of Service are available at the specific URL provided in the agreement."
        },
        {
          "id": "fee-basis",
          "question": "How is the Premier Support fee set?",
          "answer": "Reseller",
          "frontDetail": "The cost for Premier Support is determined by the Reseller.",
          "backTitle": "Fee determination",
          "backDetail": "You must check with your Reseller to find the specific fee for these services, as it is not fixed in this clause."
        },
        {
          "id": "scope-limit",
          "question": "Does this clause cover all Zoom services?",
          "answer": "Limited",
          "frontDetail": "This section applies only to the additional Premier Support Services.",
          "backTitle": "Scope of coverage",
          "backDetail": "Standard services are not included here; this clause specifically governs the optional Premier Support Services purchased for an additional fee."
        }
];

categories["recording-consent"].cuecards = [
     {
          "id": "recording-consent",
          "question": "Does joining a meeting imply consent to be recorded?",
          "answer": "Consent",
          "frontDetail": "By using the service, you consent to recording storage if the host records.",
          "backTitle": "Scope of Consent",
          "backDetail": "You give Zoom consent to store recordings for any meeting or webinar you join if the host chooses to record and stores them in Zoom's systems."
        },
        {
          "id": "notification-check",
          "question": "How do I know if recording is active?",
          "answer": "Notification",
          "frontDetail": "You receive a visual or other notification when recording is enabled.",
          "backTitle": "Visual Alert",
          "backDetail": "The system provides a notification, either visual or otherwise, to inform you that recording has been enabled during the session."
        },
        {
          "id": "opt-out-action",
          "question": "What can I do if I do not want to be recorded?",
          "answer": "Leave",
          "frontDetail": "You can leave the meeting if you do not consent to recording.",
          "backTitle": "Opt-Out Option",
          "backDetail": "If you do not consent to being recorded, your option is to choose to leave the meeting or webinar."
        },
        {
          "id": "legal-compliance",
          "question": "Who is responsible for recording laws?",
          "answer": "Responsibility",
          "frontDetail": "You are responsible for complying with all recording laws.",
          "backTitle": "User Duty",
          "backDetail": "You must ensure compliance with all applicable recording laws regarding the meetings or webinars you join."
        }
];

categories["account-termination"].cuecards = [
    {
          "id": "age-eligibility",
          "question": "Can I be banned for being under 16?",
          "answer": "Age Limit",
          "frontDetail": "Access can end immediately if you are under 16.",
          "backTitle": "Eligibility check",
          "backDetail": "If Zoom believes you are under the age of 16 or otherwise ineligible, your access may be terminated without any prior warning."
        },
        {
          "id": "violation-action",
          "question": "What happens if Zoom finds a violation?",
          "answer": "Possible Ban",
          "frontDetail": "Zoom may take action on complaints or violations.",
          "backTitle": "Investigation scope",
          "backDetail": "Zoom investigates complaints and violations it receives. Depending on what they find, they may issue warnings, remove content, or terminate your account and profile."
        },
        {
          "id": "warning-notice",
          "question": "Do I get a warning before termination?",
          "answer": "No Warning",
          "frontDetail": "Termination can happen without prior notice.",
          "backTitle": "Notice requirement",
          "backDetail": "If termination occurs due to age ineligibility, it may happen without warning. Zoom decides the specific action based on their investigation."
        }
];

categories["eligibility"].cuecards = [
    {
          "id": "age-eligibility",
          "question": "Can I be banned for being under 16?",
          "answer": "Age Limit",
          "frontDetail": "Access can end immediately if you are under 16.",
          "backTitle": "Eligibility check",
          "backDetail": "If Zoom believes you are under the age of 16 or otherwise ineligible, your access may be terminated without any prior warning."
        },
        {
          "id": "violation-action",
          "question": "What happens if Zoom finds a violation?",
          "answer": "Possible Ban",
          "frontDetail": "Zoom may take action on complaints or violations.",
          "backTitle": "Investigation scope",
          "backDetail": "Zoom investigates complaints and violations it receives. Depending on what they find, they may issue warnings, remove content, or terminate your account and profile."
        },
        {
          "id": "warning-notice",
          "question": "Do I get a warning before termination?",
          "answer": "No Warning",
          "frontDetail": "Termination can happen without prior notice.",
          "backTitle": "Notice requirement",
          "backDetail": "If termination occurs due to age ineligibility, it may happen without warning. Zoom decides the specific action based on their investigation."
        }
];

categories["intended-use"].cuecards = [
    {
          "id": "primary-use",
          "question": "What is the primary purpose of the Services?",
          "answer": "Business Use",
          "frontDetail": "The Services are primarily intended for business use.",
          "backTitle": "Intended Purpose",
          "backDetail": "The agreement states the Services are intended for business use. You may use them for other purposes, but only if you accept the specific terms and limitations in the Agreement."
        },
        {
          "id": "other-purposes",
          "question": "Can I use the Services for non-business purposes?",
          "answer": "Allowed",
          "frontDetail": "Non-business use is permitted under specific conditions.",
          "backTitle": "Other Purposes",
          "backDetail": "You may choose to use the Services for purposes other than business, provided you are subject to the terms and limitations outlined in this Agreement."
        },
        {
          "id": "usage-scope",
          "question": "Are there restrictions on how I use the Services?",
          "answer": "Terms Apply",
          "frontDetail": "Usage is governed by the Agreement's terms and limitations.",
          "backTitle": "Usage Limits",
          "backDetail": "Any use of the Services, including non-business use, is subject to the terms and limitations defined within this Agreement."
        }
];

categories["proprietary-rights"].cuecards = [
    {
          "id": "ownership-rights",
          "question": "Who owns the Zoom trademarks and logos?",
          "answer": "Ownership",
          "frontDetail": "Zoom retains all proprietary rights to its marks and logos.",
          "backTitle": "Ownership scope",
          "backDetail": "Zoom and its suppliers own all rights to trade names, trademarks, service marks, logos, and domain names. You cannot claim ownership of these assets."
        },
        {
          "id": "framing-prohibited",
          "question": "Can I use framing techniques for Zoom Marks?",
          "answer": "Not Allowed",
          "frontDetail": "Framing or enclosing Zoom Marks is strictly prohibited.",
          "backTitle": "Framing restriction",
          "backDetail": "You may not use framing techniques to enclose any Zoom Marks or other proprietary information like images, text, or page layout without express written consent."
        },
        {
          "id": "hidden-text",
          "question": "Are meta tags or hidden text permitted?",
          "answer": "Prohibited",
          "frontDetail": "Using meta tags or hidden text with Zoom Marks is forbidden.",
          "backTitle": "Hidden text rule",
          "backDetail": "You cannot use any meta tags or other hidden text utilizing Zoom Marks unless you have obtained express written consent from Zoom."
        },
        {
          "id": "consent-required",
          "question": "What is needed to use proprietary info?",
          "answer": "Written Consent",
          "frontDetail": "Express written consent is required for proprietary use.",
          "backTitle": "Consent requirement",
          "backDetail": "Any use of Zoom Marks or proprietary information, including images and text, requires express written consent from Zoom before proceeding."
        }
];

categories["confidentiality-exclusions"].cuecards = [
     {
          "id": "card-01",
          "question": "What information is excluded from confidentiality?",
          "answer": "Exclusions",
          "frontDetail": "Confidentiality does not cover information already known or publicly available.",
          "backTitle": "Scope of Exclusions",
          "backDetail": "Information is excluded if it was already known to the party, became public without wrongful acts, came from a third party without restrictions, or was developed independently without using the other party's non-public info."
        },
        {
          "id": "card-02",
          "question": "Does receiving info from a third party trigger confidentiality?",
          "answer": "Third Party",
          "frontDetail": "Info from a third party is excluded if received without restrictions.",
          "backTitle": "Third Party Source",
          "backDetail": "Information rightfully received from a third party without any restriction or breach of the agreement is not considered Confidential Information."
        },
        {
          "id": "card-03",
          "question": "Can I use their info to build my own product?",
          "answer": "Independent Dev",
          "frontDetail": "Independently developed work is excluded from confidentiality obligations.",
          "backTitle": "Independent Development",
          "backDetail": "Information developed by a party without using any proprietary or non-public information provided by the other party under the agreement is not Confidential Information."
        },
        {
          "id": "card-04",
          "question": "What if information becomes public?",
          "answer": "Publicly Known",
          "frontDetail": "Publicly available info is excluded if no wrongful act occurred.",
          "backTitle": "Public Availability",
          "backDetail": "Information that becomes publicly known or available is excluded from confidentiality only if it happened through no wrongful act of the party."
        },
        {
          "id": "card-05",
          "question": "What if I already knew the info before sharing?",
          "answer": "Prior Knowledge",
          "frontDetail": "Pre-existing knowledge is excluded from confidentiality duties.",
          "backTitle": "Prior Knowledge",
          "backDetail": "Information that a party already rightfully knew at the time it was obtained from the other party is not subject to confidentiality obligations."
        }
];

categories["confidentiality-legal"].cuecards = [
    {
          "id": "legal-disclosure",
          "question": "When can Confidential Information be disclosed?",
          "answer": "Legal Req",
          "frontDetail": "Disclosure is permitted only when required by law, regulation, or court order.",
          "backTitle": "Required conditions",
          "backDetail": "The disclosing party must notify the other party if permitted by the law or court order. This notice allows the other party to seek a protective order to limit disclosure to third parties."
        },
        {
          "id": "protective-order",
          "question": "How can I limit third-party disclosure?",
          "answer": "Protective Order",
          "frontDetail": "You may seek a protective order if notified of a legal requirement to disclose.",
          "backTitle": "Next step",
          "backDetail": "Upon receiving notice of a required disclosure, you have the opportunity to seek a protective order to prevent or limit the information's disclosure to third parties."
        },
        {
          "id": "notification-duty",
          "question": "Must I tell the other party about legal requests?",
          "answer": "Notify First",
          "frontDetail": "Notification is required where the law or court order permits it.",
          "backTitle": "Process check",
          "backDetail": "The party subject to the legal requirement must notify the other party prior to disclosure, provided the law or court order allows such notification."
        },
        {
          "id": "scope-limitation",
          "question": "Does this apply to all confidentiality breaches?",
          "answer": "Legal Only",
          "frontDetail": "This exception covers only disclosures mandated by law, regulation, or court order.",
          "backTitle": "Scope check",
          "backDetail": "The clause specifically addresses situations where a party is required to disclose information by legal authority, not voluntary or unauthorized sharing."
        }
];

categories["copyright-infringement"].cuecards = [
    {
          "id": "no-posting-copyright",
          "question": "Can I post copyrighted material?",
          "answer": "Not Allowed",
          "frontDetail": "Posting copyrighted material without consent is prohibited.",
          "backTitle": "Prohibited Actions",
          "backDetail": "You may not post, modify, distribute, or reproduce copyrighted material, trademarks, or rights of publicity without the owner's prior written consent."
        },
        {
          "id": "access-denial-risk",
          "question": "What happens if I infringe copyright?",
          "answer": "Access Denied",
          "frontDetail": "Zoom may block access if infringement is alleged.",
          "backTitle": "Consequence of Allegation",
          "backDetail": "Zoom reserves the right to deny access to the Services to any User who is alleged to infringe another party's copyright."
        },
        {
          "id": "consent-requirement",
          "question": "How do I use proprietary rights legally?",
          "answer": "Get Consent",
          "frontDetail": "Written permission is required for proprietary rights.",
          "backTitle": "Required Step",
          "backDetail": "You must obtain the prior written consent of the owner of such proprietary rights before posting, modifying, distributing, or reproducing them."
        },
        {
          "id": "scope-of-rights",
          "question": "What rights are protected?",
          "answer": "Scope Check",
          "frontDetail": "Multiple types of proprietary rights are covered.",
          "backTitle": "Protected Categories",
          "backDetail": "The restriction covers copyrighted material, trademarks, rights of publicity, and other proprietary rights."
        }
];

categories["termination-cause"].cuecards = [
    {
          "id": "non-compliance-termination",
          "question": "What happens if I break the agreement?",
          "answer": "Termination",
          "frontDetail": "Zoom can end the agreement immediately for non-compliance.",
          "backTitle": "Immediate Consequence",
          "backDetail": "If you fail to comply with any provision, Zoom may terminate the agreement immediately without prior notice."
        },
        {
          "id": "fee-retention-risk",
          "question": "Will I get a refund if terminated?",
          "answer": "No Refund",
          "frontDetail": "Fees paid may be kept if the agreement ends for cause.",
          "backTitle": "Fee Retention",
          "backDetail": "Zoom or the Reseller may retain any fees previously paid by you, and no refunds or credits shall be given upon termination."
        },
        {
          "id": "compliance-checklist",
          "question": "How do I avoid immediate termination?",
          "answer": "Compliance",
          "frontDetail": "Ensure all agreement provisions are followed strictly.",
          "backTitle": "Prevention Strategy",
          "backDetail": "To prevent immediate termination and loss of fees, you must comply with every provision of the Agreement."
        },
        {
          "id": "reseller-authority",
          "question": "Can a Reseller also terminate me?",
          "answer": "Reseller Power",
          "frontDetail": "Resellers share the right to terminate and keep fees.",
          "backTitle": "Reseller Rights",
          "backDetail": "In addition to Zoom, the applicable Reseller may also terminate the Agreement and retain previously paid fees."
        }
];

categories["termination-survival"].cuecards = [
    {
          "id": "survival-terms",
          "question": "Which terms stay after I stop using Zoom?",
          "answer": "Survival",
          "frontDetail": "Certain terms remain in effect even after the agreement ends.",
          "backTitle": "What survives",
          "backDetail": "Terms that naturally should survive termination, or those deemed reasonable to continue, will stay active after you stop using the service."
        },
        {
          "id": "termination-trigger",
          "question": "Does ending my account kill all rules?",
          "answer": "Not All",
          "frontDetail": "Stopping the agreement does not automatically end every single rule.",
          "backTitle": "Scope of survival",
          "backDetail": "Even if the agreement is terminated, specific conditions and obligations identified as necessary to survive will continue to apply."
        },
        {
          "id": "reasonableness-test",
          "question": "How do I know if a rule survives?",
          "answer": "Reasonable",
          "frontDetail": "Some rules survive based on whether they make sense to continue.",
          "backTitle": "What to check",
          "backDetail": "Terms that reasonably should survive termination will be enforced, regardless of whether they are explicitly listed as surviving clauses."
        },
        {
          "id": "nature-of-term",
          "question": "What makes a term 'survive' by nature?",
          "answer": "By Nature",
          "frontDetail": "Some terms are designed to last beyond the contract period.",
          "backTitle": "What to check",
          "backDetail": "If a term's nature dictates it must continue after termination, it will remain valid under the agreement."
        }
];

categories["termination-obligations"].cuecards = [
    {
          "id": "stop-use-terminate",
          "question": "What must I do immediately after termination?",
          "answer": "Cease Use",
          "frontDetail": "You must stop using the Services right away upon termination.",
          "backTitle": "Immediate action required",
          "backDetail": "Upon termination, you are required to cease any further use of the Services and destroy any copies of associated software within your possession and control."
        },
        {
          "id": "destroy-local-copies",
          "question": "Do I need to delete my software copies?",
          "answer": "Destroy Copies",
          "frontDetail": "Local copies of the software must be destroyed after termination.",
          "backTitle": "Software disposal",
          "backDetail": "You must destroy any copies of associated software that are in your possession and control. This obligation applies specifically to copies you hold, not those on Zoom's servers."
        },
        {
          "id": "protect-server-data",
          "question": "Can I delete data on Zoom's servers?",
          "answer": "Do Not Harm",
          "frontDetail": "You cannot destroy or harm software on Zoom's servers.",
          "backTitle": "Server restrictions",
          "backDetail": "You will not destroy or attempt to harm any Services or associated software located on Zoom's servers or Zoom's network."
        },
        {
          "id": "scope-of-destruction",
          "question": "What exactly must I destroy?",
          "answer": "Your Copies",
          "frontDetail": "Destruction applies only to software in your control.",
          "backTitle": "Scope of obligation",
          "backDetail": "The requirement to destroy software applies only to copies within your possession and control. You are not required to, and in fact are prohibited from harming, software on Zoom's servers."
        }
];

categories["export-compliance"].cuecards = [
    {
          "id": "geo-restrictions",
          "question": "Can I use Zoom in sanctioned countries?",
          "answer": "Not Allowed",
          "frontDetail": "Services cannot be accessed or used in sanctioned territories.",
          "backTitle": "Prohibited Locations",
          "backDetail": "You and your end users may not access or use the Services in countries subject to U.S. trade sanctions, including Cuba, Iran, North Korea, Syria, and specific regions of Ukraine. Using the service in these areas is strictly prohibited."
        },
        {
          "id": "sanctions-lists",
          "question": "Am I on a prohibited government list?",
          "answer": "Check Status",
          "frontDetail": "Users cannot be on specific U.S. Treasury or Commerce lists.",
          "backTitle": "Restricted Persons",
          "backDetail": "You represent that you and your end users are not on the Specially Designated Nationals and Blocked Persons List, Foreign Sanctions Evaders Lists, Denied Persons List, Entity List, Unverified List, or State proliferation-related lists. Being owned 50% or more by a listed person also disqualifies you."
        },
        {
          "id": "military-use",
          "question": "Is military use permitted in certain regions?",
          "answer": "Military Ban",
          "frontDetail": "Users in China, Russia, or Venezuela cannot use services for military ends.",
          "backTitle": "Regional Military Limits",
          "backDetail": "If you or your end users are located in China, Russia, or Venezuela, you must not be Military End Users and cannot put the Services to a Military End Use as defined by U.S. regulations."
        },
        {
          "id": "content-export",
          "question": "Can I export content I create on Zoom?",
          "answer": "Compliance Req",
          "frontDetail": "User content must not violate export control laws.",
          "backTitle": "Content Restrictions",
          "backDetail": "You warrant that no Content created or submitted by you or your end users is subject to restrictions on disclosure, transfer, download, export, or re-export under U.S. Export Control and Sanctions Laws."
        },
        {
          "id": "user-responsibility",
          "question": "Who monitors export law changes?",
          "answer": "Your Duty",
          "frontDetail": "You are solely responsible for complying with and monitoring export laws.",
          "backTitle": "Compliance Obligation",
          "backDetail": "You are solely responsible for complying with Export Control and Sanctions Laws and must monitor them for any modifications. Zoom will provide applicable U.S. export classifications upon request but does not manage your compliance."
        }
];

categories["high-risk-use"].cuecards = [
    {
          "id": "high-risk-env",
          "question": "Can I use Zoom in a nuclear facility?",
          "answer": "Not Allowed",
          "frontDetail": "Services are prohibited in hazardous environments.",
          "backTitle": "Restricted Environments",
          "backDetail": "You cannot use the Services in hazardous environments requiring fail-safe controls, such as nuclear facilities, aircraft navigation systems, air traffic control, or life support systems."
        },
        {
          "id": "weapons-systems",
          "question": "Is using Zoom for weapons systems allowed?",
          "answer": "Prohibited",
          "frontDetail": "Weapons systems are explicitly excluded from use.",
          "backTitle": "Weapons Systems",
          "backDetail": "The Services shall not be used for or in any HIGH RISK environment, which includes weapons systems."
        },
        {
          "id": "fail-safe-control",
          "question": "What defines a prohibited environment?",
          "answer": "Fail-Safe",
          "frontDetail": "Environments needing fail-safe controls are restricted.",
          "backTitle": "Fail-Safe Requirement",
          "backDetail": "The Services are not designed or licensed for use in environments that require fail-safe controls, limiting their use to non-critical safety scenarios."
        },
        {
          "id": "general-high-risk",
          "question": "Does 'HIGH RISK' cover all dangerous settings?",
          "answer": "All Settings",
          "frontDetail": "Any HIGH RISK environment is banned for use.",
          "backTitle": "Broad Restriction",
          "backDetail": "The Services shall not be used for or in any HIGH RISK environment, extending the prohibition beyond the specific examples listed."
        }
];

categories["injunctive-relief"].cuecards = [
    {
          "id": "injunctive-relief-ack",
          "question": "What injury does Zoom claim if I breach the agreement?",
          "answer": "Irreparable",
          "frontDetail": "Zoom claims that any breach or unauthorized transfer of technical info causes irreparable injury.",
          "backTitle": "Scope of Injury",
          "backDetail": "The agreement states that using services contrary to the terms or disclosing technical materials may cause irreparable injury to Zoom and its affiliates."
        },
        {
          "id": "injunctive-relief-rights",
          "question": "What relief is Zoom entitled to if I breach?",
          "answer": "Equitable",
          "frontDetail": "Zoom is entitled to equitable relief without posting a bond if a breach occurs.",
          "backTitle": "Relief Type",
          "backDetail": "Under these circumstances, Zoom, its Affiliates, Resellers, and suppliers may seek preliminary and permanent injunctive relief without the need to post a bond or other security."
        },
        {
          "id": "injunctive-triggers",
          "question": "What actions trigger the right to injunctive relief?",
          "answer": "Breach",
          "frontDetail": "Using services contrary to the agreement or disclosing technical info triggers injunctive relief rights.",
          "backTitle": "Triggering Actions",
          "backDetail": "The right to relief applies to any use of services contrary to the Agreement, or any transfer, sublicensing, copying, or disclosure of technical information related to the Services."
        },
        {
          "id": "injunctive-bond",
          "question": "Is a bond required for Zoom to get an injunction?",
          "answer": "No Bond",
          "frontDetail": "Zoom does not need to post a bond to obtain injunctive relief.",
          "backTitle": "Bond Requirement",
          "backDetail": "The agreement explicitly states that Zoom shall be entitled to equitable relief without posting a bond or other security."
        }
];

categories["no-warranties"].cuecards = [
    {
          "id": "warranty-disclaimer",
          "question": "What warranties does Zoom provide?",
          "answer": "No Warranties",
          "frontDetail": "Zoom disclaims all warranties, express or implied.",
          "backTitle": "Scope of Disclaimer",
          "backDetail": "Zoom provides services 'as is' and explicitly disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement. No guarantees are made regarding results, accuracy, reliability, or uninterrupted service."
        },
        {
          "id": "user-risk",
          "question": "Who bears the risk of service failure?",
          "answer": "User Risk",
          "frontDetail": "Use of the services is at your sole risk.",
          "backTitle": "Risk Allocation",
          "backDetail": "The entire risk arising from the use or performance of the services remains with you. Zoom does not assume responsibility for any damage resulting from the use of the services."
        },
        {
          "id": "data-retention",
          "question": "Does Zoom guarantee data retention?",
          "answer": "No Retention",
          "frontDetail": "Zoom does not assume responsibility for retaining user information.",
          "backTitle": "Data Responsibility",
          "backDetail": "Zoom does not assume any responsibility for the retention of any user information or communications between users. Any material or data obtained is at your own discretion and risk."
        },
        {
          "id": "service-guarantees",
          "question": "Can Zoom guarantee specific results?",
          "answer": "No Guarantees",
          "frontDetail": "Zoom cannot promise specific results from service use.",
          "backTitle": "Result Expectations",
          "backDetail": "Zoom makes no representation regarding the results that may be obtained from the use of the services. You should not expect the services to meet any specific user requirements."
        }
];

categories["indemnification"].cuecards = [
    {
          "id": "indemnify-zoom",
          "question": "Do I have to defend Zoom in a lawsuit?",
          "answer": "Indemnify",
          "frontDetail": "You must indemnify, defend, and hold harmless Zoom and its related parties.",
          "backTitle": "Scope of obligation",
          "backDetail": "This clause requires you to cover legal costs and defend Zoom, its Affiliates, officers, and directors against claims."
        },
        {
          "id": "who-is-covered",
          "question": "Who does this protection cover?",
          "answer": "Covered",
          "frontDetail": "Protection extends to Zoom, its Affiliates, officers, and directors.",
          "backTitle": "Protected parties",
          "backDetail": "The indemnification obligation applies specifically to Zoom, its Affiliates, officers, and directors."
        },
        {
          "id": "action-required",
          "question": "What actions must I take?",
          "answer": "Defend",
          "frontDetail": "You are required to defend Zoom against claims.",
          "backTitle": "Required actions",
          "backDetail": "You must agree to indemnify, defend, and hold harmless the specified parties."
        }
];

categories["arbitration-waiver"].cuecards = [
    {
          "id": "us-location-arbitration",
          "question": "Does my location force me into arbitration?",
          "answer": "Location",
          "frontDetail": "US residents must resolve disputes individually via arbitration.",
          "backTitle": "Scope of Requirement",
          "backDetail": "If you are located in the United States, you agree to resolve disputes only on an individual basis through arbitration. This requirement applies specifically to US locations."
        },
        {
          "id": "class-action-waiver",
          "question": "Can I join a class lawsuit?",
          "answer": "Not Allowed",
          "frontDetail": "The agreement waives the right to class or collective actions.",
          "backTitle": "Prohibited Proceedings",
          "backDetail": "The parties expressly waive any right to bring actions as a class or collective action, private attorney general action, or any proceeding where a party acts in a representative capacity."
        },
        {
          "id": "individual-dispute-only",
          "question": "What is the only way to sue?",
          "answer": "Arbitration",
          "frontDetail": "Disputes must be handled individually, not as a group.",
          "backTitle": "Resolution Method",
          "backDetail": "You agree to resolve disputes only on an individual basis through arbitration pursuant to the provisions of Exhibit B, rather than through court litigation."
        },
        {
          "id": "representative-capacity",
          "question": "Can I act on behalf of others?",
          "answer": "Waived",
          "frontDetail": "You cannot act in a representative capacity in legal proceedings.",
          "backTitle": "Capacity Restriction",
          "backDetail": "The agreement prohibits any proceeding in which any party acts or proposes to act in a representative capacity, effectively barring representative legal actions."
        }
];

categories["data-processing"].cuecards = [
    {
          "id": "privacy-policy-ref",
          "question": "Where is the full privacy policy located?",
          "answer": "Privacy",
          "frontDetail": "Zoom processes data according to its Privacy Statement.",
          "backTitle": "Policy Location",
          "backDetail": "The Privacy Statement and all policies at www.zoom.us/legal are incorporated into this Agreement by reference."
        },
        {
          "id": "enterprise-dpa",
          "question": "Does a Data Processing Agreement apply to my account?",
          "answer": "Dpa",
          "frontDetail": "Business or enterprise accounts may require a specific data processing agreement.",
          "backTitle": "Account Type Check",
          "backDetail": "If you are a business, enterprise, or education account owner whose use requires processing End Users' personal data, Zoom processes it under the Global Data Processing Addendum."
        },
        {
          "id": "contact-comm",
          "question": "Can Zoom contact me about service use?",
          "answer": "Contact",
          "frontDetail": "Zoom may contact users regarding service usage information.",
          "backTitle": "Communication Scope",
          "backDetail": "Zoom may contact you via e-mail or other methods with information relevant to your use of the Services, even if you have opted out of marketing communications."
        },
        {
          "id": "policy-incorporation",
          "question": "Are external policies part of this agreement?",
          "answer": "Included",
          "frontDetail": "External legal policies are automatically included in this contract.",
          "backTitle": "Incorporation by Reference",
          "backDetail": "All policies located at www.zoom.us/legal are incorporated into this Agreement by reference, making them part of your contractual obligations."
        }
];

categories["state-privacy"].cuecards = [
    {
          "id": "ccpa-trigger",
          "question": "Does this addendum apply to my business?",
          "answer": "Applicability",
          "frontDetail": "The addendum applies if you are a 'business' under CCPA.",
          "backTitle": "When it applies",
          "backDetail": "This clause incorporates the Zoom US State Law Privacy Addendum if you are a 'business' processing personal information under the California Consumer Privacy Act of 2018 on Zoom's behalf."
        },
        {
          "id": "controller-scope",
          "question": "What if I am a data controller?",
          "answer": "Controller",
          "frontDetail": "The addendum covers controllers processing personal data.",
          "backTitle": "Controller status",
          "backDetail": "If you are a 'controller' and Zoom processes 'personal data' on your behalf under other applicable US state data privacy laws, this addendum applies to your access and use of the Services."
        },
        {
          "id": "combined-criteria",
          "question": "Do I meet both business and controller criteria?",
          "answer": "Both",
          "frontDetail": "Meeting both criteria triggers the addendum.",
          "backTitle": "Dual status",
          "backDetail": "If you meet both the 'business' criteria under CCPA and the 'controller' criteria under other US state laws, the Zoom US State Law Privacy Addendum is incorporated by reference."
        },
        {
          "id": "incorporation-method",
          "question": "How is the addendum included?",
          "answer": "Incorporated",
          "frontDetail": "The addendum is included by reference.",
          "backTitle": "Incorporation",
          "backDetail": "When the criteria are met, the Zoom US State Law Privacy Addendum is incorporated by reference and applies to your access to and use of the Services."
        }
];

categories["governing-law"].cuecards = [
    {
          "id": "governing-law-ca",
          "question": "Which state laws apply to this agreement?",
          "answer": "Governing Law",
          "frontDetail": "The agreement is governed by California state law.",
          "backTitle": "Legal Framework",
          "backDetail": "Disputes and interpretation of this contract follow the laws of the State of California, specifically as applied to residents and performances within California."
        },
        {
          "id": "venue-santa-clara",
          "question": "Where must legal disputes be filed?",
          "answer": "Venue",
          "frontDetail": "Courts in Santa Clara County handle disputes.",
          "backTitle": "Court Location",
          "backDetail": "Parties consent to the exclusive jurisdiction of state courts in Santa Clara County, California, and federal courts in the Northern District of California for resolving issues."
        },
        {
          "id": "exhibit-a-exception",
          "question": "Are there exceptions to the chosen forum?",
          "answer": "Exception",
          "frontDetail": "Exhibit A may alter the forum selection.",
          "backTitle": "Potential Variations",
          "backDetail": "The consent to exclusive jurisdiction in Santa Clara County and the Northern District of California applies only except as specifically provided in Exhibit A."
        },
        {
          "id": "resident-scope",
          "question": "Does California law apply to non-residents?",
          "answer": "Scope",
          "frontDetail": "California law applies to California residents.",
          "backTitle": "Applicability",
          "backDetail": "The choice of California law is explicitly tied to agreements entered into and performed in California by California residents."
        }
];

categories["contract-modification"].cuecards = [
    {
          "id": "zoom-modification-rights",
          "question": "Can Zoom change the terms unilaterally?",
          "answer": "Unilateral Change",
          "frontDetail": "Zoom reserves the right to modify or supplement the agreement at its sole discretion.",
          "backTitle": "Modification Authority",
          "backDetail": "The agreement allows Zoom to change terms without requiring your consent. This right is exercised at Zoom's sole discretion."
        },
        {
          "id": "notice-requirement",
          "question": "How will I be notified of changes?",
          "answer": "Notice Effort",
          "frontDetail": "Zoom will try to notify you of material changes within ten business days of posting.",
          "backTitle": "Notification Process",
          "backDetail": "Zoom commits to using commercially reasonable business efforts to provide notice of material changes. The notice period is ten business days after posting."
        },
        {
          "id": "prior-agreements-status",
          "question": "Do old agreements still count?",
          "answer": "Superseded",
          "frontDetail": "This agreement replaces all prior understandings except the Reseller Customer Agreement.",
          "backTitle": "Entire Agreement",
          "backDetail": "This document acts as the complete understanding between parties, overriding previous agreements. The only exception is the Reseller Customer Agreement."
        },
        {
          "id": "material-change-threshold",
          "question": "What triggers the notice requirement?",
          "answer": "Material Change",
          "frontDetail": "Notice is required specifically for material changes to the agreement.",
          "backTitle": "Change Scope",
          "backDetail": "The obligation to provide notice applies only to material changes. The text does not define what constitutes a material change."
        }
];

categories["terms-modification"].cuecards = [
    {
          "id": "mod-changes-binding",
          "question": "When do new terms become binding?",
          "answer": "Binding",
          "frontDetail": "Changes become binding after a ten-business-day period following notice.",
          "backTitle": "Binding Timeline",
          "backDetail": "The provider must give notice, and the new terms apply ten business days after that date if you continue using the service."
        },
        {
          "id": "opt-out-method",
          "question": "How do I reject new terms?",
          "answer": "Stop Use",
          "frontDetail": "Discontinue using the Services if you do not agree with changes.",
          "backTitle": "Opting Out",
          "backDetail": "To avoid accepting the changes, you must stop using the Services before the ten-business-day period ends."
        },
        {
          "id": "implied-acceptance",
          "question": "Does continued use mean I agree?",
          "answer": "Deemed",
          "frontDetail": "Continuing to use the Services after the deadline means you accepted the changes.",
          "backTitle": "Implied Acceptance",
          "backDetail": "If you keep using the Services after the ten-business-day window, you are considered to have accepted the new terms."
        },
        {
          "id": "notice-requirement",
          "question": "Is notice always required?",
          "answer": "Notice",
          "frontDetail": "Binding changes depend on whether notice is provided.",
          "backTitle": "Notice Check",
          "backDetail": "The clause references a date from the notice if such notice is provided, implying the timeline starts upon notification."
        }
];

categories["arbitration-mandate"].cuecards = [
    {
          "id": "arbitration-scope",
          "question": "What disputes require arbitration?",
          "answer": "Scope",
          "frontDetail": "Most disputes between you and Zoom must go to arbitration.",
          "backTitle": "What is covered",
          "backDetail": "This applies to controversies about services, software, accounts, marketing, or agreement terms. It covers contract, warranty, tort, statute, or regulation claims, but excludes disputes about enforcing intellectual property rights."
        },
        {
          "id": "small-claims-option",
          "question": "Can I start in Small Claims Court?",
          "answer": "Small Claims",
          "frontDetail": "You may begin a claim in local Small Claims Court if eligible.",
          "backTitle": "Court transfer risk",
          "backDetail": "If your Small Claims case is transferred, removed, or appealed to a different court, Zoom can require you to switch to arbitration instead."
        },
        {
          "id": "arbitration-procedure",
          "question": "How are unresolved disputes handled?",
          "answer": "Procedure",
          "frontDetail": "Disputes not settled in Small Claims Court proceed to arbitration.",
          "backTitle": "Next step",
          "backDetail": "If a dispute remains unresolved after attempting Small Claims Court, the agreement mandates resolution through arbitration administered by the American Arbitration Association."
        },
        {
          "id": "class-action-waiver",
          "question": "Is class action available?",
          "answer": "Waiver",
          "frontDetail": "The agreement includes a Class Action Waiver.",
          "backTitle": "Exhibit A provisions",
          "backDetail": "Exhibit A describes the Binding Arbitration and Class Action Waiver provisions that apply to disputes under this agreement."
        }
];

categories["statute-limitations"].cuecards = [
    {
          "id": "statute-limit-1",
          "question": "What is the deadline to file a claim?",
          "answer": "One Year",
          "frontDetail": "Claims must be filed within one year or they are barred.",
          "backTitle": "Filing Deadline",
          "backDetail": "You must file in Small Claims Court or notice for arbitration within one year of when the claim could first be filed. Missing this deadline permanently bars the claim."
        },
        {
          "id": "statute-limit-2",
          "question": "Where must a claim be filed?",
          "answer": "Small Claims",
          "frontDetail": "Disputes are restricted to Small Claims Court or arbitration.",
          "backTitle": "Required Venue",
          "backDetail": "Any claim or dispute under the Agreement must be filed in Small Claims Court or noticed for arbitration. Other courts or venues are not permitted for these claims."
        },
        {
          "id": "statute-limit-3",
          "question": "What happens if I miss the deadline?",
          "answer": "Permanently Barred",
          "frontDetail": "Late filing results in the claim being permanently barred.",
          "backTitle": "Consequence of Delay",
          "backDetail": "If a claim is not filed within one year of when it could first be filed, the claim will be permanently barred and cannot be pursued."
        },
        {
          "id": "statute-limit-4",
          "question": "Does this override other time limits?",
          "answer": "Overrides All",
          "frontDetail": "This one-year limit applies regardless of other statutes.",
          "backTitle": "Statutory Override",
          "backDetail": "This requirement to file within one year applies notwithstanding any other statute of limitations. Other time limits do not extend the deadline for claims under this Agreement."
        }
];

categories["governing-language"].cuecards = [
    {
          "id": "lang-control",
          "question": "Which language version controls the agreement?",
          "answer": "English",
          "frontDetail": "The English version is the controlling text.",
          "backTitle": "Language Authority",
          "backDetail": "This Agreement is prepared in English and that version controls in all respects. Any non-English version is solely for accommodation purposes."
        },
        {
          "id": "non-eng-status",
          "question": "Is a translated version legally binding?",
          "answer": "Not Binding",
          "frontDetail": "Non-English versions are not controlling.",
          "backTitle": "Translation Status",
          "backDetail": "Any non-English version of this Agreement is solely for accommodation purposes and does not override the English text."
        },
        {
          "id": "dispute-lang",
          "question": "What language applies to disputes?",
          "answer": "English",
          "frontDetail": "Disputes are governed by English.",
          "backTitle": "Governing Text",
          "backDetail": "Since the English version controls in all respects, it is the definitive text for interpreting the agreement."
        }
];

categories["incorporation-terms"].cuecards = [
    {
          "id": "incorp-terms",
          "question": "How are extra terms added to my agreement?",
          "answer": "Incorporation",
          "frontDetail": "Additional terms may be required for specific services.",
          "backTitle": "How it works",
          "backDetail": "If you download software or agree to extra terms for certain services, those terms become part of this Agreement unless stated otherwise."
        },
        {
          "id": "check-extra",
          "question": "What if I see new terms for a service?",
          "answer": "Deadline",
          "frontDetail": "You might be notified to download software or agree to new conditions.",
          "backTitle": "Next step",
          "backDetail": "Check the additional terms carefully. If they are not explicitly excluded, they automatically join this Agreement."
        },
        {
          "id": "scope-limit",
          "question": "Do all services have these extra terms?",
          "answer": "Not All",
          "frontDetail": "Extra terms only apply to specific services requiring them.",
          "backTitle": "Scope check",
          "backDetail": "Only services that notify you to download software or agree to conditions trigger this incorporation rule."
        }
];

categories["arbitration-costs"].cuecards = [
    {
          "id": "cost-advance",
          "question": "Does Zoom pay my arbitration fees?",
          "answer": "Advance",
          "frontDetail": "Zoom covers arbitration costs if you cannot afford them.",
          "backTitle": "Fee Advance Rule",
          "backDetail": "Zoom will advance the costs to you if you are unable to afford them. However, the arbitrator may later determine that you must reimburse Zoom if Zoom prevails in the dispute."
        },
        {
          "id": "high-value-rules",
          "question": "What rules apply to large disputes?",
          "answer": "Aaa Rules",
          "frontDetail": "Disputes over $75,000 follow specific AAA fee rules.",
          "backTitle": "High-Value Threshold",
          "backDetail": "For disputes involving more than $75,000, the AAA rules govern the payment of filing fees, as well as the fees and expenses for the AAA and the arbitrator."
        },
        {
          "id": "reimbursement-risk",
          "question": "Can I have to pay back the fees?",
          "answer": "Reimburse",
          "frontDetail": "You might need to repay the advanced costs.",
          "backTitle": "Reimbursement Condition",
          "backDetail": "The advance of costs is subject to the arbitrator's determination. If the arbitrator decides Zoom should not bear the costs because Zoom prevails, you may be required to reimburse Zoom."
        }
];

categories["severability"].cuecards = [
    {
          "id": "severability-class-action",
          "question": "What happens if the class action waiver is illegal?",
          "answer": "Class Action",
          "frontDetail": "Illegal class action waivers shift disputes to court instead of arbitration.",
          "backTitle": "Dispute Resolution Shift",
          "backDetail": "If the class action waiver is found unenforceable, those specific parts are resolved in court. The remaining parts of the agreement continue to be resolved through arbitration."
        },
        {
          "id": "severability-general-provision",
          "question": "How does the agreement handle an illegal provision?",
          "answer": "Severance",
          "frontDetail": "Illegal provisions are removed while the rest of the agreement stays valid.",
          "backTitle": "Remaining Validity",
          "backDetail": "If any provision is found illegal or unenforceable, it is severed. The remaining provisions still apply and are interpreted to achieve the original intent of the agreement as closely as possible."
        },
        {
          "id": "severability-intent",
          "question": "How are remaining terms interpreted after a severance?",
          "answer": "Original Intent",
          "frontDetail": "Terms are read to preserve the agreement's original purpose.",
          "backTitle": "Interpretation Goal",
          "backDetail": "After severing an invalid provision, the remaining terms are interpreted to achieve the original intent of the entire agreement, including the part that was removed."
        },
        {
          "id": "severability-scope",
          "question": "Does severability apply to the whole agreement or just Exhibit A?",
          "answer": "Exhibit A",
          "frontDetail": "Severability rules specifically govern Exhibit A provisions.",
          "backTitle": "Scope of Application",
          "backDetail": "The severability clause applies to provisions within Exhibit A. If a provision there is unenforceable, it is severed, but the rest of Exhibit A remains in effect."
        }
];

let currentCategory = null;
let currentTab = "cuecards";

// Build sidebar list from categoryList
const listEl = document.getElementById("category-list");
categoryList.forEach(([key, title]) => {
  const li = document.createElement("li");
  li.textContent = title;
  li.dataset.category = key;
  listEl.appendChild(li);
});

// Click a category
listEl.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;

  currentCategory = item.dataset.category;
  currentTab = "cuecards";

  document.getElementById("category-title").textContent = categories[currentCategory].title;
  document.getElementById("tab-buttons").style.display = "flex";

  document.querySelectorAll("#category-list li").forEach(li => li.classList.remove("active"));
  item.classList.add("active");

  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelector('.tab-btn[data-tab="cuecards"]').classList.add("active");

  renderTab();
});

// Click a tab button
document.getElementById("tab-buttons").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  currentTab = button.dataset.tab;
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  renderTab();
});

function renderTab() {
  const data = categories[currentCategory];
  const displayArea = document.getElementById("display-area");

  if (currentTab === "comic") {
    displayArea.innerHTML = `<img src="${data.comic}" alt="Comic strip" class="display-comic">`;

  } else if (currentTab === "video") {
    displayArea.innerHTML = `<video src="${data.video}" controls class="display-video"></video>`;

  } else if (currentTab === "cuecards") {
    if (data.cuecards.length === 0) {
      displayArea.innerHTML = `<p>No cue cards added for this category yet.</p>`;
      return;
    }

    displayArea.innerHTML = `<div class="cuecard-grid"></div>`;
    const grid = displayArea.querySelector(".cuecard-grid");

    data.cuecards.forEach(card => {
      const cardEl = document.createElement("div");
      cardEl.className = "cuecard";
      cardEl.innerHTML = `
        <div class="cuecard-inner">
          <div class="cuecard-front">
            <p class="cuecard-question">${card.question}</p>
            <p class="cuecard-answer">${card.answer}</p>
            <p class="cuecard-frontdetail">${card.frontDetail}</p>
          </div>
          <div class="cuecard-back">
            <h4>${card.backTitle}</h4>
            <p>${card.backDetail}</p>
          </div>
        </div>
      `;
      cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));
      grid.appendChild(cardEl);
    });
  }
}