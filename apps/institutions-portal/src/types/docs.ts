export interface InstitutionType {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
  docs: number;
  popular?: boolean;
  category?: 'banking' | 'cooperative' | 'fintech' | 'payment' | 'remittance';
  compliance?: string[];
  integrations?: string[];
  estimatedSetupTime?: string;
}

export interface DocCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  estimatedTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  items: string[];
  badge?: string;
  popular?: boolean;
  mandatory?: boolean;
  prerequisites?: string[];
  outcomes?: string[];
  relatedCategories?: string[];
}

export interface QuickAction {
  title: string;
  description: string;
  href: string;
  color: string;
  time?: string;
  badge?: string;
  category?: string;
  icon?: string;
  popular?: boolean;
}

export interface SearchSuggestion {
  title: string;
  href: string;
  category: string;
  type: 'guide' | 'api' | 'tutorial' | 'reference';
  popularity?: number;
  lastUpdated?: Date;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  type: 'guide' | 'api' | 'tutorial' | 'reference' | 'video';
  content?: string;
  tags?: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime?: string;
  lastUpdated?: Date;
  relevanceScore?: number;
}

export interface FeaturedContent {
  id: string;
  title: string;
  description: string;
  type: 'Guide' | 'Tutorial' | 'Video' | 'Reference' | 'Case Study';
  readTime: string;
  href: string;
  image?: string;
  popular?: boolean;
  new?: boolean;
  trending?: boolean;
  author?: string;
  publishedDate?: Date;
  tags?: string[];
  institutionTypes?: string[];
}

export interface Statistic {
  label: string;
  value: string;
  description?: string;
  trend?: {
    direction: 'up' | 'down' | 'stable';
    percentage: number;
    period: string;
  };
  icon?: string;
}

export interface DemoStep {
  title: string;
  description: string;
  image?: string;
  video?: string;
  duration?: number;
  interactive?: boolean;
}

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon?: string;
  badge?: string;
  children?: NavigationItem[];
  external?: boolean;
  popular?: boolean;
  new?: boolean;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
  current?: boolean;
}

export interface Filter {
  id: string;
  name: string;
  options: FilterOption[];
  type: 'select' | 'multiselect' | 'range' | 'boolean';
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
  description?: string;
}

export interface SearchFilters {
  institutionType?: string[];
  difficulty?: string[];
  contentType?: string[];
  estimatedTime?: string;
  tags?: string[];
  lastUpdated?: string;
  category?: string[];
}

export interface UserPreferences {
  selectedInstitution?: InstitutionType;
  bookmarkedDocs?: string[];
  recentlyViewed?: string[];
  learningPath?: string;
  progressTracking?: Record<string, number>;
  notificationSettings?: {
    newContent: boolean;
    updates: boolean;
    reminders: boolean;
  };
  displaySettings?: {
    theme: 'light' | 'dark' | 'auto';
    compactMode: boolean;
    sidebarCollapsed: boolean;
  };
}

export interface DocMetadata {
  title: string;
  description: string;
  lastUpdated: Date;
  author: string;
  contributors?: string[];
  version: string;
  status: 'published' | 'draft' | 'archived' | 'under_review';
  tags: string[];
  institutionTypes: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  prerequisites?: string[];
  learningObjectives?: string[];
  relatedDocs?: string[];
}

export interface APIEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  summary: string;
  description: string;
  parameters?: APIParameter[];
  requestBody?: APIRequestBody;
  responses: APIResponse[];
  examples?: APIExample[];
  deprecated?: boolean;
  authentication?: string[];
  rateLimit?: {
    requests: number;
    period: string;
  };
}

export interface APIParameter {
  name: string;
  in: 'query' | 'path' | 'header' | 'cookie';
  required: boolean;
  type: string;
  description: string;
  example?: any;
  enum?: string[];
  format?: string;
}

export interface APIRequestBody {
  required: boolean;
  contentType: string;
  schema: any;
  examples?: Record<string, any>;
}

