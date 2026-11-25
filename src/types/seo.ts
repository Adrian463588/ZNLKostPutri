export type VerificationStatus =
	| "verified"
	| "pending-verification"
	| "unknown"
	| "outdated";

export type PublicationStatus = "draft" | "review" | "published" | "archived";

export type ContentType =
	| "location"
	| "campus-guide"
	| "guide"
	| "comparison"
	| "tool"
	| "legal";

export type SearchIntent =
	| "navigational"
	| "informational"
	| "commercial-investigation"
	| "transactional"
	| "local-discovery";

export type ContentSection = {
	heading: string;
	paragraphs: readonly string[];
	bullets?: readonly string[];
};

export type ComparisonRow = {
	label: string;
	description: string;
	strengths: string;
	limitations: string;
	verificationStatus: VerificationStatus;
};

export type CampusFacultyRow = {
	area: string;
	accessNote: string;
	recommendedCheck: string;
};

export type ChecklistGroup = {
	category: string;
	items: readonly string[];
};

export type FaqItem = {
	question: string;
	answer: string;
};

export type SeoContent = {
	id: string;
	slug: string;
	title: string;
	metaTitle: string;
	description: string;
	contentType: ContentType;
	primaryKeyword: string;
	secondaryKeywords: readonly string[];
	searchIntent: SearchIntent;
	topicCluster: string;
	relatedEntityIds: readonly string[];
	relatedSlugs: readonly string[];
	sources: readonly string[];
	status: PublicationStatus;
	reviewedAt: string;
	updatedAt: string;
	indexable: boolean;
	eyebrow: string;
	intro: string;
	disclosure?: string;
	sections: readonly ContentSection[];
	faqs?: readonly FaqItem[];
};

export type LocationGuideContent = SeoContent & {
	contentType: "location";
	neighborhoodHighlights: readonly {
		title: string;
		detail: string;
	}[];
	transportNotes: readonly string[];
};

export type CampusGuideContent = SeoContent & {
	contentType: "campus-guide";
	campusName: string;
	campusShortName: string;
	campusArea: string;
	independentDisclaimer: string;
	corridorSummary: string;
	transportModes: readonly string[];
	facultyRows: readonly CampusFacultyRow[];
};

export type EditorialGuideContent = SeoContent & {
	contentType: "guide" | "comparison";
	readingMinutes: number;
	comparisonRows?: readonly ComparisonRow[];
	checklistGroups?: readonly ChecklistGroup[];
};

export type ValidationSeverity = "error" | "warning";

export type ValidationIssue = {
	severity: ValidationSeverity;
	code: string;
	message: string;
	target?: string;
};

export type ValidationResult = {
	valid: boolean;
	errors: readonly ValidationIssue[];
	warnings: readonly ValidationIssue[];
};
