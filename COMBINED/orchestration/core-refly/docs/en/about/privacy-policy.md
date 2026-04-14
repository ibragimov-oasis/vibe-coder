---
title: Privacy Policy
description: Refly AI Workflow Engine Privacy Policy (Restricted Scopes & Limited Use Compliant)
---

# Refly AI Privacy Policy 

> Effective Date: September 26, 2025  
> Last Updated: October 16, 2025 (Updated for Google Workspace Restricted Scopes Review)

Refly.AI (“we”, “our”, “us”) is committed to protecting your privacy and security.  
This Privacy Policy explains how we collect, use, store, share, and protect your information when you use our AI workflow and content creation engine (“Service”).  
This policy complies with **GDPR**, **CCPA/CPRA**, and the **Google API Services User Data Policy** (including Limited Use requirements).

---

## 1. Legal Basis (For EU/UK Users)  

We process personal data based on:  
- Performance of a contract  
- Compliance with legal obligations  
- Legitimate interests (e.g., service security and abuse prevention)  
- Your consent (for optional integrations)

---

## 2. Information We Collect (Data Accessed)  

### (1) Google User Data (Accessed only with explicit authorization)  

We only access data within the scopes you explicitly grant through OAuth.  
We use these data strictly for user-visible, intended functions.  

| Scope Example | Purpose | Persistently Stored | Retention Limit |
|---|---|---|---|
| `https://www.googleapis.com/auth/drive.file` | Read/write user-selected Drive files | No (temporary cache only) | Cleared when task ends (≤24h) |
| `https://www.googleapis.com/auth/documents.readonly` | Read Docs for summarization or formatting | No | ≤24h |
| `https://www.googleapis.com/auth/spreadsheets.readonly` | Read Sheets for structured data parsing | No | ≤24h |
| `https://www.googleapis.com/auth/gmail.readonly` | Read user-selected Gmail messages for summarization | No (no message bodies stored) | ≤24h |
| `https://www.googleapis.com/auth/calendar.readonly` | Read Calendar events for scheduling tasks | No | ≤24h |

> We **do not** access your entire Drive or Gmail.  
> We **do not** store or index Google user data in databases, logs, or embeddings.  
> Only minimal **technical metadata** (e.g., success/failure flags, error codes) may be logged.

---

### (2) Information You Provide  

- **Account Info**: Name, email (passwords encrypted)  
- **Workflow Data**: Prompts, templates, variables, execution records  
- **User-Generated Content**: Text, images, documents, code, or web pages you create  
- **Feedback & Interaction**: Ratings, edits, preferences  

---

### (3) Automatically Collected Information  

- Usage data: timestamps, feature usage frequency  
- Technical data: device type, OS, browser, IP, performance logs  
- Error & diagnostic data (for reliability, not content inspection)

---

### (4) Cookies & Local Storage  

Used to maintain login, remember preferences, and analyze usage.  
You may disable cookies via your browser, but some features may be affected.

---

### (5) Payment Information  

Payments are processed by secure third-party processors (e.g., Stripe).  
We do not store complete credit card details.

---

## 3. Google User Data Usage (Restricted Scopes & Limited Use)  

To comply with Google’s **Limited Use** policy, we affirm:

- **No Training / Fine-tuning / Improvement**  
  Google user data (including derived data or embeddings) is **never** used to train, fine-tune, or improve:  
  - Refly’s own AI/ML models, or  
  - Any third-party general-purpose models (e.g., Jina, Perplexity, OpenAI, Anthropic).

- **Task Execution Only**  
  Data is processed only to fulfill user-initiated tasks (e.g., summarize a selected doc).  
  Temporary caches are deleted immediately after task completion (≤24h).

- **No Improper Transfer or Sharing**  
  Google user data is never shared with third parties except as required by law or explicit consent.

- **Human Access Restriction**  
  Data is processed automatically; limited human access occurs only for security, compliance, or debugging, under strict audit.

- **No Ads or Profiling**  
  Google user data is not used for ads, remarketing, or profiling; we do not sell or rent it.

---

## 4. AI Models & Third-Party Services Compliance  

- Refly’s AI features operate on non-Google data (user input or public data).  
- Google user data is **never** used for model training or improvement.


### Third-Party AI Integrations

- Only non-Google data required for task completion may be sent.  
- **No Google Workspace data** (Docs, Drive, Gmail, etc.) is ever transmitted.  
- Governed by their respective privacy policies:  
  - [Jina Privacy Policy](https://jina.ai/privacy)  
  - [Perplexity Privacy Policy](https://www.perplexity.ai/privacy)

---

## 5. Data Usage  

We use collected data to:  
- Operate and maintain the Service  
- Authenticate accounts and secure access  
- Provide personalized workflows (based on aggregated, anonymized data)  
- Handle billing and payments  
- Debug performance (not inspecting Google data content)  
- Comply with laws and regulations  

> **Google user data is never used for ads or AI/ML training.**

---

## 6. Data Sharing  

- **Service Providers / Subprocessors**: for hosting, CDN, analytics, notifications, or billing (no Google data content access).  
- **Third-Party AI Tools**: only when user-initiated and containing no Google data.  
- **Legal Compliance**: to meet lawful government or regulatory requests.  
- **User Consent**: when explicitly authorized.

> We do **not** sell or share Google user data for AI/ML training or marketing.  

---

## 7. Data Storage & Protection  

- Stored securely in the US, EU, or other compliant regions.  
- Encryption: TLS/HTTPS for transit, AES-256 for rest.  
- Access control: least privilege, MFA, audit logging.  
- Incident Response: security incidents are reported within legal timelines.

---

## 8. Data Retention & Deletion  

| Data Type | Retention | Deletion |
|---|---|---|
| Account Data | While account active | Deleted within 30 days of closure |
| Generated Content | User-managed | Deleted within 30 days post-deletion |
| Billing Records | 7 years (legal requirement) | Automatic expiry |
| Google User Data | Temporary cache only | Deleted immediately (≤24h) |

Users can delete data in-product or request via **[privacy@refly.ai](mailto:privacy@refly.ai)**.  

---

## 9. Your Rights  

You may:  
- Access, correct, or delete your data  
- Restrict or object to processing  
- Withdraw consent anytime  
- File a complaint with your local authority  


---

## 10. International Data Transfers  

We use Standard Contractual Clauses (SCCs) and encryption to protect data during international transfers.  

---

## 11. AI Transparency  

AI-generated content is clearly labeled.  
We disclose important influencing factors and continuously monitor bias.  

---

## 12. Children’s Privacy  

The Service is not directed to children under 13.  
If collected unintentionally, such data will be deleted promptly.  

---

## 13. Limited Use Compliance (Google Policy Alignment)  

Refly complies with the **Google API Services User Data Policy (Limited Use)**:

1. No ads, remarketing, or profiling using Google data  
2. No sale, rental, or transfer of Google data for unrelated purposes  
3. No training, fine-tuning, or improving any (including third-party) AI/ML models using Google data  
4. No human access unless with explicit consent or for security/compliance  
5. Cached Google data deleted immediately after task completion (≤24h)

> Policy Reference: [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)

---

## 14. Policy Updates  

We may update this Policy for legal, product, or operational reasons.  

---

## 15. Contact  

- Privacy Inquiries: [privacy@refly.ai](mailto:privacy@refly.ai)  
- Data Protection Officer: [dpo@refly.ai](mailto:dpo@refly.ai)  
- EU Representative: [eu-rep@refly.ai](mailto:eu-rep@refly.ai)

We respond to urgent privacy requests within **72 hours**.  

---

