import {
  Fingerprint,
  CreditCard,
  ShieldCheck,
  Lock,
  Scan,
  Cpu,
  CheckCircle2,
  Zap,
  Smartphone,
  Building2,
  HeartPulse,
  GraduationCap,
  Plane,
  Store,
  Users,
  Eye,
  Wifi,
  Server,
  Cloud,
  Key,
  type LucideIcon,
} from 'lucide-react';

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  features: { title: string; description: string; icon: LucideIcon }[];
  workflow: { step: number; title: string; description: string }[];
  useCases: { industry: string; description: string; icon: LucideIcon }[];
  faq: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: 'biometric-authentication',
    slug: 'biometric-authentication',
    name: 'Biometric Authentication',
    shortName: 'Biometric Auth',
    tagline: 'Secure identity verification through advanced biometric recognition technology.',
    description:
      'Our biometric authentication solution is designed to provide secure, frictionless identity verification using advanced biometric recognition technologies. By leveraging palm vein, fingerprint, and multi-modal biometric data, we aim to replace traditional authentication methods with faster, more secure alternatives.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=90&auto=format',
    icon: Fingerprint,
    color: '#b8860b',
    features: [
      {
        title: 'Multi-Modal Biometric Capture',
        description:
          'Support for palm vein, fingerprint, and other biometric modalities to ensure flexible and reliable identity verification.',
        icon: Scan,
      },
      {
        title: 'Real-Time Processing',
        description:
          'Designed for rapid biometric matching to support smooth user experiences in high-throughput environments.',
        icon: Zap,
      },
      {
        title: 'Anti-Spoofing Technology',
        description:
          'Built-in liveness detection mechanisms intended to prevent presentation attacks and unauthorized access attempts.',
        icon: ShieldCheck,
      },
      {
        title: 'Scalable Architecture',
        description:
          'Designed to support deployments ranging from single-point installations to enterprise-scale distributed networks.',
        icon: Server,
      },
      {
        title: 'Privacy-First Design',
        description:
          'Biometric data handling designed with privacy considerations at its core. Specific practices subject to company confirmation.',
        icon: Lock,
      },
      {
        title: 'API Integration',
        description:
          'RESTful API architecture designed for integration with existing enterprise identity and access management systems.',
        icon: Cloud,
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Biometric Capture',
        description:
          'The user presents their biometric identifier (palm, fingerprint, or other modality) to the sensor device.',
      },
      {
        step: 2,
        title: 'Feature Extraction',
        description:
          'The system processes the captured biometric data, extracting unique identifying features for comparison.',
      },
      {
        step: 3,
        title: 'Secure Matching',
        description:
          'Extracted features are compared against enrolled templates using secure matching algorithms.',
      },
      {
        step: 4,
        title: 'Authentication Result',
        description:
          'The system returns an authentication decision, granting or denying access based on the match result.',
      },
    ],
    useCases: [
      {
        industry: 'Financial Services',
        description:
          'Potential application in banking and financial institutions for customer identity verification and transaction authorization.',
        icon: Building2,
      },
      {
        industry: 'Healthcare',
        description:
          'Possible use in healthcare settings for patient identification, medical record access, and facility security.',
        icon: HeartPulse,
      },
      {
        industry: 'Education',
        description:
          'Potential deployment in educational institutions for attendance tracking, exam verification, and campus access.',
        icon: GraduationCap,
      },
      {
        industry: 'Corporate Enterprise',
        description:
          'Possible use for employee authentication, secure area access, and digital system login in corporate environments.',
        icon: Building2,
      },
    ],
    faq: [
      {
        question: 'What biometric modalities does the solution support?',
        answer:
          'The solution is designed to support palm vein recognition, fingerprint scanning, and potentially additional modalities. The exact capabilities available depend on the deployment configuration and hardware. Please contact our team for specific details.',
      },
      {
        question: 'How is biometric data stored and protected?',
        answer:
          'Duchas Technologies is committed to responsible biometric data handling. Specific data storage, encryption, and privacy practices will be detailed upon consultation. We design our systems with privacy considerations as a core principle.',
      },
      {
        question: 'Can this integrate with existing identity systems?',
        answer:
          'The solution is designed with integration capabilities in mind, including RESTful APIs. Specific integration compatibility should be discussed with our technical team to assess your environment.',
      },
      {
        question: 'What hardware is required for deployment?',
        answer:
          'Hardware requirements vary based on the chosen biometric modality and deployment scale. Our team can recommend appropriate sensor devices and infrastructure based on your specific requirements.',
      },
      {
        question: 'Is the system suitable for high-traffic environments?',
        answer:
          'The architecture is designed with scalability in mind to support various throughput requirements. Performance specifications for your specific use case can be discussed during consultation.',
      },
    ],
  },
  {
    id: 'contactless-payments',
    slug: 'contactless-payments',
    name: 'Contactless Payment Experiences',
    shortName: 'Contactless Pay',
    tagline: 'Reimagining payment interactions through biometric-enabled contactless technology.',
    description:
      'Our contactless payment solution explores how biometric authentication can transform the payment experience. By linking identity verification directly to transaction authorization, we aim to create payment interactions that are faster, more secure, and more intuitive than traditional methods.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=90&auto=format',
    icon: CreditCard,
    color: '#6b4c8a',
    features: [
      {
        title: 'Biometric Payment Authorization',
        description:
          'Explore payment transactions authorized through biometric verification, potentially eliminating the need for cards or devices.',
        icon: Fingerprint,
      },
      {
        title: 'Contactless Interaction',
        description:
          'Designed for touch-free or minimal-contact payment experiences, supporting hygiene and convenience.',
        icon: Wifi,
      },
      {
        title: 'Transaction Security',
        description:
          'Each transaction is designed to be linked to a verified biometric identity, adding a layer of security to every payment.',
        icon: ShieldCheck,
      },
      {
        title: 'Point-of-Sale Integration',
        description:
          'Designed for integration with existing point-of-sale systems and payment infrastructure. Specific compatibility subject to assessment.',
        icon: Store,
      },
      {
        title: 'User Enrollment',
        description:
          'Streamlined enrollment process designed to link biometric identity with payment credentials securely.',
        icon: Users,
      },
      {
        title: 'Real-Time Processing',
        description:
          'Payment processing architecture designed for minimal latency to maintain smooth checkout experiences.',
        icon: Zap,
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Present Identity',
        description:
          'The user presents their biometric identifier at the payment terminal or device.',
      },
      {
        step: 2,
        title: 'Verify Identity',
        description:
          'The system verifies the user\'s identity through biometric matching against enrolled records.',
      },
      {
        step: 3,
        title: 'Authorize Payment',
        description:
          'Upon successful verification, the payment transaction is authorized and processed.',
      },
      {
        step: 4,
        title: 'Confirm Transaction',
        description:
          'The user receives confirmation of the completed transaction, and the merchant receives payment notification.',
      },
    ],
    useCases: [
      {
        industry: 'Retail',
        description:
          'Potential deployment in retail environments for faster, card-free checkout experiences.',
        icon: Store,
      },
      {
        industry: 'Transportation',
        description:
          'Possible application in transit systems for contactless fare payment and access.',
        icon: Plane,
      },
      {
        industry: 'Hospitality',
        description:
          'Potential use in hotels, restaurants, and entertainment venues for seamless payment experiences.',
        icon: Building2,
      },
      {
        industry: 'Corporate Cafeterias',
        description:
          'Possible deployment in corporate dining facilities for cashless, cardless meal payments.',
        icon: Users,
      },
    ],
    faq: [
      {
        question: 'How does biometric payment differ from tap-to-pay?',
        answer:
          'Biometric payment links the transaction directly to a verified identity rather than a physical card or device. This approach aims to provide an additional layer of security while potentially simplifying the payment process.',
      },
      {
        question: 'What payment networks are supported?',
        answer:
          'Specific payment network compatibility and integration details should be discussed with our team, as they depend on the deployment configuration and regional requirements.',
      },
      {
        question: 'Is user enrollment required?',
        answer:
          'Yes, users would need to enroll their biometric data and link it to their payment credentials. The enrollment process is designed to be straightforward and secure.',
      },
      {
        question: 'What happens if biometric verification fails?',
        answer:
          'The system is designed with fallback mechanisms for situations where biometric verification may not succeed. Specific fallback options can be configured based on deployment requirements.',
      },
      {
        question: 'Can this work with existing POS hardware?',
        answer:
          'Integration with existing point-of-sale systems is a design consideration. Specific hardware compatibility should be assessed by our technical team for your environment.',
      },
    ],
  },
  {
    id: 'identity-verification',
    slug: 'identity-verification',
    name: 'Identity Verification',
    shortName: 'ID Verify',
    tagline: 'Comprehensive identity verification solutions for secure digital interactions.',
    description:
      'Our identity verification solution provides a comprehensive approach to confirming user identity across digital and physical touchpoints. Designed for scenarios where reliable identity confirmation is critical, the solution combines biometric verification with document analysis and risk assessment.',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200&q=90&auto=format',
    icon: ShieldCheck,
    color: '#b8860b',
    features: [
      {
        title: 'Multi-Factor Verification',
        description:
          'Combine biometric, document, and knowledge-based verification methods for comprehensive identity confirmation.',
        icon: CheckCircle2,
      },
      {
        title: 'Document Analysis',
        description:
          'Designed to analyze and validate identity documents with authenticity checks. Specific capabilities subject to configuration.',
        icon: Eye,
      },
      {
        title: 'Biometric Matching',
        description:
          'Compare live biometric data against enrolled records or document photographs for identity confirmation.',
        icon: Fingerprint,
      },
      {
        title: 'Risk Assessment',
        description:
          'Evaluate verification requests with configurable risk scoring to support informed access decisions.',
        icon: ShieldCheck,
      },
      {
        title: 'Audit Trail',
        description:
          'Maintain comprehensive verification records for compliance, dispute resolution, and system monitoring.',
        icon: Server,
      },
      {
        title: 'Cross-Platform Support',
        description:
          'Designed for deployment across web, mobile, and physical kiosk environments. Platform-specific details available upon request.',
        icon: Smartphone,
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Identity Submission',
        description:
          'The user submits identity information, which may include documents, biometric data, or other credentials.',
      },
      {
        step: 2,
        title: 'Data Validation',
        description:
          'Submitted information is validated for authenticity, consistency, and completeness.',
      },
      {
        step: 3,
        title: 'Biometric Comparison',
        description:
          'Live biometric data is compared against submitted documents or enrolled records.',
      },
      {
        step: 4,
        title: 'Verification Decision',
        description:
          'The system returns a verification decision with confidence scoring and any relevant risk indicators.',
      },
    ],
    useCases: [
      {
        industry: 'Financial Services (KYC)',
        description:
          'Potential application for Know Your Customer processes in banking, lending, and financial services.',
        icon: Building2,
      },
      {
        industry: 'Government Services',
        description:
          'Possible use in government identity programs, e-governance, and public service access.',
        icon: Building2,
      },
      {
        industry: 'Telecommunications',
        description:
          'Potential deployment for SIM registration, account verification, and service activation processes.',
        icon: Smartphone,
      },
      {
        industry: 'Digital Onboarding',
        description:
          'Possible use for remote customer onboarding, reducing the need for in-person identity verification.',
        icon: Users,
      },
    ],
    faq: [
      {
        question: 'What types of identity documents can be verified?',
        answer:
          'The system is designed to support various identity document types. Specific document support depends on configuration and regional requirements. Contact our team for details relevant to your geography.',
      },
      {
        question: 'Can verification be performed remotely?',
        answer:
          'The solution is designed with remote verification capabilities in mind, supporting digital onboarding scenarios. Specific remote verification features can be discussed during consultation.',
      },
      {
        question: 'How accurate is the verification process?',
        answer:
          'Verification accuracy depends on multiple factors including the modalities used, data quality, and configuration. Performance metrics specific to your use case can be discussed with our technical team.',
      },
      {
        question: 'What regulatory standards does this support?',
        answer:
          'The solution is designed with regulatory awareness in mind. Specific compliance capabilities and certifications should be verified with our team, as they may vary by region and deployment.',
      },
      {
        question: 'How long does the verification process take?',
        answer:
          'Processing time is designed to be minimal for a smooth user experience. Actual timing depends on the verification methods used and system configuration.',
      },
    ],
  },
  {
    id: 'access-control',
    slug: 'access-control',
    name: 'Access Control Solutions',
    shortName: 'Access Control',
    tagline: 'Intelligent biometric access management for secure physical and digital environments.',
    description:
      'Our access control solution combines biometric authentication with intelligent access management to secure physical spaces and digital resources. Designed for environments where security and convenience must coexist, the solution provides configurable access policies backed by reliable identity verification.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=90&auto=format',
    icon: Lock,
    color: '#6b4c8a',
    features: [
      {
        title: 'Biometric Access Points',
        description:
          'Deploy biometric-enabled access points for secure entry to physical spaces without keys, cards, or PINs.',
        icon: Key,
      },
      {
        title: 'Centralized Management',
        description:
          'Manage access policies, user permissions, and device configurations from a centralized administration platform.',
        icon: Cpu,
      },
      {
        title: 'Real-Time Monitoring',
        description:
          'Monitor access events in real time with configurable alerts and reporting capabilities.',
        icon: Eye,
      },
      {
        title: 'Multi-Zone Security',
        description:
          'Define and enforce distinct security zones with varying access requirements and authentication levels.',
        icon: ShieldCheck,
      },
      {
        title: 'Visitor Management',
        description:
          'Integrated visitor management capabilities for temporary access provisioning and tracking.',
        icon: Users,
      },
      {
        title: 'Integration Ready',
        description:
          'Designed for integration with existing building management, HR, and security systems. Compatibility subject to assessment.',
        icon: Cloud,
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Approach Access Point',
        description:
          'The user approaches a biometric-enabled access point at a secured entry.',
      },
      {
        step: 2,
        title: 'Identity Verification',
        description:
          'The system captures and verifies the user\'s biometric identity against enrolled records.',
      },
      {
        step: 3,
        title: 'Policy Evaluation',
        description:
          'Access policies are evaluated based on the verified identity, time, location, and security zone.',
      },
      {
        step: 4,
        title: 'Access Decision',
        description:
          'Access is granted or denied based on policy evaluation, with the event logged for audit purposes.',
      },
    ],
    useCases: [
      {
        industry: 'Corporate Offices',
        description:
          'Potential deployment for securing office buildings, restricted areas, and server rooms with biometric access.',
        icon: Building2,
      },
      {
        industry: 'Healthcare Facilities',
        description:
          'Possible use in hospitals and clinics for securing medication storage, patient areas, and sensitive zones.',
        icon: HeartPulse,
      },
      {
        industry: 'Educational Campuses',
        description:
          'Potential application for campus security, dormitory access, and laboratory entry management.',
        icon: GraduationCap,
      },
      {
        industry: 'Data Centers',
        description:
          'Possible deployment for high-security environments requiring multi-factor biometric authentication.',
        icon: Server,
      },
    ],
    faq: [
      {
        question: 'What types of access points are supported?',
        answer:
          'The solution is designed to support various access point types including doors, turnstiles, and gates. Specific hardware compatibility should be discussed with our team based on your facility requirements.',
      },
      {
        question: 'Can access policies be customized per zone?',
        answer:
          'Yes, the system is designed to support granular access policies that can be configured per security zone, time period, and user group.',
      },
      {
        question: 'How does the system handle power or network failures?',
        answer:
          'The system is designed with fail-safe considerations. Specific behavior during outages depends on configuration and should be discussed during deployment planning.',
      },
      {
        question: 'Can temporary access be granted to visitors?',
        answer:
          'The solution includes visitor management capabilities designed for temporary access provisioning. Specific features and workflows can be configured for your requirements.',
      },
      {
        question: 'What reporting and analytics are available?',
        answer:
          'The system is designed to provide access event reporting and analytics. Specific reporting capabilities can be discussed during consultation to align with your monitoring needs.',
      },
    ],
  },
];

