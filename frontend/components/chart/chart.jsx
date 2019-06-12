import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.aggregator = this.aggregator.bind(this);
		this.subtractor = this.subtractor.bind(this);
		this.averager = this.averager.bind(this);
	}

 	aggregator(arr) {
		for (let i = 1; i < arr.length; i++) {
  		arr[i] = arr[i] + arr[i - 1];
		};
	return arr
	}

	subtractor(arr1, arr2) {
	  let scores = [];
	  for (let i = 0; i < arr1.length; i++) {
	    scores[i] = arr1[i] - arr2[i];
	  }
	  return scores;
	};

	averager(arr) {
	  for (let i = 1; i < arr.length; i++) {
	    arr[i] = arr[i] / (i + 1);
	  } 
	  return arr;
	}

	render(){
		const { date, player_one, player_two, scores, stats } = this.props;
		
		const labelMaker = date.map((el, idx) => {
			const labelArr = [];
			labelArr.push(idx + 1);
			return labelArr
		});

		const playerOneCollect = this.aggregator(scores.player_one_points_collection);
		const playerTwoCollect = this.aggregator(scores.player_two_points_collection);
		const playerOneDiff = this.subtractor(playerOneCollect, playerTwoCollect);
		const playerTwoDiff = this.subtractor(playerTwoCollect, playerOneCollect)
		const playerOneHandicap = this.averager(playerOneDiff);
		const playerTwoHandicap = this.averager(playerTwoDiff);

		const chartData = {
			labels: labelMaker,
			datasets:[
				{
					label: `${player_one} handicap`,
					data: playerOneHandicap,
					backgroundColor: 'rgba(97, 254, 186, 0.6)',
					borderWidth:1,
					borderColor:'#000'
				},
				{
					label: `${player_two} handicap`,
					data: playerTwoHandicap,
					backgroundColor: 'rgba(240, 128, 128, 0.6)',
					borderWidth: 1,
					borderColor:'#000'
				}
			],
		}

		return (
			<div className="chart">
				<Line
					data={chartData}
					options={{
						maintainAspectRatio: false,
						legend: {
							position: 'bottom'
						}
					}}
				/>
			</div>
		)
	}
}

export default Chart;
