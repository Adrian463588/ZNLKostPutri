# Content Cluster Map & Internal Linking Architecture

## 1. Five Topical Clusters (10 Target Pages)

### Cluster 1 — Kost Putri Yogyakarta & Brand Hub
- **Pillar**: `/` (Homepage ZNL Kost Putri — Brand, Kamar, Fasilitas, Galeri, Video, FAQ, Konversi)
- **Supporting**: `/panduan/mencari-kost-putri-jogja`, `/kebijakan-privasi`

### Cluster 2 — Hyperlocal Living (Terban & Gondokusuman)
- **Pillar**: `/lokasi/terban-gondokusuman`
- **Supporting**: `/`, `/akses-kampus/ugm`, `/akses-kampus/uny`

### Cluster 3 — Campus Proximity (UGM & UNY)
- **Pages**: `/akses-kampus/ugm`, `/akses-kampus/uny`
- **Supporting Links**: `/lokasi/terban-gondokusuman`, `/panduan/checklist-survei-kost`, `/tools/kalkulator-anggaran-kost`

### Cluster 4 — Financial Planning & Student Budget
- **Pillar**: `/panduan/biaya-kost-mahasiswa-jogja`
- **Interactive Tool**: `/tools/kalkulator-anggaran-kost`

### Cluster 5 — Rental Discovery, Alternatives & Safety
- **Hub**: `/panduan`
- **Pages**:
  - `/panduan/alternatif-mencari-kost-selain-mamikos`
  - `/panduan/checklist-survei-kost`
  - `/panduan/menghindari-penipuan-kost`

## 2. Internal Linking Graph (Zero Orphan Pages)

```text
Homepage (/)
 ├──► /lokasi/terban-gondokusuman ◄──► /akses-kampus/ugm & /akses-kampus/uny
 ├──► /panduan (Hub)
 │      ├──► /panduan/mencari-kost-putri-jogja
 │      ├──► /panduan/checklist-survei-kost
 │      ├──► /panduan/biaya-kost-mahasiswa-jogja ──► /tools/kalkulator-anggaran-kost
 │      ├──► /panduan/alternatif-mencari-kost-selain-mamikos
 │      └──► /panduan/menghindari-penipuan-kost
 └──► /kebijakan-privasi
```
