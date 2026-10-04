function textPreview(text = '', limit = 1400) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  return clean.length > limit ? `${clean.slice(0, limit)}...` : clean;
}

export const fallbackEula = `1. License to Use. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial use.

2. User Content. You retain ownership of content you submit, post, or display through the Service. By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, host, store, reproduce, modify, create derivative works of, communicate, and display such User Content in connection with providing and improving the Service. This includes using such content for machine learning and AI model training and evaluation.

3. Privacy. Our collection and use of your information is governed by our Privacy Policy, which is incorporated into these Terms by reference.

4. Term and Termination. We may suspend or terminate your access to the Service at any time, with or without cause or notice, including if you violate these Terms.

5. Payments. Paid subscriptions renew automatically unless cancelled before the renewal date. Fees are non-refundable except as required by law.

6. Disclaimers. The Service is provided as-is and as-available without warranties of any kind, express or implied.

7. Dispute Resolution. Any disputes must be resolved through binding arbitration, and you waive the right to participate in a class action.`;

export function buildMockAnalysis(text = '', fileName = 'Terms_of_Service.pdf') {
  const sourceText = text.trim().length > 30 ? text : fallbackEula;

  return {
    document: {
      title: fileName || 'Pasted_EULA.txt',
      sourceType: fileName?.toLowerCase().endsWith('.pdf') ? 'pdf' : 'text',
      parsedAt: new Date().toISOString(),
      textPreview: textPreview(sourceText)
    },
    overview: {
      summary: 'This policy grants broad operating rights, limits user remedies, and contains several clauses worth checking before accepting.'
    },
    sourceText,
    categories: [
      category('data-collection', 'Data Collection', 'medium', 'The EULA points to a privacy policy for how personal information is collected and used.', 'Medium impact', ['External privacy policy', 'Third-party services', 'Retention may be elsewhere'], ['Read the linked privacy policy'], [
        card('data-1', 'Do they collect my data?', 'Likely', 'The EULA incorporates a privacy policy, so collection details may be in a separate document.', 'What to verify', 'Check data categories, purposes, retention, sharing partners, and opt-out controls.', ['3']),
        card('data-2', 'Can they share it?', 'Unclear', 'This excerpt does not fully describe sharing, because privacy rules are delegated elsewhere.', 'Lookout', 'A linked privacy policy can materially change what happens to user data.', ['3']),
        card('data-3', 'What should I inspect?', 'Privacy link', 'Look for advertising, analytics, processors, legal requests, and retention terms.', 'User action', 'If the privacy policy is missing or vague, treat this area as unresolved.', ['3'])
      ], [
        panel('Information is collected', 'The user provides account or usage data.'),
        panel('Rules live elsewhere', 'The EULA points to a privacy policy.'),
        panel('Details matter', 'Sharing and retention may be described separately.'),
        panel('User follows the link', 'The privacy policy should be inspected directly.')
      ]),
      category('content-rights', 'Content Rights', 'high', 'You keep ownership, but the service receives broad rights to use uploaded content, including for AI training.', 'High impact', ['Broad content license', 'Derivative works', 'AI training mentioned'], ['Check opt-out and deletion limits'], [
        card('content-1', 'Can they use my uploads?', 'Yes', 'They can use, host, store, reproduce, modify, and display your content to provide and improve the service.', 'Why this matters', 'A broad license can allow operational use across systems even though you still own the content.', ['2']),
        card('content-2', 'Do I still own my content?', 'Partly', 'You retain ownership, but you grant the service extensive rights to use the content.', 'What to check', 'Look for whether the license ends after deletion and whether sublicensing is allowed.', ['2']),
        card('content-3', 'Can they use it for AI training?', 'Yes', 'The clause explicitly mentions machine learning and AI model training and evaluation.', 'Lookout', 'AI-training language is high impact when you upload sensitive, creative, or proprietary material.', ['2'])
      ], [
        panel('You upload content', 'A file, post, or image is added to the service.'),
        panel('The service processes it', 'The company may host, store, reproduce, and display it.'),
        panel('Improvement rights apply', 'The content may be used to improve the product.'),
        panel('AI use is included', 'The clause also mentions model training and evaluation.')
      ]),
      category('payments', 'Payments', 'medium', 'Paid subscriptions may renew automatically unless cancelled before the renewal date.', 'Medium impact', ['Auto-renewal', 'Refund limits', 'Cancellation timing'], ['Track renewal date and cancellation steps'], [
        card('pay-1', 'Can they renew automatically?', 'Yes', 'Paid subscriptions renew unless cancelled before the renewal date.', 'User action', 'Set a reminder and check whether cancellation is immediate or end-of-cycle.', ['5']),
        card('pay-2', 'Can I get a refund?', 'Limited', 'Fees are non-refundable except where required by law.', 'Lookout', 'Refund language is usually strict; verify trial and renewal policies separately.', ['5']),
        card('pay-3', 'What should I do?', 'Track dates', 'The practical risk is missing a cancellation window before renewal.', 'Practical step', 'Find the exact cancellation process in the account or billing policy.', ['5'])
      ], [
        panel('Subscription begins', 'The user signs up for a paid plan.'),
        panel('Renewal approaches', 'The plan may continue automatically.'),
        panel('Cancellation matters', 'The user must cancel before renewal to stop charges.'),
        panel('Refunds may be limited', 'Non-refundable language can restrict recovery.')
      ]),
      category('termination', 'Termination', 'high', 'The service may suspend or terminate access at any time, including for violations.', 'High impact', ['Broad suspension rights', 'No notice may be required', 'Access loss'], ['Check appeal, notice, and data export terms'], [
        card('term-1', 'Can they suspend my account?', 'Yes', 'The service can suspend or terminate access at any time, with or without cause or notice.', 'Why this matters', 'Broad termination rights can affect access to purchases, saved data, or hosted content.', ['4']),
        card('term-2', 'Do they need to warn me?', 'No', 'The clause says termination may occur with or without notice.', 'Lookout', 'Check whether another policy gives appeal rights or restoration windows.', ['4']),
        card('term-3', 'What triggers it?', 'Violations', 'Violating the terms is one stated reason, but the language also appears broader.', 'User action', 'Review conduct rules and backup important data before relying on continued access.', ['4'])
      ], [
        panel('User depends on access', 'The account contains content or paid access.'),
        panel('The service flags an issue', 'A violation may trigger suspension.'),
        panel('Access may end quickly', 'The clause allows termination without notice.'),
        panel('Appeal terms matter', 'The user checks recovery or export options.')
      ]),
      category('liability', 'Liability', 'high', 'The service is provided as-is, and warranties may be disclaimed.', 'High impact', ['As-is service', 'Warranty disclaimer', 'Limited remedies'], ['Check liability cap and excluded damages'], [
        card('liab-1', 'Do they guarantee the service?', 'No', 'The service is provided as-is and as-available without warranties.', 'Why this matters', 'If the service fails or causes loss, disclaimers may reduce your options.', ['6']),
        card('liab-2', 'Can I recover losses?', 'Limited', 'The visible clause disclaims warranties; liability caps may appear nearby.', 'Lookout', 'Search for limitation of liability, damages caps, and consequential damages language.', ['6']),
        card('liab-3', 'When does this matter?', 'Failures', 'This matters if downtime, data loss, defects, or reliance on the service creates harm.', 'User action', 'Avoid relying on the service for critical work unless support and remedy terms are clear.', ['6'])
      ], [
        panel('Something breaks', 'The service goes down or performs incorrectly.'),
        panel('User looks for guarantees', 'The agreement says the service is as-is.'),
        panel('Recovery may be limited', 'Warranty language narrows remedies.'),
        panel('Risk is shifted', 'The user may carry more practical risk.')
      ]),
      category('disputes', 'Disputes', 'medium', 'Disputes may be routed to binding arbitration, and class-action rights may be waived.', 'Medium impact', ['Binding arbitration', 'Class-action waiver', 'Forum rules'], ['Check opt-out deadline and jurisdiction'], [
        card('disp-1', 'Can I sue in court?', 'Limited', 'The clause sends disputes to binding arbitration.', 'Lookout', 'Arbitration can change where and how disputes are resolved.', ['7']),
        card('disp-2', 'Can users join together?', 'No', 'The clause waives the right to participate in a class action.', 'Why this matters', 'Class-action waivers can reduce collective remedies for small individual claims.', ['7']),
        card('disp-3', 'What should I check?', 'Opt-out', 'Look for arbitration opt-out windows, required notice steps, and governing law.', 'User action', 'Some policies allow opt-out within a short period after acceptance.', ['7'])
      ], [
        panel('A dispute arises', 'The user has a claim against the service.'),
        panel('The agreement routes it', 'Claims are sent to arbitration.'),
        panel('Group claims are restricted', 'Class-action participation is waived.'),
        panel('Opt-out may matter', 'The user checks deadlines and forum rules.')
      ]),
      category('ai-training', 'AI Training', 'high', 'The policy explicitly includes machine learning and AI model training in content usage rights.', 'High impact', ['Training use', 'Evaluation use', 'Sensitive uploads'], ['Avoid confidential uploads unless terms allow it'], [
        card('ai-1', 'Is AI training allowed?', 'Yes', 'The user-content clause explicitly includes machine learning and AI model training.', 'Why this matters', 'This can affect creative works, trade secrets, personal data, or proprietary content.', ['2']),
        card('ai-2', 'Is there an opt-out?', 'Unclear', 'The excerpt does not show an opt-out for AI training.', 'Lookout', 'Search for opt-out, settings, enterprise exclusions, or data-control language.', ['2']),
        card('ai-3', 'Should I upload sensitive work?', 'Careful', 'Treat sensitive uploads cautiously when AI-training language is present.', 'User action', 'Confirm policy exceptions before uploading client files, personal data, or proprietary material.', ['2'])
      ], [
        panel('Content enters the system', 'The user uploads text, files, or images.'),
        panel('Model improvement is allowed', 'The policy includes training language.'),
        panel('Sensitive material raises stakes', 'Private or proprietary content needs caution.'),
        panel('Opt-out terms are checked', 'The user looks for data controls or exclusions.')
      ]),
      category('data-retention', 'Data Retention', 'medium', 'Retention terms may describe how long account data, logs, or uploaded content remain after use ends.', 'Medium impact', ['Retention periods', 'Deletion requests', 'Backup copies'], ['Check deletion limits'], [
        card('ret-1', 'Can I delete my data?', 'Maybe', 'The agreement may allow deletion requests, but backups or logs can remain for a while.', 'What to verify', 'Look for exact retention periods, backup exceptions, and account closure language.', ['3']),
        card('ret-2', 'Do backups remain?', 'Possible', 'Many policies preserve backup copies after user-visible deletion.', 'Lookout', 'Backup retention can matter when content is sensitive or regulated.', ['3']),
        card('ret-3', 'What survives closure?', 'Check', 'Some obligations and stored records may survive account termination.', 'Source context', 'Search for survival, retention, deletion, and legal compliance wording.', ['3', '4'])
      ], [
        panel('Data is stored', 'The service keeps account, usage, or uploaded data.'),
        panel('Deletion is requested', 'The user asks to remove it.'),
        panel('Exceptions apply', 'Backups, logs, or legal records may stay.'),
        panel('Timing matters', 'The user checks retention windows.')
      ]),
      category('third-party-sharing', 'Third-Party Sharing', 'medium', 'The service may rely on vendors, processors, analytics tools, or linked services outside the main agreement.', 'Medium impact', ['Vendors', 'Analytics tools', 'Linked services'], ['Inspect processor and sharing terms'], [
        card('share-1', 'Do vendors see data?', 'Likely', 'Services often use processors for hosting, support, payments, or analytics.', 'Why this matters', 'Vendor access can expand who handles personal data or uploaded content.', ['3']),
        card('share-2', 'Is sharing limited?', 'Unclear', 'The excerpt may point to other privacy or processor terms for details.', 'Lookout', 'Check whether vendors can use data for their own purposes.', ['3']),
        card('share-3', 'What should I compare?', 'Policies', 'Compare the EULA with the privacy policy, subprocessors list, and payment terms.', 'Source context', 'Linked documents can materially change the sharing picture.', ['3', '5'])
      ], [
        panel('A vendor is used', 'The service sends data to a processor.'),
        panel('Purpose matters', 'Support, hosting, analytics, or billing may differ.'),
        panel('Limits are checked', 'The user reviews sharing restrictions.'),
        panel('Linked terms complete it', 'Outside policies may hold key details.')
      ]),
      category('account-changes', 'Account Changes', 'medium', 'The provider may update terms, features, pricing, or account rules after acceptance.', 'Medium impact', ['Term updates', 'Feature changes', 'Notice timing'], ['Watch notice and acceptance rules'], [
        card('change-1', 'Can terms change?', 'Likely', 'Most services reserve the right to update terms with notice or continued use.', 'What to verify', 'Check how notice is delivered and when changes become effective.', ['1']),
        card('change-2', 'Do I have to accept?', 'Often', 'Continuing to use the service may count as acceptance of updated terms.', 'Lookout', 'This can make passive acceptance easy to miss.', ['1']),
        card('change-3', 'Can pricing change?', 'Possible', 'Billing changes may appear in subscription or renewal sections.', 'Practical check', 'Look for price-change notice and cancellation timing.', ['5'])
      ], [
        panel('Terms are updated', 'The provider posts or sends changes.'),
        panel('Notice is reviewed', 'The user checks timing and delivery.'),
        panel('Continued use matters', 'Using the service may accept updates.'),
        panel('Cancellation window is checked', 'The user looks for exit rights.')
      ]),
      category('security', 'Security', 'medium', 'Security language may describe safeguards, user responsibilities, and limits after unauthorized access.', 'Medium impact', ['Account security', 'User credentials', 'Breach limits'], ['Check user responsibility language'], [
        card('sec-1', 'Who protects my account?', 'Shared', 'The service may protect systems, while users must keep credentials safe.', 'Why this matters', 'Account misuse can shift responsibility if password or device security is weak.', ['1']),
        card('sec-2', 'Are safeguards promised?', 'Check', 'Security commitments may be general rather than specific guarantees.', 'Lookout', 'Look for encryption, breach notice, and security-standard language.', ['3']),
        card('sec-3', 'What if access is lost?', 'Unclear', 'Recovery and liability terms may live in support or limitation sections.', 'Source context', 'Pair security language with termination and liability clauses.', ['4', '6'])
      ], [
        panel('Account credentials exist', 'The user signs in with protected access.'),
        panel('Security duties split', 'Both service and user may have obligations.'),
        panel('Incident terms matter', 'Breach notice and recovery rules are checked.'),
        panel('Liability limits apply', 'Remedies may be narrowed elsewhere.')
      ]),
      category('governing-law', 'Governing Law', 'low', 'The agreement may choose a governing law, venue, or forum for disputes.', 'Low impact', ['Chosen law', 'Venue', 'Forum rules'], ['Check location and opt-out details'], [
        card('law-1', 'Which law applies?', 'Specified', 'Many EULAs choose one jurisdiction for interpreting the agreement.', 'Why this matters', 'Chosen law can affect rights, deadlines, and dispute procedure.', ['7']),
        card('law-2', 'Where are disputes filed?', 'Check', 'Forum or venue language may restrict where claims can be brought.', 'Lookout', 'Distance and procedure can make small claims harder to pursue.', ['7']),
        card('law-3', 'Does arbitration override it?', 'Maybe', 'Arbitration clauses can interact with governing-law and venue terms.', 'Source context', 'Read governing law together with arbitration and class-action language.', ['7'])
      ], [
        panel('A dispute needs rules', 'The agreement names applicable law.'),
        panel('Forum is chosen', 'Venue or arbitration language sets process.'),
        panel('Practical cost changes', 'Location and procedure can affect effort.'),
        panel('User checks exceptions', 'Consumer-law carveouts may apply.')
      ])
    ]
  };
}

