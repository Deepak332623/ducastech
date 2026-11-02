// Disposable/temporary email domains list
const disposableDomains = new Set([
  'mailinator.com','guerrillamail.com','tempmail.com','throwaway.email','yopmail.com',
  'sharklasers.com','guerrillamailblock.com','grr.la','dispostable.com','mailnesia.com',
  'trashmail.com','10minutemail.com','tempail.com','fakeinbox.com','mailcatch.com',
  'temp-mail.org','maildrop.cc','discard.email','getnada.com','mohmal.com',
  'tempinbox.com','mintemail.com','tempr.email','burnermail.io','mailsac.com',
  'harakirimail.com','crazymailing.com','tmail.ws','mailtemp.net','emailondeck.com',
]);

// Common valid email providers
const validProviders = new Set([
  'gmail.com','yahoo.com','outlook.com','hotmail.com','live.com','icloud.com',
  'protonmail.com','aol.com','zoho.com','mail.com','gmx.com','yandex.com',
  'fastmail.com','tutanota.com','pm.me','hey.com','msn.com','comcast.net',
  'verizon.net','att.net','me.com','mac.com','duck.com',
]);

export interface EmailCheckResult {
  valid: boolean;
  reason?: string;
  quality: 'good' | 'suspicious' | 'bad';
}

export function validateEmail(email: string): EmailCheckResult {
  const trimmed = email.trim().toLowerCase();

  // Basic format
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(trimmed)) {
    return { valid: false, reason: 'Invalid email format.', quality: 'bad' };
  }

  const [localPart, domain] = trimmed.split('@');

  // Check empty parts
  if (!localPart || !domain) {
    return { valid: false, reason: 'Invalid email format.', quality: 'bad' };
  }

  // Must have a TLD
  if (!domain.includes('.') || domain.endsWith('.') || domain.startsWith('.')) {
    return { valid: false, reason: 'Email domain is invalid.', quality: 'bad' };
  }

  const tld = domain.split('.').pop() || '';
  if (tld.length < 2) {
    return { valid: false, reason: 'Email domain TLD is invalid.', quality: 'bad' };
  }

  // Disposable check
  if (disposableDomains.has(domain)) {
    return { valid: false, reason: 'Disposable/temporary emails are not allowed.', quality: 'bad' };
  }

  // Suspicious patterns
  const suspiciousPatterns = [
    /^test/i, /^fake/i, /^spam/i, /^noreply/i, /^no-reply/i,
    /^asdf/i, /^qwerty/i, /^abc123/i, /^temp/i, /^trash/i,
  ];
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(localPart)) {
      return { valid: true, reason: 'This email looks suspicious. Please use your real email.', quality: 'suspicious' };
    }
  }

  // Too many numbers in local part
  const numberRatio = (localPart.match(/\d/g) || []).length / localPart.length;
  if (numberRatio > 0.7 && localPart.length > 4) {
    return { valid: true, reason: 'This email looks auto-generated. Use your real email for best experience.', quality: 'suspicious' };
  }

  // Known good provider
  if (validProviders.has(domain)) {
    return { valid: true, quality: 'good' };
  }

  // Business email (custom domain) - generally good
  return { valid: true, quality: 'good' };
}
