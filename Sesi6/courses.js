const courseList = document.getElementById("courseList");

fetch("courses.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Gagal ambil data");
    }
    return response.json();
  })
  .then((courses) => {
    renderCourses(courses);
  })
  .catch((error) => {
    courseList.innerHTML = "<p>Gagal memuat data</p>";
    console.log(error);
  });

function renderCourses(courses) {
  courseList.innerHTML = "";

  courses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "bg-blue-200 text-md rounded";

    const taskHTML = course.task
      .map((item) => `<li class="list-none">${item}</li>`)
      .join("");

    card.innerHTML = `
            <div>
                <div class="bg-blue-300 p-2 rounded">
                    <img src="${course.image}" alt="Gambar Course" class="rounded rounded-6 mb-2"/>
                    <h3 class="font-bold">${course.name}</h3>
                    <p class="h-16">${course.description}</p>
                </div>

                <div class="p-2">
                    <p>${taskHTML}</p>
                </div>

                <div class="mt-4 p-2">
                    <hr class="border border-dashed"/>
                    <p>Mulai dari</p>
                    <p>
                        <span class="text-red-700 font-bold">Rp ${course.price.toLocaleString("id-ID")}</span>

                        <span class="text-sm"> / bulan</span>
                    </p>
                </div>

                <div class="flex justify-center m-2">
                    <button class="rounded bg-orange-600 text-white px-3 py-1 font-semibold hover:bg-orange-700 transition">
                        Lihat Paket Belajar
                    </button>
                </div>
            </div>
        `;

    try{
        courseList.appendChild(card);
    } catch {
        console.log("Gagal menampilkan card");
    }
  });
}
