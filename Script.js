function tambah(nilai) {
  document.getElementById("layar").value += nilai;
}

function hapus() {
  document.getElementById("layar").value = "";
}

function hapusSatu() {
  let layar = document.getElementById("layar");
  layar.value = layar.value.slice(0, -1);
}

function hitung() {
  let layar = document.getElementById("layar");

  try {
    if (!/^[0-9+\-*/.() ]+$/.test(layar.value)) {
      throw new Error();
    }
    layar.value = Function(
      '"use strict"; return (' + layar.value + ')'
    )();
  } catch {
    layar.value = "Error";
  }
      }
