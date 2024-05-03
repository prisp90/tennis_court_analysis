/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

function ethnicityGraph(){
	console.log("age Graph")
	// set the dimensions and margins of the graph
	var margin = {top: 60, right: 30, bottom: 40, left: 60},
	    width = 460 - margin.left - margin.right,
	    height = 400 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3.select("#white")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");

	var svg2 = d3.select("#black")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");

	var svg3 = d3.select("#native")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");
	var svg4 = d3.select("#asian")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");

	var svg5 = d3.select("#pacific")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");

	var svg6 = d3.select("#hispanic")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");


	//Read the data
	d3.json("..//AllCityData.json", function(err, data) {
		
		var sum_x = 0;
	    var sum_y = 0;
	    var sum_xy = 0;
	    var sum_xx = 0;
	    var count = 0;

	    var sum_x2 = 0;
	    var sum_y2 = 0;
	    var sum_xy2 = 0;
	    var sum_xx2 = 0;

	    var sum_x3 = 0;
	    var sum_y3 = 0;
	    var sum_xy3 = 0;
	    var sum_xx3 = 0;

	    var sum_x4 = 0;
	    var sum_y4 = 0;
	    var sum_xy4 = 0;
	    var sum_xx4 = 0;

	    var sum_x5 = 0;
	    var sum_y5 = 0;
	    var sum_xy5 = 0;
	    var sum_xx5 = 0;

	    var sum_x6 = 0;
	    var sum_y6 = 0;
	    var sum_xy6 = 0;
	    var sum_xx6 = 0;

	    var xmin1 = 1
	    var xmax1 = 0

	    var xmin2 = 1
	    var xmax2 = 0

	    var xmin3 = 1
	    var xmax3 = 0

	    var xmin4 = 1
	    var xmax4 = 0

	    var xmin5 = 1
	    var xmax5 = 0

	    var xmin6 = 1
	    var xmax6 = 0
	    

	    for (var v = 0; v < data["features"].length; v++) {
	    	if (data["features"][v]["properties"]["ETHNICITY_WHITE"] == null){	    		
	    		data["features"][v]["properties"]["ETHNICITY_WHITE"] = 0
	    		data["features"][v]["properties"]["ETHNICITY_BLACK"] = 0
	    		data["features"][v]["properties"]["ETHNICITY_NATIVE_AM"] = 0
	    		data["features"][v]["properties"]["ETHNICITY_ASIAN"] = 0
	    		data["features"][v]["properties"]["ETHNICITY_PAC_ISLANDER"] = 0
	    		data["features"][v]["properties"]["ETHNICITY_HISPANIC_LATINO"] = 0
	    		data["features"][v]["properties"]["SD_MIN_S"] = 0

	    	}
	        x = data["features"][v]["properties"]["ETHNICITY_WHITE"];
	        x2 = data["features"][v]["properties"]["ETHNICITY_BLACK"];
	        x3 = data["features"][v]["properties"]["ETHNICITY_NATIVE_AM"];
	        x4 = data["features"][v]["properties"]["ETHNICITY_ASIAN"];
	        x5 = data["features"][v]["properties"]["ETHNICITY_PAC_ISLANDER"];
	        x6 = data["features"][v]["properties"]["ETHNICITY_HISPANIC_LATINO"];
	        y = data["features"][v]["properties"]["SD_MIN_S"];
	
	        if (x < xmin1){xmin1 = x;}	        	
	        if (x2 < xmin2){xmin2 = x2}
	       	if (x3 < xmin3){xmin3 = x3}
	       	if (x4 < xmin4){xmin4 = x4}	        	
	        if (x5 < xmin5){xmin5 = x5}
	       	if (x6 < xmin6){xmin6 = x6}

	       	if (x > xmax1){xmax1 = x}
	       	if (x2 > xmax2){xmax2 = x2}
	       	if (x3 > xmax3){xmax3 = x3}
	       	if (x4 > xmax4){xmax4 = x4}
	       	if (x5 > xmax5){xmax5 = x5}
	       	if (x6 > xmax6){xmax6 = x6}


	        sum_x += x;
	        sum_y += y;
	        sum_xx += x*x;
	        sum_xy += x*y;

	        sum_x2 += x2;
	        sum_y2 += y;
	        sum_xx2 += x2*x;
	        sum_xy2 += x2*y;

	        sum_x3 += x3;
	        sum_y3 += y;
	        sum_xx3 += x3*x;
	        sum_xy3 += x3*y;

	        sum_x4 += x4;
	        sum_y4 += y;
	        sum_xx4 += x4*x;
	        sum_xy4 += x4*y;

	        sum_x5 += x5;
	        sum_y5 += y;
	        sum_xx5 += x5*x;
	        sum_xy5 += x5*y;

	        sum_x6 += x6;
	        sum_y6 += y;
	        sum_xx6 += x6*x;
	        sum_xy6 += x6*y;

	        count++;
	    }

	

	    var ymean = sum_y / count
	    var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x);
    	var b = (sum_y/count) - (m*sum_x)/count;

    	var m2 = (count*sum_xy2 - sum_x2*sum_y2) / (count*sum_xx2 - sum_x2*sum_x2);
    	var b2 = (sum_y2/count) - (m2*sum_x2)/count;

    	var m3 = (count*sum_xy3 - sum_x3*sum_y3) / (count*sum_xx3 - sum_x3*sum_x3);
    	var b3 = (sum_y3/count) - (m3*sum_x3)/count;

    	var m4 = (count*sum_xy4 - sum_x4*sum_y4) / (count*sum_xx4 - sum_x4*sum_x4);
    	var b4 = (sum_y4/count) - (m4*sum_x4)/count;

    	var m5 = (count*sum_xy5 - sum_x5*sum_y5) / (count*sum_xx5 - sum_x5*sum_x5);
    	var b5 = (sum_y5/count) - (m5*sum_x5)/count;

    	var m6 = (count*sum_xy6 - sum_x6*sum_y6) / (count*sum_xx6 - sum_x6*sum_x6);
    	var b6 = (sum_y6/count) - (m6*sum_x6)/count;

    	
    	let regressionSquaredError = 0
  		let totalSquaredError = 0

  		let regressionSquaredError2 = 0
  		let regressionSquaredError3 = 0
  		let regressionSquaredError4 = 0
  		let regressionSquaredError5 = 0
  		let regressionSquaredError6 = 0

    	for (var v = 0; v < data["features"].length; v++) {
	        x = data["features"][v]["properties"]["ETHNICITY_WHITE"];
	        y = x * m + b;
	        data["features"][v]["properties"]["white"] = y;

	        regressionSquaredError += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y, 2)
	        totalSquaredError += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - ymean, 2)
	        
	        x2 = data["features"][v]["properties"]["ETHNICITY_BLACK"];
	        y2 = x2 * m2 + b2;
	        data["features"][v]["properties"]["black"] = y2;

	        regressionSquaredError2 += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y2, 2)

	        x3 = data["features"][v]["properties"]["ETHNICITY_NATIVE_AM"];
	        y3 = x3 * m3 + b3;
	        data["features"][v]["properties"]["native"] = y3;

	        regressionSquaredError3 += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y3, 2)

	        x4 = data["features"][v]["properties"]["ETHNICITY_ASIAN"];
	        y4 = x4 * m4 + b4;
	        data["features"][v]["properties"]["asian"] = y4;

	        regressionSquaredError4 += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y4, 2)

	        x5 = data["features"][v]["properties"]["ETHNICITY_PAC_ISLANDER"];
	        y5 = x5 * m5 + b5;
	        data["features"][v]["properties"]["pacific"] = y5;

	        regressionSquaredError5 += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y5, 2)

	        x6 = data["features"][v]["properties"]["ETHNICITY_HISPANIC_LATINO"];
	        y6 = x6 * m6 + b6;
	        data["features"][v]["properties"]["hispanic"] = y6;

	        regressionSquaredError6 += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y6, 2)
	    }
	    
	    //first plot ------------------------------------------------------------------------------
		svg.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for White Population");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin1, xmax1])
			.range([ 0, width ]);
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["ETHNICITY_WHITE"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")

		svg.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["ETHNICITY_WHITE"]); } )
	        .y(function(d) { return y(d["properties"]["white"]) })
	        )

	    svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError / totalSquaredError)).toExponential(2));

		

		//Second Plot-------------------------------------------------------------------
		svg2.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Black Population");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin2, xmax2])
			.range([ 0, width ]);
		svg2.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg2.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg2.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["ETHNICITY_BLACK"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")

		svg2.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["ETHNICITY_BLACK"]); } )
	        .y(function(d) { return y(d["properties"]["black"]) })
	        )

	    svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError2 / totalSquaredError)).toExponential(2));

		//Third Plot-------------------------------------------------------------------
		svg3.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Native American Population");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin3, xmax3])
			.range([ 0, width ]);
		svg3.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg3.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg3.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg3.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["ETHNICITY_NATIVE_AM"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")
		
		svg3.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["ETHNICITY_NATIVE_AM"]); } )
	        .y(function(d) { return y(d["properties"]["native"]) })
	        )

	    svg3.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg3.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError3 / totalSquaredError)).toExponential(2));

		//fourth Plot-------------------------------------------------------------------
		svg4.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Asian Population");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin4, xmax4])
			.range([ 0, width ]);
		svg4.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg4.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg4.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg4.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["ETHNICITY_ASIAN"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")
		
		svg4.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["ETHNICITY_ASIAN"]); } )
	        .y(function(d) { return y(d["properties"]["asian"]) })
	        )

	    svg4.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg4.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError4 / totalSquaredError)).toExponential(2));

		//fivth Plot-------------------------------------------------------------------
		svg5.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Pacific Islander Population");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin5, xmax5])
			.range([ 0, width ]);
		svg5.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg5.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg5.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg5.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["ETHNICITY_PAC_ISLANDER"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")
		
		svg5.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["ETHNICITY_PAC_ISLANDER"]); } )
	        .y(function(d) { return y(d["properties"]["pacific"]) })
	        )

	    svg5.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg5.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError5 / totalSquaredError)).toExponential(2));

		//sixth Plot-------------------------------------------------------------------
		svg6.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Histpanic-Latino Population");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin6, xmax6])
			.range([ 0, width ]);
		svg6.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg6.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg6.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg6.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["ETHNICITY_HISPANIC_LATINO"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")
		
		svg6.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["ETHNICITY_HISPANIC_LATINO"]); } )
	        .y(function(d) { return y(d["properties"]["hispanic"]) })
	        )

	    svg6.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg6.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError6 / totalSquaredError)).toExponential(2));

		

	})

}

