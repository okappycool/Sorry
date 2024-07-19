document.addEventListener('DOMContentLoaded', function () {
    const ctxTimeline = document.getElementById('timelineChart').getContext('2d');
    const ctxMoments = document.getElementById('momentsChart').getContext('2d');

    const timelineChart = new Chart(ctxTimeline, {
        type: 'line',
        data: {
            labels: [ 'Februrary', 'March', 'April', 'May','June','July & Future'],
            datasets: [{
                label: 'My Feelings For you ',
                data: [4.5, 4.5, 7, 8, 9, 10],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    alert(`Details about ${timelineChart.data.labels[index]}: It was a significant month because You were with me all the time, atleast you made me feel so `);
                }
            }
        }
    });

    const momentsChart = new Chart(ctxMoments, {
        type: 'bar',
        data: {
            labels: ['Your Nose', 'You being my Boyfriend', 'Haryanvi Roots ', 'Voice', 'Nakhre'],
            datasets: [{
                label: 'Love Meter',
                data: [10, 10, 7, 9, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    alert(`Details about ${momentsChart.data.labels[index]}: Because Its MUDIT DIXIT`);
                }
            }
        }
    });
});
