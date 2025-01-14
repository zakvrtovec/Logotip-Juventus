var SVGIcons = {
    "juventus-logo.svg": {
        draw: function(ctx){
            ctx.save();
            ctx.strokeStyle = "rgba(255,255,255,255)";
            ctx.miterLimit = 4;
            ctx.font = "15px ''";

            // Decrease the scaling factors for a smaller logo
            ctx.scale(0.042, 0.042); // Reduced from 0.0234375 for smaller scaling
            ctx.translate(0, 0.0009);
            ctx.scale(1.3333325, 1.3333325); // Keep this scale factor as is, or adjust further for more scaling

            ctx.save();
            ctx.fillStyle = "white";
            ctx.strokeStyle = "white";
            ctx.font = "15px ''";
            ctx.beginPath();
            ctx.moveTo(1716.67, 1630.67);
            ctx.bezierCurveTo(1804.29, 1582.88, 1864, 1536, 1864, 1536);
            ctx.bezierCurveTo(1864, 1536, 1907.67, 1503.67, 1946.75, 1455);
            ctx.bezierCurveTo(1974.94, 1420.91, 1993.33, 1381, 1993.33, 1381);
            ctx.bezierCurveTo(1993.33, 1381, 2017.33, 1333.33, 2030, 1261.33);
            ctx.bezierCurveTo(2040.67, 1202, 2040.97, 1103.97, 2040.97, 1103.97);
            ctx.bezierCurveTo(2040.97, 1103.97, 2041, 132, 2041, 132);
            ctx.bezierCurveTo(2041, 132, 1324, 132, 1324, 132);
            ctx.bezierCurveTo(1324, 132, 1324, 342, 1324, 342);
            ctx.bezierCurveTo(1324, 342, 1800, 342, 1800, 342);
            ctx.bezierCurveTo(1800, 342, 1800, 1079, 1800, 1079);
            ctx.bezierCurveTo(1800, 1079, 1802, 1213.5, 1768.91, 1277);
            ctx.bezierCurveTo(1746, 1329.5, 1695, 1366, 1695, 1366);
            ctx.bezierCurveTo(1695, 1366, 1678.58, 1382.61, 1598, 1428);
            ctx.bezierCurveTo(1590, 1435, 1381, 1532, 1381, 1532);
            ctx.bezierCurveTo(1381, 1532, 1411.82, 1603.45, 1429.99, 1633);
            ctx.bezierCurveTo(1455.27, 1678.36, 1501, 1733.99, 1501, 1733.99);
            ctx.bezierCurveTo(1501, 1733.99, 1622.99, 1681.76, 1716.67, 1630.67);
            ctx.closePath();
            ctx.moveTo(2272.01, 132.01);
            ctx.bezierCurveTo(2272.01, 132.01, 2512.99, 132, 2512.99, 132);
            ctx.bezierCurveTo(2512.99, 132, 2513, 1210, 2513, 1210);
            ctx.bezierCurveTo(2513, 1210, 2511.15, 1280.56, 2503.33, 1343.33);
            ctx.bezierCurveTo(2496.75, 1396.21, 2484, 1443, 2484, 1443);
            ctx.bezierCurveTo(2484, 1443, 2467.98, 1504.46, 2444.5, 1558);
            ctx.bezierCurveTo(2418.15, 1618.08, 2384, 1671, 2384, 1671);
            ctx.bezierCurveTo(2384, 1671, 2346.1, 1727.34, 2303, 1771.33);
            ctx.bezierCurveTo(2250.53, 1824.89, 2191, 1868, 2191, 1868);
            ctx.bezierCurveTo(2191, 1868, 2146.52, 1903.27, 2079, 1942);
            ctx.bezierCurveTo(2010.53, 1981.27, 1919, 2024, 1919, 2024);
            ctx.bezierCurveTo(1919, 2024, 1871.15, 2003.53, 1821, 1976);
            ctx.bezierCurveTo(1755.68, 1940.14, 1684, 1895, 1684, 1895);
            ctx.bezierCurveTo(1684, 1895, 1816.41, 1829.97, 1920, 1770);
            ctx.bezierCurveTo(1990.29, 1729.3, 2045, 1686, 2045, 1686);
            ctx.bezierCurveTo(2045, 1686, 2113.3, 1633.81, 2165, 1559.5);
            ctx.bezierCurveTo(2208.61, 1496.81, 2237, 1410, 2237, 1410);
            ctx.bezierCurveTo(2237, 1410, 2251.35, 1354.79, 2260, 1290);
            ctx.bezierCurveTo(2268.84, 1223.8, 2271.99, 1148, 2271.99, 1148);
            ctx.bezierCurveTo(2271.99, 1148, 2272.01, 132.01, 2272.01, 132.01);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
        }
    }
};

window.onload = function() {
    // Get the canvas element
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // Draw the SVG icon (in this case, Juventus logo)
    SVGIcons["juventus-logo.svg"].draw(ctx);
};
