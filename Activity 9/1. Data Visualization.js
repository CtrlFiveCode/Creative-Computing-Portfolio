var table;
var dates = [];
var sleepHours = [];

function preload() {
    table = loadTable("health.csv", "csv");
}

function setup() {
    createCanvas(windowWidth, 500);
    background(255);
    noStroke();
    loadData();
    drawChart();
}

function loadData() {
    for (var i = 0; i < table.getRowCount(); i++) {
        var row = table.getRow(i);
        var date = row.getString(0); // Get date from the first column
        var hours = row.getNum(1); // Get sleep hours from the second column
        dates.push(date);
        sleepHours.push(hours);
    }
}

function drawChart() {
    var maxValue = max(sleepHours);
    var barWidth = (width - 100) / sleepHours.length;

    // Draw title
    textSize(18);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill(0);
    text('My Daily Sleep in May\n(In Hours)', width / 2, 25);

    // Reset text size for bar labels
    textSize(11);
    textStyle(NORMAL);

    for (var i = 0; i < sleepHours.length; i++) {
        var rectHeight = map(sleepHours[i], 0, maxValue, 0, height - 100);
        var x = 50 + i * barWidth;
        var y = height - rectHeight - 50;

        // Determine bar color based on sleep hours
        let lerpCol;
        if (sleepHours[i] < 4) {
            lerpCol = lerpColor(color(0, 128, 0), color(173, 255, 47), sleepHours[i] / 4); // Green to Light Green
        } else if (sleepHours[i] < 7) {
            lerpCol = lerpColor(color(173, 255, 47), color(135, 206, 235), (sleepHours[i] - 4) / 3); // Light Green to Sky Blue
        } else if (sleepHours[i] < 9) {
            lerpCol = lerpColor(color(135, 206, 235), color(255, 182, 193), (sleepHours[i] - 7) / 2); // Sky Blue to Light Red
        } else if (sleepHours[i] < 12) {
            lerpCol = lerpColor(color(255, 182, 193), color(255, 0, 0), (sleepHours[i] - 9) / 3); // Light Red to Red
        } else {
            lerpCol = color(255, 0, 0); // Red for sleep hours >= 12
        }

        fill(lerpCol);
        rect(x, y, barWidth - 5, rectHeight);

        // Draw labels
        fill(0);
        textAlign(CENTER, CENTER);
        text(sleepHours[i], x + (barWidth - 5) / 2, y - 10);
        text(dates[i], x + (barWidth - 5) / 2, height - 30);
    }

    // Draw axes
    stroke(0);
    line(50, height - 50, width - 50, height - 50); // X-axis
    line(50, height - 50, 50, 50); // Y-axis

    // Draw Y-axis labels
    textStyle(NORMAL);
    textAlign(RIGHT, CENTER);
    for (var i = 0; i <= maxValue; i++) {
        var y = map(i, 0, maxValue, height - 50, 50);
        text(i, 45, y);
        line(45, y, 50, y);
    }
}