function ageGraph(){
	console.log("age Graph")
	// set the dimensions and margins of the graph
	var margin = {top: 60, right: 30, bottom: 40, left: 60},
	    width = 460 - margin.left - margin.right,
	    height = 400 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3.select("#age18")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");

	var svg2 = d3.select("#agemiddle")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");

	var svg3 = d3.select("#age65")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");


	//Read the data
	d3.json("..//AllCityData.json", function(err, data) {
		
		var sum_x = 0;
	    var sum_y = 0;
	    var sum_xy = 0;
	    var sum_xx = 0;
	    var count = 0;

	    var sum_x2 = 0;
	    var sum_y2 = 0;
	    var sum_xy2 = 0;
	    var sum_xx2 = 0;

	    var sum_x3 = 0;
	    var sum_y3 = 0;
	    var sum_xy3 = 0;
	    var sum_xx3 = 0;

	    var xmin1 = 1
	    var xmax1 = 0

	    var xmin2 = 1
	    var xmax2 = 0

	    var xmin3 = 1
	    var xmax3 = 0
	    

	    for (var v = 0; v < data["features"].length; v++) {
	    	if (data["features"][v]["properties"]["AGE_UNDER_18"] == null){	    		
	    		data["features"][v]["properties"]["AGE_UNDER_18"] = 0
	    		data["features"][v]["properties"]["AGE_BETWEEN_18_65"] = 0	    		
	    		data["features"][v]["properties"]["AGE_OVER_65"] = 0	    		
	    		data["features"][v]["properties"]["SD_MIN_S"] = 0

	    	}
	        x = data["features"][v]["properties"]["AGE_UNDER_18"];
	        x2 = data["features"][v]["properties"]["AGE_BETWEEN_18_65"];
	        x3 = data["features"][v]["properties"]["AGE_OVER_65"];
	        y = data["features"][v]["properties"]["SD_MIN_S"];
	
	        if (x < xmin1){xmin1 = x;}	        	
	        if (x2 < xmin2){xmin2 = x2}
	       	if (x3 < xmin3){xmin3 = x3}
	       	if (x > xmax1){xmax1 = x}
	       	if (x2 > xmax2){xmax2 = x2;}
	       	if (x3 > xmax3){xmax3 = x3;}


	        sum_x += x;
	        sum_y += y;
	        sum_xx += x*x;
	        sum_xy += x*y;

	        sum_x2 += x2;
	        sum_y2 += y;
	        sum_xx2 += x2*x;
	        sum_xy2 += x2*y;

	        sum_x3 += x3;
	        sum_y3 += y;
	        sum_xx3 += x3*x;
	        sum_xy3 += x3*y;

	        count++;
	    }

	    var ymean = sum_y / count
	    var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x);
    	var b = (sum_y/count) - (m*sum_x)/count;

    	var m2 = (count*sum_xy2 - sum_x2*sum_y2) / (count*sum_xx2 - sum_x2*sum_x2);
    	var b2 = (sum_y2/count) - (m2*sum_x2)/count;

    	var m3 = (count*sum_xy3 - sum_x3*sum_y3) / (count*sum_xx3 - sum_x3*sum_x3);
    	var b3 = (sum_y3/count) - (m3*sum_x3)/count;

    	
    	let regressionSquaredError = 0
  		let totalSquaredError = 0

  		let regressionSquaredError2 = 0
  		let regressionSquaredError3 = 0

    	for (var v = 0; v < data["features"].length; v++) {
	        x = data["features"][v]["properties"]["AGE_UNDER_18"];
	        y = x * m + b;
	        data["features"][v]["properties"]["age18"] = y;

	        regressionSquaredError += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y, 2)
	        totalSquaredError += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - ymean, 2)
	        
	        x2 = data["features"][v]["properties"]["AGE_BETWEEN_18_65"];
	        y2 = x2 * m2 + b2;
	        data["features"][v]["properties"]["agemiddle"] = y2;

	        regressionSquaredError2 += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y2, 2)

	        x3 = data["features"][v]["properties"]["AGE_OVER_65"];
	        y3 = x3 * m3 + b3;
	        data["features"][v]["properties"]["age65"] = y3;

	        regressionSquaredError3 += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y3, 2)
	    }
	    
	    //first plot ------------------------------------------------------------------------------
		svg.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Under 18 Population in Cities");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin1, xmax1])
			.range([ 0, width ]);
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["AGE_UNDER_18"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")

		svg.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["AGE_UNDER_18"]); } )
	        .y(function(d) { return y(d["properties"]["age18"]) })
	        )

	    svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError / totalSquaredError)).toExponential(2));
		

		//Second Plot-------------------------------------------------------------------
		svg2.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Between 18-65 Population in Cities");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin2, xmax2])
			.range([ 0, width ]);
		svg2.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg2.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg2.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["AGE_BETWEEN_18_65"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")

		svg2.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["AGE_BETWEEN_18_65"]); } )
	        .y(function(d) { return y(d["properties"]["agemiddle"]) })
	        )

	    svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError2 / totalSquaredError)).toExponential(2));

		//Third Plot-------------------------------------------------------------------
		svg3.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Over 65 Population in Cities");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([xmin3, xmax3])
			.range([ 0, width ]);
		svg3.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg3.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Composition Ratio");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg3.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg3.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["AGE_OVER_65"]); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")

		svg3.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["AGE_OVER_65"]); } )
	        .y(function(d) { return y(d["properties"]["age65"]) })
	        )

	    svg3.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg3.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError3 / totalSquaredError)).toExponential(2));

		

	})
}


