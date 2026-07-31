const categoryList = [
  ["age-eligibility-requirements", "Age Eligibility Requirements"],
  ["service-limitations-and-modifications", "Service Limitations And Modifications"],
  ["account-security-and-ownership", "Account Security And Ownership"],
  ["proprietary-rights-and-brand-usage", "Proprietary Rights And Brand Usage"],
  ["prohibited-use-and-guidelines", "Prohibited Use And Guidelines"],
  ["price-change-acceptance", "Price Change Acceptance"],
  ["tax-rate-adjustments", "Tax Rate Adjustments"],
  ["withdrawal-right-limitations", "Withdrawal Right Limitations"],
  ["no-refunds-policy", "No Refunds Policy"],
  ["export-control-compliance", "Export Control Compliance"],
  ["endorsement-restrictions", "Endorsement Restrictions"],
  ["user-content-responsibility", "User Content Responsibility"],
  ["feedback-ownership", "Feedback Ownership"],
  ["device-access-license", "Device Access License"],
  ["survival-clause", "Survival Clause"],
  ["indemnification", "Indemnification"],
  ["class-action-waiver", "Class Action Waiver"],
  ["mandatory-arbitration", "Mandatory Arbitration"],
  ["arbitration-procedure", "Arbitration Procedure"],
  ["settlement-protection", "Settlement Protection"],
  ["confidentiality", "Confidentiality"],
  ["arbitration-confidentiality", "Arbitration Confidentiality"],
  ["arbitration-provision-modification", "Arbitration Provision Modification"],
  ["arbitration-severability", "Arbitration Severability"],
  ["terms-modification", "Terms Modification"],
  ["entire-agreement", "Entire Agreement"],
  ["severability", "Severability"],
  ["assignment", "Assignment"],
];

const categories = {};
categoryList.forEach(([key, title], index) => {
  const num = index + 1;
  categories[key] = {
    title: title,
    comic: `spotify/comics/comic${num}.png`,
    video: `spotify/videos/video${num}.mp4`,
    cuecards: []   
  };
});

categories["age-eligibility-requirements"].cuecards = [
  {
          "id": "min-age-req",
          "question": "What is the minimum age to use Spotify?",
          "answer": "Age 13",
          "frontDetail": "Users must be at least 13 years old or the equivalent minimum age in their home country.",
          "backTitle": "Eligibility Rule",
          "backDetail": "You cannot register as a user if you do not meet the minimum age requirements. This applies globally, adjusted for local laws where a different minimum age exists."
        },
        {
          "id": "minor-consent",
          "question": "Can a minor create their own account?",
          "answer": "Not Allowed",
          "frontDetail": "Minors cannot enter into these Terms on their own behalf.",
          "backTitle": "Guardian Requirement",
          "backDetail": "If you are a minor in your home country, you need parent or guardian consent. Your parent or guardian must enter into these Terms on your behalf."
        },
        {
          "id": "contract-capacity",
          "question": "Do I need the legal power to sign a contract?",
          "answer": "Capacity",
          "frontDetail": "Users must have the power to enter a binding contract and not be barred by law.",
          "backTitle": "Legal Capacity",
          "backDetail": "You must have the legal ability to enter a binding contract. If applicable laws bar you from doing so, you are not eligible to use the Service."
        },
        {
          "id": "geo-availability",
          "question": "Does my location affect my eligibility?",
          "answer": "Location",
          "frontDetail": "You must reside in a country where the Service is available.",
          "backTitle": "Residency Check",
          "backDetail": "Eligibility requires that you reside in a country where Spotify offers the Service. Registration is not permitted if you do not meet this residency condition."
        },
        {
          "id": "data-accuracy",
          "question": "What happens if my registration info is wrong?",
          "answer": "Accuracy",
          "frontDetail": "You promise that all submitted registration information is true, accurate, and complete.",
          "backTitle": "Information Promise",
          "backDetail": "You agree to keep your registration information true, accurate, and complete at all times. Submitting false or incomplete information violates this requirement."
        },
        {
          "id": "kids-experience",
          "question": "How does the kids experience work?",
          "answer": "Guardian",
          "frontDetail": "Primary account holders can enable access to a kids experience for younger users.",
          "backTitle": "Family Access",
          "backDetail": "In certain markets, primary account holders can allow access to a kids experience. The account holder confirms they are the legal guardian and gives permission for the younger user to use Spotify."
        }
];

categories["service-limitations-and-modifications"].cuecards = [
    {
          "id": "service-changes",
          "question": "Can Spotify change the service without telling me?",
          "answer": "Changes",
          "frontDetail": "Service offerings and availability may change.",
          "backTitle": "Scope of changes",
          "backDetail": "Spotify may alter service offerings or availability due to technical difficulties, maintenance, testing, updates, or legal requirements. These changes happen without liability to you."
        },
        {
          "id": "temp-outages",
          "question": "What causes temporary service interruptions?",
          "answer": "Interruptions",
          "frontDetail": "Service may experience temporary interruptions.",
          "backTitle": "Reasons for downtime",
          "backDetail": "Temporary interruptions can occur due to technical difficulties, maintenance, testing, or updates, including those needed to reflect changes in laws and regulatory requirements."
        },
        {
          "id": "liability-limit",
          "question": "Is Spotify responsible if the service changes?",
          "answer": "No Liability",
          "frontDetail": "Spotify is not liable for service changes.",
          "backTitle": "Liability scope",
          "backDetail": "Spotify provides services with reasonable care but explicitly states it is without liability to you regarding changes in service offerings or availability."
        },
        {
          "id": "legal-updates",
          "question": "Do legal changes affect service availability?",
          "answer": "Legal Updates",
          "frontDetail": "Updates may reflect new laws or regulations.",
          "backTitle": "Regulatory impact",
          "backDetail": "Service updates, including temporary interruptions, may be required to reflect changes in relevant laws and regulatory requirements."
        }
];

