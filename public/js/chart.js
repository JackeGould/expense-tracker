// takes the month-year from the URL
// if month-year is not present, then we just assign an empty string ""
const viewMonth = window.location.href.split("/")[4] || "";

console.log(viewMonth)

fetch("/api/expenses/" + viewMonth)
    .then(res => res.json())
    .then(allExpenses => {
        console.log(allExpenses);

        fetch("/api/incomes/" + viewMonth)
            .then(res => res.json())
            .then(allIncomes => {

                let sumOfExpenses = 0;
                let sumOfIncomes = 0;

                for (e of allExpenses) {
                    sumOfExpenses += e.amount;
                }

                for (i of allIncomes) {
                    sumOfIncomes += i.amount;
                }

                const ctx = document.getElementById('myChart');
                const myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: [
                            'Expenses',
                            'Income'
                        ],
                        datasets: [{
                            label: 'My First Dataset',
                            data: [sumOfExpenses, sumOfIncomes],
                            backgroundColor: [
                                // expense color
                                'rgb(255, 99, 132)',
                                // income color
                                'rgb(54, 162, 235)'
                            ],
                            hoverOffset: 4
                        }]
                    }
                });
            })

    })




