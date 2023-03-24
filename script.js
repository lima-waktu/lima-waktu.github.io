
function loading() {
    setTimeout(function() {
        $("#load").hide(), body.style.overflow = "auto"
    }, 3e3)
}

function run(t, a) {
    filter(search.value, a)
}
loading(), setTimeout(function() {
    
}, 6e3), $(document).ready(() => {
    clock(), opt(), run(search.value, jam()), maniik(), $("#mdr").toggle(), $("#Fhtngmdr")
}), $("#hitungMdr").on("click", t => {
    t.preventDefault(), $("#mdr").toggle(), $("#Fhtngmdr").toggle()
}), $("#btnC").on("click", () => {
    $("#cari").toggle()
}), $("#cari").hide
let mulai = null;

function filter(t, a) {
    let e = a[3].split("-"),
        n = e[0],
        i;
    e = [n, e[1] < 10 ? "0" + e[1] : e[1], e[2] < 10 ? "0" + e[2] : e[2]], console.log(e), kota.textContent = t.split("-")[1], $("#cari").hide(), $.ajax({
        url: "https://api.banghasan.com/sholat/format/json/jadwal/kota/" + t.split("-")[0] + "/tanggal/" + e.join("-"),
        success: function(t) {
            let e = t.jadwal.data;
            console.log(t), imsak.textContent = e.imsak, duha.textContent = e.dhuha, terbit.textContent = e.terbit, subuh.textContent = e.subuh, duhur.textContent = e.dzuhur, ashar.textContent = e.ashar, magrib.textContent = e.maghrib, isya.textContent = e.isya, tanggal.textContent = e.tanggal, null != mulai && clearInterval(mulai), after(e, a), randomTxt(jam(), e)
        }
    })
}

function after(t, a) {
    let e = t.imsak,
        n = t.subuh,
        i = t.dzuhur,
        l = t.ashar,
        o = t.maghrib,
        s = t.isya,
        r = a[0],
        g = a[1],
        u = null;
    if (r <= e.split(":")[0] && g <= e.split(":")[1] || r < e.split(":")[0] && g >= e.split(":")[1]) u = ["Imsak", new Date(t.tanggal.split(" ")[2] + " " + t.tanggal.split(" ")[1] + ", " + t.tanggal.split(" ")[3] + " " + e + ":00").getTime()], alarm.textContent = e;
    else if (r >= e.split(":")[0] && r <= n.split(":")[0] && g <= n.split(":")[1] || r < n.split(":")[0] && g >= n.split(":")[1]) u = ["Shubuh", new Date(t.tanggal.split(" ")[2] + " " + t.tanggal.split(" ")[1] + ", " + t.tanggal.split(" ")[3] + " " + n + ":00").getTime()], alarm.textContent = n;
    else if (r <= i.split(":")[0] && g <= i.split(":")[1] || r < i.split(":")[0] && g >= i.split(":")[1]) u = ["Dzuhur", new Date(t.tanggal.split(" ")[2] + " " + t.tanggal.split(" ")[1] + ", " + t.tanggal.split(" ")[3] + " " + i + ":00").getTime()], alarm.textContent = i, console.log(t.tanggal.split(" ")[2] + " " + t.tanggal.split(" ")[1] + ", " + t.tanggal.split(" ")[3] + " " + s + ":00");
    else if (r <= l.split(":")[0] && g <= l.split(":")[1] || r < l.split(":")[0] && g >= l.split(":")[1]) u = ["Ashar", new Date(t.tanggal.split(" ")[2] + " " + t.tanggal.split(" ")[1] + ", " + t.tanggal.split(" ")[3] + " " + l + ":00").getTime()], alarm.textContent = l;
    else if (r <= o.split(":")[0] && g <= o.split(":")[1] || r < o.split(":")[0] && g >= o.split(":")[1]) u = ["Maghrib", new Date(t.tanggal.split(" ")[2] + " " + t.tanggal.split(" ")[1] + ", " + t.tanggal.split(" ")[3] + " " + o + ":00").getTime()], alarm.textContent = o;
    else if (r <= s.split(":")[0] && g <= s.split(":")[1] || r < s.split(":")[0] && g >= s.split(":")[1]) alarm.textContent = s, u = ["Isya", new Date(t.tanggal.split(" ")[2] + " " + t.tanggal.split(" ")[1] + ", " + t.tanggal.split(" ")[3] + " " + s + ":00").getTime()];
    else {
        alarm.textContent = e;
        let m = t.tanggal.split(" ")[1]++;
        m += 1, u = ["Imsak", new Date(t.tanggal.split(" ")[2] + " " + m + ", " + t.tanggal.split(" ")[3] + " " + e + ":00").getTime()], console.log("masuk")
    }
    hitung(u)
}

function hitung(t) {
    let a = t[0],
        e = t[1];
    wait.textContent = a, mulai = setInterval(function() {
        let t = e - new Date().getTime(),
            n = Math.floor(t % 864e5 / 36e5),
            i = Math.floor(t % 36e5 / 6e4),
            l = Math.floor(t % 6e4 / 1e3);
        n = n < 10 ? "0" + n : n, i = i < 10 ? "0" + i : i, l = l < 10 ? "0" + l : l, countdown.textContent = [n, i, l].join(" : "), t <= 0 && (clearInterval(mulai), countdown.textContent = "waktu " + a, setTimeout(("sound") => {
            filter(search.value, jam())
        }, 1e5))
    }, 1e3)
}

