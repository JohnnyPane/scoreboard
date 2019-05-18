import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}

	render(){
		const { date, player_one, player_two, scores, stats } = this.props;
		
		const labelMaker = date.map((el, idx) => {
			const labelArr = [];
			labelArr.push(idx + 1);
			return labelArr
		});

		const aggregator = arr => {
  		for (let i = 1; i < arr.length; i++) {
    		arr[i] = arr[i] + arr[i - 1];
  		};
  	return arr
		}

		console.log(scores.player_one_points_collection)

		const apple = aggregator(scores.player_one_points_collection);

		console.log(apple);

		const banana = aggregator(scores.player_two_points_collection);

		console.log(banana);

		const subtractor = (arr1, arr2) => {
		  let scores = [];
		  for (let i = 0; i < arr1.length; i++) {
		    scores[i] = arr1[i] - arr2[i];
		  }
		  return scores;
		};

		const china = subtractor(apple, banana);

		console.log(china);

		const averager = arr => {
		  for (let i = 1; i < arr.length; i++) {
		    arr[i] = arr[i] / (i + 1);
		  } 
		  return arr;
		}

		const mapleTree = averager(china);

		console.log(china);

		const chartData = {
			labels: labelMaker,
			datasets:[
				{
					label: "Avg. Point Differential",
					data: china,
					backgroundColor: 'rgba(97, 254, 186, 0.6)',
					borderWidth:1,
					borderColor:'#000'
				},
			]
		}

		return (
			<div className="chart">
				<Line
					data={chartData}
					options={{
						maintainAspectRatio: false
					}}
				/>
			</div>
		)
	}
}

export default Chart;