google.charts.load('current', {
        'packages': ['geochart', 'corechart']
      });
      google.charts.setOnLoadCallback(drawRegionsMap);
      google.charts.setOnLoadCallback(drawRegions2Map);
      google.charts.setOnLoadCallback(drawRegions3Map);
      google.charts.setOnLoadCallback(drawRegions4Map);
      google.charts.setOnLoadCallback(init);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['Country', '%ofPopw/Malaria'],
          ['Angola', 0.3188],
          ['Burkina Faso', 0.6203],
          ['Burundi', 0.4138],
          ['Cameroon', 0.3955],
          ['Central African Republic', 0.4294],
          ['Comoros', 0.2008],
          ['Cote d\'Ivoire', 0.5267],
          ['CD', 0.4995],
          ['Equatorial Guinea', 0.3579],
          ['Gabon', 0.3573],
          ['Gambia', 0.3418],
          ['Ghana', 0.4887],
          ['Guinea-Bissau', 0.4333],
          ['Liberia', 0.4841],
          ['Malawi', 0.4288],
          ['Mozambique', 0.5147],
          ['Republic of the Congo', 0.3538],
          ['Rwanda', 0.5147],
          ['São Tomé and Principe', 0.4238],
          ['SS', 0.2988],
          ['Tanzania', 0.3530],
          ['Timor-Leste', 0.2951],
          ['Togo', 0.5128],
          ['Uganda', 0.5051],
          ['Zambia', 0.3779],
          ['Benin', 0.388524651],
          ['Chad', 0.203755795],
          ['CG', 0.353780905],
          ['Ethiopia', 0.133948185],
          ['Guinea', 0.477318018],
          ['Kenya', 0.231765973],
          ['Niger', 0.329635389],
          ['Nigeria', 0.439464845],
          ['Papua New Guinea', 0.260511112],
          ['Senegal', 0.223110653],
          ['Sierre Leone', 0.492524828],
          ['Sudan', 0.085471108]
        ]);


        var options = {
          region: '002',
          'title': 'How Much Pizza Sarah Ate Last Night',
          width: 250,
          height: 200,
          colorAxis: {
            colors: ['1AD8FF', '26CAEF', '33BDDF', '40AFCF', '4CA2C0','59A7B0', '6687A0', '727990', '7F6C81', '8C5E71', '985161','A54351','B23642', 'BE2832', 'CB1B22', 'D80D12', 'E50003'],
            values: [0.0005, 0.001, 0.025, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7]
          },
          backgroundColor: 'white',
          datalessRegionColor: 'silver',
          defaultColor: 'silver',
          zoomLevel: 16,
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }



      function drawRegions2Map() {

        var data = google.visualization.arrayToDataTable([
          ['Country', '%ofPopw/Malaria'],
          ['Angola', 0.3015],
          ['Burkina Faso', 0.5513],
          ['Burundi', 0.2773],
          ['Cameroon', 0.4413],
          ['Central African Republic', 0.4685],
          ['Comoros', 0.1940],
          ['Cote d\'Ivoire', 0.5294],
          ['CD', 0.5170],
          ['Equatorial Guinea', 0.3994],
          ['Gabon', 0.1669],
          ['Gambia', 0.2916],
          ['Ghana', 0.3880],
          ['Guinea-Bissau', 0.1299],
          ['Liberia', 0.4587],
          ['Malawi', 0.3216],
          ['Mozambique', 0.4402],
          ['Republic of the Congo', 0.3426],
          ['Rwanda', 0.1776],
          ['São Tomé and Principe', 0.1959],
          ['SS', 0.2222],
          ['Tanzania', 0.2483],
          ['Timor-Leste', 0.2757],
          ['Togo', 0.5020],
          ['Uganda', 0.4636],
          ['Zambia', 0.2408],
          ['Benin', 0.415527937],
          ['Chad', 0.21851558],
          ['CG', 0.342555107],
          ['Ethiopia', 0.062656289],
          ['Guinea', 0.424034569],
          ['Kenya', 0.147104419],
          ['Niger', 0.341108734],
          ['Nigeria', 0.422601886],
          ['Papua New Guinea', 0.230001947],
          ['Senegal', 0.115360786],
          ['Sierre Leone', 0.473254141],
          ['Sudan', 0.068771485]
        ]);


        var options = {
          region: '002', // Africa
          'title': 'How Much Pizza Sarah Ate Last Night',
          zoomLevel: 16,
          width: 250,
          height: 200,
          colorAxis: {
            colors: ['1AD8FF', '26CAEF', '33BDDF', '40AFCF', '4CA2C0','59A7B0', '6687A0', '727990', '7F6C81', '8C5E71', '985161','A54351','B23642', 'BE2832', 'CB1B22', 'D80D12', 'E50003'],
            values: [0.0005, 0.001, 0.025, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7]
          },
          backgroundColor: 'white',
          datalessRegionColor: 'silver',
          defaultColor: 'silver'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions2_div'));

        chart.draw(data, options);
      }



      function drawRegions3Map() {

        var data = google.visualization.arrayToDataTable([
          ['Country', '%ofPopw/Malaria'],
          ['Angola', 0.1131],
          ['Burkina Faso', 0.6013],
          ['Burundi', 0.2008],
          ['Cameroon', 0.2768],
          ['Central African Republic', 0.3600],
          ['Comoros', 0.2004],
          ['Cote d\'Ivoire', 0.4471],
          ['CD', 0.4246],
          ['Equatorial Guinea', 0.2058],
          ['Gabon', 0.1492],
          ['Gambia', 0.2481],
          ['Ghana', 0.3948],
          ['Guinea-Bissau', 0.1040],
          ['Liberia', 0.3284],
          ['Malawi', 0.4198],
          ['Mozambique', 0.3824],
          ['Republic of the Congo', 0.4246],
          ['Rwanda', 0.1069],
          ['São Tomé and Principe', 0.0298],
          ['SS', 0.1790],
          ['Tanzania', 0.1512],
          ['Timor-Leste', 0.1031],
          ['Togo', 0.4538],
          ['Uganda', 0.4223],
          ['Zambia', 0.1581],
          ['Benin', 0.336495055],
          ['Chad', 0.15971245],
          ['CG', 0.216424771],
          ['Ethiopia', 0.050250215],
          ['Guinea', 0.408630049],
          ['Kenya', 0.081828367],
          ['Niger', 0.368279136],
          ['Nigeria', 0.439464845],
          ['Papua New Guinea', 0.175246005],
          ['Senegal', 0.123487367],
          ['Sierre Leone', 0.484772768],
          ['Sudan', 0.033227297]
        ]);


        var options = {
          region: '002',
          'title': 'How Much Pizza Sarah Ate Last Night',
          zoomLevel: 16,
          width: 250,
          height: 200,
          colorAxis: {
            colors: ['1AD8FF', '26CAEF', '33BDDF', '40AFCF', '4CA2C0','59A7B0', '6687A0', '727990', '7F6C81', '8C5E71', '985161','A54351','B23642', 'BE2832', 'CB1B22', 'D80D12', 'E50003'],
            values: [0.0005, 0.001, 0.025, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7]
          },
          backgroundColor: 'white',
          datalessRegionColor: 'silver',
          defaultColor: 'silver'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions3_div'));

        chart.draw(data, options);
      }


      function drawRegions4Map() {

        var data = google.visualization.arrayToDataTable([
          ['Country', '%ofPopw/Malaria'],
          ['Angola', 0.1450],
          ['Burkina Faso', 0.4156],
          ['Burundi', 0.1338],
          ['Cameroon', 0.2341],
          ['Central African Republic', 0.3184],
          ['Comoros', 0.0282],
          ['Cote d\'Ivoire', 0.3839],
          ['CD', 0.2894],
          ['Equatorial Guinea', 0.2108],
          ['Gabon', 0.2121],
          ['Gambia', 0.2357],
          ['Ghana', 0.3172],
          ['Guinea-Bissau', 0.1121],
          ['Liberia', 0.3726],
          ['Malawi', 0.2162],
          ['Mozambique', 0.3514],
          ['Republic of the Congo', 0.0113],
          ['Rwanda', 0.1173],
          ['São Tomé and Principe', 0.0832],
          ['SS', 0.1572],
          ['Tanzania', 0.1135],
          ['Timor-Leste', 0.0763],
          ['Togo', 0.3752],
          ['Uganda', 0.2215],
          ['Zambia', 0.2164],
          ['Benin', 0.300322643],
          ['Chad', 0.144532987],
          ['CG', 0.011302104],
          ['Ethiopia', 0.040186816],
          ['Guinea', 0.401716468],
          ['Kenya', 0.148765654],
          ['Niger', 0.26690106],
          ['Nigeria', 0.341402552],
          ['Papua New Guinea', 0.177866218],
          ['Senegal', 0.126573012],
          ['Sierre Leone', 0.404605446],
          ['Sudan', 0.033753]
        ]);


        var options = {
          region: '002', // Africa
          'title': 'How Much Pizza Sarah Ate Last Night',
          width: 250,
          height: 200,
          colorAxis: {
            colors: ['1AD8FF', '26CAEF', '33BDDF', '40AFCF', '4CA2C0','59A7B0', '6687A0', '727990', '7F6C81', '8C5E71', '985161','A54351','B23642', 'BE2832', 'CB1B22', 'D80D12', 'E50003'],
            values: [0.0005, 0.001, 0.025, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7]
          },
          backgroundColor: 'white',
          datalessRegionColor: 'silver',
          defaultColor: 'silver'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions4_div'));

        chart.draw(data, options);
      }




      function init() {
        var rowData1 = [
          ['Year', 'Angola', 'Burkina Faso', 'Burundi', 'Comoros', 'Democratic Republic of the Congo', 'Congo, Rep', 'Ghana', 'Guinea-Bissau', 'Malawi', 'Mozambique', 'Rwanda', 'Sao Tome and Principe', 'Tanzania',
            'Timor-Leste', 'Uganda', 'Average'
          ],
          ['2000', 9129634978, 2628920056, 870486066, 203846428, 19088046306, 3219910666, 4983024408, 370173852, 1743506287, 5016469069, 1734938264, 72230284, 10185786383, 368000000, 6193246837, 4387214659],
          ['2005', 28233712831, 5458343594, 1117257279, 380372893, 11964484668, 6087002682, 10731634117, 586791836, 3655892942, 7723846195, 2581465864, 126194166, 16929976600, 491000000, 9013834373, 7005454003],
          ['2010', 82470913121, 8988623686, 2026864469, 530493353, 20523285374, 12007880590, 32174772956, 846332420, 6957454879, 10154238250, 5698548988, 197454053, 31407908612, 943000000, 20186498789, 15674284636],
          ['2013', 124912063308, 11930742614, 2714505635, 618663922, 30014813756, 14085852120, 47805069495, 1026664111, 5432169048, 16018848991, 7522006198, 302925490, 44333456245, 1312000000, 24992173594, 19158433219]
        ];
        var rowData2 = [
          ['Year', 'Angola', 'Burkina Faso', 'Burundi', 'Comoros', 'Democratic Republic of the Congo', 'Congo, Rep', 'Ghana', 'Guinea-Bissau', 'Malawi', 'Mozambique', 'Rwanda', 'Sao Tome and Principe', 'Tanzania',
            'Timor-Leste', 'Uganda', 'Average'
          ],
          ['2000', 32, 62, 41, 20, 35, 34, 49, 43, 43, 45, 42, 34, 35, 30, 50, 40],
          ['2005', 30, 55, 28, 19, 34, 29, 39, 13, 32, 47, 18, 20, 25, 28, 46, 31],
          ['2010', 11, 60, 20, 20, 22, 25, 39, 10, 42, 35, 11, 3, 15, 10, 42, 24],
          ['2013', 15, 42, 13, 3, 1, 24, 32, 11, 22, 44, 12, 9, 11, 8, 22, 18]
        ];

        // Create and populate the data tables.
        var data = [];
        data[0] = google.visualization.arrayToDataTable(rowData1);
        data[1] = google.visualization.arrayToDataTable(rowData2);

        var options = {
          width: 550,
          height: 300,
          colors: ['#008080', 'blue', '#4682B4', '#87CEFA', '#1E90FF', '#008080', '#87CEFA', '#4682B4', '#008080', '#1E90FF', '#008080', '#87CEFA', '#4682B4', '#008080', '#1E90FF', '#e0440e'],
          vAxis: {
            title: "US $/ Percent"
          },
          hAxis: {
            title: "Year"
          },
          seriesType: "bars",
          series: {
            15: {
              type: "line"
            }
          },
          lineWidth: 6,
          lineDashStyle: [4, 4],
          animation: {
            duration: 1500,
            easing: 'out'
          },
        };
        var current = 0;
        // Create and draw the visualization.
        var chart = new google.visualization.ComboChart(document.getElementById('chart_div1'));


        chart.draw(data[current], options);
      }


      Highcharts.SparkLine = function(a, b, c) {
        var hasRenderToArg = typeof a === 'string' || a.nodeName,
          options = arguments[hasRenderToArg ? 1 : 0],
          defaultOptions = {
            chart: {
              renderTo: (options.chart && options.chart.renderTo) || this,
              backgroundColor: null,
              borderWidth: 0,
              type: 'area',
              margin: [3, 1, 3, 1],
              width: 90,
              height: 15,
              style: {
                overflow: 'visible'
              },

              // small optimalization, saves 1-2 ms each sparkline
              skipClone: true
            },
            title: {
              text: ''
            },
            credits: {
              enabled: false
            },
            xAxis: {
              labels: {
                enabled: false
              },
              title: {
                text: null
              },
              startOnTick: false,
              endOnTick: false,
              tickPositions: []
            },
            yAxis: {
              endOnTick: false,
              startOnTick: false,
              labels: {
                enabled: false
              },
              title: {
                text: null
              },
              tickPositions: [0]
            },
            legend: {
              enabled: false
            },
            tooltip: {
              backgroundColor: null,
              borderWidth: 1,
              shadow: false,
              useHTML: true,
              hideDelay: 0,
              shared: true,
              padding: 2,
              positioner: function(w, h, point) {
                return {
                  x: point.plotX - w / 2,
                  y: point.plotY - h
                };
              }
            },
            plotOptions: {
              series: {
                animation: false,
                lineWidth: 1,
                shadow: false,
                states: {
                  hover: {
                    lineWidth: 1
                  }
                },
                marker: {
                  radius: 2,
                  states: {
                    hover: {
                      radius: 3
                    }
                  }
                },
                fillOpacity: 0.25
              },
              column: {
                negativeColor: '#910000',
                borderColor: 'silver'
              }
            }
          };

        options = Highcharts.merge(defaultOptions, options);

        return hasRenderToArg ?
          new Highcharts.Chart(a, options, c) :
          new Highcharts.Chart(options, b);
      };

      var start = +new Date(),
        $tds = $('td[data-sparkline]'),
        fullLen = $tds.length,
        n = 0;

      // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
      // can take some seconds, so we split the input into chunks and apply them in timeouts
      // in order avoid locking up the browser process and allow interaction.
      function doChunk() {
        var time = +new Date(),
          i,
          len = $tds.length + 3,
          $td,
          stringdata,
          arr,
          data,
          chart;

        for (i = 0; i < len; i += 1) {
          $td = $($tds[i]);
          stringdata = $td.data('sparkline');
          arr = stringdata.split('; ');
          data = $.map(arr[0].split(', '), parseFloat);
          chart = {};

          if (arr[1]) {
            chart.type = arr[1];
          }
          $td.highcharts('SparkLine', {
            series: [{
              data: data,
              pointStart: 1
            }],
            tooltip: {
              headerFormat: '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', Y{point.x}:</span><br/>',
              pointFormat: '<b>{point.y}.000</b> %'
            },
            chart: chart
          });

          n += 1;

          // If the process takes too much time, run a timeout to allow interaction with the browser
          if (new Date() - time > 500) {
            $tds.splice(0, i + 1);
            setTimeout(doChunk, 0);
            break;
          }

          // Print a feedback on the performance
          if (n === fullLen) {
            $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
          }
        }
      }
      doChunk();