categories["account-security-and-ownership"].cuecards = [
    {
          "id": "user-responsibility",
          "question": "What is my responsibility for account access?",
          "answer": "Responsibility",
          "frontDetail": "You are responsible for all use of your username and password.",
          "backTitle": "Scope of liability",
          "backDetail": "This includes any unauthorized use of your credentials. You must notify Customer Service immediately if your username or password is lost, stolen, or if unauthorized access is suspected."
        },
        {
          "id": "username-change",
          "question": "Can Spotify change my username?",
          "answer": "Reclaim",
          "frontDetail": "Spotify may reclaim or require a change to your username.",
          "backTitle": "Reason for change",
          "backDetail": "Spotify reserves the right to reclaim or require you to change your username for any reason."
        },
        {
          "id": "security-alert",
          "question": "When should I contact support?",
          "answer": "Notify",
          "frontDetail": "Contact support immediately for lost credentials or unauthorized access.",
          "backTitle": "Required action",
          "backDetail": "You must notify the Customer Service team immediately if your username or password is lost or stolen, or if you believe there has been unauthorized access to your account."
        }
];

categories["proprietary-rights-and-brand-usage"].cuecards = [
    {
          "id": "brand-ownership",
          "question": "Who owns the Spotify brand?",
          "answer": "Ownership",
          "frontDetail": "Spotify and its licensors own all brand features.",
          "backTitle": "Ownership scope",
          "backDetail": "The Spotify Service, Content, and all brand features (trademarks, logos, domain names) are the sole property of Spotify or its licensors."
        },
        {
          "id": "usage-rights",
          "question": "Can I use Spotify logos?",
          "answer": "Not Allowed",
          "frontDetail": "No rights are granted to use Spotify Brand Features.",
          "backTitle": "Usage restriction",
          "backDetail": "These Terms do not grant you any rights to use any Spotify Brand Features, whether for commercial or non-commercial use."
        },
        {
          "id": "commercial-use",
          "question": "Is commercial logo use permitted?",
          "answer": "Prohibited",
          "frontDetail": "Commercial use of brand features is excluded.",
          "backTitle": "Commercial restriction",
          "backDetail": "You cannot use Spotify Brand Features for commercial purposes because the Terms do not grant rights for such use."
        },
        {
          "id": "non-commercial-use",
          "question": "Is personal logo use permitted?",
          "answer": "Prohibited",
          "frontDetail": "Non-commercial use of brand features is excluded.",
          "backTitle": "Personal restriction",
          "backDetail": "You cannot use Spotify Brand Features for non-commercial purposes because the Terms do not grant rights for such use."
        }
];

categories["prohibited-use-and-guidelines"].cuecards = [
    {
          "id": "user-guidelines",
          "question": "Do I need to follow Spotify's User Guidelines?",
          "answer": "Required",
          "frontDetail": "You must agree to abide by the Spotify User Guidelines.",
          "backTitle": "Compliance obligation",
          "backDetail": "The agreement requires you to follow the Spotify User Guidelines as a condition of using the service."
        },
        {
          "id": "platform-rules",
          "question": "Are Platform Rules binding on me?",
          "answer": "Binding",
          "frontDetail": "You must also comply with the Platform Rules.",
          "backTitle": "Rule adherence",
          "backDetail": "In addition to the User Guidelines, you are required to abide by the Platform Rules while using the service."
        },
        {
          "id": "unauthorized-use",
          "question": "Can I use the service in any way I want?",
          "answer": "Not Allowed",
          "frontDetail": "You cannot use the service in ways not expressly permitted.",
          "backTitle": "Usage restrictions",
          "backDetail": "You are prohibited from using the Spotify Service, Content, or any part of it in any manner that is not explicitly allowed by the Agreements."
        },
        {
          "id": "express-permission",
          "question": "What defines a permitted use?",
          "answer": "Express",
          "frontDetail": "Only uses expressly permitted by the Agreements are allowed.",
          "backTitle": "Permission scope",
          "backDetail": "Any use of the service or content that is not clearly stated as permitted in the Agreements is considered unauthorized."
        }
];

categories["price-change-acceptance"].cuecards = [
    {
          "id": "price-acceptance",
          "question": "How is a price change accepted?",
          "answer": "Continued Use",
          "frontDetail": "Using the service after the change counts as acceptance.",
          "backTitle": "Acceptance mechanism",
          "backDetail": "By continuing to use Spotify after the new price takes effect, you automatically accept the change, subject to applicable law."
        },
        {
          "id": "reject-method",
          "question": "How can I reject a price change?",
          "answer": "Unsubscribe",
          "frontDetail": "Unsubscribing before the change takes effect rejects the price.",
          "backTitle": "Rejection process",
          "backDetail": "To reject a price change, you must unsubscribe from the Paid Subscription prior to the price change going into effect."
        },
        {
          "id": "timing-matters",
          "question": "When must I act to reject a price?",
          "answer": "Deadline",
          "frontDetail": "Timing determines if you can opt out of a price hike.",
          "backTitle": "Timing requirement",
          "backDetail": "You must unsubscribe before the price change takes effect. Waiting until after the change takes effect means you have already accepted the new price."
        },
        {
          "id": "legal-limit",
          "question": "Are there limits on price changes?",
          "answer": "Applicable Law",
          "frontDetail": "Local laws may override the acceptance rules.",
          "backTitle": "Legal constraints",
          "backDetail": "The rule that continued use equals acceptance is subject to applicable law, meaning local regulations may impose different requirements."
        }
];

