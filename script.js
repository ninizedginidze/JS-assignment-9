let input = prompt("ჩაწერეთ რიცხვი:");

if (input === null || input.trim() === "") {
    alert("რიცხვი არ ჩაწერილა");
} else {
    let number = Number(input);

    if (isNaN(number)) {
        alert("გთხოვთ ჩაწერეთ ვალიდური რიცხვი!");
    } else if (number % 2 === 0) {
        alert("რიცხვი ლუწია");
    } else {
        alert("რიცხვი კენტია");
    }
}





