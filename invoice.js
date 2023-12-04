// Created invoice.js and createInvoice() (as per step 1).
function createInvoice() {
    // Created variables for form elements (as per step 2).
    const name = document.getElementById('name').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;
    const itemOne = document.getElementById('item1').value;
    let priceOne = document.getElementById('price1').value;
    const itemTwo = document.getElementById('item2').value;
    let priceTwo = document.getElementById('price2').value;
    const itemThree = document.getElementById('item3').value;
    let priceThree = document.getElementById('price3').value;
    // Converted price values to floating-point numbers (as per step 3).
    priceOne = parseFloat(priceOne);
    priceTwo = parseFloat(priceTwo);
    priceThree = parseFloat(priceThree);
    // Calculated subtotal, tax, and total amounts (as per step 4).
    let subtotal = priceOne + priceTwo + priceThree;
    let tax = 0.07 * subtotal;
    let total = tax + subtotal;
    // Utilized the toFixed(2) method to format amounts (as per step 5).
    subtotal = subtotal.toFixed(2);
    tax = tax.toFixed(2);
    total = total.toFixed(2);
    // Created variable storing template literal (as per step 6).
    let invoice = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="invoice-style.css">
            <title>Customer Invoice</title>
        </head>
        <body>
            <header>
                <div class="logo">
                    <img src="chocolate-logo.jpg" alt="Chocolate Logo">
                </div>
                <div class="invoice-text">
                    <p>
                        123 Main St.<br>
                        St. Louis, MO 99955<br>
                        (123) 456-7890<br>
                    </p>
                </div>
            </header>
            <main>
                <table>
                    <tr>
                        <th colspan="3">Customer Information</th>
                    </tr>
                    <tr>
                        <td colspan="3">${name}<br>
                            ${street}<br>
                            ${city}, ${state} ${zip}<br>
                            ${phone}
                        </td>
                    </tr>
                    <tr>
                        <th width="20%">Item</th>
                        <th>Product</th>
                        <th width="20%">Price</th>
                    </tr>
                    <tr>
                        <td>Item 1</td>
                        <td>${itemOne}</td>
                        <td>$ ${priceOne}</td>
                    </tr>
                    <tr>
                        <td>Item 2</td>
                        <td>${itemTwo}</td>
                        <td>$ ${priceTwo}</td>
                    </tr>
                    <tr>
                        <td>Item 3</td>
                        <td>${itemThree}</td>
                        <td>$ ${priceThree}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Subtotal</td>
                        <td>$ ${subtotal}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Tax</td>
                        <td>$ ${tax}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td>$ ${total}</td>
                    </tr>
                </table>
            </main>
        </body>
    </html>`
    // Created a variable called newWindow and assigned it to a new blank window (as per step 7).
    const newWindow = window.open();
    // Wrote invoice content to new window (as per step 8).
    newWindow.document.write(invoice);
}