export const capabilities = [
  {
    title: 'Biometric Innovation',
    description: 'Exploring advanced biometric technologies for reliable identity recognition.',
    icon: Fingerprint,
  },
  {
    title: 'Contactless Experiences',
    description: 'Creating seamless interactions that minimize physical contact.',
    icon: Wifi,
  },
  {
    title: 'Security-Focused Design',
    description: 'Building solutions where security is a foundational design principle.',
    icon: ShieldCheck,
  },
  {
    title: 'Technology for Real-World Applications',
    description: 'Developing practical solutions that address genuine business challenges.',
    icon: Cpu,
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Identity Capture',
    description:
      'A biometric sensor captures the user\'s unique identifier — such as palm vein patterns, fingerprints, or other biometric data — in a quick, non-intrusive interaction.',
  },
  {
    step: 2,
    title: 'Secure Processing',
    description:
      'The captured biometric data is processed through secure algorithms that extract and encode unique identifying features while maintaining data privacy.',
  },
  {
    step: 3,
    title: 'Verification',
    description:
      'The processed biometric template is compared against enrolled records using advanced matching algorithms to confirm the user\'s identity.',
  },
  {
    step: 4,
    title: 'Authorized Interaction',
    description:
      'Upon successful verification, the authorized action is completed — whether it\'s a payment, access grant, identity confirmation, or other secured interaction.',
  },
];

export const companyPrinciples = [
  {
    title: 'Innovation with Purpose',
    description:
      'We pursue technological innovation that serves genuine needs, not innovation for its own sake. Every solution we develop is guided by real-world problems and practical applications.',
  },
  {
    title: 'User-Centric Thinking',
    description:
      'We design from the user\'s perspective, creating experiences that are intuitive and accessible. Technology should simplify interactions, not complicate them.',
  },
  {
    title: 'Responsible Technology',
    description:
      'We approach biometric and identity technology with a deep sense of responsibility, considering privacy implications, ethical use, and data protection at every stage.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'We are committed to learning, iterating, and improving our solutions continuously based on feedback, research, and evolving technology landscapes.',
  },
];