categories["tax-rate-adjustments"].cuecards = [
    {
          "id": "tax-rate-basis",
          "question": "When are tax rates determined?",
          "answer": "Timing",
          "frontDetail": "Tax rates are set based on the rates applicable at the time of your monthly charge.",
          "backTitle": "Rate Determination",
          "backDetail": "The applicable tax rate is fixed according to local requirements in your country, state, territory, or city as they exist when you are charged."
        },
        {
          "id": "rate-changes",
          "question": "Can tax rates change over time?",
          "answer": "Changes",
          "frontDetail": "Tax amounts may change due to updates in local tax requirements.",
          "backTitle": "Future Adjustments",
          "backDetail": "If local tax requirements in your location change, the applicable tax rate can be updated to reflect those new requirements."
        },
        {
          "id": "automatic-application",
          "question": "How are tax rate changes applied?",
          "answer": "Automatic",
          "frontDetail": "Changes in tax rates are applied automatically to your account.",
          "backTitle": "Application Process",
          "backDetail": "Any change in the tax rate will be automatically applied using the account information you have provided."
        },
        {
          "id": "geographic-scope",
          "question": "Where do tax rates apply?",
          "answer": "Location",
          "frontDetail": "Tax rates depend on your specific geographic location.",
          "backTitle": "Geographic Scope",
          "backDetail": "The rates are based on local tax requirements specific to your country, state, territory, or even city."
        }
];

categories["withdrawal-right-limitations"].cuecards = [
    {
          "id": "trial-14day-limit",
          "question": "When does my withdrawal right end for a 14-day trial?",
          "answer": "Deadline",
          "frontDetail": "Your right to withdraw ends 14 days after the trial starts.",
          "backTitle": "Cancellation timing",
          "backDetail": "You must cancel the Paid Subscription before the 14-day trial period ends. If you do not cancel by then, you lose your right of withdrawal."
        },
        {
          "id": "short-trial-consent",
          "question": "What happens if my trial is less than 14 days?",
          "answer": "Consent",
          "frontDetail": "Short trials require consent for immediate paid service access.",
          "backTitle": "Immediate service start",
          "backDetail": "For trials under 14 days, you consent to receiving the paid service immediately after the trial ends. From that point, you lose your right of withdrawal."
        },
        {
          "id": "no-trial-withdrawal",
          "question": "Do I have a withdrawal right if I buy a subscription without a trial?",
          "answer": "Withdrawal",
          "frontDetail": "You have 14 days to withdraw after purchasing a subscription with no trial.",
          "backTitle": "Withdrawal window",
          "backDetail": "You agree to a 14-day withdrawal period after purchase for any reason. You must pay for services provided up until the time you notify us of your change of mind."
        },
        {
          "id": "auto-charge-risk",
          "question": "What happens if I miss the cancellation deadline?",
          "answer": "Charge",
          "frontDetail": "Missing the deadline results in losing withdrawal rights and automatic charges.",
          "backTitle": "Automatic billing",
          "backDetail": "If you do not cancel before the trial ends or the withdrawal period expires, you lose your right of withdrawal and authorize Spotify to automatically charge the agreed price each month until you cancel."
        },
        {
          "id": "service-provision-timing",
          "question": "When does service provision start relative to payment?",
          "answer": "Timing",
          "frontDetail": "Service is provided immediately following purchase or trial start.",
          "backTitle": "Immediate access",
          "backDetail": "You expressly consent to receiving the service immediately following your purchase or the start of your trial, even before the withdrawal period expires."
        }
];

categories["no-refunds-policy"].cuecards = [
    {
          "id": "cancel-timing",
          "question": "When does a cancellation take effect?",
          "answer": "Timing",
          "frontDetail": "Cancellations apply from the end of the current billing period.",
          "backTitle": "Effective Date",
          "backDetail": "If you cancel, your access stops at the end of the period you are currently paying for. You will not get a refund for the time you already paid."
        },
        {
          "id": "downgrade-status",
          "question": "What happens to my account after cancellation?",
          "answer": "Downgrade",
          "frontDetail": "Accounts switch to the free version after cancellation.",
          "backTitle": "Service Level",
          "backDetail": "Upon cancellation, your subscription is downgraded to the free version of the service. You lose premium features until the next billing cycle or until you resubscribe."
        },
        {
          "id": "refund-policy",
          "question": "Are partial periods refunded?",
          "answer": "No Refund",
          "frontDetail": "No refunds are given for partial subscription periods.",
          "backTitle": "Credits Policy",
          "backDetail": "The policy states that no refunds or credits are provided for any partial subscription periods, unless specific exceptions are written into the Terms."
        }
];

categories["export-control-compliance"].cuecards = [
    {
          "id": "sanctioned-location",
          "question": "Am I in a sanctioned country?",
          "answer": "Location",
          "frontDetail": "Users must not be located in or organized under laws of Sanctioned Countries.",
          "backTitle": "Eligibility check",
          "backDetail": "You represent that you are not in a Sanctioned Country and are not owned by a government subject to asset-blocking sanctions. This includes checking if your entity is organized under laws of such countries."
        },
        {
          "id": "restricted-party-lists",
          "question": "Am I on a restricted list?",
          "answer": "Restricted",
          "frontDetail": "Users cannot be on EU, UK, or US government restricted party lists.",
          "backTitle": "List verification",
          "backDetail": "You agree not to be identified on, or more than 50% owned by, entities on lists like the EU consolidated sanctions list, UK Consolidated List, or US Specifically Designated Nationals list."
        },
        {
          "id": "trade-law-compliance",
          "question": "Do I follow trade laws?",
          "answer": "Compliance",
          "frontDetail": "Users must comply with all applicable Trade Control Laws when using Spotify.",
          "backTitle": "Usage obligation",
          "backDetail": "You agree to comply with Trade Control Laws and not use, sell, export, reexport, transfer, or dispose of Spotify products to destinations or for end-uses prohibited by these laws."
        },
        {
          "id": "prohibited-exports",
          "question": "Can I export Spotify tech?",
          "answer": "Not Allowed",
          "frontDetail": "Exporting or transferring Spotify technology to prohibited destinations is forbidden.",
          "backTitle": "Prohibited actions",
          "backDetail": "You must not directly or indirectly use, sell, export, reexport, transfer, divert, release, or dispose of Spotify products or technology to any destination or person prohibited by Trade Control Laws."
        },
        {
          "id": "spotify-discretion",
          "question": "Will Spotify provide services if illegal?",
          "answer": "Discretion",
          "frontDetail": "Spotify is not required to act if prohibited by Trade Control Laws.",
          "backTitle": "Provider limitation",
          "backDetail": "Spotify shall not be required to act in ways prohibited by Trade Control Laws and decides solely whether to provide products or services that might be prohibited."
        },
        {
          "id": "derived-technology",
          "question": "Does this cover derived tech?",
          "answer": "Derived",
          "frontDetail": "Rules apply to products derived from or based on Spotify technology.",
          "backTitle": "Scope of restriction",
          "backDetail": "The prohibition on export and transfer includes products, software, or technology derived from or based on technology received from Spotify under these Terms."
        }
];

