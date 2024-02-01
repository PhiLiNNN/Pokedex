function renderChart(ID) {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
            datasets: [{
                barPercentage: 0.5,
                categoryPercentage: 1,
                data: data[ID].base_stat_name,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 25)'
                ],
                borderRadius: 16,
                barThickness: 'flex'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false, },
            },
            indexAxis: 'y',
            scales: {
                y: {
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Poppins', sans-serif"
                        },
                    },
                    grid: { display: false },
                    beginAtZero: true,
                },
                x: {
                    ticks: {
                        font: {
                            size: 12
                        },
                        stepSize: 40
                    },
                    grid: { display: false },
                    beginAtZero: true,
                    stepValue: 10 
                },
            }
        }
    });
}