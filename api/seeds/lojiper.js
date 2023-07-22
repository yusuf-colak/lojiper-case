/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      username: "lociper1",
      password: "123456",
      email: "lociper1@mail.com",
      firstName: "Lociper1",
      lastName: "Lociper1",
      gender: "Erkek",
      birthday: "01.01.2023",
    },
    {
      id: 2,
      username: "lociper2",
      password: "123456",
      email: "lociper2@mail.com",
      firstName: "Lociper2",
      lastName: "Lociper2",
      gender: "Kız",
      birthday: "01.01.2023",
    },
  ]);
  await knex("seferler").del();
  await knex("seferler").insert([
    {
      id: 1,
      seferAdi: "İstanbul-Ankara",
      seferTarihi: "26/7/2023",
      seferSuresi: "5 Saat ",
      seferUcreti: "500₺",
      seferKapasitesi: "40",
      seferKalkisYeri: "İstanbul",
      seferVarisYeri: "Ankara",
      seferAciklama: "İstanbul Ankara arası seferlerimiz başlamıştır...",
    },
    {
      id: 2,
      seferAdi: "Ankara-İstanbul",
      seferTarihi: "26/7/2023",
      seferSuresi: "5 Saat",
      seferUcreti: "500₺",
      seferKapasitesi: "40",
      seferKalkisYeri: "Ankara",
      seferVarisYeri: "İstanbul",
      seferAciklama: "Ankara İstanbul arası seferlerimiz başlamıştır..",
    },
  ]);

  await knex("koltuklar").del();
  await knex("koltuklar").insert([
    {
      seferId: 1,
      koltukNo: 1,
      UserId: 1,
    },
    {
      seferId: 1,
      koltukNo: 2,
      UserId: 1,
    },
    {
      seferId: 1,
      koltukNo: 3,
      UserId: 2,
    },
  ]);
};