categories["endorsement-restrictions"].cuecards = [
    {
          "id": "endorsement-rights",
          "question": "Can I imply Spotify endorses my content?",
          "answer": "No Implied",
          "frontDetail": "You cannot imply Spotify or artists endorse your content.",
          "backTitle": "Endorsement boundary",
          "backDetail": "Your content must not suggest an affiliation with Spotify or any artist unless you have Spotify's prior express written consent."
        },
        {
          "id": "third-party-rights",
          "question": "Does my content violate third-party rights?",
          "answer": "No Violation",
          "frontDetail": "Your content must not infringe on third-party rights.",
          "backTitle": "Rights check",
          "backDetail": "You promise your content does not violate applicable law or the intellectual property rights of any third party."
        },
        {
          "id": "brand-transparency",
          "question": "Must brands disclose paid endorsements?",
          "answer": "Be Transparent",
          "frontDetail": "Brands must disclose if they paid for an endorsement.",
          "backTitle": "Disclosure rule",
          "backDetail": "Brands must be transparent to users about any endorsements or consideration provided to artists, songwriters, or users."
        },
        {
          "id": "follow-restrictions",
          "question": "Can I follow artists without permission?",
          "answer": "Needs Rights",
          "frontDetail": "Following users or artists implies an endorsement.",
          "backTitle": "Follow limit",
          "backDetail": "You may not follow a user or artist unless the Brand has independently obtained the rights to imply such an endorsement."
        },
        {
          "id": "consent-requirement",
          "question": "What consent is needed for affiliation?",
          "answer": "Written Consent",
          "frontDetail": "Affiliation implies must have written consent.",
          "backTitle": "Consent type",
          "backDetail": "Any implication of affiliation with Spotify or an entity requires prior express written consent from that specific entity."
        }
];

categories["user-content-responsibility"].cuecards = [
    {
          "id": "sole-responsibility",
          "question": "Who is responsible for my posts?",
          "answer": "Your Risk",
          "frontDetail": "You bear full responsibility for all User Content you post.",
          "backTitle": "Scope of Liability",
          "backDetail": "You are solely responsible for any content you upload or share. The service does not assume liability for what you or others post."
        },
        {
          "id": "privacy-warning",
          "question": "Will my messages stay private?",
          "answer": "Privacy Risk",
          "frontDetail": "Content may be publicly accessible or re-shared by others.",
          "backTitle": "Sharing Caution",
          "backDetail": "Depending on how you share, content might be privately transmitted or become publicly accessible. Others may use and re-share your content across the web, so use caution."
        },
        {
          "id": "account-settings",
          "question": "How do I control my content?",
          "answer": "Settings Check",
          "frontDetail": "Mind your account settings when posting or sharing.",
          "backTitle": "Configuration Review",
          "backDetail": "Be mindful of your account settings when posting or sharing information, as these determine whether content is privately transmitted or publicly accessible."
        },
        {
          "id": "no-service-liability",
          "question": "Does Spotify protect my posts?",
          "answer": "No Liability",
          "frontDetail": "Spotify is not responsible for user-posted content.",
          "backTitle": "Service Stance",
          "backDetail": "The service explicitly states it is not responsible for what you or others post or share on the platform."
        }
];

categories["feedback-ownership"].cuecards = [
    {
          "id": "feedback-ownership",
          "question": "Who owns my feedback?",
          "answer": "Ownership",
          "frontDetail": "Feedback you provide is not confidential.",
          "backTitle": "Ownership rights",
          "backDetail": "Any ideas, suggestions, or feedback you give to Spotify are considered User Content and are owned by Spotify."
        },
        {
          "id": "feedback-use",
          "question": "Can Spotify use my feedback?",
          "answer": "Unrestricted",
          "frontDetail": "Spotify may use feedback without restriction.",
          "backTitle": "Usage permissions",
          "backDetail": "Spotify is allowed to use your feedback without any limits or conditions."
        },
        {
          "id": "feedback-compensation",
          "question": "Will I get paid for feedback?",
          "answer": "No Payment",
          "frontDetail": "You receive no payment for feedback.",
          "backTitle": "Compensation",
          "backDetail": "Spotify will not pay you for any feedback you provide."
        },
        {
          "id": "feedback-confidentiality",
          "question": "Is my feedback confidential?",
          "answer": "Not Confidential",
          "frontDetail": "Feedback is not treated as confidential.",
          "backTitle": "Confidentiality status",
          "backDetail": "Spotify does not treat your feedback as confidential information."
        }
];

