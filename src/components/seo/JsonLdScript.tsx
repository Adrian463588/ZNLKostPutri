import { serializeJsonLd } from "@/lib/seo/structured-data";

type JsonLdScriptProps = {
	data: unknown;
};

export function JsonLdScript({ data }: JsonLdScriptProps) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD escaped via serializeJsonLd per Next.js docs
			dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
		/>
	);
}
