# Email Validator CLI Tool

A simple Node.js command-line tool to verify email addresses by checking DNS records (MX, SPF, and DMARC). This project leverages the `dns` module's promise-based API to validate email domains for authenticity.

## Features

- Verifies the presence of:
  - MX (Mail Exchange) records
  - SPF (Sender Policy Framework) records
  - DMARC (Domain-based Message Authentication, Reporting, and Conformance) records
- Handles errors gracefully with fallback mechanisms.
- Provides a CLI interface to input an email address for validation.
- Outputs whether the email address's domain is valid or not.

---

## How It Works

The tool extracts the domain from the provided email address and checks the following DNS records:

1. **MX Records**: Ensures the domain can receive emails.
2. **SPF Records**: Verifies that the domain specifies valid email-sending servers.
3. **DMARC Records**: Confirms that the domain has additional authentication policies.

If all three checks are valid, the email is deemed valid; otherwise, it is invalid.

---

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:your-username/email-validator.git
   cd email-validator
   ```