function category(id, title, severity, summary, impact, lookouts, _userActions, cards, comic) {
  return {
    id,
    title,
    severity,
    summary,
    lenses: { impact, lookouts },
    cards: expandMockCards(cards, id, title),
    comic,
    video: {
      prompt: `Summarized video for "${title}".`
    }
  };
}

const mockCardCounts = {
  'data-collection': 6,
  'content-rights': 4,
  payments: 7,
  termination: 8,
  liability: 6,
  disputes: 4,
  'ai-training': 7,
  'data-retention': 8,
  'third-party-sharing': 6,
  'account-changes': 4,
  security: 7,
  'governing-law': 8
};

function expandMockCards(cards = [], categoryId, title) {
  const targetCount = mockCardCounts[categoryId] || 6;
  const output = [...cards];
  const refs = [...new Set(output.flatMap((item) => item.sourceRefs || []))];
  const sourceRefs = refs.length ? refs : [];
  const titleLower = title.toLowerCase();
  const extras = [
    card(`${categoryId}-scope`, 'Where does this apply?', 'Scope', `This frames when the ${titleLower} terms could affect normal product use.`, 'Scope check', 'Confirm whether the clause applies only to the service, connected products, or any related account activity.', sourceRefs),
    card(`${categoryId}-control`, 'Do I have control?', 'Check', `Look for settings, notice rights, cancellation paths, export tools, or opt-out language.`, 'Control points', 'Strong user controls usually appear in nearby account, privacy, billing, or support sections.', sourceRefs),
    card(`${categoryId}-change`, 'Can this change later?', 'Possible', `Policies often reserve room for updates, linked terms, or separate rules that can shift the answer.`, 'Change risk', 'Check update notices, incorporated policies, and whether continued use counts as acceptance.', sourceRefs),
    card(`${categoryId}-evidence`, 'What proves the answer?', 'Source', `Use the source drawer to compare this summary against the original clause.`, 'Source context', 'The card is a visual guide; the original language is the source of truth for close calls.', sourceRefs),
    card(`${categoryId}-sensitive`, 'Does sensitivity matter?', 'Yes', `The risk changes if the EULA touches money, private data, confidential work, or important access.`, 'Risk filter', 'Treat sensitive accounts, client work, personal data, and paid subscriptions with extra caution.', sourceRefs)
  ];

  for (const extra of extras) {
    if (output.length >= targetCount) break;
    output.push(extra);
  }

  return output.slice(0, targetCount);
}

function card(id, question, answer, frontDetail, backTitle, backDetail, sourceRefs) {
  return { id, question, answer, frontDetail, backTitle, backDetail, sourceRefs };
}

function panel(title, body) {
  return { title, body };
}