function wealthGraph(){
	console.log("Wealth Graph")
	// set the dimensions and margins of the graph
	var margin = {top: 60, right: 30, bottom: 40, left: 60},
	    width = 460 - margin.left - margin.right,
	    height = 400 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3.select("#wealthincome")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");

	var svg2 = d3.select("#wealthproperty")
	  .append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
	          "translate(" + margin.left + "," + margin.top + ")");


	//Read the data
	d3.json("..//AllCityData.json", function(err, data) {
		
		var sum_x = 0;
	    var sum_y = 0;
	    var sum_xy = 0;
	    var sum_xx = 0;
	    var count = 0;

	    var sum_x2 = 0;
	    var sum_y2 = 0;
	    var sum_xy2 = 0;
	    var sum_xx2 = 0;
	    

	    for (var v = 0; v < data["features"].length; v++) {
	    	if (data["features"][v]["properties"]["WEALTH_MEDIAN_INCOME"] == null){	    		
	    		data["features"][v]["properties"]["WEALTH_MEDIAN_INCOME"] = 0
	    		data["features"][v]["properties"]["WEALTH_MEDIAN_HOME_VALUE"] = 0	    		
	    		data["features"][v]["properties"]["SD_MIN_S"] = 0

	    	}
	        x = data["features"][v]["properties"]["WEALTH_MEDIAN_INCOME"]/1000;
	        x2 = data["features"][v]["properties"]["WEALTH_MEDIAN_HOME_VALUE"]/1000;
	        y = data["features"][v]["properties"]["SD_MIN_S"];
	
	        sum_x += x;
	        sum_y += y;
	        sum_xx += x*x;
	        sum_xy += x*y;

	        sum_x2 += x2;
	        sum_y2 += y;
	        sum_xx2 += x2*x;
	        sum_xy2 += x2*y;

	        count++;
	    }

	    var ymean = sum_y / count
	    var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x);
    	var b = (sum_y/count) - (m*sum_x)/count;

    	var m2 = (count*sum_xy2 - sum_x2*sum_y2) / (count*sum_xx2 - sum_x2*sum_x2);
    	var b2 = (sum_y2/count) - (m2*sum_x2)/count;

    	
    	let regressionSquaredError = 0
  		let totalSquaredError = 0

  		let regressionSquaredError2 = 0

    	for (var v = 0; v < data["features"].length; v++) {
	        x = data["features"][v]["properties"]["WEALTH_MEDIAN_INCOME"]/1000;
	        y = x * m + b;
	        data["features"][v]["properties"]["incomelinear"] = y;

	        regressionSquaredError += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y, 2)
	        totalSquaredError += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - ymean, 2)
	        
	        x2 = data["features"][v]["properties"]["WEALTH_MEDIAN_HOME_VALUE"]/1000;
	        y2 = x2 * m2 + b2;
	        data["features"][v]["properties"]["propertylinear"] = y2;

	        regressionSquaredError2 += Math.pow(data["features"][v]["properties"]["SD_MIN_S"] - y2, 2)

	    }


		svg.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Average Incomes in Cities");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([0, 250])
			.range([ 0, width ]);
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Unit: $1,000");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["WEALTH_MEDIAN_INCOME"]/1000); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")

		svg.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["WEALTH_MEDIAN_INCOME"]/1000); } )
	        .y(function(d) { return y(d["properties"]["incomelinear"]) })
	        )

	    svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m.toExponential(2) + "x + " + b.toExponential(2));
		svg.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError / totalSquaredError)).toExponential(2));

		//Second Plot-------------------------------------------------------------------
		svg2.append("text")
	        .attr("x", (width / 2))             
	        .attr("y", 0 - (margin.top / 2))
	        .attr("text-anchor", "middle")  
	        .style("font-size", "16px") 
	        .style("text-decoration", "underline")  
	        .text("Supply-Demand Ratio for Average Home Values in Cities");

		// Add X axis
		var x = d3.scaleLinear()
			.domain([0, 250])
			.range([ 0, width ]);
		svg2.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", height + margin.bottom - 10)
			.text("Unit: $1,000");

		// Add Y axis
		var y = d3.scaleLinear()
			.domain([0, 2])
			.range([ height, 0]);
		svg2.append("g")
			.call(d3.axisLeft(y));

		// Add dots
		svg2.append('g')
			.selectAll("dot")
			.data(data["features"])
			.enter()
			.append("circle")
			  .attr("cx", function (d) { return x(d["properties"]["WEALTH_MEDIAN_HOME_VALUE"]/1000); } )
			  .attr("cy", function (d) { return y(d["properties"]["SD_MIN_S"]); } )
			  .attr("r", 1.5)
			  .style("fill", "#69b3a2")

		svg2.append("path")
	      .datum(data["features"])
	      .attr("fill", "none")
	      .attr("stroke", "steelblue")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x(function(d) { return x(d["properties"]["WEALTH_MEDIAN_HOME_VALUE"]/1000); } )
	        .y(function(d) { return y(d["properties"]["propertylinear"]) })
	        )

	    svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top)
			.text("y=" + m2.toExponential(2) + "x + " + b2.toExponential(2));
		svg2.append("text")
			.attr("text-anchor", "end")
			.attr("x", width)
			.attr("y", margin.top+12)
			.text("R^2=" + (1-(regressionSquaredError2 / totalSquaredError)).toExponential(2));

	})
}


