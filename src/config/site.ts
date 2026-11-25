export const siteConfig = {
	name: "ZNL Kost Putri",
	shortName: "ZNL Kost",
	url: "https://znlkostputri.edgeone.dev",
	area: "Terban, Gondokusuman",
	location: "Yogyakarta",
	city: "Kota Yogyakarta",
	region: "Daerah Istimewa Yogyakarta",
	postalCode: "55223",
	countryCode: "ID",
	description:
		"ZNL Kost Putri adalah hunian nyaman untuk mahasiswi dan pekerja wanita di Terban, Gondokusuman, Yogyakarta. Lingkungan tenang, bersih, dan mudah diakses dari area kampus maupun fasilitas umum.",
	seoTitle: "ZNL Kost Putri Terban, Gondokusuman, Yogyakarta",
	seoDescription:
		"Cari kost putri di Terban, Gondokusuman, Yogyakarta? ZNL Kost Putri menyediakan kamar untuk mahasiswi dan pekerja wanita. Hubungi kami untuk informasi dan survei.",
	whatsappNumber: "6282197809087",
	phoneDisplay: "+62 821-9780-9087",
	phoneSchema: "+62-821-9780-9087",
	googleMapsUrl: "https://maps.app.goo.gl/3JgijFKAbBEWSSF47",
	embedMapsUrl:
		"https://maps.google.com/maps?q=-7.7789672,110.3739009&t=&z=17&ie=UTF8&iwloc=&output=embed",
	geo: {
		latitude: -7.7789672,
		longitude: 110.3739009,
	},
	streetAddress: "Terban GK V No.308, Terban, Gondokusuman",
	address:
		"Terban GK V No.308, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
	instagramUrl: "",
	ogImage: {
		url: "/og-image.jpg",
		width: 1200,
		height: 630,
		alt: "ZNL Kost Putri di Terban, Gondokusuman, Yogyakarta — tampak depan bangunan dan kamar kost",
	},
	googleSiteVerification: "pAuwyhNP3sZjanFzrhWIFw5X8KPB2KupDKbJqS-YFgw",
	author: "Adrian Syah Abidin",
	authorUrl: "https://www.linkedin.com/in/adrian-syah-abidin-0416b81b9/",
} as const;

export const defaultWhatsappMessage =
	"Halo Ibu, saya ingin bertanya ketersediaan kamar di ZNL Kost Putri Terban, Gondokusuman. Apakah masih ada yang kosong?";

export function createWhatsappUrl(phone: string, message: string): string {
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export const whatsappUrl = createWhatsappUrl(
	siteConfig.whatsappNumber,
	defaultWhatsappMessage,
);