export interface APIResponse {
  statusCode: number;
  description: string;
  schema?: any;
  examples?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface APIExample {
  name: string;
  description: string;
  request: {
    method: string;
    url: string;
    headers?: Record<string, string>;
    body?: any;
  };
  response: {
    statusCode: number;
    headers?: Record<string, string>;
    body: any;
  };
}

export interface Integration {
  id: string;
  name: string;
  provider: string;
  type: 'core_banking' | 'mobile_money' | 'government' | 'third_party';
  status: 'available' | 'beta' | 'coming_soon' | 'deprecated';
  description: string;
  features: string[];
  requirements: string[];
  setup: {
    difficulty: 'Easy' | 'Medium' | 'Hard';
    estimatedTime: string;
    steps: string[];
  };
  documentation: string;
  support: {
    email?: string;
    phone?: string;
    documentation?: string;
    community?: string;
  };
  pricing?: {
    model: 'free' | 'subscription' | 'transaction' | 'custom';
    details?: string;
  };
}

export interface ComplianceRequirement {
  id: string;
  name: string;
  regulator: string;
  description: string;
  applicableTo: string[];
  requirements: string[];
  automationLevel: 'manual' | 'semi_automated' | 'fully_automated';
  reportingFrequency: string;
  documentation: string[];
  penalties?: string;
  lastUpdated: Date;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  target: 'technical' | 'business' | 'compliance' | 'mixed';
  level: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: string;
  modules: LearningModule[];
  prerequisites?: string[];
  outcomes: string[];
  certification?: {
    available: boolean;
    name: string;
    validityPeriod: string;
    renewalRequirements: string[];
  };
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  type: 'reading' | 'video' | 'interactive' | 'quiz' | 'project';
  estimatedTime: string;
  content: string;
  resources?: string[];
  quiz?: {
    questions: number;
    passingScore: number;
  };
  project?: {
    description: string;
    deliverables: string[];
    evaluation: string[];
  };
}

export interface VideoContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  url: string;
  thumbnail: string;
  transcript?: string;
  chapters?: VideoChapter[];
  resources?: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  institutionTypes?: string[];
  tags: string[];
  publishedDate: Date;
  views?: number;
  rating?: number;
}

export interface VideoChapter {
  title: string;
  startTime: number;
  endTime: number;
  description?: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  description: string;
  category: 'technical' | 'billing' | 'compliance' | 'general';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'waiting_response' | 'resolved' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  institution: string;
  user: string;
  attachments?: string[];
  responses?: SupportResponse[];
}

export interface SupportResponse {
  id: string;
  message: string;
  author: string;
  isStaff: boolean;
  createdAt: Date;
  attachments?: string[];
}

export interface SystemStatus {
  overall: 'operational' | 'degraded' | 'partial_outage' | 'major_outage';
  services: ServiceStatus[];
  incidents?: Incident[];
  maintenance?: MaintenanceWindow[];
  lastUpdated: Date;
}

export interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'partial_outage' | 'major_outage';
  description?: string;
  uptime: number;
  responseTime?: number;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  impact: 'minor' | 'major' | 'critical';
  affectedServices: string[];
  startedAt: Date;
  resolvedAt?: Date;
  updates: IncidentUpdate[];
}

export interface IncidentUpdate {
  message: string;
  status: string;
  timestamp: Date;
}

export interface MaintenanceWindow {
  id: string;
  title: string;
  description: string;
  scheduledStart: Date;
  scheduledEnd: Date;
  affectedServices: string[];
  impact: 'none' | 'minor' | 'major';
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}

export interface Changelog {
  version: string;
  releaseDate: Date;
  type: 'major' | 'minor' | 'patch' | 'security';
  changes: ChangelogEntry[];
  migration?: {
    required: boolean;
    guide: string;
    breaking: boolean;
  };
}

export interface ChangelogEntry {
  type: 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security';
  description: string;
  category?: string;
  impact?: 'high' | 'medium' | 'low';
  documentation?: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'planned' | 'in_progress' | 'testing' | 'released' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedRelease?: Date;
  votingEnabled: boolean;
  votes?: number;
  comments?: RoadmapComment[];
  dependencies?: string[];
}

export interface RoadmapComment {
  id: string;
  message: string;
  author: string;
  createdAt: Date;
  votes: number;
}

export interface ErrorCode {
  code: string;
  name: string;
  description: string;
  category: string;
  httpStatus: number;
  causes: string[];
  solutions: string[];
  examples?: string[];
  relatedCodes?: string[];
}

export interface Glossary {
  term: string;
  definition: string;
  category: string;
  aliases?: string[];
  relatedTerms?: string[];
  examples?: string[];
  institutionSpecific?: string[];
}
