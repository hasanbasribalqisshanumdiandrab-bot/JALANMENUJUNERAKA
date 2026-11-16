/* Tambahan: tombol 📷 Foto Soal (kamera). Tidak mengubah kode lama:
   foto dari kamera diteruskan ke input "Soal dari Gambar" bawaan, jadi baca teks & pencarian memakai alur yang sudah ada. */
(function () {
  'use strict';
  var imgBtn = document.getElementById('imgBtn'), imgFile = document.getElementById('imgFile');
  if (!imgBtn || !imgFile || !imgBtn.parentNode) return;

  var cam = document.createElement('input');
  cam.type = 'file'; cam.accept = 'image/*'; cam.setAttribute('capture', 'environment'); cam.hidden = true;

  var btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'btn btn-acc'; btn.id = 'camBtn'; btn.textContent = '📷 Foto Soal';
  btn.onclick = function () { cam.click(); };

  cam.onchange = function () {
    var f = cam.files && cam.files[0]; cam.value = '';
    if (!f) return;
    try {
      var dt = new DataTransfer(); dt.items.add(f);
      imgFile.files = dt.files;
      imgFile.dispatchEvent(new Event('change', { bubbles: true }));   // jalankan alur "Soal dari Gambar" yang lama
    } catch (e) { alert('Browser ini tidak mendukung kamera langsung. Gunakan tombol "Soal dari Gambar".'); }
  };

  imgBtn.parentNode.insertBefore(btn, imgBtn);
  imgBtn.parentNode.insertBefore(cam, imgBtn);
})();