categories["device-access-license"].cuecards = [
    {
          "id": "device-hardware-use",
          "question": "Can Spotify use my device's hardware?",
          "answer": "Hardware",
          "frontDetail": "Spotify may use your device's processor, bandwidth, and storage.",
          "backTitle": "Scope of access",
          "backDetail": "You grant Spotify the right to use your device's processor, bandwidth, and storage hardware to facilitate the service operation."
        },
        {
          "id": "partner-data-sharing",
          "question": "Can partners use my device?",
          "answer": "Sharing",
          "frontDetail": "Business partners may access your device for ads.",
          "backTitle": "Partner permissions",
          "backDetail": "Spotify can provide advertising and other information to you and allow business partners to do the same, as permitted by the Privacy Policy."
        },
        {
          "id": "privacy-policy-check",
          "question": "Where are partner rules defined?",
          "answer": "Policy",
          "frontDetail": "Partner access is limited by the Privacy Policy.",
          "backTitle": "Compliance check",
          "backDetail": "Any use of your device by business partners for advertising or information must occur in accordance with the Spotify Privacy Policy."
        }
];

categories["survival-clause"].cuecards = [
    {
          "id": "survival-scope",
          "question": "Which sections survive termination?",
          "answer": "Surviving Sections",
          "frontDetail": "Specific clauses remain active after the agreement ends.",
          "backTitle": "Scope of Survival",
          "backDetail": "Sections 4, 3, 2, 6, 7, and any other sections explicitly or naturally intended to survive termination stay in effect."
        },
        {
          "id": "termination-effect",
          "question": "Do terms end immediately upon termination?",
          "answer": "Partial Survival",
          "frontDetail": "Termination does not kill all obligations at once.",
          "backTitle": "Post-Termination Status",
          "backDetail": "Even if the Terms are terminated, the listed sections continue to apply and must remain in effect."
        },
        {
          "id": "survival-trigger",
          "question": "What triggers the survival clause?",
          "answer": "Termination",
          "frontDetail": "The clause activates when the agreement is ended.",
          "backTitle": "Activation Point",
          "backDetail": "Survival applies specifically after the termination of these Terms, ensuring certain rights and duties persist."
        },
        {
          "id": "implicit-survival",
          "question": "Are some sections implied to survive?",
          "answer": "By Nature",
          "frontDetail": "Some sections survive based on their inherent purpose.",
          "backTitle": "Implicit Survival",
          "backDetail": "Sections that, by their nature, must remain in effect will survive termination even without explicit wording."
        }
];

categories["indemnification"].cuecards = [
    {
          "id": "indemnity-scope",
          "question": "What triggers my obligation to indemnify Spotify?",
          "answer": "Triggers",
          "frontDetail": "You must indemnify Spotify for losses arising from your breach of terms, user content, activities, or law violations.",
          "backTitle": "Scope of Liability",
          "backDetail": "Your obligation covers losses related to: (1) breaching these Terms, (2) User Content you post, (3) activities on the Service, and (4) violating laws or third-party rights."
        },
        {
          "id": "loss-types",
          "question": "What types of losses must I cover?",
          "answer": "Losses",
          "frontDetail": "You are responsible for direct losses, damages, and reasonable expenses including attorney fees.",
          "backTitle": "Covered Costs",
          "backDetail": "The indemnity extends to reasonably foreseeable direct losses, damages, and reasonable expenses incurred by Spotify, specifically including reasonable attorney fees and costs."
        },
        {
          "id": "hold-harmless",
          "question": "Do I need to protect Spotify from legal claims?",
          "answer": "Protection",
          "frontDetail": "You must hold Spotify harmless against claims related to your actions or content.",
          "backTitle": "Hold Harmless",
          "backDetail": "You agree to indemnify and hold Spotify harmless from and against any losses or expenses arising out of or related to the specified triggers."
        },
        {
          "id": "third-party-rights",
          "question": "Does violating someone else's rights affect me?",
          "answer": "Third Party",
          "frontDetail": "Violating third-party rights or laws creates an indemnification obligation.",
          "backTitle": "Legal & Rights Violations",
          "backDetail": "If you violate any law or the rights of a third party, you must indemnify Spotify for losses related to that violation."
        },
        {
          "id": "breach-consequence",
          "question": "What happens if I break the Terms?",
          "answer": "Breach",
          "frontDetail": "Breaking the Terms requires you to cover Spotify's resulting losses.",
          "backTitle": "Term Breach",
          "backDetail": "Any breach of these Terms (including incorporated terms) triggers your duty to indemnify Spotify for reasonably foreseeable direct losses and expenses."
        }
];

categories["class-action-waiver"].cuecards = [
    {
          "id": "class-action-waiver",
          "question": "Can I join a class action lawsuit against Spotify?",
          "answer": "No Class",
          "frontDetail": "You and Spotify agree to settle claims individually, not as a group.",
          "backTitle": "Individual Claims Only",
          "backDetail": "This clause requires that any legal claims be brought in your individual capacity. It prohibits joining with others in a class action or collective lawsuit, provided applicable law permits this restriction."
        },
        {
          "id": "group-litigation",
          "question": "Is group litigation allowed under these terms?",
          "answer": "Prohibited",
          "frontDetail": "Claims must be brought individually, not in a group capacity.",
          "backTitle": "No Group Action",
          "backDetail": "The agreement explicitly states that claims against the other party must be brought only in individual capacity. This means you cannot participate in a class action or any form of group litigation."
        },
        {
          "id": "legal-capacity",
          "question": "What capacity must I use for legal claims?",
          "answer": "Individual",
          "frontDetail": "Legal claims must be filed in your individual capacity.",
          "backTitle": "Individual Capacity",
          "backDetail": "Under this provision, you agree to bring claims against Spotify only in your own individual capacity. This prevents the use of a representative or collective standing for legal disputes."
        },
        {
          "id": "waiver-scope",
          "question": "Does this waiver apply to all claims?",
          "answer": "All Claims",
          "frontDetail": "The waiver covers all claims brought against the other party.",
          "backTitle": "Scope of Waiver",
          "backDetail": "This clause applies to any claims you or Spotify may bring against the other. It mandates that such claims be handled individually rather than collectively, assuming applicable law allows this arrangement."
        }
];

