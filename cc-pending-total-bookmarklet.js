javascript: (() => {
    const currencyToNumber = currency => Number(currency?.replace?.(/[^0-9\.-]+/g, ""));
  
    const currentBalance = currencyToNumber(document.getElementById("ttCurrentBalance")?.parentElement?.nextElementSibling?.textContent);
    const pendingAmounts = Array.from(document.getElementsByClassName("ccPendingTransAmount")).map((pendingAmount) => currencyToNumber(pendingAmount?.textContent));
    const sumOfPendingAmounts = pendingAmounts.reduce((a, b) => a + b, 0);
  
    const totalCardBalance = currentBalance + sumOfPendingAmounts;
  
    alert(`Total Card Balance: ${totalCardBalance}`);
  })();
  
  