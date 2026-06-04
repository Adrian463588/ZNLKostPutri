export type Facility = {
	title: string;
	description: string;
	iconName: string;
};

export type RoomFeature = string;

export type Room = {
	id: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	features: readonly RoomFeature[];
};

export type GalleryImage = {
	src: string;
	alt: string;
	category: string;
};

export type FAQ = {
	question: string;
	answer: string;
};