categories["mandatory-arbitration"].cuecards = [
    {
          "id": "mandatory-arb-scope",
          "question": "What disputes go to arbitration?",
          "answer": "Scope",
          "frontDetail": "All disputes between you and Spotify regarding the Service are subject to mandatory binding individual arbitration.",
          "backTitle": "What to verify",
          "backDetail": "This covers claims based on contract, tort, statute, fraud, or misrepresentation, even if they arise after the agreement is terminated."
        },
        {
          "id": "no-class-actions",
          "question": "Can I join a class lawsuit?",
          "answer": "No Class",
          "frontDetail": "You and Spotify agree that no arbitrator or judge may consolidate claims or preside over representative or class proceedings.",
          "backTitle": "What to verify",
          "backDetail": "Disputes must be handled individually. There is no option to join or initiate a class action or representative proceeding."
        },
        {
          "id": "arbitration-process",
          "question": "How does arbitration differ from court?",
          "answer": "Process",
          "frontDetail": "Arbitration is more informal than a lawsuit, with no judge or jury, and limited court review of the award.",
          "backTitle": "What to verify",
          "backDetail": "There may be more limited discovery than in court. The arbitrator must follow the agreement but cannot award relief benefiting anyone other than the parties involved."
        },
        {
          "id": "relief-limits",
          "question": "What relief can the arbitrator award?",
          "answer": "Relief",
          "frontDetail": "The arbitrator can award damages and relief similar to a court, including attorney fees, but cannot grant injunctive relief for others.",
          "backTitle": "What to verify",
          "backDetail": "While monetary damages and attorney fees are available, the arbitrator is prohibited from awarding declaratory or injunctive relief that benefits anyone but the specific parties to the arbitration."
        },
        {
          "id": "clause-survival",
          "question": "Does arbitration end if I cancel?",
          "answer": "Survives",
          "frontDetail": "This arbitration provision will survive the termination of the Agreements.",
          "backTitle": "What to verify",
          "backDetail": "Even if you stop using the Service or the agreement is terminated, the mandatory arbitration requirement remains in effect for any related disputes."
        }
];

categories["arbitration-procedure"].cuecards = [
    {
          "id": "arbitration-rules",
          "question": "Which rules govern the arbitration?",
          "answer": "Icc Rules",
          "frontDetail": "Arbitration is settled under ICC Rules administered by the International Court of Arbitration.",
          "backTitle": "Governing Framework",
          "backDetail": "Proceedings follow the International Chamber of Commerce Rules, modified by the Agreement, and are administered by the ICC's International Court of Arbitration."
        },
        {
          "id": "arbitration-language",
          "question": "What language is used in arbitration?",
          "answer": "English",
          "frontDetail": "Arbitration proceedings are conducted in English.",
          "backTitle": "Language Requirement",
          "backDetail": "Unless mandatory EU or other jurisdiction laws require otherwise, all arbitration will be conducted in the English language."
        },
        {
          "id": "applicable-law",
          "question": "Which law applies to the dispute?",
          "answer": "Local Law",
          "frontDetail": "The law of the relevant state or country applies to the arbitration.",
          "backTitle": "Governing Law",
          "backDetail": "Unless EU or other mandatory laws require otherwise, the arbitration applies the law of the relevant state or country described in clause 6.1, ignoring choice of law principles."
        },
        {
          "id": "arbitration-initiation",
          "question": "Who can start the arbitration?",
          "answer": "Either Party",
          "frontDetail": "Either you or Spotify may initiate arbitration proceedings.",
          "backTitle": "Initiation Rights",
          "backDetail": "The agreement allows either party to start the arbitration process to settle disputes."
        }
];

categories["settlement-protection"].cuecards = [
    {
          "id": "arbitration-payment-calc",
          "question": "How is the settlement amount calculated?",
          "answer": "Payment",
          "frontDetail": "Spotify pays the greater of the award, last offer, or $1,000.",
          "backTitle": "Settlement Calculation",
          "backDetail": "If you win arbitration, Spotify pays the highest of: the arbitrator's award, the last written settlement offer made before the award, or $1,000."
        },
        {
          "id": "minimum-guarantee",
          "question": "Is there a minimum payout?",
          "answer": "Minimum",
          "frontDetail": "The settlement cannot be less than $1,000.",
          "backTitle": "Minimum Guarantee",
          "backDetail": "Even if the arbitrator awards less than $1,000 or the last offer was lower, the payment will be at least $1,000."
        },
        {
          "id": "last-offer-rule",
          "question": "Does the last offer matter?",
          "answer": "Offer",
          "frontDetail": "The final written offer before the award counts.",
          "backTitle": "Last Offer Rule",
          "backDetail": "The calculation includes the last written settlement amount offered by Spotify prior to the arbitrator's final award."
        },
        {
          "id": "favorable-outcome",
          "question": "What if I win the dispute?",
          "answer": "Win",
          "frontDetail": "Payment applies only if resolved in your favor.",
          "backTitle": "Favorable Resolution",
          "backDetail": "This protection triggers only if the dispute is finally resolved through arbitration in your favor."
        }
];