function loadGeoJson(map){
	console.log(map)
	map.on('load', () => {
		map.addSource('city', {
			type: 'geojson',
			// Use a URL for the value for the `data` property.
			data: '..//AllCityData.json'
		});

		map.addLayer({
			'id': 'city-fill',			
			'source': 'city',
			"type": "fill",
		    "paint": {
		      "fill-color": [
					'interpolate',
					['linear'],
					['get', 'SD_MIN_S'],
					0,
					'rgba(255,0,0,50)',
					0.2,
					'rgba(255,100,0,50)',
					0.4,
					'rgba(255,200,0,50)',
					0.6,
					'rgba(200,255,0,50)',
					0.8,
					'rgba(100,255,0,50)',
					1,
					'rgba(0,255,0,50)'
				],
		      'fill-opacity': 0.8
		    }
		});
		map.addLayer({
			'id': 'city-line',			
			'source': 'city',
			"type": "line",
		    "paint": {
		      "line-color": "#000000",
		      'line-width': 1
		    }
		});

		map.on('mouseenter', 'city-fill', () => {
			map.getCanvas().style.cursor = 'pointer';
		});
		 
		// Change it back to a pointer when it leaves.
		map.on('mouseleave', 'city-fill', () => {
			map.getCanvas().style.cursor = '';
		});

		map.on('click', 'city-fill', (e) => {
			// Copy coordinates array.			
			const coordinates = [e.lngLat["lng"], e.lngLat["lat"]];			
			
			const description = '<div class="popup"><strong>' 
				+ e.features[0].properties["NAME"] 
				+ '</strong><p>Single Match Based Optimal Supply/Demand Ratio<br>' + e.features[0].properties["SD_MIN_S"] + '</p></div>';
			
			// Ensure that if the map is zoomed out such that multiple
			// copies of the feature are visible, the popup appears
			// over the copy being pointed to.
			while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
			}
			 
			new mapboxgl.Popup()
			.setLngLat(coordinates)
			.setHTML(description)
			.addTo(map);
		});
	});
}