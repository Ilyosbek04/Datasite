// script.js
document.getElementById("calculateBtn").addEventListener("click", function () {
    const monthlyFee = parseFloat(document.getElementById("monthlyFee").value);
    const totalDays = parseInt(document.getElementById("totalDays").value);
    const daysAttended = parseInt(document.getElementById("daysAttended").value);
    const discount = parseFloat(document.getElementById("discount").value);
  
    // Validatsiya
    if (isNaN(monthlyFee) || monthlyFee <= 0) {
      alert("Iltimos, 1 oylik to'lovni to'g'ri kiriting!");
      return;
    }
    if (isNaN(totalDays) || totalDays <= 0) {
      alert("Iltimos, umumiy kunlar sonini to'g'ri kiriting!");
      return;
    }
    if (isNaN(daysAttended) || daysAttended < 0 || daysAttended > totalDays) {
      alert(`Iltimos, kelgan kunlarni 0 dan ${totalDays} gacha kiriting!`);
      return;
    }
    if (isNaN(discount) || discount < 0 || discount > 100) {
      alert("Iltimos, chegirma foizini 0 dan 100 gacha kiriting!");
      return;
    }
  
    // Hisoblash
    const perDayFee = monthlyFee / totalDays; // Kunlik to'lov
    let payableAmount = perDayFee * daysAttended; // Umumiy to'lov
    const discountAmount = (payableAmount * discount) / 100; // Chegirma miqdori
    payableAmount -= discountAmount; // Chegirma qo'llangandan keyingi to'lov
  
    // Natijani chiqarish
    document.getElementById("result").innerHTML = `
      <p>Kunlik to'lov narxi: ${perDayFee.toLocaleString()} so'm</p>
      <p>O'quvchining kelgan kunlari uchun umumiy to'lov: ${(perDayFee * daysAttended).toLocaleString()} so'm</p>
      <p>Chegirma (${discount}%): ${discountAmount.toLocaleString()} so'm</p>
      <p><strong>To'lashi kerak bo'lgan summa: ${payableAmount.toLocaleString()} so'm</strong></p>
    `;
  });
  