categories["confidentiality"].cuecards = [
    {
          "id": "conf-arb-use",
          "question": "Can I use arbitration docs for other purposes?",
          "answer": "Not Allowed",
          "frontDetail": "Arbitration documents are strictly confidential.",
          "backTitle": "Usage restriction",
          "backDetail": "You may only use disclosed documents for the arbitration or enforcing the award. Any other use is prohibited."
        },
        {
          "id": "conf-arb-scope",
          "question": "What documents must be kept confidential?",
          "answer": "All Docs",
          "frontDetail": "Confidentiality covers all arbitration materials.",
          "backTitle": "Scope of duty",
          "backDetail": "Every document and piece of information shared during the arbitration process must be kept strictly confidential by the recipient."
        },
        {
          "id": "conf-arb-enforce",
          "question": "Is enforcing the award an exception?",
          "answer": "Allowed",
          "frontDetail": "Enforcing the award is a permitted use.",
          "backTitle": "Permitted purpose",
          "backDetail": "The confidentiality rule allows using documents specifically for the arbitration or to enforce the arbitrator's decision and award."
        }
];

categories["arbitration-confidentiality"].cuecards = [
    {
          "id": "conf-disclosure",
          "question": "Who can I tell about the arbitration?",
          "answer": "Confidentiality",
          "frontDetail": "Information about the dispute must be kept confidential.",
          "backTitle": "Who can know",
          "backDetail": "You may only share details with people who have a need to know or when required by law. Public announcements or comments about the dispute are prohibited."
        },
        {
          "id": "public-comment",
          "question": "Can I post about the dispute online?",
          "answer": "Not Allowed",
          "frontDetail": "Public comments regarding the arbitration are strictly forbidden.",
          "backTitle": "Prohibited actions",
          "backDetail": "Neither party can make public announcements, originate publicity, or comment on the existence of the arbitration, the dispute, or the arbitrator's decision."
        },
        {
          "id": "enforcement-exception",
          "question": "When can I reveal the outcome?",
          "answer": "Enforcement",
          "frontDetail": "Disclosure is limited to enforcing the final decision.",
          "backTitle": "The exception",
          "backDetail": "The only time you or Spotify can make public announcements is when it is required to enforce the arbitrator's decision and award."
        },
        {
          "id": "fact-restriction",
          "question": "Can I admit we are in a dispute?",
          "answer": "Restricted",
          "frontDetail": "Admitting a dispute exists is a violation of confidentiality.",
          "backTitle": "What is banned",
          "backDetail": "You cannot originate publicity concerning the fact that parties are in dispute, the existence of the arbitration, or any decision made by the arbitrator."
        }
];

categories["arbitration-provision-modification"].cuecards = [
    {
          "id": "reject-deadline",
          "question": "How long do I have to reject a change?",
          "answer": "30 Days",
          "frontDetail": "You must send written notice within 30 days to reject a change.",
          "backTitle": "Rejection Window",
          "backDetail": "If Spotify changes the arbitration provision, you have exactly 30 days to send written notice to their Notice address to reject it."
        },
        {
          "id": "account-termination",
          "question": "What happens to my account if I reject?",
          "answer": "Termination",
          "frontDetail": "Rejecting a change results in immediate account termination.",
          "backTitle": "Consequence of Rejection",
          "backDetail": "If you send written notice to reject the change, your Spotify account will be terminated immediately."
        },
        {
          "id": "provision-survival",
          "question": "Does the old rule stay after rejection?",
          "answer": "Survives",
          "frontDetail": "The previous arbitration terms remain in effect after rejection.",
          "backTitle": "Terms Survival",
          "backDetail": "When you reject a change, the arbitration provision as it existed immediately before the amendment continues to apply."
        },
        {
          "id": "notice-address",
          "question": "Where do I send the rejection notice?",
          "answer": "Notice Addr",
          "frontDetail": "Send written notice to Spotify's address for Notice.",
          "backTitle": "Required Address",
          "backDetail": "Written notice to reject a change must be sent specifically to Spotify's address designated for Notice."
        },
        {
          "id": "change-scope",
          "question": "Does this apply to address changes?",
          "answer": "Excluded",
          "frontDetail": "Address changes to the Notice location are not subject to rejection.",
          "backTitle": "Excluded Changes",
          "backDetail": "This rejection right applies only to changes in the arbitration provision itself, excluding changes to Spotify's address for Notice."
        }
];

categories["arbitration-severability"].cuecards = [
    {
          "id": "severability-void",
          "question": "What happens if the class action waiver is ruled unenforceable?",
          "answer": "Section Void",
          "frontDetail": "If the class action waiver is found unenforceable, the entire Section 6.3 becomes null and void.",
          "backTitle": "Impact on Agreement",
          "backDetail": "In this event, the exclusive jurisdiction and venue rules in Section 6.1 no longer apply, and you are not prevented from bringing proceedings."
        },
        {
          "id": "jurisdiction-change",
          "question": "Does a failed class waiver change where I can sue?",
          "answer": "Venue Shift",
          "frontDetail": "Invalidity of Section 6.3 removes the exclusive jurisdiction and venue described in Section 6.1.",
          "backTitle": "Next Check",
          "backDetail": "Verify that Section 6.1 is not the only venue option if Section 6.3 is invalidated, as the exclusive venue provision ceases to govern."
        },
        {
          "id": "proceedings-allowed",
          "question": "Am I allowed to bring proceedings if Section 6.3 fails?",
          "answer": "Proceedings Ok",
          "frontDetail": "If Section 6.3 is invalid, you shall not be prevented from bringing proceedings at any time.",
          "backTitle": "User Right",
          "backDetail": "The agreement explicitly states that invalidity of this section does not stop you from initiating legal actions."
        },
        {
          "id": "full-section-risk",
          "question": "Is only the class waiver at risk, or the whole section?",
          "answer": "Full Void",
          "frontDetail": "The clause states that if any part of Section 6.3 is invalid, the entirety of that section is null and void.",
          "backTitle": "Scope of Invalidity",
          "backDetail": "Do not assume only the class waiver is affected; the entire Section 6.3 is treated as void if any part is unenforceable."
        }
];

