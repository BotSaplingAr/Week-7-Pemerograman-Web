// Menunggu semua elemen HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    
    // Mengambil elemen form
    const form = document.getElementById('form-registrasi');

    // Menambahkan event listener 'submit' pada form
    form.addEventListener('submit', function(event) {
        
        // Mencegah form mengirim data (reload halaman)
        event.preventDefault(); 

        // Mengambil nilai dari input
        const nama = document.getElementById('nama').value;
        const rekamMedis = document.getElementById('rekam-medis').value; 
        const telepon = document.getElementById('telepon').value; // Ambil nilai No Telepon
        const poli = document.getElementById('poli').value;

        // --- Validasi Data ---
        
        let pesanError = '';

        // Validasi: Cek apakah nama dan poli sudah diisi (tidak boleh kosong)
        if (nama.trim() === '' || poli === '') {
            pesanError += 'Harap isi Nama Lengkap dan pilih Poli Tujuan.\n';
        }
        
        // Validasi: Cek No Rekam Medis (tidak boleh kosong dan harus angka)
        if (rekamMedis.trim() === '') {
            pesanError += 'No Rekam Medis tidak boleh kosong.\n';
        } else if (isNaN(rekamMedis) || rekamMedis < 0) {
            pesanError += 'No Rekam Medis harus berupa angka positif.';
        }
        
        // === PERUBAHAN DI SINI: Validasi No. Telepon ===
        if (telepon.trim() === '') {
            pesanError += 'Nomor Telepon wajib diisi untuk validasi SMS.\n';
        } else if (!/^\d{8,15}$/.test(telepon.trim())) {
             // Validasi sederhana: harus terdiri dari 8 hingga 15 digit angka
             pesanError += 'Format Nomor Telepon tidak valid (minimal 8 angka).';
        }
        // ===============================================
        
        // --- Eksekusi Hasil Validasi ---
        if (pesanError !== '') {
            // 1. Muncul pop-up alert jika validasi gagal
            alert('Peringatan Validasi:\n' + pesanError);
        } else {
            // 1. Muncul pop-up alert konfirmasi sebelum dialihkan
            alert('Pendaftaran untuk ' + nama + ' telah berhasil dikirim. Kode validasi akan dikirim ke No. Telepon: ' + telepon + '. Anda akan diarahkan ke halaman konfirmasi.');
            
            // Mengalihkan ke halaman konfirmasi
            window.location.href = 'konfirmasi.html'; 
        }
    });

});