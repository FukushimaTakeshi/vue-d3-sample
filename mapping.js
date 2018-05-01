(function() {
    var g,
        width = 900,
        height = 650;

    // svg要素を作成し、データの受け皿となるg要素を追加している
    map = d3.select('#map').append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g');

    // 同じディレクトリにあるgeojsonファイルをhttp経由で読み込む
    d3.json("pref.json", function(json) {
           var projection,
                 path;

           // 投影を処理する関数を用意する。データからSVGのPATHに変換するため。
           projection = d3.geo.mercator()
                  .scale(1000)
                  .center(d3.geo.centroid(json))  // データから中心点を計算
                  .translate([width / 2, height / 2]);

            // pathジェネレータ関数
            path = d3.geo.path().projection(projection);
           //  これがenterしたデータ毎に呼び出されpath要素のd属性に
           //  geoJSONデータから変換した値を入れる

            map.selectAll('path')
            .data(json.features)
            .enter()
            .append('path')
            // .attr("class", function(d) {
            //     // return "region_cod region_cod" + d.properties.region_cod;
            //     return "region";
            // })
            .attr('d', path)
            // .attr("fill", function(d,i){
            //   return d.properties.region_cod === "Hiroshima" ? "darkgreen" : "green";
            // }) // 広島だけダークグリーン
            .on('mouseover', function(d){
                // mouseoverの時のインタラクション
            })
            .on('click', function(d) {
                // clickされた時のインタラクション
            })
            .style("stroke", "#ffffff")
            .style("stroke-width", 0.2)
            .style("fill", function(d){return rand_color(d.properties.region);});
    });

})();

function rand_color(region){

  switch (region){
    case 'Chugoku':
      return "red";
      break;
    case 'Kyushu':
      return 'blue';
      break;
    case 'Okinawa':
      return 'blue';
      break;
    case 'Shikoku':
      return 'purple';
      break;
    case 'Kanto':
      return 'pink';
      break;
    case 'Chubu':
      return 'indigo';
      break;
    case 'Kinki':
      return 'green';
      break;
    case 'Tohoku':
      return 'orange';
      break;
    case 'Hokkaido':
      return 'teal';
      break;
    }
    // var r = Math.floor( Math.random() * 255 ).toString(16);
    // var g = Math.floor( Math.random() * 255 ).toString(16);
    // var b = Math.floor( Math.random() * 255 ).toString(16);
    //
    // return "#" + r + g + b;
}
