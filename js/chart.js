const ctx = document.getElementById("lineChart").getContext("2d");

const lineChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [
            {
                label: "Price (£)",
                data: [25, 45, 60, 55, 85, 65, 85, 60, 70, 75, 60, 10],
                borderColor: "rgba(0,0,0,0.1)", // faint gray line
                borderWidth: 1,
                backgroundColor: "#057BFF", // solid blue fill
                fill: "origin",
                tension: 0.4,
                pointBackgroundColor: "#0d6efd",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#0d6efd",
            },
        ],
    },
    options: {
        responsive: true,
        layout: {
            padding: {
                top: 20,
                bottom: 20,
            },
        },
        scales: {
            x: {
                grid: {
                    drawBorder: false, // removes Y-axis vertical line
                    display: false, // hides vertical grid lines too (optional)
                },
            },
            y: {
                min: 0,
                max: 100,
                beginAtZero: true,
                grid: {
                    drawBorder: false, // removes X-axis border line at bottom
                    color: "#f0f0f0", // light gray horizontal grid lines
                },
                ticks: {
                    stepSize: 20,
                    autoSkip: false,
                    callback: function (value) {
                        return "£" + value;
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});