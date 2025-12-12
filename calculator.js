function calculate() {
    let expr = document.getElementById("expression").value;
    let resultBox = document.getElementById("result");

    try {
        // Derivatives
        if (expr.includes("derivative")) {
            let input = expr.replace("derivative of", "").trim();
            resultBox.innerText = "Result: " + math.derivative(input, 'x').toString();
            return;
        }

        // Integrals
        if (expr.includes("integral")) {
            let input = expr.replace("integral of", "").trim();
            resultBox.innerText = "Result: ∫ = " + math.integral(input, "x").toString();
            return;
        }

        // Limits
        if (expr.includes("limit")) {
            let parts = expr.split(" ");
            let func = parts[2];
            let point = parseFloat(parts[4]);
            resultBox.innerText = "Result: " + math.limit(func, "x", point);
            return;
        }

        // General expression
        resultBox.innerText = "Result: " + math.evaluate(expr);

    } catch(e) {
        resultBox.innerText = "Error: " + e;
    }
}
