export const siteConfig = {
	name: "ZNL Kost Putri",
	shortName: "ZNL Kost",
	location: "Yogyakarta",
	description:
		"ZNL Kost Putri adalah hunian nyaman untuk mahasiswi dan pekerja wanita di area Yogyakarta. Dengan lingkungan yang tenang, bersih, dan mudah diakses, ZNL Kost Putri menjadi pilihan tepat untuk tinggal, belajar, dan beristirahat.",
	whatsappNumber: "6282197809087",
	googleMapsUrl: "https://maps.app.goo.gl/3JgijFKAbBEWSSF47",
	embedMapsUrl:
		"https://maps.google.com/maps?q=-7.7789672,110.3739009&t=&z=17&ie=UTF8&iwloc=&output=embed",
	instagramUrl: "",
	address:
		"Terban GK V No.308, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
	author: "Adrian Syah Abidin",
	authorUrl: "https://www.linkedin.com/in/adrian-syah-abidin-0416b81b9/",
} as const;

export const defaultWhatsappMessage =
	"Halo Ibu, saya ingin bertanya ketersediaan kamar di ZNL Kost Putri. Apakah masih ada yang kosong?";

export function createWhatsappUrl(phone: string, message: string): string {
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export const whatsappUrl = createWhatsappUrl(
	siteConfig.whatsappNumber,
	defaultWhatsappMessage,
);