categories["terms-modification"].cuecards = [
    {
          "id": "mod-changes",
          "question": "How are Terms changes notified?",
          "answer": "Notification",
          "frontDetail": "Spotify may update Terms using reasonable means before they take effect.",
          "backTitle": "Notification methods",
          "backDetail": "Changes are posted on the Service. Material changes will also be supplemented by email, in-service pop-ups, or other means."
        },
        {
          "id": "retroactive-effect",
          "question": "Do changes apply to past disputes?",
          "answer": "No Retroactive",
          "frontDetail": "Updated Terms do not apply to disputes arising before the changes were posted.",
          "backTitle": "Effective date rule",
          "backDetail": "Changes only apply to disputes occurring on or after the date the revised Terms were posted or notified."
        },
        {
          "id": "acceptance-action",
          "question": "How do I accept new Terms?",
          "answer": "Continue Use",
          "frontDetail": "Using the Service after changes constitutes acceptance of the updated Terms.",
          "backTitle": "Acceptance mechanism",
          "backDetail": "Continuing to use Spotify following the changes means you agree to the new Terms."
        },
        {
          "id": "opt-out-step",
          "question": "How to stop using new Terms?",
          "answer": "Terminate",
          "frontDetail": "Users can stop using the Service if they do not wish to accept updated Terms.",
          "backTitle": "Opt-out action",
          "backDetail": "Contact Spotify to terminate your account if you do not want to continue under the updated Terms."
        }
];

categories["entire-agreement"].cuecards = [
    {
          "id": "entire-agreement-scope",
          "question": "Do these Terms replace all previous agreements?",
          "answer": "Supersedes",
          "frontDetail": "These Terms act as the complete agreement between you and Spotify.",
          "backTitle": "Scope of Agreement",
          "backDetail": "These Terms replace any prior written or oral agreements regarding the service. Only terms explicitly agreed upon in writing later can change this."
        },
        {
          "id": "incorporated-policies",
          "question": "Are other policies part of this contract?",
          "answer": "Included",
          "frontDetail": "Specific guidelines and policies are automatically included in these Terms.",
          "backTitle": "Incorporated Documents",
          "backDetail": "The Spotify Privacy Policy, User Guidelines, Platform Rules, and Intellectual Property Policy are part of this agreement by reference. Additional service-specific terms are also included."
        },
        {
          "id": "written-changes-only",
          "question": "Can I change terms verbally?",
          "answer": "Written",
          "frontDetail": "Changes to terms must be agreed upon in writing.",
          "backTitle": "Modification Rule",
          "backDetail": "Except as stated in this section, no changes to the agreement are valid unless explicitly agreed upon in writing between you and Spotify."
        },
        {
          "id": "policy-list-check",
          "question": "Which external policies apply to me?",
          "answer": "Check List",
          "frontDetail": "Verify if specific service terms or policies apply to your usage.",
          "backTitle": "Relevant Policies",
          "backDetail": "Review the Spotify Premium Promotional Offer Terms, Card Terms, Support Community Terms, Privacy Policy, User Guidelines, Platform Rules, and Intellectual Property Policy for applicable rules."
        }
];

categories["severability"].cuecards = [
    {
          "id": "severability-core",
          "question": "What happens if one part of the Terms is invalid?",
          "answer": "Severability",
          "frontDetail": "Invalid clauses do not cancel the rest of the agreement.",
          "backTitle": "How it works",
          "backDetail": "If a specific provision is found invalid or unenforceable, the remaining provisions stay in effect. The invalid provision will be enforced only to the extent permitted by law."
        },
        {
          "id": "severability-scope",
          "question": "Does this rule apply to every single clause?",
          "answer": "Exceptions",
          "frontDetail": "Check if specific clauses override the general severability rule.",
          "backTitle": "Scope check",
          "backDetail": "This rule applies unless the Terms explicitly state otherwise for a specific provision. If an exception exists, that specific clause dictates the outcome instead."
        },
        {
          "id": "severability-enforcement",
          "question": "Can a broken clause still be used partially?",
          "answer": "Partial Use",
          "frontDetail": "Invalid provisions may be enforced to the maximum legal limit.",
          "backTitle": "Enforcement limit",
          "backDetail": "When a provision is held invalid, the application of that specific provision shall be enforced to the extent permitted by law, rather than being completely discarded."
        }
];

categories["assignment"].cuecards = [
    {
          "id": "spotify-assignment-01",
          "question": "Can I transfer my Spotify account to someone else?",
          "answer": "Not Allowed",
          "frontDetail": "You cannot transfer your rights under these Terms to a third party.",
          "backTitle": "Assignment Restriction",
          "backDetail": "The agreement explicitly prohibits you from assigning, transferring, or sub-licensing your rights to anyone else. You must keep your account and obligations under these Terms."
        },
        {
          "id": "spotify-assignment-02",
          "question": "Can Spotify give my rights to another company?",
          "answer": "Spotify Can",
          "frontDetail": "Spotify reserves the right to assign its rights and obligations to others.",
          "backTitle": "Provider Flexibility",
          "backDetail": "Spotify may assign any or all of the Terms, or delegate its rights and obligations in whole or in part, to a third party without restriction."
        },
        {
          "id": "spotify-assignment-03",
          "question": "What happens if I try to sell my account?",
          "answer": "Prohibited",
          "frontDetail": "Selling or gifting your account violates the assignment clause.",
          "backTitle": "User Limitation",
          "backDetail": "The Terms state you may not assign them in whole or in part. This means you cannot transfer your rights or sub-license them to any third party."
        },
        {
          "id": "spotify-assignment-04",
          "question": "Does this apply to partial transfers too?",
          "answer": "Not Allowed",
          "frontDetail": "Both full and partial transfers of rights are forbidden for users.",
          "backTitle": "Scope of Ban",
          "backDetail": "The prohibition covers assigning the Terms in whole or in part. You cannot transfer even a portion of your rights under the agreement to another person."
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