function sound() {
   document.getElementById("mySound").play();
}

function jam() {
    let t = new Date,
        a = t.getHours(),
        e = t.getMinutes(),
        n = t.getSeconds(),
        i;
    return a >= 4 && a <= 9 || a > 9 && a <= 18, [a, e, n, `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`]
}

function clock() {
    setInterval(() => {
        let t = jam(),
            a = t[0] < 10 ? "0" + t[0] : t[0],
            e = t[1] < 10 ? "0" + t[1] : t[1],
            n = t[2] < 10 ? "0" + t[2] : t[2];
        t[2], t[0], t[1], now.textContent = jam()[0] + ":" + jam()[1], $("#jm").text(a), $("#mn").text(e), $("#dt").text(n)
    }, 1e3)
}

function opt() {
    $.ajax({
        url: "https://api.banghasan.com/sholat/format/json/kota",
        success: function(t) {
            for (let a = 0; a < t.kota.length; a++) {
                let e = document.createElement("option"),
                    n = document.createTextNode(t.kota[a].nama);
                e.appendChild(n), e.setAttribute("name", n), e.value = t.kota[a].id + "-" + t.kota[a].nama, search.appendChild(e)
            }
        }
    })
}

function maniik() {
    let t = ["#0092ffb1", "#ff0070b3", "#15c700b2", "#ffc500b2"];
    setInterval(() => {
        let a = document.createElement("div"),
            e = Math.floor(Math.random() * t.length),
            n = Math.floor(20 * Math.random());
        n = n < 5 ? 5 : n, a.style.width = n + "px", a.style.height = n + "px", a.style.position = "absolute", a.style.bottom = "-4px", a.style.left = Math.floor(100 * Math.random()) + "%", a.style.transition = "1s", a.style.animation = "up 3s linear infinite", a.style.background = t[e], a.style.webkitFilter = "blur(1.5px)", manik.appendChild(a), setTimeout(function() {
            a.remove()
        }, 2900)
    }, 200)
}

function randomTxt(t, a) {
    let e = t[0];
    t[1];
    let n = ['Mohon maaf jika ada kesalahan, tolong laporkan!. <br> Kontak : <a href="https://wa.me//+6283804783417">WhatsApp</a>'];
    e >= a.maghrib.split(":")[0] && e >= a.maghrib.split(":")[1] ? txt.textContent = "Selamat Berbuka Puasa" : setInterval(() => {
        let t = Math.floor(Math.random() * n.length);
        txt.innerHTML = n[t]
    }, 1e4)
}

function optBln() {
    let t = [{
        i: "Januari",
        e: "january"
    }, {
        i: "Februari",
        e: "february"
    }, {
        i: "Maret",
        e: "march"
    }, {
        i: "April",
        e: "april"
    }, {
        i: "Mei",
        e: "may"
    }, {
        i: "Juni",
        e: "june"
    }, {
        i: "Juli",
        e: "july"
    }, {
        i: "Agustus",
        e: "august"
    }, {
        i: "September",
        e: "september"
    }, {
        i: "Oktober",
        e: "october"
    }, {
        i: "November",
        e: "november"
    }, {
        i: "Desember",
        e: "december"
    }];
    for (var a = 0; a < t.length; a++) {
        let e = document.createElement("option"),
            n = document.createTextNode(t[a].i);
        e.setAttribute("value", t[a].e), e.appendChild(n), blnn.appendChild(e)
    }
}
optBln();
let mli = null;

function hitungMundur(t, a, e, n, i) {
    cpt.textContent = t, clearInterval(mli), $("#moment").show(), $("#Fhtngmdr").toggle();
    let l = new Date(n + " " + e + ", " + a + " " + i + ":00").getTime();
    mli = setInterval(function() {
        let a = new Date().getTime(),
            e = l - a,
            n = Math.floor(e / 864e5),
            i = Math.floor(e % 864e5 / 36e5),
            o = Math.floor(e % 36e5 / 6e4),
            s = Math.floor(e % 6e4 / 1e3);
        n = n < 10 ? "0" + n : n, i = i < 10 ? "0" + i : i, o = o < 10 ? "0" + o : o, s = s < 10 ? "0" + s : s, day.textContent = n, hour.textContent = i, minute.textContent = o, second.textContent = s, e <= 0 && (clearInterval(mli), day.textContent = "00", hour.textContent = "00", minute.textContent = "00", second.textContent = "00", alert("Hitung mundur selesai, Selamat " + t))
    }, 1e3)
}

function bacaAcak() {
    $.ajax({
        url: "https://api.banghasan.com/quran/format/json/acak",
        success: function(t) {
            console.log(t), bacaan.textContent = t.acak.ar.teks, arti.textContent = `"${t.acak.id.teks}"(Q.S ${t.surat.nama}/${t.acak.id.surat}:${t.acak.id.ayat})`, srt.textContent = `${t.surat.nama} / ${t.acak.id.surat} : ${t.acak.id.ayat}`
        }
    })
}
bacaAcak();