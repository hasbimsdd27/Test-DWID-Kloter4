# Test-DWID-Kloter4

untuk nomor 1,2 dan 3 dibuat dengan javascript. sehingga dijalankan dengan `<node nomor.js>` contohnya `<node 1.js>`.

nomor 4 ditambahkan sebuah tabel dengan nama transaction_tb yang berisi:
    * id
    * customer_id
    * motor_brand
    * motor_nama
    * motor_warna
    * unit

query untuk menampilkan data dari motorcycle_tb adalah `Select * From motorcycle_tb INNER JOIN brand_tb on motorcycle_tb.brand_id = brand_tb.id ORDER BY motorcycle_tb.id;`
hasilnya adalah sebagai berikut:

![Hasil query](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/menampilkanSeluruhTbMotor.png)

query untuk menampilkan data motor sesuai brand adalah `SELECT brand_tb.id, brand_tb.name AS brand_name, GROUP_CONCAT(motorcycle_tb.name ORDER BY motorcycle_tb.name SEPARATOR ', ') AS name FROM brand_tb join Motorcycle_tb ON motorcycle_tb.brand_id = brand_tb.id GROUP BY brand_tb.id;`
hasilnya adalah sebagai berikut
![Hasil query](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/menampilkanMotorBerdasarkanBrand.png)

query untuk menampilkan tabel transaksi adalah `Select * From transaction_tb INNER JOIN customer_tb on transaction_tb.customer_id = customer_tb.id ORDER BY transaction_tb.id;`
hasilnya adalah sebagai berikut
![Hasil query](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/penambahanTbTransaksidanViewTransaksi.png)

query untuk menampilkan seluruh data dari tabel customer, motor dan brand adalah `Select * From customer_tb;>`,`<Select * From motorcycle_tb;>`,`<Select * From brand_tb;`
hasilnya adalah sebagai berikut
![Hasil query](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/screenshot(33).png)

Berikut adalah hasil POST/Query menambah data 
![Tambah Brand](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/tabahBrand.png)
![Hasil Brand](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/hasilTambahBrad.png)
![Tambah Customer](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/tambahCustomer.png)
![Hasil Customer](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/hasilTambahCustomer.png)
![Tambah Motor](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/tambahMotor.png)
![Hasil Motor](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/menampilkanSeluruhTbMotor.png)
![Tambah dan Hasil Transaksi](https://github.com/hasbimsdd27/Test-DWID-Kloter4/images/penambahanTbTransaksidanViewTbTransaksi.png)

